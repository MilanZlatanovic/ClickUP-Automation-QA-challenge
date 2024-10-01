import testdata from '../fixtures/testdata.json'


Cypress.Commands.add('APIPost', (apiUrlPart, requestBody) => {
    const apiKey = testdata.userdata.apikey;
    const url = `${testdata.userdata.baseApiUrl}/${apiUrlPart}`;
    

    cy.request({
      method: 'POST',
      url: url,
      headers: {
        'Content-Type': 'application/json',
        Authorization: apiKey,
      },
      failOnStatusCode: false,
      body: requestBody
    });
  });

  Cypress.Commands.add('APIDelete', (apiUrlPart) => {
    const apiKey = testdata.userdata.apikey;
    const url = `${testdata.userdata.baseApiUrl}/${apiUrlPart}`;
  
    cy.request({
      method: 'DELETE',
      url: url,
      headers: {
        'Content-Type': 'application/json',
        Authorization: apiKey,
      }
    });
  });


Cypress.Commands.add('APIGet', (apiUrlPart, queryParameters) => {
  const apiKey = testdata.userdata.apikey;
  const url = `${testdata.userdata.baseApiUrl}/${apiUrlPart}`;
  if(queryParameters){
    const query = new URLSearchParams(queryParameters).toString();
    url=`${url}?${query}`;
  }

  cy.request({
    method: 'GET',
    url: url,
    headers: {
      'Content-Type': 'application/json',
      Authorization: apiKey,
    },
    
  });
});