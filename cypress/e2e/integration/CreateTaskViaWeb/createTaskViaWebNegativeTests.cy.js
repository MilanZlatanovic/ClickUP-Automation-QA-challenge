describe('Task Creation - Error Handling', () => {

    it ('Validate Error Message For Task With No Name', () => {

        const spaceName = "newspace"
        
        cy.login()
        cy.wait(50000)
        cy.CreateNewSpaceFromLandingPage(spaceName)
        cy.wait(50000)
        cy.ClickSpaceByName(spaceName)
        cy.CreateTaskFromListNoName()
        cy.get('[cupendoid="quick-create-task-enter-task-name-error"]')
        .should('have.text', 'Enter Task Name');
        
       
    })
})