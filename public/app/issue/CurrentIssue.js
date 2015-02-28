(function () {
  'use strict';

  angular
    .module('app.issue')
    .factory('CurrentIssue', CurrentIssue);

  CurrentIssue.$inject = ['$timeout'];

  function CurrentIssue($timeout) {
    var issue = {
      _issue: {},
      _clone: {},
      editMode: false
    };

    Object.defineProperties(issue, {
      'issue': {
        get: function () {
          return this._issue;
        },
        set: function (issue) {
          this._issue = issue;
          this.clone = angular.copy(issue);
          // call $timeout with value of 0 to tell angular to update
          $timeout(function() {
            this.clone = angular.copy(issue);
            console.log('update with timeout fired for setting clone of CurrentIssue');
          }.bind(this));
        }
      },
      'clone': {
        get: function () {
          return this._clone;
        },
        set: function (clone) {
          this._clone = clone;
        }
      }
    });
    return issue;
  }
})();
