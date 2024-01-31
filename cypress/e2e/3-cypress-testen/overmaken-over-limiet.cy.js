describe('Geld overmaken met een abnormaal groot bedrag', () => {

    it('Probeer geld over te maken dat te veel is bijvoorbeeld 100000miljoen', () => {
        cy.visit('http://localhost:3000/login')

        cy.get('.container .login__account-selector button:contains("Melvin")').click();

        cy.visit('http://localhost:3000/transfer');

        cy.get('[data-cy="receiverAccount"]').select("2")

        cy.get('.form-row input[name="amount"]').type('5000000000000000000.00');

        cy.get('.form-row textarea[name="description"]').type('Geld overboeken naar Cem Fujk');

        cy.get('.form-row button[type="submit"]').click();

    });

});