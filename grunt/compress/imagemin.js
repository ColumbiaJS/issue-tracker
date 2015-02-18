(function () {
  'use strict';

  // produce minified files in the dist folder
  module.exports = {
    dist: {
      files: [{
        expand: true,
        cwd: '<%= directories.client %>/assets/images',
        src: '{,*/}*.{png,jpg,jpeg,gif}',
        dest: '<%= directories.dist %>/public/assets/images'
      }]
    }
  };
})();
