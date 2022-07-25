const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // e2e options here
    defaultCommandTimeout: 10000,
    supportFile: false,
    specPattern: 'cypress/**/*.cy.{js,jsx,ts,tsx}'
  }
})
