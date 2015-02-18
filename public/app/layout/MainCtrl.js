(function () {
  'use strict';
  angular
    .module('app')
    .controller('MainCtrl', MainCtrl);

  function MainCtrl($scope, $timeout, $mdSidenav, $log) {
    $scope.toggleSidenav = function() {
      $mdSidenav('left')
        .toggle()
        .then(function(){
          $log.debug('toggle left is done');
        });
    };
  }


})();
