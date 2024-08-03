/// <reference types="cypress" />

describe('LoginPopup Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  });

  it('should open the login popup', () => {
    // Adjust this selector based on your actual button
    cy.get('button.open-login-popup').should('be.visible').click()
    cy.get('.login-popup-container').should('be.visible')
  });

  it('should allow a user to login', () => {
    // Ensure the elements are visible before interacting
    cy.get('input[name="email"]').should('be.visible').type('test@example.com')
    cy.get('input[name="password"]').should('be.visible').type('password123')
    cy.get('button[type="submit"]').click()

    // Adjust this check based on your actual application behavior
    cy.url().should('include', '/dashboard')
    cy.get('.user-profile').should('be.visible')
  });

  it('should display an error message for invalid login', () => {
    cy.get('input[name="email"]').should('be.visible').type('Test@gmail.com')
    cy.get('input[name="password"]').should('be.visible').type('Test123test')
    cy.get('button[type="submit"]').click()

    // Make sure the error message selector matches your component
    cy.get('.login-popup').contains('Invalid email or password')
  });

  it('should toggle to sign up state and back to login state', () => {
    // Toggle to sign up state
    cy.get('p:contains("Create a new account?")').click()
    cy.get('h2').should('have.text', 'Sign Up')

    // Toggle back to login state
    cy.get('p:contains("Already have an account?")').click()
    cy.get('h2').should('have.text', 'Login')
  });
});
