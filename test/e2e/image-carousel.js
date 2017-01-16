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
      // make sure images rotate on switcher button click
      .getLocation('.images:first-child', function(initPos) {
        browser.click('.switcher.next')
          .pause(400)
          .getLocation('.images:first-child', function(nextPos) {
            browser.assert.notEqual(initPos.value.x, nextPos.value.x);
          })
      })
      .end();
  }
};
