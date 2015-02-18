(function() {
  'use strict';

  // replace ref to assets with revisioned version
  module.exports = {
    html: ['<%= directories.dist %>/public/{,*/}*.html'],
    css: ['<%= directories.dist %>/public/{,*/}*.css'],
    js: ['<%= directories.dist %>/public/{,*/}*.js'],
    options: {
      assetsDirs: [
        '<%= directories.dist %>/public',
        '<%= directories.dist %>/public/assets/images'
      ],
      // cf. angular-fullstack This is so we update image references in our ng-templates
      patterns: {
        js: [
          [/(assets\/images\/.*?\.(?:gif|jpeg|jpg|png|webp|svg))/gm, 'Update the JS to reference our revved images']
        ]
      }
    }
  };
})();
