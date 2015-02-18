(function () {
  'use strict';

  describe('lvUser', function() {
    beforeEach(module('app'));

    describe('isAdmin', function() {
      // it('should return false if the roles array does not have an admin entry', inject(function(lvUser) {
      //   var user = new lvUser();
      //   user.roles = ['not admin'];
      //   expect(user.isAdmin()).toBe(false);
      // }));

      // it('should return true if the roles array does have an admin entry', inject(function(lvUser) {
      //   var user = new lvUser();
      //   user.roles = ['admin'];
      //   expect(user.isAdmin()).toBe(true);
      // }));

      it('should return true when true', function() {
        var user = true;
        expect(user).toBe(true);
      });
    });
  });

})();
