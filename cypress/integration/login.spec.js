/// <reference types="Cypress" />

describe("Verify Sign Up Module", () => {

    it("Should display login page", () => {
        cy.visit('/')
        cy.contains('Login').click({force:true})
        cy.url().should('include', 'Sites-Exuviance-Site/default/Login-Show')
        cy.get('.account-login').should('contain', 'My Account Login')

    })

    it("Should fill all credential", () => {
        cy.fixture('login').then(user => {
            const username = user.username
            const password = user.password

            cy.login(username, password)
            cy.wait(5000)
        })
    })

})