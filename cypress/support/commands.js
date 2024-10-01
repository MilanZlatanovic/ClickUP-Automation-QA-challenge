
import testdata from '../fixtures/testdata.json'
import './apiCommands'




Cypress.Commands.add('login', () => {
  cy.visit('https://app.clickup.com/login')
  cy.get('[data-test="login-email-input"]').click().type(testdata.userdata.email);
  cy.get('[data-test="login-password-input"]').type(testdata.userdata.password);
  cy.get('[data-test="login-submit"]').click();

});




Cypress.Commands.add('RemoveParamFromJsonBody', (paramName, JsonBody) => {
  JsonBody.remove(paramName)
  return JsonBody
})

Cypress.Commands.add('ValidateSpaceName', (name) => {

  const spaceName = name
  cy.contains('[data-test^="project-row__name__"]', name)
    .should('exist')
    .invoke('text')
    .then((text) => {
      expect(text.trim()).to.equal(spaceName)

    })
})

Cypress.Commands.add('ClickSpaceByName', (name) => {
  cy.contains('[data-test^="project-row__name__"]', name).click();
});

Cypress.Commands.add('ValidateFolderName', (name) => {

  const folderName = name
  cy.contains('[data-test^="category-row__folder-name__"]', name)
    .should('exist')
    .invoke('text')
    .then((text) => {
      expect(text.trim()).to.equal(folderName)
    })
})
Cypress.Commands.add('ClickFolderByName', (name) => {
  const folderName = name
  cy.contains('[data-test^="category-row__folder-name__"]', name).click();
})

Cypress.Commands.add('ValidateListName', (name) => {

  const listName = name
  cy.contains('[data-test^="subcategory-row__"]', name)
    .should('exist')
    .invoke('text')
    .then((text) => {
      expect(text.trim()).to.equal(listName)

    })
})
Cypress.Commands.add('ClickListByName', (name) => {

  cy.contains('[data-test^="subcategory-row__"]', name).click();
});

Cypress.Commands.add('ValidateTaskName', (name) => {

  const taskName = name
  cy.contains('[data-test^="task-row-main__link-text__"]', name)
    .should('exist')
    .invoke('text')
    .then((text) => {
      expect(text.trim()).to.equal(taskName)

    })
})

Cypress.Commands.add('ClickTaskByName', (name) => {
  const taskName = name
  cy.contains('[data-test^="task-row-main__link-text__"]', name).click();

});

Cypress.Commands.add('CreateNewSpaceFromLandingPage', (name) => {

  cy.get('[data-test="all-projects-row__text"]').click()
  cy.contains('button.button', 'New Space').click();
  cy.get('[data-test="create-space-details__input"]').first().type(name)
  cy.get('[data-test="create-space-details__continue-button"]').click()
  cy.get('[data-test="create-test-workflow__create-space-button"]').click()
})

Cypress.Commands.add('CreateTaskFromList', (name) => {

  cy.get('[data-test="create-task-menu__new-task-button"][buttontype="primary"]').last().should('be.visible').click()
  cy.get('[data-test="draft-view__title-task"]').should('be.visible')
    .and('not.be.disabled').focus().wait(2000).type(name, { delay: 200 })
  cy.get('[data-test="draft-view__quick-create-create"]').click()
})

Cypress.Commands.add('CreateTaskFromListNoName', () => {

  cy.get('[data-test="create-task-menu__new-task-button"][buttontype="primary"]').last().should('be.visible').click()
  cy.get('[data-test="draft-view__title-task"]').should('be.visible')
    .and('not.be.disabled').focus().wait(2000).clear()
  cy.get('[data-test="draft-view__quick-create-create"]').click()
})



