// (function () {
//   'use strict';

//   describe('Controller: ProfileCtrl', function() {
//     var $scope,
//         $httpBackend,
//         $rootScope,
//         $controller,
//         AccountServiceSpy,
//         AccountService,
//         profileCtrl;

//     var profile = {
//       _id: 'somaadiopsfjaopsdjf',
//       displayName: 'Bob Jones',
//       email: 'bob.jones@example.com',
//       emailVerified: false,
//       firstName: 'Bob',
//       google: {},
//       lastName: 'Jones',
//       provider: 'google',
//       role: 'user'
//     };

//     beforeEach(module('app'));

//     beforeEach(inject(function(_$httpBackend_, _$rootScope_, _$controller_, _AccountService_) {
//       AccountService = _AccountService_;
//       $httpBackend = _$httpBackend_;
//       $httpBackend.expectGET('/api/users/me').respond(profile);
//       $rootScope = _$rootScope_;
//       $controller = _$controller_;
//       $scope = $rootScope.$new();
//       profileCtrl = $controller('ProfileCtrl', {$scope: $scope});
//     }));

//     describe('Initialization', function() {
//       it('should get the profile of the current user using the account service', function(done) {
//         $httpBackend.flush();
//         expect($scope.user).toEqual(profile);
//       });
//     });


//     describe('updateProfile', function() {
//       it('should update the current user\'s profile name', function() {
//         $httpBackend.flush();
//         $httpBackend.expectPUT('/api/users/me').respond({});
//         $scope.user.displayName = 'Jane Jones';
//         $scope.user.email = 'jane.jones@example.com';
//         $scope.updateProfile();
//         expect($scope.user.email).toEqual('jane.jones@example.com');
//       });
//     });
//   });
// })();
