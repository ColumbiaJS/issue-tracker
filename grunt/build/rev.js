(function () {
  'use strict';

  /* FILE REVISIONING / BROWSER / CACHE BUSTING */
  module.exports = {
    dist: {
      files: {
        src: [
          '<%= directories.dist %>/public/{,*/}*.js',
          '<%= directories.dist %>/public/{,*/}*.css',
          '<%= directories.dist %>/public/assets/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= directories.dist %>/public/assets/fonts/*'
        ]
      }
    }
  };
})();
