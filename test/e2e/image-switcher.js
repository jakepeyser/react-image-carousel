/*
 * Runs tests to ensure that ImageSwitcher is functioning
 * and that it is displaying as expected
 */

const rootUrl = 'http://localhost:8000/'

module.exports = {
  'Should display ImageCarousel': function(browser) {
    browser
      .url(rootUrl)
      .waitForElementVisible('body')
      // check for switcher button appear on carousel hover
      .assert.cssProperty('.switcher', 'opacity', '0')
      .moveToElement('.image-carousel', 100, 100, function() {
        browser.pause(200); // wait for css transition
        browser.assert.cssProperty('.switcher', 'opacity', '1');
      })
      // check for switcher solidify on button hover
      .assert.cssProperty('.switcher.next button', 'opacity', '0.6')
      .moveToElement('.switcher.next button', 0, 0, function() {
        browser.pause(200); // wait for css transition
        browser.assert.cssProperty('.switcher', 'opacity', '1');
      })
      .end();
  }
};
