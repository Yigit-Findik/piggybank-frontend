describe('verander valuta', () => {

    it('login en nadat je ingelogd hebt moet je naar overboeken gaan om valuta aantepassen, boek dan 100 euro over voor golfen', () => {
        cy.visit('http://localhost:3000/login')

        cy.get('.container .login__account-selector button:contains("Sophie")').click();

        cy.visit('http://localhost:3000/transfer');

        cy.get('[data-cy="receiverAccount"]').select("2")

        cy.get('[data-cy=cy-currency]').select("USD")

        cy.get('.form-row input[name="amount"]').type('100.00');

        cy.get('.form-row textarea[name="description"]').type('Geld overboeken naar Sara voor top golfen');

        cy.get('.form-row button[type="submit"]').click();

    });

});