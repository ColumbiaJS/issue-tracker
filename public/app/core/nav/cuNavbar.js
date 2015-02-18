(function () {
  'use strict';

  function cuNavbar () {

    var directive = {
      restrict: 'E',
      templateUrl: '/partials/core/nav/navbar.html',
      controller: NavCtrl,
      controllerAs: 'vm'
    };

    NavCtrl.$inject = ['IdentityService'];

    function NavCtrl(IdentityService) {
      var vm = this;

      vm.isAdmin = IdentityService.isAdmin;
      vm.isAuthenticated = IdentityService.isAuthenticated;
      vm.isFounder = IdentityService.isFounder;
      vm.getCurrentUser = IdentityService.getCurrentUser;

      activate();

      function activate() {
        IdentityService.getCurrentUser().then(function (user) {
          vm.user = user;
        });
      }

    }

    return directive;
  }

  angular.module('app.core').directive('cuNavbar', cuNavbar);

})();
