'use strict';

// Karma configuration
// Generated on Fri May 09 2014 12:50:38 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: 'public/app/',

    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'mocha', 'chai', 'sinon-chai'],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      '../bower_components/jquery/dist/jquery.js',
      '../bower_components/lodash/dist/lodash.compat.js',
      '../bower_components/angular/angular.js',
      '../bower_components/angular-animate/angular-animate.js',
      '../bower_components/angular-cookies/angular-cookies.js',
      '../bower_components/angular-mocks/angular-mocks.js',
      '../bower_components/angular-resource/angular-resource.js',
      '../bower_components/angular-route/angular-route.js',
      '../bower_components/angular-sanitize/angular-sanitize.js',
      '../bower_components/angular-messages/angular-messages.js',
      '../bower_components/angular-utils-pagination/dirPagination.js',
      '../bower_components/angular-aria/angular-aria.js',
      '../bower_components/angular-hotkeys/build/hotkeys.min.js',
      '../bower_components/moment/moment.js',
      '../bower_components/angular-moment/angular-moment.js',
      '../bower_components/angular-ui-router/release/angular-ui-router.js',
      '../bower_components/ngDialog/js/ngDialog.js',
      '../bower_components/angular-ui-utils/ui-utils.js',
      '../bower_components/angular-ui-select/dist/select.js',
      '../bower_components/angular-toastr/dist/angular-toastr.js',
      '../bower_components/angular-material/angular-material.js',
      '../bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      '../bower_components/satellizer/satellizer.js',
      // endbower
      '../../test/test-app.js',
      '**/*.module.js',
      '**/*.js',
      '../../test/specs/**/*.js',
      '../../test/specs/**/**/*.js',
      '**/**/*.html',
      '**/*.html'   // load html files for directives so it can process them
    ],

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '**/*.html': ['ng-html2js'],
      '**/**/*.html': ['ng-html2js'],
      // '**/*.js': ['coverage'],
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      // '*.js': ['coverage'],
      '**/*.js': ['coverage']
    },

    ngHtml2JsPreprocessor: {
       // strip this from the file path
       stripPrefix: 'public/',
       // prepend this to the
       prependPrefix: '/partials/',

      // setting this option will create only a single module that contains templates
      // from all the files, so you can load them all with module('foo')
      // i.e.      moduleName: 'app'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots', 'progress', 'html', 'osx', 'coverage'],

    htmlReporter: {
      outputDir: 'coverage'
      // templatePath: __dirname+'/jasmine_template.html'
    },
    coverageReporter: {
      root: 'public/app',
      type: 'lcov',
      // dir: process.env.CIRCLE_ARTIFACTS || '../../CIRCLE_ARTIFACTS'
      dir: '../../coverage',
      subdir: 'report'
      // instrumenter: {
      //   '**/*.js': 'istanbul' // Force the use of the Istanbul instrumenter to cover CoffeeScript files
      // }
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_WARN,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
