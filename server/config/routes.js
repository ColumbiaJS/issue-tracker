(function () {
  'use strict';

  var mongoose =      require('mongoose'),
      User =          mongoose.model('User'),
      clientViews =   require('./routes/clientViews'),
      errors =        require('../utilities/errors');  // for view partial routing


  module.exports = function(app, config) { // pass in config object containing rootPath

    // see https://github.com/auth0/angular-token-auth/blob/master/auth.server.js
    app.use(function(err, req, res, next){
      if (err.constructor.name === 'UnauthorizedError') {
        // res.send(401, 'Unauthorized');
        res.status(401).send('Unauthorized');
      }
    });

    app.route('/api/hello')
      .get(function(req, res) {
        res.send('hello there!');
      })
      .post(function(req, res) {
        console.log('processing a post request');
        res.send('processing post to hello');
      });

    app.use('/api/users', require('../api/user'));
    app.use('/auth', require('../auth'));



    app.route('/partials/*')
      .get(clientViews.viewPartials);
    // i think the below is the express 4 way to do it

    // All undefined asset or api routes should return a 404
    app.route('/:url(api|auth|components|app|bower_components|assets)/*')
      .get(errors[404]);
  //  app.all('/api/*', function(req, res) {
  //    res.send(404);
  //  });

    app.route('/*')
      .get(function(req, res) {
        res.sendFile(config.rootPath + '/public/index.html');
      });

  };
})();
