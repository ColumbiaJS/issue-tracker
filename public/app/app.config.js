(function () {
  'use strict';

  var app = angular.module('app');

  app.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
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
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){
      console.log('StateChangeError:', error);
      console.log(event, toState, toParams, fromState, fromParams, error);
    });
    $rootScope.$on('$stateChangeStart',
                  function(event, toState, toParams, fromState, fromParams){
      console.log('$stateChangeStart', toState, toParams);
    });
    $rootScope.$on('$stateNotFound',
    function(event, unfoundState, fromState, fromParams){
      console.log(unfoundState.to, unfoundState.toParams, unfoundState.options, fromState); // "lazy.state"
    });
    $log.info('app module loaded');
  });
})();
