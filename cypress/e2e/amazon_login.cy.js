import AmazonLoginPage from '../pageObjects/pages/AmazonLoginPage';  
import APIUtility from '../pageObjects/api/APIUtility';             

describe('Amazon Login and API Automation with POM', () => {
  
  // Load fixture data before the test
  before(() => {
    cy.fixture('Amazon_users').as('users');
  });

  afterEach(function () {
    if (this.currentTest.state === 'failed') {
      cy.screenshot(`failed_${this.currentTest.title}`);
    } else {
      cy.screenshot(`passed_${this.currentTest.title}`); 
    }
  });

  it('should perform login for multiple Amazon users and validate API', function () {
    this.users.forEach((user) => {
      
      //  navigate to Google and search for Amazon
      AmazonLoginPage.visitGoogle();
      AmazonLoginPage.searchAmazon();

      //  Click on Sign In and login
      AmazonLoginPage.clickSignIn();
      AmazonLoginPage.enterEmail(user.email);
      AmazonLoginPage.enterPassword(user.password);

      // Verify successful login
      AmazonLoginPage.verifyLogin();

      // Validate API response (GET and POST example)
      APIUtility.getUserProfile(Cypress.env('apiToken')).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('email', user.email);
      });

      APIUtility.createOrder(Cypress.env('apiToken')).then((response) => {
        expect(response.status).to.eq(201);  // Assuming POST returns a success status
      });
    });
  });
});
