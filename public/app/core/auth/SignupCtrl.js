(function () {
  'use strict';

  angular.module('app.core')
    .controller('SignupCtrl', function($scope, $auth, ngDialog) {
      $scope.signup = function() {
        $auth.signup({
          displayName: $scope.displayName,
          email: $scope.email,
          password: $scope.password
        });
        ngDialog.closeAll();
      };
    });
})();
