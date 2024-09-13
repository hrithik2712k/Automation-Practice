const { defineConfig } = require("cypress");

async function setupNodeEvents(on, config) {
  // implement node event listeners here
  return config;
}

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  e2e: {
    baseUrl: "https://automationexercise.com/",
    setupNodeEvents,
    specPattern: "cypress/Integration/TestFiles/*.js",
  },
});
