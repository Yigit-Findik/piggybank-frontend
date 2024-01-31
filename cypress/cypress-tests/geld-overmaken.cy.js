describe('Geld overmaken', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('Geld overmaken met positief bedrag op saldo', () => {
        cy.get('#saldo').should('have.text', '€ 1000,00')
        cy.get('#overboeken').type('100');
    });

});