class BasePage {
	static loadHomePage() {
		cy.visit('http://devexpress.github.io/testcafe/example/')
		cy.url().should('include', '/testcafe/example/')
		cy.get('h1').should('contain', 'Example')
		cy.get('header > p').should('contain', 'webpage is used as a sample')
	}
	static wait(duration) {
		cy.wait(duration)
	}
}

export default BasePage
