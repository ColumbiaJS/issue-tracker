(function () {
  'use strict';
  angular.module('app.core', [
    /* angular modules */
    'ngResource', 'ngAnimate', 'ngRoute', 'ngSanitize',

    /* reusable core modules */
    'core.logger',

    /* 3rd party modules */
    'ui.router', 'ui.bootstrap', 'ui.select', 'ui.utils',
    'satellizer', 'ngDialog', 'toastr',
    'angularUtils.directives.dirPagination', 'ngMaterial', 'cfp.hotkeys'
  ]);
})();
