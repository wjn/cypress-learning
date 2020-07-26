describe('keyboard press simulation', () => {
	it('should submit search by pressing enter', () => {
		cy.visit('http://zero.webappsecurity.com')
		cy.get('.brand').should('contain', 'Zero Bank')

		cy.get('#searchTerm').as('search')
		cy.get('@search').should('be.visible')

		cy.get('@search')
			.type('checknig', { delay: 100 })
			.type('{backspace}{backspace}{backspace}', { delay: 100 })
			.type('ing account', { delay: 100 })
			.type('{enter}')
		cy.get('h2').should('contain', 'Search Results')
	})
})
