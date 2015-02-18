(function () {
  'use strict';

  module.exports = {
    dist: {
      files: [{
        expand: true,
        dot: true,
        cwd: '<%= directories.client %>',
        dest: '<%= directories.dist %>/public',
        src: [
          '*.{ico,png,txt}',
          '.htaccess',
          'bower_components/**/*',
          'assets/images/{,*/}*.{webp}',
          'assets/fonts/**/*',
          'index.html',
          'README.md'
        ]
      }, {
        expand: true,
        cwd: '.tmp/images',
        dest: '<%= directories.dist %>/public/assets/images',
        src: ['generated/*']
      }, {
        expand: true,
        dest: '<%= directories.dist %>',
        src: [
          'package.json',
          'server.js',
          'server/**/*'
        ]
      }, {
        src: 'distgitignore',
        dest: '<%= directories.dist %>/.gitignore'
      }, {
        src: '.env',
        dest: '<%= directories.dist %>/.env'
      }]
    },
    styles: {
      expand: true,
      cwd: '<%= directories.client %>',
      dest: '.tmp/',
      src: ['{app,components}/**/*.css']
    }
  };

})();
