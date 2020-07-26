describe('Login Input Form', () => {
	it('should override current time', () => {
		cy.log('today', new Date(2020, 7, 25).getTime())
		const date = new Date(2020, 3, 10).getTime() // returns timestamp
		cy.clock(date, { log: true })
	})

	it('should navigate to webappsecurity login page', () => {
		cy.visit('http://zero.webappsecurity.com/login.html')

		cy.clearCookies({ log: true })
		cy.clearLocalStorage('storageKey', { log: true })

		cy.url().should('include', 'login.html')
		cy.title().should('include', 'Zero - Log in')
	})
	it('should enter username', () => {
		cy.get('#user_login').as('username')
		cy.get('@username').should('be.visible')
		cy.get('@username').clear()
		cy.get('@username').type('Invalid Username')
	})
	it('should enter password', () => {
		cy.get('#user_password').as('password')
		cy.get('@password').should('be.visible')
		cy.get('@password').clear()
		cy.get('@password').type('InvalidPassword')
	})
	it('should check `keep me signed in`', () => {
		cy.get('#user_remember_me').as('rememberMe')
		cy.get('@rememberMe').should('be.visible').and('not.be.checked')
		cy.get('@rememberMe').check()
	})
	it('should submit the form', () => {
		cy.get('input[name="submit"]').contains('Sign in').as('submitBtn')
		cy.get('@submitBtn').should('be.visible')
		cy.get('@submitBtn').click()
	})
	it('should display error message', () => {
		cy.get('.alert-error').as('errMsg')
		cy.get('@errMsg')
			.should('be.visible')
			.and('contain', 'Login and/or password are wrong.')
	})
})
