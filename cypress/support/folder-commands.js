

Cypress.Commands.add('APIPostFolder',(spaceId,folderName) => {
    const apiUrl = `space/${spaceId}/folder`
    var requestBody = {
        name:folderName
    }
    cy.APIPost(apiUrl, requestBody);
  })