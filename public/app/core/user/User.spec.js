(function () {
  'use strict';

  describe('User', function() {
    var PROFILE_IMAGE_URL = 'https://lh9.googleusercontent.com/-3485ajAAA/BBBBBBBBB/AAACDA-g/rand_sasdfjU/photo.jpg?sz=50';
    var User, user;
    beforeEach(module('app'));

    beforeEach(inject(function(_User_) {
      User = _User_;
    }));
    beforeEach(function bf() {
      var userData = {
        _id: '2007dad444caa9574ca4',
        displayName: 'Bob Jones',
        email: 'bob.jones@example.com',
        firstName: 'Bob',
        lastName: 'Jones',
        password: 'someRandomString',
        provider: 'google',
        role: 'user',
        emailVerified: false,
        PROFILE_IMAGE_URL: PROFILE_IMAGE_URL,
        google: {
          kind: 'plus#personOpenIdConnect',
          gender: 'male',
          sub: '123456781239844057327', // 21 digit number
          name: 'Bob Jones',
          given_name: 'Bob',
          family_name: 'Jones',
          profile: 'https://plus.google.com/+BobJones',
          picture: PROFILE_IMAGE_URL,
          email: 'bob.jones@example.com',
          email_verified: 'true',
          locale: 'en'
         }
       };


      user = new User(userData);
    });

    describe('User data', function() {
      it('should have a display name that matches their first and last name by default', function() {
        expect(user.firstName).toBe('Bob');
        expect(user.displayName).toEqual(user.firstName + ' ' + user.lastName);
      });

      it('should have an email address', function() {
        expect(user.email).toBe('bob.jones@example.com');
      });

      it('should not be verified', function() {
        expect(user.emailVerified).not.toBe(true);
      });

      it('should not be an admin', function() {
        expect(user.isAdmin()).not.toBe(true);
      });

      it('should be authorized as a user', function() {
        expect(user.isAuthorizedAs('user')).toBe(true);
      });
    });
  });
})();
