require.config({
    paths: {
        angular: 'bower_components/angular/angular.min',
        angularAria: 'bower_components/angular-aria/angular-aria.min',
        angularAnimate: 'bower_components/angular-animate/angular-animate.min',
        angularCookies: 'bower_components/angular-cookies/angular-cookies.min',
        angularMaterial: 'bower_components/angular-material/angular-material.min',
        angularMessages: 'bower_components/angular-messages/angular-messages.min',
        angularStorage: 'bower_components/ngstorage/ngStorage.min',
        // angularMocks: 'bower_components/angular-mocks/angular-mocks.min',
        angularScroll: 'bower_components/angular-scroll/angular-scroll.min',
        // text: 'bower_components/requirejs-text/text.min',
        uiRouter: 'bower_components/angular-ui-router/release/angular-ui-router.min',
        ngMap: 'bower_components/ngmap/build/scripts/ng-map.min',
        d3: 'bower_components/d3/d3.min',
        nvd3: 'bower_components/nvd3/build/nv.d3.min',
        ngNvd3: 'bower_components/angular-nvd3/dist/angular-nvd3.min',
        jquery: 'bower_components/jquery/dist/jquery.min',
        bootstrap: 'bower_components/bootstrap/dist/js/bootstrap.min'
    },
    shim: {
        angular: { deps: ['jquery'], exports: 'angular' },
        angularCookies: { deps: ['angular']},
        angularStorage: { deps: ['angular']},
        angularAria: { deps: ['angular']},
        angularAnimate: { deps: ['angular']},
        angularMessages: { deps: ['angular']},
        angularMaterial: { deps: ['angular','angularAnimate','angularAria','angularMessages']},
        angularMocks: { deps: ['angular'], exports: 'angular.mock' },
        angularScroll: { deps: ['angular']},
        bootstrap: { deps: ['jquery', 'angular'] },
        uiRouter: { deps: ['angular', 'bootstrap'] },
        ngMap: { deps: ['angular'] },
        d3: { exports: 'd3' },
        nvd3: { deps: ['d3'], exports: 'nvd3' },
        ngNvd3: { deps: ['angular', 'd3', 'nvd3'] }
    }
});

require(['angular', 'app'], function(angular) {
    'use strict';

    angular.element().ready(function() {
        // bootstrap the app manually
        angular.bootstrap(document, ['rlab']);
    });
});
