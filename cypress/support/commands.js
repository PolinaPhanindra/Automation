

// Custom command to perform Amazon login and 
Cypress.Commands.add('amazonLogin', (email, password) => {
    // Click on "Sign In" button
    cy.get('#nav-link-accountList').click();
  
    // Enter Email
    cy.get('#ap_email').type(email);
    cy.get('#continue').click();
  
    // Enter Password
    cy.get('#ap_password').type(password);
    cy.get('#signInSubmit').click();
  
    // Verify successful login
    cy.get('#nav-link-accountList-nav-line-1').should('contain.text', 'Hello');
  });
  
