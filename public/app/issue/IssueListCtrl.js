(function () {
  'use strict';

  var app = angular.module('app.issue');

  app.controller('IssueListCtrl', IssueListCtrl);

  IssueListCtrl.$inject = [
    'DataService', 'common', '$stateParams', '$state', '$location',
    '$anchorScroll', '$mdSidenav'
  ];
  function IssueListCtrl(
    DataService, common, $stateParams, $state, $location, $anchorScroll, $mdSidenav) {
    var logger = common.logger,
        vm     = this;

    vm.issues = [];
    vm.sidenavOpen = true;
    vm.issueListIcon = 'arrow_back';
    vm.issueListFill = '#3F51B5';
    vm.title = 'Issues';
    vm.getIssues = getIssues;
    vm.selectIssue = selectIssue;
    vm.newIssue = newIssue;


    var filterOptions = [
      {value: '$', text: 'All'},
      {value: 'open', text: 'Open'},
      {value: 'closed', text: 'Closed'}
    ];

    vm.filterBy = filterOptions;
    vm.filterOption = filterOptions[0];

    vm.filterSelectOpts = {
      selectedPrefix: 'Issues: ',
      selectOptions: vm.filterBy
    };

    activate();

    vm.backToIssues = function () {
      $state.go('issues');
    };

    vm.close = function() {
      $mdSidenav('issues-nav').close()
        .then(function(){
          logger.info('close issues-nav list is done');
        });
    };

    vm.toggle = function() {
      vm.sidenavOpen = !vm.sidenavOpen;
      if (vm.sidenavOpen) {
        vm.issueListIcon = 'arrow_back';
        vm.issueListFill = '#cc99ff';
      } else {
        vm.issueListIcon = 'menu';
        vm.issueListFill = '#cc99ff';
      }
    };

    function activate() {
      return getIssues().then(function() {
        logger.info('Issues Loaded');
        $anchorScroll.yOffset = 200;
        $anchorScroll();
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
        $state.go('issues.issue', {issueId: issue._id});
      });
    }

    function newIssue() {
      $state.go('issues.new');
    }

  }
})();
