describe('R/W data to JSON text file', () => {
	it('should write JSON data', () => {
		cy.writeFile('cypress/logs/log.json', { name: 'Mike', age: 25 })
	})
	it('should verify JSON data', () => {
		cy.readFile('cypress/logs/log.json').its('name').should('equal', 'Mike')
		cy.readFile('cypress/logs/log.json').its('age').should('equal', 25)
	})
	it('should read and verify browser document content', () => {
		cy.visit('http://example.com')
		cy.document().as('doc')
		cy.get('@doc').its('contentType').should('equals', 'text/html')
		cy.get('@doc').should('have.property', 'charset').and('equal', 'UTF-8')
	})
})
