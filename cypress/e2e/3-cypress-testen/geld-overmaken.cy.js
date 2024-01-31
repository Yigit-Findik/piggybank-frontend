describe('Geld overmaken', () => {

    it('Geld overmaken met positief bedrag op saldo', () => {
        cy.visit('http://localhost:3000/login')

        cy.get('.container .login__account-selector button:contains("Melvin")').click();

        cy.visit('http://localhost:3000/transfer');

        cy.get('[data-cy="receiverAccount"]').select("2")

        cy.get('.form-row input[name="amount"]').type('100.00');

        cy.get('.form-row textarea[name="description"]').type('Geld overboeken naar Cem Fujk');

        cy.get('.form-row button[type="submit"]').click();

    });

});