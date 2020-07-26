describe('Browser Actions', () => {
	it('should load books website', () => {
		cy.visit('http://books.toscrape.com/index.html', { timeout: 2000 })
		cy.url().should('include', 'index.html')

		// cy.reload() is a good way to test for persisted data
		cy.log('[INFO] before reload')
		cy.reload()
		cy.log('[INFO] after reload')
	})

	// TRAVEL
	it('should navigate to Travel category', () => {
		cy.get('a').contains('Travel').click()
		cy.get('h1').contains('Travel')
	})

	it('should display correct number of books', () => {
		cy.get('.product_pod').its('length').should('eq', 11)
	})

	// POETRY
	it('should navigate to the Poetry category', () => {
		cy.get('a').contains('Poetry').click()
		cy.get('h1').contains('Poetry')
	})
	it('should select the Olio book', () => {
		cy.get('h3 a').contains('Olio').click()
		cy.get('h1').contains('Olio')
	})
	it('should verify the price is £23.88', () => {
		cy.get('.product_main .price_color').contains('£23.88')
	})
})
