//imports
var gulp = require('gulp');

var jshint = require('gulp-jshint');
var plumber = require('gulp-plumber');
var imagemin = require('gulp-imagemin');
var minifyCSS = require('gulp-minify-css');
var sass = require('gulp-sass');
var less = require('gulp-less');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var templateCache = require('gulp-angular-templatecache');
var requirejsOptimize = require('gulp-requirejs-optimize');
var merge = require('merge-stream');
var del = require('del');
// var gutil = require('gulp-util');
var annotate = require('gulp-ng-annotate');
var browserSync = require('browser-sync').create();
var postcss = require('gulp-postcss');
// var postcsssvg = require('postcss-svg');
var runSequence = require('run-sequence');

//file locations
var JS = [
    'app/app.js',
    'app/constants.js',
    'app/templates.js',
    'app/require-config.js',
    'app/components/**/*.js',
    'app/pages/**/*.js',
    'app/services/**/*.js',
    'app/bower_components/angular/**/angular.min.js',
    'app/bower_components/angular-aria/angular-aria.min.js',
    'app/bower_components/angular-animate/angular-animate.min.js',
    'app/bower_components/angular-material/angular-material.min.js',
    'app/bower_components/angular-messages/angular-messages.min.js',
    'app/bower_components/angular-mocks/**/angular-mocks.min.js',
    'app/bower_components/moment/**/moment.js',
    'app/bower_components/angular-moment/**/angular-moment.min.js',
    // 'app/bower_components/requirejs-text/**/text.min.js',
    'app/bower_components/requirejs/**/require.js',
    'app/bower_components/angular-ui-router/**/angular-ui-router.min.js',
    'app/bower_components/ngmap/**/ng-map.min.js',
    'app/bower_components/ngstorage/**/ngStorage.min.js',
    'app/bower_components/d3/**/d3.min.js',
    'app/bower_components/nvd3/**/nv.d3.min.js',
    'app/bower_components/angular-nvd3/**/angular-nvd3.min.js',
    'app/bower_components/jquery/**/jquery.min.js',
    'app/bower_components/bootstrap/**/bootstrap.min.js',
    'app/bower_components/angular-cookies/**/angular-cookies.min.js',
    'app/bower_components/angular-scroll/**/angular-scroll.min.js'
];
var STYLEFILES = ['app/**/*.css','app/**/*.scss'];
var HTMLFILES = [
    'app/**/*.html',
    'index.html'
];
// var RESTFILES = ['app/**', '!app/**/*.css', '!app/**/*.scss', '!app/**/*.js', '!app/**/*.gzip', '!app/**/*.md', '!app/**/*.txt', '!app/**/*.html'];
// var RESTFILES = ['app/services/JSON/*.json','app/images/*'];
var JSONFILES = ['app/services/JSON/**/*.json'];
var IMAGEFILES = ['app/images/*'];

var DEST = 'dist';
var SRC = 'app';

gulp.task('default', ['bs']);

//run server
gulp.task('bs', ['build'], function() {
    browserSync.init({
        server: {
            baseDir: DEST
        }
    });
    gulp.watch(JS, {interval: 1000}, ['scriptsonly']);
    gulp.watch(HTMLFILES, {interval: 1000}, ['htmlonly']);
    gulp.watch(STYLEFILES, {interval: 1000}, ['stylesonly']);
    gulp.watch(JSONFILES, {interval: 1000}, ['restonly']);
});

//async function
gulp.task('build', function(callback) {
    runSequence('clean', 'build-core', callback);
});

gulp.task('build-core', ['styles','scripts','html','rest']);

//script thingys
gulp.task('htmlonly', ['movehtml']);
gulp.task('scriptsonly', ['movejs']);
gulp.task('stylesonly', ['movestyles']);
gulp.task('restonly', ['moverest']);

gulp.task('html', ['movehtml']);
gulp.task('scripts', ['movejs']);
gulp.task('styles', ['movestyles']);
gulp.task('rest', ['moverest']);

gulp.task('movestyles',['cleanstyles'], function() {
    return gulp.src('app/app.scss')
        .pipe(sass({includePaths:['app']}))
        // .pipe(postcss(postcssProcessors))
        .pipe(minifyCSS({processImport: true})) //processimport makes sure imports are handled, relative from begin position
        .pipe(gulp.dest(DEST));
});

gulp.task('movehtml', ['cleanhtml'], function() {
    var index = gulp.src('app/index.html')
        .pipe(gulp.dest(DEST));

    var templates = gulp.src(HTMLFILES)
        .pipe(templateCache({moduleSystem:'requireJS', standalone: true, module:'rlab.templates'}))
        .pipe(gulp.dest(DEST));

    return merge(index, templates)
});

gulp.task('movejs', ['cleanjs'], function() {
    return gulp.src(JS, {base: 'app/'})
        // .pipe(concat('scripts.js'))
        // .pipe(requirejsOptimize())
        // .pipe(concat())
        // .pipe(gulp.dest(DEST))
        // .pipe(annotate()) //annotate and uglify will minify the javascript
        // .pipe(uglify())
        .pipe(gulp.dest(DEST));

        // return gulp.src('src/main.js')
        // .pipe(gulp.dest('dist'));
});

gulp.task('moverest',['cleanrest'], function() {
    var images = gulp.src(IMAGEFILES)
        .pipe(gulp.dest("dist/images"));

    var json = gulp.src(JSONFILES)
        .pipe(gulp.dest("dist/services/JSON"));

    // var bower = gulp.src('app/bower_components/**/*')
    //     .pipe(gulp.dest('dist/bower_components'))

    return merge(images, json)
});

gulp.task('clean', function() {
    return del(DEST);
});

gulp.task('cleanjs', function() {
    return del(['dist/**/*.js', '!dist/templates.js']);
});

gulp.task('cleanhtml', function() {
    return del("dist/**/*.html");
});

gulp.task('cleanstyles', function() {
    return del("dist/**/*.css");
});

gulp.task('cleanimages', function() {
    return del("dist/images")
});

gulp.task('cleanrest', function() {
    return del(["dist/services/JSON"]);
});

//see code style errors
var JSLOCAL = [
    'app/app.js',
    'app/require-config.js',
    'app/components/**/*.js',
    'app/pages/**/*.js',
    'app/services/**/*.js'
];

gulp.task('jshint', function() {
    gulp.src(JSLOCAL)
        .pipe(plumber())
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
