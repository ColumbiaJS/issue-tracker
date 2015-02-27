(function () {
  'use strict';

  angular.module('app.issue')
    .controller('IssueDetailCtrl', IssueDetailCtrl);

  IssueDetailCtrl.$inject = [
    '$stateParams', 'DataService', 'common', '$state', '$timeout'
  ];
  function IssueDetailCtrl($stateParams, DataService, common, $state, $timeout) {
    var logger = common.logger,
        vm     = this;

    vm.getIssue = getIssue;
    vm.title = 'Issue';
    vm.backToFounders = backToFounders;

    activate();

    function activate() {
      return getIssue($stateParams.issueId).then(function() {
        logger.info('Issue Loaded');
      });
    }

    function backToFounders () {
      $state.go('issues', {activeIssueId: vm.issue._id});
    }

    function getIssue(issueId) {
      return DataService.getIssue(issueId).then(function(data) {
        vm.issue = data;
        vm.title = vm.issue.profile.name;
        vm.user = vm.issue._user;
        console.log('vm.user');
        console.log(vm.user);
        vm.founder = {
          founderName: vm.user.firstName + ' ' + vm.user.lastName,
          title: vm.user.profile.title,
          issueName: vm.issue.profile.name,
          siteLink: vm.issue.profile.website,
          founded: vm.issue.profile.foundedYear.toString(),
          email: vm.user.email,
          phone: vm.user.contact.phones[0].number || ''
        };
        return vm.issue;
      });
    }

  }
})();
