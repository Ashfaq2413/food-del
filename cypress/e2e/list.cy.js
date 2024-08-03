/// <reference types="cypress" />

describe('Admin Panel - List Products', () => {
    const baseUrl = 'http://localhost:5173'; // Update to your app's base URL
  
    beforeEach(() => {
      cy.visit(baseUrl); // Visit the base URL of your application
    });
  
    it('should display the list of products', () => {
      // Navigate to the "List Products" page
      cy.visit(`${baseUrl}/list-products`); // Update the route if necessary
  
      // Verify that the list is displayed and has data
      cy.get('.list-table-format').should('have.length.greaterThan', 1); // Assumes there are multiple items
  
      // Check for specific product details, if any
      cy.contains('Test Product').should('be.visible');
      cy.contains('Description of test product').should('be.visible');
      cy.contains('$19.99').should('be.visible');
    });
  });
  