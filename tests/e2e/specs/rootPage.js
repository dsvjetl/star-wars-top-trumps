describe('Test root page', () => {
    it('Visits the app root url', () => {
        cy.visit('/');

        cy.contains('h1.u-a1', 'Star Wars Top Trumps');

        cy.contains('h3.title', 'Choose battle type:');

        cy.get('.co-choose-resource')
            .find('button.co-app-button')
            .should('have.length', 2);

        cy.get('.co-choose-resource')
            .find('button.co-app-button.is-active')
            .should('have.length', 1);

        cy.get('.co-battleground')
            .find('.co-app-button')
            .should('have.length', 1);
    });

    it('Clicks on start battle button', () => {
        cy.get('.co-battleground .co-app-button').click();
        cy.get('.loading-container').should('be.visible');
    });
});
