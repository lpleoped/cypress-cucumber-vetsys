const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: "cypress-cucumber-vetsys",
  defaultCommandTimeout: 100000,
  responseTimeout: 100000,
  execTimeout: 100000,
  pageLoadTimeout: 600000,
  video: false,
  env: {
  },
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      on('task', { log(message) { console.log(message); return null } });
      const cucumber = require('cypress-cucumber-preprocessor').default
      const browserify = require('@cypress/browserify-preprocessor');
      const options = {
        ...browserify.defaultOptions
      }
      on('file:preprocessor', cucumber(options));
    },
    baseUrl: 'http://vetsys.com.uy:3000/',
    specPattern: 'cypress/integration/features/*.{js,jsx,ts,tsx,feature}',
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});