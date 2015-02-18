(function() {
  'use strict';
  module.exports = {
    options: {
      port: process.env.PORT || 3000
    },
    dev: {
      options: {
        script: 'server.js',
        debug: false
      }
    },
    prod: {
      options: {
        script: 'dist/server.js'
      }
    }
  };
}());
