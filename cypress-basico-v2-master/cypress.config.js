const { defineConfig } = require('cypress')

module.exports = defineConfig({
  
  integration: {
    viewportHeight: 880,
    viewportWidth: 1280,
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/integration/**/*.spec.js'
  },
})
