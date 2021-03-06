(function () {
  'use strict';

  var mongoose   = require('mongoose'),
      userModel  = require('../api/user/user.model'),
      Issue      = require('../api/issues/issue.model'),
      IssueData  = require('../api/issues/seed/issueData');


  module.exports = function(config) {
    mongoose.connect(config.db);
    console.log(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
      console.log('db connection successfully opened...');
      IssueData.seedIssues();
    });
  };

})();
