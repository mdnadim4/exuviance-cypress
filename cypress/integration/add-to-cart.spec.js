/// <reference types="Cypress" />

describe("Verify Add To Cart Module", () => {

    before(() => {
        cy.visit('/')
    });

    it('Should go to sun care page', () => {
        cy.contains('Skincare')
        cy.contains('Sun Care').click({force: true})
    });

    it('Verify the product count', () => {
        cy.get('[class="product-image"]').should('have.length', 5)
        cy.get('[class="results-hits"]').should('contain', 5)
    });

    it('Click on specific product', () => {
        cy.contains('Daily Acne Peel')
        cy.get('[title="Add To Bag"]').click({multiple: true})
        cy.get('.ui-dialog-buttonset > :nth-child(3)').click()
        cy.get('[class="minicart-quantity"]').should('eq', 1)
    })

})