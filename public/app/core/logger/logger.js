(function () {
  'use strict';

  angular.module('core.logger').factory('logger', logger);

  logger.$inject = ['$log', 'toastr'];

  /* @ngInject */
  function logger($log, toastr) {
  //   /* EXPOSED FUNCTIONS / PUBLIC API */
    var service = {
      error   :  error,
      info    :  info,
      success :  success,
      warn    :  warn,
      log     :  $log.log         // log without notifying
    };

    return service;

    /* IMPLEMENTATION DETAILS */

    /**
     * polymorphic function to call the logger + notify funcs
     * @param {string} type
     * @param {string} message the message
     * @param {Object} data, data associated with message for logging purposes
     * @param {title=} optional title for notification
     */
    function logAndNotify(type, message, data, title) {
      var notificationType = type,
          capitalized = type.toUpperCase();
      if (notificationType === 'warn') {
        notificationType = 'warning';
        capitalized = notificationType.toUpperCase();
      }
      /*
       * REPLACES:
       *    toastr.info(message, title);
       *    $log.info('Info: ' + message, data);
       * etc.
       */
      toastr[notificationType](message, title);
      $log[type](capitalized + ': ' + message, data);
    }

    function error(message, data, title) {
      logAndNotify('error', message, data, title);
    }

    function info(message, data, title) {
      logAndNotify('info', message, data, title);
    }

    function warn(message, data, title) {
      logAndNotify('warn', message, data, title);
    }

    function success(message, data, title) {
      logAndNotify('success', message, data, title);
    }

  }
})();
