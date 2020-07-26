describe('Screenshots', () => {
	it('should load website', () => {
		cy.visit('http://devexpress.github.io/testcafe/example/')
		cy.url().should('include', '/testcafe/example/')
		cy.get('h1').should('contain', 'Example')
		cy.get('header > p').should('contain', 'webpage is used as a sample')
	})

	it('full page screenshot', () => {
		cy.screenshot({ capture: 'fullPage' })
	})
	it('single element screenshot', () => {
		cy.get('header').screenshot()
		cy.get('#populate').screenshot()
	})
})
