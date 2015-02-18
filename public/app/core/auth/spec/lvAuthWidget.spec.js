(function () {
  'use strict';

  describe('Directive: Auth Widget lvAuthWidget', function() {
    var $rootScope, $controller, $q, $httpBackend, scope;

    var $compile,
        element,
        mockAuthCtrl,
        AuthCtrl;

    beforeEach(module('app'));
    beforeEach(module('/partials/layout/main.html'));
    beforeEach(module('/partials/core/auth/auth-widget.html'));
    // beforeEach(module(function($controllerProvider) {
    //   $controllerProvider.register('AuthCtrl', function($scope) {
    //     // Controller Mock
    //     this.isAuthenticated = false;
    //     $scope.isAuthenticated = function() {
    //       return false;
    //     };
    //     $scope.identity = {
    //       currentUser: function() {
    //         return {
    //           isAdmin: function() {
    //             return true;
    //           },
    //           google: {
    //             picture: 'googleurl'
    //           },
    //           displayName: 'Bob Jones'
    //         }
    //       }
    //     };
    //   });
    // }));

    beforeEach(inject(function (_$rootScope_, _$controller_, _$q_, _$httpBackend_, _$compile_) {
        $q = _$q_;
        $rootScope = _$rootScope_;
        $controller = _$controller_;
        $httpBackend = _$httpBackend_;
        $compile = _$compile_;
        scope = $rootScope.$new();
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
    // beforeEach(inject(function(_$compile_, _$rootScope_, _$controller_) {
    //   $rootScope = _$rootScope_;
    //   $compile = _$compile_;
    //   $controller = _$controller_;
    //   scope = $rootScope.$new();

    // }));

    describe('when not authenticated', function() {
      beforeEach(function() {
        // scope.isAuthenticated = jasmine.createSpy('scopeSpy').and.returnValue(false);
        scope.isAuthenticated = function() {return false; };
        AuthCtrl = $controller('AuthCtrl', {$scope: scope});
        // spyOn(scope, 'isAuthenticated').and.returnValue(false);
        element = angular.element('<lv-auth-widget></lv-auth-widget>');
        $compile(element)(scope);
        scope.$digest();
      });
      it('should display a link to login', function() {
        // spyOn(scope, 'isAuthenticated').and.returnValue(false);
        // scope.$digest();
        // expect(scope.isAuthenticated).toHaveBeenCalled();
        expect(element.html()).toContain('ng-click="displayLogin()"');
      });
    });

    // describe('when authenticated', function() {
    //   beforeEach(function() {

    //     scope.isAuthenticated = function() {return true; }
    //     // scope.isAuthenticated = jasmine.createSpy('scopeSpy').and.returnValue(true);
    //     AuthCtrl = $controller('AuthCtrl', {$scope: scope});
    //     element = angular.element('<lv-auth-widget></lv-auth-widget>');
    //     $compile(element)(scope);
    //     scope.$digest();
    //   });
    //   it('should display a link to the dashboard', function() {
    //     scope.isAuthenticated = function() {return true; }
    //     console.log(scope.isAuthenticated());
    //     expect(element.html()).toContain('Dashboard');
    //   });
    // });
  });

})();
