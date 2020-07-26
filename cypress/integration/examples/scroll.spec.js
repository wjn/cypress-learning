describe('Page scrolling', () => {
	it('should load Testcafe Example website', () => {
		cy.visit('http://devexpress.github.io/testcafe/example/')
		cy.url().should('include', '/testcafe/example/')
		cy.get('h1').should('contain', 'Example')
		cy.get('header > p').should('contain', 'webpage is used as a sample')
		cy.wait(3000)
	})

	it('should scroll down and up on the page', () => {
		cy.get('[data-testid=submit-button]').scrollIntoView()
		cy.wait(2000)
		cy.get('header').scrollIntoView()
	})
})
