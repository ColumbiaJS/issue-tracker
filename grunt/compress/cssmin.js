(function() {
  'use strict';

  module.exports = {
    combine: {
      files: {
        '<%= directories.dist %>/public/style.css': [
          '<%= directories.client %>/stylesheets/css/style.css'
        ]
      }
    }
  };

})();
