// dependencies
var expressMiddleware = [
  'body-parser', 'compression', 'cookie-session',
  'morgan', 'cookie-parser', 'express-session',
  'static-favicon', 'response-time', 'errorhandler', 'method-override',
  'connect-timeout'
];

var auth = [
  'passport', 'passport-local', 'passport-facebook', 'passport-google-oauth',
  'passport-github', 'passport-linkedin', 'passport-twitter'
];

// graphics magic (gm)
// not clear which I need for processing image uploads in form data:
// connect-multiparty or multiparty or busboy
var uploading = [
  'gm', 'connect-multiparty', 'multiparty', 'busboy'
];

var deployment = [
  'aws-sdk', 'codeclimate-test-reporter'
];

// just grunt
var grunt = [ 'grunt' ];
// dev dependencies
var gruntContrib = [
  'grunt-contrib-jshint', 'grunt-contrib-uglify', 'grunt-contrib-watch',
  'grunt-contrib-clean', 'grunt-contrib-copy', 'grunt-contrib-concat',
  'grunt-contrib-cssmin', 'grunt-contrib-imagemin', 'grunt-contrib-compass',
  'grunt-contrib-html-min'
];

var testingPackages = [
  'karma', 'mocha', 'protractor', 'grunt-karma', 'grunt-protractor-runner',
  'karma-jasmine', 'karma-mocha', 'karma-ng-html2js-preprocessor',
  'karma-chai-plugins', 'karma-chrome-launcher', 'karma-phantomjs-launcher',
  'karma-coverage',
];

var gruntUtilities = [
  'grunt-express-server', 'grunt-open', 'grunt-env', 'grunt-bower-install',
  'time-grunt', 'grunt-wiredep', 'grunt-sassdoc'
];

// not sure which to use
var livereload = [
  'grunt-contrib-livereload', 'connect-livereload', 'nodemon'
];

var lintUtils = [
  'jshint-stylish'
];
