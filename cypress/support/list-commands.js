
Cypress.Commands.add('APIPostList',(folderId,listName) => {
    const apiUrl = `folder/${folderId}/list`
    var requestBody = {
        name:listName
    }
    cy.APIPost(apiUrl, requestBody);
  })