(function() {
  'use strict';

  module.exports = {
    html: ['<%= directories.client %>/index.html'],
    options : {
      dest: '<%= directories.dist %>/public'
    }
  };

})();
