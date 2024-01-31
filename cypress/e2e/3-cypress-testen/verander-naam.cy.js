describe('Ga naar instellingen en verander naam', () => {

    it('verander naam in instellingen', () => {
        cy.visit('http://localhost:3000/login')

        cy.get('.container .login__account-selector button:contains("Sara")').click();

        cy.visit('http://localhost:3000/settings');

        cy.get('[data-cy=accountName]').clear();

        cy.get('.form-row input[name="accountName"]').type('Sara');

        cy.get('[data-cy=settingsButton]').click();

    });

});