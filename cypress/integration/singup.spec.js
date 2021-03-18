/// <reference types="Cypress" />

describe("Verify Sign Up Module", () => {

    beforeEach(function() {
        cy.visit('/')
        // cy.get('.user-info>active').trigger('mouseover')
        cy.contains('Register').click({force:true})
        cy.url().should('include', 'https://www.exuviance.com/on/demandware.store/Sites-Exuviance-Site/default/Account-StartRegister')
    })

    it('Should filled all input fields', () => {
        cy.get('#dwfrm_profile_customer_firstname').type('William')
        cy.wait(2000)
        cy.get('#dwfrm_profile_customer_lastname').type('Smith')
        cy.wait(2000)
        cy.get('#dwfrm_customeraddress_phone').type('907-549-1250')
        cy.wait(2000)
        cy.get('#dwfrm_profile_customer_email').type('test50@gmail.com')
        cy.wait(2000)
        cy.get('#dwfrm_profile_login_password').type('Qatest@123')
        cy.wait(2000)
        cy.get('#dwfrm_profile_login_passwordconfirm').type('Qatest@123')
        cy.wait(2000)
        cy.get('#dwfrm_profile_customer_addtoemaillist').click({ force: true })
        cy.wait(2000)
        cy.get('#recaptcha-anchor').first().should('').click({ force: true })
        cy.wait(5000)




        // cy.get('#dwfrm_customeraddress_address1').type('771  Godfrey Road')
        // cy.wait(2000)
        // cy.get('#dwfrm_customeraddress_city').type('New York')
        // cy.wait(2000)
        // cy.get('#dwfrm_customeraddress_states_state').select('New York').should('have.value', 'NY')
        // cy.wait(2000)
        // cy.get('#dwfrm_customeraddress_postal').type('10004')

        // cy.wait(2000)
        // cy.get('#dwfrm_profile_customer_dob_month').select('April').should('have.value', '4')
        // cy.wait(2000)
        // cy.get('#dwfrm_profile_customer_dob_year').select('1990').should('have.value', '1990')
        // cy.wait(2000)
        // cy.get('#dwfrm_profile_customer_productinterests').select('Mens').should('have.value', 'Mens')
        // cy.wait(2000)
        // cy.get('#dwfrm_profile_customer_milestone').select('Four Months Ago').should('have.value', 'fourMonthsAgo')
        // cy.wait(2000)

        // cy.wait(2000)

        // cy.wait(2000)
        // cy.contains('Join Now').click({force:true})
        // cy.wait(5000)
        // cy.contains('Use Original').click({force:true})
        // cy.wait(5000)
    })
})