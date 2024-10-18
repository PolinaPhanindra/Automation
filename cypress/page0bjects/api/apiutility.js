class APIUtility {
  
    // GET request to fetch user profile
    getUserProfile(apiToken) {
      return cy.request({
        method: 'GET',
        url: 'https://api.example.com/user/profile', 
        headers: {
          'Authorization': `Bearer ${apiToken}`
        }
      });
    }
  
    // POST request to create a new Profile
    createOrder(apiToken) {
      return cy.request({
        method: 'POST',
        url: 'https://api.example.com/profile',  
        headers: {
          'Authorization': `Bearer ${apiToken}`,
          'Content-Type': 'application/json'
        },
        body: {
          "order": {
            "item": "Sample Item",
            "quantity": 1
          }
        }
      });
    }
  }
  
  export default new APIUtility();
  