(function () {
  'use strict';

  var app = angular.module('app.issue');

  app.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('issues', {
        url: '/issues',
        // abstract: true,
        templateUrl: '/partials/issue/issue-list.html',
        controller: 'IssueListCtrl as vm'
      })
      .state('issue', {
        url: '/issue/:issueId',
        templateUrl: '/partials/issue/issue-profile.html',
        controller: 'IssueDetailCtrl as vm'
      })
      .state('issues.issue', {
        url: '/issue/:issueId',
        templateUrl: '/partials/issue/issue-detail.html',
        controller: 'IssueDetailCtrl as vm'
      })
      .state('issues.new', {
        url: '/new',
        templateUrl: '/partials/issue/new-issue.html'
      });
  });

  app.run(function Run($auth, $log, $rootScope, IdentityService, $state) {
    $rootScope.$state = $state;
    $log.info('app.issue module loaded');
  });

})();
