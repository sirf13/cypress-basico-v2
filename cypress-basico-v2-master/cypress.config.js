const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:60701/src/index.html', // Altere para a URL base do seu app
    viewportWidth: 1280,
    viewportHeight: 720,
    specPattern: 'cypress/integration/CAC-TAT.cy.js', // Padrão para localizar os testes
    setupNodeEvents(on, config) {
      // Configuração para plugins (opcional)
      return require('./cypress/plugins/index.js')(on, config);
    },
  },
});