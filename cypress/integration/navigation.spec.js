/// <reference types="Cypress" />

describe('Verify Navigation list', () => {

    before(() => {
        cy.visit('/')
    });

    it('Checking all nav list', () => {
        cy.get('.nav-topcat  > a').should('have.length', 4)
    });

    it('Handle Best Seller Nav item', () => {
        cy.get('[data-navcat="best-sellers"]').as('bestSeller')
        cy.get('@bestSeller').contains('Best Sellers').click({force: true})
        cy.url().should('include', 'https://www.exuviance.com/products/best-sellers')
    });

    it('Handle Skin Care Nav item', () => {
        cy.get('[data-navcat="skin-care"]').as('skinCare')
        cy.get('@skinCare').contains('Skincare').click({force: true})
        cy.url().should('include', 'https://www.exuviance.com/products/skin-care/all-skincare-products')
    });

    it('Handle Skin Concern Nav item', () => {
        cy.get('[data-navcat="skin-concerns"]').as('skinConcern')
        cy.get('@skinConcern').contains('Skin Concerns').click({force: true})
        cy.url().should('include', 'https://www.exuviance.com/s/Exuviance/skin-concerns.html')
    });

    it('Handle Discover Nav item', () => {
        cy.get('[data-navcat="discover"]').as('discover')
        cy.get('@discover').contains('Discover').click({force: true})
    });

});