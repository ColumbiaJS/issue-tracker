(function () {
  'use strict';

  var express         = require('express'),
      dotenv          = require('dotenv');  // call as early as possible to ensure env vars are loaded

  dotenv.load();

  var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
  console.log('\n\nENV: ' + env);
  var app = express();
  var config = require('./server/config/config')[env];

  require('./server/config/express')(app, config, env);
  require('./server/config/mongoose')(config);
  require('./server/config/routes')(app, config);

  app.listen(config.port);
  console.log('Listening on port ' + config.port + '...');
  console.log('DIRNAME: ' + __dirname + '/public');

  module.exports = app;
})();
