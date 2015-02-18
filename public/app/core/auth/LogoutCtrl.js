(function () {
  'use strict';

  angular.module('app.core')
    .controller('LogoutCtrl', function($auth, IdentityService, common) {
      var logger = common.logger;
      $auth.logout()
        .then(function() {
          IdentityService.logoutCurrentUser();
          logger.warn('Logout successful', {}, 'You have been logged out.');
  //        $alert({
  //          content: 'You have been logged out',
  //          animation: 'fadeZoomFadeDown',
  //          type: 'material',
  //          duration: 3
  //        });
        });
    });

})();
