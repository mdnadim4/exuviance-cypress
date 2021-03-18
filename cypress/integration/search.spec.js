/// <reference types="Cypress" />

describe("Verify the search functionality", () => {

    const popupID = '#yie-close-button-fce9d595-49ff-5b77-a414-0874f8c27b3a'

    afterEach(() => {
        if(popupID){
            cy.get(popupID).click()
        } 
    });

    it('Should go to homepage', () => {
        cy.visit('/')
    });

    it('Verify the valid search', () => {
        cy.get('#q').invoke('attr', 'placeholder').should('contain', 'Search')
        cy.wait(2000)
        cy.get('[type="text"]').type('Acne {enter}', {force: true})
        cy.get('.product-tile').should('have.length', 10)
    });

    it('Verify the invalid search', () => {
        cy.get('[type="text"]').type('Hair {enter}', {force: true})
        cy.contains('No Search Results')
    });
})