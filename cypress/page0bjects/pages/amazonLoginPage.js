class AmazonLoginPage {
  
    // Visit Google and search for Amazon
    visitGoogle() {
      cy.visit('https://www.google.com');
    }
  
    // Search for Amazon and click the first result
    searchAmazon() {
      cy.get('input[name="q"]').type('Amazon{enter}');
      cy.contains('amazon.com').click();  // Clicking on the first relevant link
    }
  
    // Click the sign-in button on Amazon
    clickSignIn() {
      cy.get('#nav-link-accountList').click();
    }
  
    // Enter the email in the email field
    enterEmail(email) {
      cy.get('#ap_email').type(email);
      cy.get('#continue').click();
    }
  
    // Enter the password in the password field
    enterPassword(password) {
      cy.get('#ap_password').type(password);
      cy.get('#signInSubmit').click();
    }
  
    // Verify successful login
    verifyLogin() {
      cy.get('#nav-link-accountList-nav-line-1').should('contain.text', 'Hello');
    }
  }
  
  export default new AmazonLoginPage();
  