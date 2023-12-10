// cypress/integration/tollCalculator.spec.js
describe('Toll Calculator', () => {
    it('should calculate toll for a route', () => {
      cy.visit('/'); // Assuming your app is running at http://localhost:3000
  
      // Add Cypress commands to interact with your application and test its functionality
      // For example:
      cy.get('#startLocation').type('37.7749, -122.4194');
      cy.get('#endLocation').type('34.0522, -118.2437');
      cy.get('#calculateTollButton').click();
  
      // Add assertions to verify the expected behavior
      cy.get('#tollDetails').should('exist');
    });
  });
  