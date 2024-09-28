// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import testdata from '../fixtures/testdata.json'

Cypress.Commands.add('login', () => {
    cy.visit('https://app.clickup.com/login')
      cy.get('[data-test="login-email-input"]').click().type(testdata.userdata.email);
      cy.get('[data-test="login-password-input"]').type(testdata.userdata.password);
      cy.get('[data-test="login-submit"]').click();
   
  });

  Cypress.Commands.add('APIPostValidSpace',(name) => {
    const teamId = testdata.userdata.teamid 
    const apiUrl = `https://api.clickup.com/api/v2/team/${teamId}/space`
    const apiKey = testdata.userdata.apikey
    const spaceName = name
    cy.request({
      method: 'POST',
      url: apiUrl,
      headers: {
        'Content-Type': 'application/json',
        Authorization: apiKey
      },
      body: {
        name: spaceName,
        multiple_assignees: true,
        features: {
          due_dates: {
            enabled: true,
            start_date: false,
            remap_due_dates: true,
            remap_closed_due_date: false
          },
          time_tracking: { enabled: false },
          tags: { enabled: true },
          time_estimates: { enabled: true },
          checklists: { enabled: true },
          custom_fields: { enabled: true },
          remap_dependencies: { enabled: true },
          dependency_warning: { enabled: true },
          portfolios: { enabled: true }
        }
      }
    })

  })

  Cypress.Commands.add('APIVerifyResponseValid',(name) => {

  expect((response) => {
     
    expect(response.status).to.eq(200) 
    cy.log(JSON.stringify(response.body)) 
  })
})

Cypress.Commands.add('ValidateSpaceName',(name)=> {

    const spaceName = name
    cy.contains('[data-test^="project-row__name__"]', name) 
    .should('exist') 
    .invoke('text') 
    .then((text) => {
      expect(text.trim()).to.equal(spaceName)

})
})