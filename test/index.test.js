import assert from 'assert';

describe('fixture', () => {
    it('has the expected page title', () => {
      browser.url('/');
      assert.equal(browser.getTitle(), 'Cheech\'s Home Dashboard');
    });
  });