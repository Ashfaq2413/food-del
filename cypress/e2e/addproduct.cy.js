/// <reference types="cypress" />

describe('Add and List Products', () => {
    beforeEach(() => {
      // Visit the add page and list page
      cy.visit('http://localhost:5174/add'); // Adjust the URL if necessary
    });
  
    it('should add a product and see it in the list', () => {
      // Add a product
      cy.fixture('../../vite-project/src/assets/food_1.png').as('sampleImage'); // Assuming you have a sample image in the fixtures folder
  
      cy.get('input[name="name"]').type('Test Product');
      cy.get('textarea[name="description"]').type('This is a test product');
      cy.get('input[name="price"]').type('20');
      cy.get('select[name="category"]').select('Salad');
      
      // Attach a sample image
      cy.get('input[type="file"]').attachFile('../../vite-project/src/assets/food_1.png');
  
      cy.get('button.add-btn').click();
  
      // Verify success message
      cy.get('.Toastify__toast--success').should('be.visible');
  
      // Visit the list page
      cy.visit('http://localhost:5173/list'); // Adjust the URL if necessary
  
      // Verify the added product appears in the list
      cy.contains('Test Product').should('be.visible');
      cy.contains('Salad').should('be.visible');
      cy.contains('$20').should('be.visible');
    });
  });
  