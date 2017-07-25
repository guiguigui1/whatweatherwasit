define(['angular', 'components/header/header.controller'], function(angular) {
    'use strict';

    angular.module('ms.header', ['ms.header.controller'])
        .directive('header', headerDirective);

    function headerDirective() {
        return {
            restrict : 'E',
            templateUrl: 'components/header/header.html',
            controller: 'headerCtrl',
            controllerAs: 'header'
        };
    }
});