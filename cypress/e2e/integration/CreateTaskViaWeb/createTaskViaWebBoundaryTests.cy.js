
describe('Task Creation - Boundary Conditions', () => {

it.only('Validate Error Message For Task Name Too Long', () => {

    const spaceName = "newspace"
    const taskName = "a".repeat(2048)

    cy.login()
    cy.wait(50000)
    cy.CreateNewSpaceFromLandingPage(spaceName)
    cy.wait(50000)
    cy.ClickSpaceByName(spaceName)
    cy.get('[data-test="create-task-menu__new-task-button"][buttontype="primary"]').last().should('be.visible').click()
    cy.get('[data-test="draft-view__title-task"]').wait(2000).invoke('val', taskName).type("a")
    cy.wait(2000)
    cy.get('[data-test="draft-view__quick-create-create"]').focus().click()
   
    cy.get('[data-test="toast__new-item"]')
    .find('p.cu-toast-new__text-title')  
    .should('have.text', ' Task name invalid ')

})
})