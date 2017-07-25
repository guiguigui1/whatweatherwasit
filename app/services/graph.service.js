'use strict';

define(['angular'],
    function(angular) {
        angular
            .module('ms.graph.service', [])
            .factory('graphService', [graphService]);
    });

function graphService() {
    var self = this;

    self.standardOptions = {
        chart: {
            type: 'lineChart',
            refreshDataOnly: true,
            height: 200,
            interpolate: "basis",
            margin : {
                top: 20,
                right: 20,
                bottom: 60,
                left: 30
            },
            tooltip: {
                valueFormatter: function(d,i) {
                    return 'fff';
                }
            },
            interactiveLayer: {
                tooltip: {
                    valueFormatter: function (d,i) {
                        return yAxis.tickFormat()(d,i);
                    }
                }
            },
            useInteractiveGuideline: true,
            duration: 50,
            xAxis: {
                axisLabel: 'Time',
                tickFormat: function(d) {
                    var string = d3.format(',f')(d) + ":00";
                    return string;
                }
            },
            yAxis: {
                axisLabel: 'Y axis',
                tickFormat: function(d){
                    var string = d3.format(',f')(d);
                    return string;
                },
                rotateYLabel: false
            }
        }
    };

    return {
        formatDate: formatDate,
        monthAverages: monthAverages,
        temperatureDayGraph: temperatureDayGraph,
        precipitationDayGraph: precipitationDayGraph
    };

    function formatDate(date) {
        var returnObject = {};
        returnObject.month = dateObj.getUTCMonth() + 1; //months from 1-12
        returnObject.day = dateObj.getUTCDate();
        returnObject.year = dateObj.getUTCFullYear();
        return returnObject;
    }


    function monthAverages(input) {
        var months = input.data.ClimateAverages[0].month;
        var graph = {};
        graph.data = [{
            color: "#0CB0FF",
            key: "monthly",
            values: []
        }];
        angular.forEach(months, function(month, index) {
            var temp = {
                x: index,
                y: parseFloat(month.absMaxTemp)
            };
            graph.data[0].values.push(temp);
        });

        graph.options = self.standardOptions;
        graph.options.chart.xAxis.tickFormat = function(d) {
            return months[d-1].name;
        }
        return graph;
    }


    function temperatureDayGraph(input) {
        var hourArray = input.data.weather[0].hourly;
        var graph = {};
        var yMin = 2;
        var yMax = -2;
        graph.data = [{
            color: "#0CB0FF",
            key: "Temperature",
            values: []
        }];
        angular.forEach(hourArray, function(hour, index) {
            var arrayItem = {
                x: index,
                y: parseFloat(hour.tempC)
            };
            yMin = Math.min(yMin, hour.tempC);
            yMax = Math.max(yMax, hour.tempC);
            graph.data[0].values.push(arrayItem);
        });
        graph.options = angular.copy(self.standardOptions);

        yMin = yMin - 2;
        yMax = yMax + 2;
        graph.options.chart.yDomain = [yMin,yMax];
        graph.options.chart.yAxis.axisLabel = '°C';
        graph.options.chart.interactiveLayer.tooltip.valueFormatter = function(d) {
                    var string = d3.format(',f')(d) + ' °C';
                    return string
        };
        return graph;
    }

    function precipitationDayGraph(input) {
        var hourArray = input.data.weather[0].hourly;
        var graph = {};
        var yMin = 0;
        var yMax = 0;
        graph.data = [{
            color: "#0CB0FF",
            key: "Precipitation",
            values: []
        }];
        angular.forEach(hourArray, function(hour, index) {
            var arrayItem = {
                x: index,
                y: parseFloat(hour.precipMM)
            };
            yMax = Math.max(yMax, hour.precipMM);
            graph.data[0].values.push(arrayItem);
        });
        yMax++;
        graph.options = angular.copy(self.standardOptions);
        graph.options.chart.type = 'historicalBarChart';
        graph.options.chart.yDomain = [yMin,yMax];
        graph.options.chart.yAxis.axisLabel = 'mm';
        graph.options.chart.yAxis.tickFormat = function(d) {
            var string = d3.format(',2f')(d);
            return string;
        };
        graph.options.chart.tooltip.valueFormatter = function(d) {
            var string = d3.format(',f')(d) + 'mm';
            return string
        };
        return graph;
    }
}
