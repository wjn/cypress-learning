import HomePage from '../../classes/class.HomePage'

describe('Abstraction with classes', () => {
	before(function () {
		/**
		 * runs before all tests inside the describe
		 * Useful to set up test context or test data
		 * seed or reset the database
		 */
	})

	after(function () {
		/**
		 * runs after all tests in side the the describe block are complete
		 * test clean up
		 * clean cookies or localstorage
		 */
	})

	beforeEach(function () {
		/**
		 * runs before each individual test within the describe block
		 */
	})
	afterEach(function () {
		/**
		 * runs after each individual test within the describe block
		 */
	})
	it('should load Testcafe Example website', () => {
		HomePage.loadHomePage()
		HomePage.wait(2000)
	})

	it('should scroll down and up on the page', () => {
		HomePage.scrollToBottom()
		HomePage.wait(2000)
		HomePage.scrollToTop()
	})
})
