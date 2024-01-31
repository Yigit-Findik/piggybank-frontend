describe('Uitloggen', () => {

    it('Uitloggen van ingelogde gebruiker', () => {
        cy.visit('http://localhost:3000/login')

        cy.get('.container .login__account-selector button:contains("Sara")').click();

        cy.get('.app__logout').click();

    });

});