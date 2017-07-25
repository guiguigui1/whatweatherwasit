define(['angular','ngNvd3','angularMaterial','angularMessages'], function(angular) {
    'use strict';

    angular.module('ms.overview', ['nvd3','ngMaterial'])
        .config(overviewConfig)
        .controller('OverviewController', ['dataService', 'graphService','$stateParams', '$state', overviewController]);

    function overviewConfig($stateProvider) {
        $stateProvider
            .state('overview', {
                url: '/',
                templateUrl: 'pages/overview/overview.html',
                controller: 'OverviewController',
                controllerAs: 'overview'
            })
            .state('historyDay', {
                url: '/:date/:city'
                // templateUrl: 'pages/overview/overview.html',
                // controller: 'OverviewController',
                // controllerAs: 'overview'
            })
    }

    function overviewController(dataService, graphService, $stateParams, $state) {
        var self = this;
        self.message = "message from overview controller";
        self.climate = [];
        self.graphData = [];
        self.ready = false;
        self.minDate = new Date(2008,7,1);
        self.maxDate = new Date();
        self.weatherData = {};
        self.showWeather = false;
        self.formattedDate = '';

        if($stateParams.date && moment($stateParams.date).isValid() && $stateParams.city){
            self.date = moment($stateParams.date);
            self.city = $stateParams.city;
            self.getHistoryDay();
        }

        self.getRequestDate = function(date) {
            var day = date.getUTCDate() + 1;
            var month = date.getUTCMonth() + 1; //months from 1-12
            var year = date.getUTCFullYear();
            var requestDate = year + '-' + month + '-' + day;
            return requestDate;
        };
        self.getFormattedDate = function(date) {
            self.formattedDate = moment(date).format('DD-MM-YYYY');
        };

        self.goToHistoryDay = function () {
            console.log('gotoHistoryDay');
            self.getFormattedDate(self.date);
            $state.go('historyDay', {'date': self.formattedDate, "city": self.city});
        };

        self.getHistoryDay = function() {
            var requestDate = self.getRequestDate(self.date);

            dataService.getHistoryDay(self.city, requestDate).then(function(data){
                self.weatherData = data.data;
                if(self.weatherData.weather){
                    self.weatherData.weather[0].totalPrecipitation = self.getDayTotal(self.weatherData.weather[0].hourly, 'precipMM');
                    self.temperatureDay = graphService.temperatureDayGraph(data);
                    self.precipitationDay = graphService.precipitationDayGraph(data);
                    self.showWeather = true;
                }
            });
        };

        self.getDayTotal = function(array, key){
            var total = 0;
            for(var i=0; i<array.length; i++){
                total += parseFloat(array[i][key]);
            }
            return Math.round(total).toFixed(1);
        }
    }
});
