/* eslint-disable quotes*/
const BINPATH = './node_modules/nightwatch/bin/';

module.exports = {
  "src_folders": [ "test/e2e" ],
  "output_folder": "./test/reports",
  "selenium": {
    "start_process": true,
    "server_path": "./node_modules/nightwatch/bin/selenium.jar",
    "host": "127.0.0.1",
    "port": 4444, // standard selenium port
    "cli_args": {
      "webdriver.chrome.driver": "./node_modules/nightwatch/bin/chromedriver"
    }
  },
  "test_settings": {
    "default": {
      "globals": {
        "waitForConditionTimeout": 5000 // wait in case of bad connection
      },
      "desiredCapabilities": { // use Chrome as the default browser for tests
        "browserName": "chrome"
      }
    },
    "chrome": {
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true
      }
    }
  }
}
/*
 * Downloads (or updates) the version of Selenium (& chromedriver)
 * on your localhost where it will be used by Nightwatch.
 * The following code checks for the existence of `selenium.jar`
 * before trying to run our tests.
 */
require('fs').stat(BINPATH + 'selenium.jar', function(err, stat) {
  if (err || !stat || stat.size < 1) {
    require('selenium-download').ensure(BINPATH, function(error) {
      if (error) throw new Error(error);
      console.log('✔ Selenium & Chromedriver downloaded to:', BINPATH);
    });
  }
});
