(function () {
  'use strict';

  // produce minified files in the dist folder
  module.exports = {
    dist: {
      files: [{
        expand: true,
        cwd: '<%= directories.client %>/assets/images',
        src: '{,*/}*.svg',
        dest: '<%= directories.dist %>/public/assets/images'
      }]
    }
  };
})();
