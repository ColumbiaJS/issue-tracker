(function() {
  'use strict';

  var clientApp = 'public/app/';

  module.exports = {
    options: {},
    scripts: {
      options: {
        transform: function(filePath) {
          filePath = filePath.replace('/public/', '');
          return '<script src="' + filePath + '"></script>';
        },
        starttag: '<!-- injector:js -->',
        endtag: '<!-- endinjector -->',
        template: 'public/index.html'
      },
      files: {
        'public/index.html': [
          clientApp + '**/*.module.js',
          clientApp + '**/*.js',
          '!' + clientApp + '**/*.spec.js',
          '!' + clientApp + '**/*.mock.js',
          '!{.tmp,public}/app/**/*.spec.js',
          '!{.tmp,public}/app/**/*.mock.js'
        ]
      }
    },
    sass: {
      options: {
        transform: function(filePath) {
          filePath = filePath.replace('/public/app/', '');
          filePath = filePath.replace('.scss', '');
          return '@import \'' + filePath + '\';';
        },
        starttag: '// injector',
        endtag: '// endinjector',
        template: 'public/stylesheets/sass/style.scss'
      },
      files: {
        'public/stylesheets/sass/style.scss': [
          'public/app/**/*.{scss,sass}'
        ]
      }
    }
  };
}());
