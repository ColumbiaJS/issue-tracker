(function () {
  'use strict';

  // send partial (or 404 if it doesn't exist)
  module.exports.viewPartials = function(req, res) {
    var requestedView = req.params[0];
    res.render('../../public/app/' + requestedView, function(err, html) {
      if(err) {
        console.log('Error rendering partial ' + requestedView + '\n', err);
        res.status(404);
        res.send(404);
      } else {
        res.send(html);
      }
    });
  };

  // /* Send our single page app */
  // module.exports.viewIndex = function(req, res) {
  //   console.log('view index: ' + req.params);
  //   res.render('index', {
  //     bootstrappedUser: req.user
  //   });
  // };
})();
