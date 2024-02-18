const { defineConfig } = require("cypress");

module.exports = defineConfig({
  numTestsKeptInMemory: 15,
  defaultCommandTimeout: 15000,
  viewportHeight: 768,
  viewportWidth: 1400,
  env: {
    apiUrl: "https://testone.majaalis-testing.com/api/v2",
  },
  compilerOptions: {
    types: ["cypress", "cypress-file-upload"],
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://testone.majaalis-testing.com/home",
    experimentalStudio: true,
    testIsolation: true,
  },
});
