describe('Login, maak geld over, verander naam, loguit', () => {

    it('login als melvin, boek dan 50 euro over naar sara, hierna verander naam naar Melvins, daarna mag je uitloggen ', () => {
        cy.visit('http://localhost:3000/login')

        cy.get('.container .login__account-selector button:contains("Melvin")').click();

        cy.visit('http://localhost:3000/transfer');

        cy.get('[data-cy="receiverAccount"]').select("2")

        cy.get('.form-row input[name="amount"]').type('50.00');

        cy.get('.form-row textarea[name="description"]').type('Geld overboeken naar Sara');

        cy.get('.form-row button[type="submit"]').click();

        cy.visit('http://localhost:3000/settings');

        cy.get('[data-cy=accountName]').clear();

        cy.get('.form-row input[name="accountName"]').type('Melvins');

        cy.get('[data-cy=settingsButton]').click();

        cy.get('.app__logout').click();

    });

});