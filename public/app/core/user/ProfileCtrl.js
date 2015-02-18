(function () {
  'use strict';

  angular.module('app.core')
    .controller('ProfileCtrl', function($scope, $auth, AccountService) {

      /**
       * Get user's profile information.
       * this should actually use the IdentityService, which already provides
       * user and updateProfile functionality
       */
      AccountService.getProfile()
        .success(function(data) {
          $scope.user = data;
        })
        .error(function() {
          console.log('unable to get user info');
  //        $alert({
  //          content: 'Unable to get user information',
  //          animation: 'fadeZoomFadeDown',
  //          type: 'material',
  //          duration: 3
  //        });
        });


      /**
       * Update user's profile information.
       */
      $scope.updateProfile = function() {
        AccountService.updateProfile({
          displayName: $scope.user.displayName,
          email: $scope.user.email
        }).then(function() {
          console.log('Profile updated');
  //        $alert({
  //          content: 'Profile has been updated',
  //          animation: 'fadeZoomFadeDown',
  //          type: 'material',
  //          duration: 3
  //        });
        });
      };

      /**
       * Link third-party provider.
       */
      $scope.link = function(provider) {
        $auth.link(provider)
          .then(function() {
            // $alert({
            //   content: 'You have successfully linked ' + provider + ' account',
            //   animation: 'fadeZoomFadeDown',
            //   type: 'material',
            //   duration: 3
            // });
          })
          .catch(function(response) {
            // $alert({
            //   content: response.data.message,
            //   animation: 'fadeZoomFadeDown',
            //   type: 'material',
            //   duration: 3
            // });
          });
      };

      /**
       * Unlink third-party provider.
       */
      $scope.unlink = function(provider) {
        $auth.unlink(provider)
          .then(function() {
            console.log('You have successfully unlinked ' + provider + ' account');
  //          $alert({
  //            content: 'You have successfully unlinked ' + provider + ' account',
  //            animation: 'fadeZoomFadeDown',
  //            type: 'material',
  //            duration: 3
  //          });
          })
          .catch(function() {
            console.log('could not unlink ' + provider + ' account');
  //          $alert({
  //            content: 'Could not unlink ' + provider + ' account',
  //            animation: 'fadeZoomFadeDown',
  //            type: 'material',
  //            duration: 3
  //          });
          });
      };
    });
})();
