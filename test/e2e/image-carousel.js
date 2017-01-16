/*
 * Runs tests to ensure that ImageCarousel functionality
 * is working correctly
 */

const rootUrl = 'http://localhost:8000/'

module.exports = {
  'Should display ImageCarousel': function(browser) {
    browser
      .url(rootUrl)
      .waitForElementVisible('body')
      .assert.visible('.image-carousel')
      .end();
  }
};
