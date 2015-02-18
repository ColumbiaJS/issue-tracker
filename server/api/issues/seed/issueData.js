(function () {
  'use strict';

  var mongoose = require('mongoose'),
      User     = mongoose.model('User'),
      Issue    = mongoose.model('Issue'),
      issuesJSON = require('./issues.json'),
      Promise  = require('bluebird');

  exports.findIssues = findIssues;
  exports.seedIssues = seedIssues;

  var createIssue = Promise.promisify(Issue.create, Issue);

  function findIssues(query) {
    return Promise.cast(Issue.find(query).exec());
  }

  function seedIssues() {
    return findIssues({}).then(function (collection) {
      if (collection.length === 0) {
        return Promise.map(issuesJSON, function (issue) {
          return createIssue(issue);
        });
      }
    });
  }
})();
