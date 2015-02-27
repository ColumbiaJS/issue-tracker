(function () {
  'use strict';

  angular.module('app.issue').controller('IssueFormCtrl', IssueFormCtrl);

  IssueFormCtrl.$inject = [
    'IdentityService', 'common', '$stateParams', 'DataService'
  ];
  function IssueFormCtrl(IdentityService, common, $stateParams, DataService) {
    var logger = common.logger,
        vm     = this;

    vm.isAdmin = IdentityService.isAdmin();
    vm.isNewIssue = true;
    vm.submitIssue = submitIssue;
    vm.addNewLink = addNewLink;
    vm.deleteLink = deleteLink;
    vm.addNewFounder = addNewFounder;
    vm.deleteFounder = deleteFounder;

    vm.readyToSubmit = function () {
      if (vm.issue && vm.issue.meta) {
        return vm.issue.meta.isComplete &&
          !vm.issue.meta.submitted &&
          (vm.issue._user.auth.applicationStatus === 'incomplete');
      }
      return false;
    };

    vm.logSelected = function (item, model) {
      logger.info('office selected');
      logger.info(item);
      logger.info(model);
    };

    vm.newLinkBody = {
      title: 'You haven\'t added any links yet',
      subtitle: 'Add one now!',
      icon: 'fa-plus'
    };
    vm.newFounderBody = {
      title: 'You haven\'t added any other founders to this issue',
      subtitle: 'You can add one here',
      icon: 'fa-plus'
    };
    vm.issue = {};
    vm.officeSizes = [
      {code: 'A', size: '10-50'},
      {code: 'B', size: '51-100'},
      {code: 'C', size: '101-500'},
      {code: 'D', size: '500-1000'},
      {code: 'E', size: 'Greater than 1000'}
    ];

    console.log('STATE PARAMS');
    console.log($stateParams);

    function submitIssue(isValid) {
      if (isValid) {
        var submitted = vm.issue.meta.submitted;
        updateIssue(vm.issue).then(function() {
          if (!submitted && vm.issue.meta.submitted) {
            logger.success('Thank you for submitting your application to ' +
              'Foundermade. We will be in touch shortly.');
          } else {
            logger.success('Your issue info has been successfully updated.');
          }
        });
      } else {
        logger.error('There are errors in this form');
      }
    }

    function addNewLink() {
      var newLinkObject = {
        name: '',
        url: ''
      };
      vm.issue.links.push(newLinkObject);
      logger.info('Add new link called! (Still unimplemented)');
    }
    function addNewFounder() {
      var newFounder = {};
      vm.issue.founders.push(newFounder);
      logger.info('Add new founder called! (Still unimplemented)');
    }

    activate();

    function activate() {
      getUsersForAdmin();
      if ($stateParams.id) {
        vm.isNewIssue = false;
        return getIssue($stateParams.id).then(function() {
          // logger.info('Issue Loaded');
        });
      }
      vm.isNewIssue = true;
    }

    function getUsersForAdmin() {
      if (IdentityService.isAdmin()) {
        return getUsers().then(function() {
          // logger.info('Users loaded');
        });
      }
    }

    function getIssue(id) {
      return DataService.getIssue(id).then(function(data) {
        console.log('issue data');
        console.log(data);
        vm.issue = data;
        return vm.issue;
      });
    }

    function updateIssue(issueData) {
      return DataService.updateIssue(issueData).then(function(data) {
        vm.issue = data;
        return vm.issue;
      });
    }

    function getUsers() {
      return DataService.getUsers().then(function(data) {
        console.log('users data');
        console.log(data);
        vm.users = data;
        return vm.users;
      });
    }

    function deleteLink (link) {
      var indexOfLink = vm.issue.links.indexOf(link);
      if (link._id) {
        return vm.issue.deleteLink(link).then(function (data) {
          logger.success('link successfully deleted', link);
          var indexOfLink = vm.issue.links.indexOf(link);
          if (indexOfLink > -1) { vm.issue.links.splice(indexOfLink, 1); }
          return link;
        });
      } else {
        if (indexOfLink > -1) { vm.issue.links.splice(indexOfLink, 1); }
      }
    }

    function deleteFounder (founder) {
      var indexOfFounder = vm.issue.founders.indexOf(founder);
      if (founder._id) {
        return vm.issue.deleteFounder(founder).then(function (data) {
          logger.warn('Deleting founder with index ' + indexOfFounder + ' and _id ' + founder._id);
          if (indexOfFounder > -1) { vm.issue.founders.splice(indexOfFounder, 1); }
          return founder;
        });
      } else {
        if (indexOfFounder > -1) { vm.issue.founders.splice(indexOfFounder, 1); }
      }
    }
  }
})();
