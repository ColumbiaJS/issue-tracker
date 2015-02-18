// Sass Transcompilation Task
(function() {
  'use strict';
  module.exports = {
    files: [ 'server.js', 'server/**/*.js' ],
    tasks: [ 'express:dev', 'wait'],
    options: {
      livereload: true,
      nospawn: true
    }
  };
}());
