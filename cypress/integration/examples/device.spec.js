describe('Device Tests', () => {
	it('720p', () => {
		cy.viewport(1280, 720)
		cy.visit('http://example.com')
		cy.wait(3000)
	})

	it('1080p', () => {
		cy.viewport(1980, 1080)
		cy.visit('http://example.com')
		cy.wait(3000)
	})

	it('iPhone X portrait', () => {
		cy.viewport('iphone-x', 'portrait')
		cy.visit('http://example.com')
		cy.wait(3000)
	})

	it('iPhone X landscape', () => {
		cy.viewport('iphone-x', 'landscape')
		cy.visit('http://example.com')
		cy.wait(3000)
	})

	it('iPad Mini', () => {
		cy.viewport('ipad-mini')
		cy.visit('http://example.com')
		cy.wait(3000)
	})

	it('MBP 15 inch', () => {
		cy.viewport('macbook-15')
		cy.visit('http://example.com')
		cy.wait(3000)
	})
})
