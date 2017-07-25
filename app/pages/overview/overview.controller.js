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
            url: '/:date/:city',
            templateUrl: 'pages/overview/overview.html',
            controller: 'OverviewController',
            controllerAs: 'overview'
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
        self.dateFormat = 'DD-MM-YYYY';

        self.init = function() {
            if($stateParams.date && moment($stateParams.date,self.dateFormat).isValid() && $stateParams.city){
                self.date = moment($stateParams.date,self.dateFormat);
                self.city = $stateParams.city;
                self.setFormattedDate(self.date);
                self.getHistoryDay();
            }
        };

        self.getRequestDate = function(date) {
            var requestDate = moment(date).format('YYYY-MM-DD');
            return requestDate;
        };

        self.setFormattedDate = function(date) {
            self.formattedDate = moment(date).format('DD-MM-YYYY');
        };

        self.goToHistoryDay = function () {
            self.setFormattedDate(self.date);
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
        };

        self.init();
    }
});
