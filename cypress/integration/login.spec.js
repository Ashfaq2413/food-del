/// <reference types="cypress" />

describe('LoginPopup Component', () => {
    beforeEach(() => {
      // Replace with the URL of your login page
      cy.visit('http://localhost:3000/login')
    });
  
    it('should open the login popup', () => {
      // Assuming there is a button to open the login popup
      cy.get('button.open-login-popup').click()
      cy.get('.login-popup').should('be.visible')
    });
  
    it('should allow a user to login', () => {
      cy.get('input[name="email"]').type('test@example.com')
      cy.get('input[name="password"]').type('password123')
      cy.get('button[type="submit"]').click()
  
      // Replace with an appropriate check for successful login
      cy.url().should('include', '/dashboard')
      cy.get('.user-profile').should('be.visible')
    });
  
    it('should display an error message for invalid login', () => {
      cy.get('input[name="email"]').type('invalid@example.com')
      cy.get('input[name="password"]').type('wrongpassword')
      cy.get('button[type="submit"]').click()
  
      cy.get('.login-popup').contains('Invalid email or password')
    });
  
    it('should toggle to sign up state and back to login state', () => {
      cy.get('.login-popup').contains('Create a new account? Click here').click()
      cy.get('h2').should('have.text', 'Sign Up')
  
      cy.get('.login-popup').contains('Already have an account? Login here').click()
      cy.get('h2').should('have.text', 'Login')
    });
  });
  