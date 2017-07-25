'use strict';

define([
	'angular',
    'uiRouter',

    'angularMaterial',

    // general
    'constants',
    'templates',
    'services/data.service',
	'services/graph.service',

	// controllers
	'pages/overview/overview.controller',

	// directives
    'components/main/main.directive',
    'components/header/header.directive'

	// filters
	
], function(angular) {
	// Declare app level module which depends on views, and components
	return angular.module('rlab', [
	    'ngMaterial',
        'ui.router',

		'rlab.constants',
		'rlab.templates',
		'ms.data.service',
		'ms.graph.service',
		'ms.overview',
        'ms.main',
        'ms.header'
	])

    .config(['$urlRouterProvider', '$httpProvider','$mdDateLocaleProvider', function($urlRouterProvider, $httpProvider, $mdDateLocaleProvider) {
        $urlRouterProvider.otherwise('/');
        $mdDateLocaleProvider.formatDate = function(date) {
            return date ? moment(date).format('DD-MM-YYYY') : '';
        };

        $mdDateLocaleProvider.parseDate = function(dateString) {
            var m = moment(dateString, 'DD-MM-YYYY', true);
            return m.isValid() ? m.toDate() : new Date(NaN);
        };
    }])

    .run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }])
});