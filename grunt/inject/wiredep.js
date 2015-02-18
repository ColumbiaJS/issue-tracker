// finds bower components and injects them directly into the HTML file specified
(function() {
  'use strict';
  module.exports = {
    target: {

      // Point to the files that should be updated when
      // you run `grunt wiredep`
      src: [
        'public/index.html'   // .html support...
        // 'app/styles/style.scss'  // .scss & .sass support...
        // 'app/config.yml'         // and .yml & .yaml support out of the box!
      ],

      // Optional:
      // ---------
      // cwd: '',
      dependencies: true,
      devDependencies: true,
      exclude: [ /bootstrap-sass-official/, /bootstrap.js/,
        /json3/, /es5-shim/, /bootstrap.css/, /font-awesome.css/
      ]
      // fileTypes: {},
      // ignorePath: '',
      // overrides: {}
    },
    test: {
      src: 'karma.conf.js',
      fileTypes: {
        js: {
          block: /(([\s\t]*)\/\/\s*bower:*(\S*))(\n|\r|.)*?(\/\/\s*endbower)/gi,
          detect: {
            js: /'(.*\.js)'/gi
          },
          replace: {
            js: '\'..{{filePath}}\','
          }
        }
      },
      ignorePath: /public/,
      dependencies: true,
      devDependencies: true,
      exclude: [ /bootstrap-sass-official/, /bootstrap.js/,
        /json3/, /es5-shim/, /bootstrap.css/, /font-awesome.css/
      ]
    }
  };
}());
