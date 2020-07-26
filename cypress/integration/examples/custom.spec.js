describe('Custom Commands', () => {
	it('should log in to application using custom cypress command', () => {
		cy.visit('http://zero.webappsecurity.com/login.html')
		cy.login('username', 'password')
	})
})
