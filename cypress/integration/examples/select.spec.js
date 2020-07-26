describe('select box', () => {
	it('should load website with select box', () => {
		cy.visit('http://devexpress.github.io/testcafe/example/')
		cy.url().should('include', '/testcafe/example/')
		cy.get('h1').should('contain', 'Example')
		cy.get('header > p').should('contain', 'webpage is used as a sample')
		cy.get('[data-testid=preferred-interface-select]').as('menu')
		cy.get('@menu').should('be.visible').and('not.be.disabled')
	})
	it('should select option from select box', () => {
		cy.get('[data-testid=preferred-interface-select]').as('menu')

		cy.get('@menu').select('Both').should('have.value', 'Both')
		cy.get('@menu')
			.select('JavaScript API')
			.should('have.value', 'JavaScript API')
	})
})
