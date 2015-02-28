(function () {
  'use strict';

  angular.module('app.issue').controller('IssueFormCtrl', IssueFormCtrl);

  IssueFormCtrl.$inject = [
    'common', '$stateParams', 'DataService', 'CurrentIssue', '$state', '$scope',
    '$window'
  ];
  function IssueFormCtrl(
    common, $stateParams, DataService, CurrentIssue, $state, $scope, $window
  ) {
    var logger = common.logger,
        vm     = this;

    vm.current = CurrentIssue;
    vm.submitIssue = submitIssue;
    vm.cancel = cancel;
    vm.issue = vm.current.clone;
    vm.isNewIssue = false;

    vm.logSelected = function (item, model) {
      logger.info('selected');
      logger.info(item);
      logger.info(model);
    };

    function submitIssue(isValid) {
      console.log('SUBMITTING FORM');
      if (isValid) {
        console.log('FORM IS VALID');
        if (vm.isNewIssue) {
          createIssue(vm.issue).then(function() {
            logger.info('Your issue was successfully created');
            vm.current.editMode = false;
          });
        } else {
          updateIssue(vm.issue).then(function() {
            logger.info('Your issue info has been successfully updated.');
            vm.current.editMode = false;
          });
        }
      } else {
        logger.error('There are errors in this form');
      }
    }

    activate();

    function activate() {
      // getUsersForAdmin();
      if (!$stateParams.issueId) {
        console.log('NO CURRENT ISSUE!');
        vm.current.editMode = true;
        vm.current.issue = {
          title: '',
          body: '',
          user: {
            login: 'ColumbiaJS',
            avatar_url: 'https://avatars1.githubusercontent.com/u/10440419?v=3',
            html_url: 'https://github.com/ColumbiaJS'
          }
        };
        console.log(vm.current.issue);
        console.log(vm.current.clone);
        vm.issue = vm.current.clone;
        vm.isNewIssue = true;
      }
    }

    function getIssue(id) {
      return DataService.getIssue(id).then(function(data) {
        console.log('issue data');
        console.log(data);
        vm.issue = data;
        return vm.issue;
      });
    }

    function createIssue(issueData) {
      return DataService.createIssue(issueData).then(function(data) {
        console.log('DATA RETURNED ON CREATE');
        console.log(data);
        CurrentIssue.issue = data;
        $state.go('issues.issue', {issueId: CurrentIssue.issue._id});
      });
    }

    function updateIssue(issueData) {
      return DataService.updateIssue(issueData).then(function(data) {
        CurrentIssue.issue = data;
        vm.current = CurrentIssue;
        console.log(vm.current.issue);
        console.log(vm.current.clone);
        vm.issue = CurrentIssue.clone;
        return vm.issue;
      });
    }

    function cancel() {
      vm.current.editMode = false;
      if (vm.isNewIssue) {
        console.log('new issue go back');
        $window.history.back();
      }
    }


  }
})();
