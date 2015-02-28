(function () {
  'use strict';

  angular.module('app.issue')
    .controller('IssueDetailCtrl', IssueDetailCtrl);

  IssueDetailCtrl.$inject = [
    '$stateParams', 'DataService', 'common', '$state', 'CurrentIssue', '$scope'
  ];
  function IssueDetailCtrl(
    $stateParams, DataService, common, $state, CurrentIssue, $scope
  ) {
    var logger = common.logger,
        vm     = this;

    vm.getIssue = getIssue;
    vm.title = 'Issue';
    vm.current = CurrentIssue;
    vm.current.editMode = false;
    vm.edit = edit;
    vm.issue = vm.current.issue;

    $scope.$watch('vm.current.issue', function (newVal) {
      vm.issue = newVal;
    });

    activate();

    function activate() {
      return getIssue($stateParams.issueId).then(function() {
        logger.info('Issue Loaded');
      });
    }

    function edit() { vm.current.editMode = true; }

    function getIssue(issueId) {
      return DataService.getIssue(issueId).then(function(data) {
        CurrentIssue.issue = data;
        vm.issue = CurrentIssue.issue;
        vm.title = vm.issue.title;
        return CurrentIssue.issue;
      });
    }

  }
})();
