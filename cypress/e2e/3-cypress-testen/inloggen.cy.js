describe('Inloggen', () => {

    it('Inloggen in cem', () => {
        cy.visit('http://localhost:3000/login')

        cy.get('.container .login__account-selector button:contains("Cem")').click();

    });

});