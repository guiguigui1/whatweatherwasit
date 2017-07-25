//run -karma start test/karma.conf.js- in gitbash

module.exports = function (config) {
    config.set({
        basePath: '../../Rlab',
        frameworks: ['jasmine', 'requirejs'],
        files: [
            //bower components
            { pattern: 'app/**/*.html', included: false },
            { pattern: 'app/bower_components/angular/**/angular.js', included: false },
            { pattern: 'app/bower_components/angular-mocks/**/angular-mocks.js', included: false },
            { pattern: 'app/bower_components/angular-scroll/angular-scroll.js', included: false },
            { pattern: 'app/bower_components/requirejs-text/**/text.js', included: false },
            { pattern: 'app/bower_components/requirejs/**/require.js', included: false },
            { pattern: 'app/bower_components/angular-ui-router/**/angular-ui-router.min.js', included: false },
            { pattern: 'app/bower_components/ngmap/**/ng-map.js', included: false },
            { pattern: 'app/bower_components/d3/**/d3.js', included: false },
            { pattern: 'app/bower_components/nvd3/**/nv.d3.js', included: false },
            { pattern: 'app/bower_components/angular-nvd3/**/angular-nvd3.js', included: false },
            { pattern: 'app/bower_components/jquery/**/jquery.min.js', included: false },
            { pattern: 'app/bower_components/**/bootstrap.js', included: false },
            { pattern: 'app/bower_components/angular-cookies/**/angular-cookies.js', included: false },
            { pattern: 'app/bower_components/oca/components/ui/aab-button/aab-button.js', included: false },
            { pattern: 'app/bower_components/oca/components/ui/aab-input/aab-input.js', included: false },
            { pattern: 'app/bower_components/oca/components/ui/composites/aab-form-group/aab-form-group.js', included: false },
            { pattern: 'app/bower_components/oca/components/filters/trusted-html/trusted-html.js', included: false },
            { pattern: 'app/bower_components/oca/components/ui/ui-constants.js', included: false },
            { pattern: 'app/!(bower_components)/**/!(spec).js', included: false },
            { pattern: 'app/!(bower_components)/**/*spec.js', included: false },
            // general
            { pattern: 'app/services/data.service.js', included: false },
            // controllers
            { pattern: 'app/pages/login/login.controller.js', included: false },
            { pattern: 'app/pages/error/error.controller.js', included: false },
            { pattern: 'app/pages/benchmark/benchmark.controller.js', included: false },
            { pattern: 'app/pages/assessment/assessment.controller.js', included: false },
            { pattern: 'app/pages/predictive/predictive.controller.js', included: false },
            { pattern: 'app/pages/overview/overview.controller.js', included: false },
            // directives
            { pattern: 'app/components/header/header.directive.js', included: false },
            { pattern: 'app/components/footer/footer.directive.js', included: false },
            { pattern: 'app/components/iconText/iconText.directive.js', included: false },
            { pattern: 'app/components/multiselect/multiselect.directive.js', included: false },
            { pattern: 'app/components/tooltip/tooltip.directive.js', included: false },
            // filters
            { pattern: 'app/components/filters/rlNumber.filter.js', included: false },
            // main
            { pattern: 'app/app.js', included: false },
            { pattern: 'app/constants.js', included: false },
            { pattern: 'app/templates.js', included: false },
            'test/test-main.js'
        ],
        preprocessors: {
            //html file handling
            'app/**/*.html': 'ng-html2js'
        },
        exclude: ['app/require-config.js'],
        reporters: ['progress'],
        port: 9876,
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,
        autoWatch: true,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        // - process.env.TRAVIS
        browsers: ['PhantomJS'],
        singleRun: false,
        ngHtml2JsPreprocessor: {
            // setting this option will create only a single module that contains templates
            // from all the files, so you can load them all with module('foo')
        }
    });
};