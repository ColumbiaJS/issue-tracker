(function () {
  'use strict';

  module.exports = {
    dist: {
      files: [{
        dot: true,
        src: [
          '.tmp',
          '<%= directories.dist %>/*',
          '!<%= directories.dist %>/.git*',
          '!<%= directories.dist %>/Procfile'

        ]
      }]
    },
    server: '.tmp'
  };

})();
