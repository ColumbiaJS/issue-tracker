(function() {
  'use strict';
  module.exports = function(expressPort) {
    return {
      server: {
        url: 'http://localhost:' + expressPort
      }
    };
  };
}());
