// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (username, password) => {
  cy.clearCookies()
  cy.clearLocalStorage()
  cy.get('[id="dwfrm_login_username"]').type(username)
  cy.wait(2000)
  cy.get('[id="dwfrm_login_password"]').type(password)
  cy.wait(2000)
  cy.get('#loginCaptcha > [style="width: 304px; height: 78px;"] > div > iframe').click()
  cy.wait(2000)
  cy.get('[name="dwfrm_login_login"]').click({force:true})
  cy.wait(5000)
})