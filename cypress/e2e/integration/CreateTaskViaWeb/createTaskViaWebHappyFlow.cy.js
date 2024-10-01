describe('Happy flow', () => {

    it('Validate Task Creation', () => {

        const spaceName = "newspace"
        const taskName = "newtask"

        cy.login()
        cy.wait(50000)
        cy.CreateNewSpaceFromLandingPage(spaceName)
        cy.wait(50000)
        cy.ClickSpaceByName(spaceName)
        cy.CreateTaskFromList(taskName)
        cy.APIVerifyTask(taskName)
        
    })

   

   


})












