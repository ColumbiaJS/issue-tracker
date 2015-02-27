(function () {
  'use strict';

  var app = angular.module('app.issue');

  app.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('issues', {
        url: '/issues',
        templateUrl: '/partials/issue/issue-list.html',
        controller: 'IssueListCtrl as vm'
      })
      .state('issue', {
        url: '/issue/:issueId',
        templateUrl: '/partials/issue/issue-profile.html',
        controller: 'IssueDetailCtrl as vm'
      })
      .state('issues.issue', {
        url: '/:issueId',
        templateUrl: '/partials/issue/issue-detail.html',
        controller: 'IssueDetailCtrl as vm'
      })
      .state('issues.new', {
        url: '/new',
        templateUrl: '/partials/issue/form/issue-form.html',
        controller: 'IssueFormCtrl',
        controllerAs: 'vm'
      })
      .state('issues.edit', {
        url: '/:id/edit',
        templateUrl: '/partials/issue/form/issue-form.html',
        controller: 'IssueFormCtrl',
        controllerAs: 'vm'
      })
      .state('issues.show', {
        url: '/:id',
        templateUrl: '/partials/issue/issue-detail.html',
        controller: 'IssueDetailCtrl as vm'
      });
  });

  app.run(function Run($auth, $log, $rootScope, IdentityService, $state) {
    $rootScope.$state = $state;
    $log.info('app.issue module loaded');
  });

})();
