'use strict';

describe('mean-scaffold navigation', function() {

  describe('navbar', function() {

    beforeEach(function () {
      browser.get('/');
    });
    it('should have the title FTF', function() {
      expect(browser.getTitle()).toBe('MEAN SCAFFOLD');
    });

    it('should render the home page', function() {
      var heading1 = element(by.css('.navbar-brand'));
      expect(heading1.getText()).toMatch(/LEVIATHAN/);
    });
  });
});
