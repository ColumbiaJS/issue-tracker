(function () {
  'use strict';

  var express         = require('express'),
      session         = require('express-session'),
      ejs             = require('ejs'),
      morgan          = require('morgan'),
      fs              = require('fs'),
      bodyParser      = require('body-parser'),
      methodOverride  = require('method-override'),
      jwt             = require('jwt-simple'),
      passport        = require('passport');

  module.exports = function(app, config, env) {
    var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'});
    // setup static route handling
    app.set('views', config.rootPath + '/public/app');
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
    if (env === 'test') {
      app.use(morgan(config.morganFormat, {stream: accessLogStream}));
    } else {
      app.use(morgan(config.morganFormat));   // log every request to the console, I've also seen app.use(morgan('dev'));
    }
    app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());    // parse json
    app.use(methodOverride());     // simulate DELETE and PUT

    app.use(session({
      secret: process.env.APP_SECRET,
      saveUninitialized: true,
      resave: true
    }));
    app.use(passport.initialize());
    app.use(passport.session());


    app.use(express.static(config.rootPath + '/public'));   // set the static files location /public/img will be /img for users
  };

})();
