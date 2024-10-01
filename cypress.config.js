const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    watchForFileChanges: false
  },
});
module.exports = {
  e2e: {
    defaultCommandTimeout: 10000, 
    browser: 'chrome', 
  },
};
