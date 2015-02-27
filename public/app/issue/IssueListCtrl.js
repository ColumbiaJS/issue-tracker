(function () {
  'use strict';

  var app = angular.module('app.issue');

  app.controller('IssueListCtrl', IssueListCtrl);

  IssueListCtrl.$inject = [
    'DataService', 'common', '$stateParams', '$state', '$location',
    '$anchorScroll'
  ];
  function IssueListCtrl(
    DataService, common, $stateParams, $state, $location, $anchorScroll) {
    var logger = common.logger,
        vm     = this,
        __savedSelectedIndex = -1;

    // if ($stateParams.activeIssueId) {
    //   logger.info('$stateParams.activeIssueId: ' + $stateParams.activeIssueId);
    //   vm.selected
    //   __savedSelectedIndex = $stateParams.activeIssueId.toString();
    //   vm.selectedIndex = __savedSelectedIndex;
    // }

    vm.currentPage = 1;
    vm.pageSize = 4;
    vm.issues = [];
    vm.getIssues = getIssues;
    vm.selectIssue = selectIssue;
    vm.reselect = reselect;
    // vm.selectedIndex = $stateParams.activeIssueId || -1;
    console.log('selected index: ' + vm.selectedIndex);
    vm.title = 'Issues';

    var filterOptions = [
      {value: '$', text: 'All'},
      {value: 'open', text: 'Open'},
      {value: 'closed', text: 'Closed'}
    ];
    vm.filterBy = filterOptions;
    vm.filterOption = filterOptions[0];

    activate();

    vm.backToIssues = function () {
      $state.go('issues');
    };

    function activate() {
      return getIssues().then(function() {
        logger.info('Issues Loaded');
        vm.selectedIndex = $stateParams.activeIssueId || -1;
        $location.hash(vm.selectedIndex);
        $anchorScroll.yOffset = 200;
        $anchorScroll();
        // vm.selectedIndex = __savedSelectedIndex;
      });
    }

    function getIssues() {
      return DataService.getIssues().then(function(data) {
        vm.issues = data;
        return vm.issues;
      });
    }

    function selectIssue (issue) {
      vm.selectedIndex = issue._id;
      logger.info(issue._id);
      setTimeout(function () {
        $state.go('issue', {issueId: issue._id});
      });
    }

    function reselect() {
      if (vm.selectedIndex !== -1) {
        $state.go('issue', {issueId: vm.selectedIndex});
      }
    }

    vm.filterSelectOpts = {
      selectedPrefix: 'Issues: ',
      selectOptions: vm.filterBy
    };

  }
})();
