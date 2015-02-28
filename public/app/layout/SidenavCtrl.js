(function () {
  'use strict';

  angular
    .module('app')
    .controller('SidenavCtrl', SidenavCtrl);

  function SidenavCtrl ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function() {
      $mdSidenav('left')
        .close()
        .then(function() {
          // $log.debug('close left is done');
        });
    };
  }

})();
