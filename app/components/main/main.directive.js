define(['angular', 'components/main/main.controller'], function(angular) {
    'use strict';

    angular.module('ms.main', ['ms.main.controller'])
        .directive('main', mainDirective);

    function mainDirective() {
        return {
            restrict : 'E',
            templateUrl: 'components/main/main.html',
            controller: 'mainCtrl',
            controllerAs: 'main'
        };
    }
});