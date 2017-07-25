var tests = [];
console.log('nicetest');
var TEST_REGEXP = /(spec|test)\.js$/i;
for (var file in window.__karma__.files) {
    if (TEST_REGEXP.test(file)) tests.push(file);
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/app',

    paths: {
        angular: 'bower_components/angular/angular',
        angularCookies: 'bower_components/angular-cookies/angular-cookies',
        angularMocks: 'bower_components/angular-mocks/angular-mocks',
        angularScroll: 'bower_components/angular-scroll/angular-scroll',
        text: 'bower_components/requirejs-text/text',
        uiRouter: 'bower_components/angular-ui-router/release/angular-ui-router.min',
        ngMap: 'bower_components/ngmap/build/scripts/ng-map',
        d3: 'bower_components/d3/d3',
        nvd3: 'bower_components/nvd3/build/nv.d3',
        ngNvd3: 'bower_components/angular-nvd3/dist/angular-nvd3',
        jquery: 'bower_components/jquery/dist/jquery.min',
        bootstrap: 'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap',
        oca: 'bower_components/oca'
    },
    shim: {
        angular: { deps: ['jquery'], exports: 'angular' },
        angularCookies: { deps: ['angular']},
        angularMocks: { deps: ['angular'], exports: 'angular.mock' },
        angularScroll: { deps: ['angular']},
        bootstrap: { deps: ['jquery', 'angular'] },
        uiRouter: { deps: ['angular', 'bootstrap'] },
        ngMap: { deps: ['angular'] },
        d3: { exports: 'd3' },
        nvd3: { deps: ['d3'], exports: 'nv' },
        ngNvd3: { deps: ['angular', 'd3', 'nvd3'] }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});