(function () {
  'use strict';

  angular
    .module('app.issue')
    .directive('issueForm', issueForm);

    issueForm.$inject = [];

    function issueForm() {
      return {
        restrict: 'E',
        controller: 'IssueFormCtrl as form',
        templateUrl: '/partials/issue/issue-form.html'
      };
    }
})();
