(function () {
  'use strict';

  var app = angular.module('app');

  app.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: '/partials/admin/admin-user-list.html',
        controller: 'AdminUserListCtrl',
        controllerAs: 'vm'
      });
  });

  app.run(function Run($auth, $log, $rootScope, IdentityService, $state) {
    $rootScope.$state = $state;
    $log.info('app module loaded');
  });
})();
