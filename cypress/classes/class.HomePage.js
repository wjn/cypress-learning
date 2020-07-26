import BasePage from './class.BasePage'
class HomePage extends BasePage {
	static scrollToBottom() {
		cy.get('[data-testid=submit-button]').scrollIntoView()
	}
	static scrollToTop() {
		cy.get('header').scrollIntoView()
	}
}

export default HomePage
