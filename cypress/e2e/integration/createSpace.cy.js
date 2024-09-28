describe('Create a new space via API', () => {
    it('Happy flow', () => {

    const spaceName = "imespejsa"
    cy.APIPostValidSpace(spaceName)
    cy.APIVerifyResponseValid() 
    cy.login()
    cy.wait(50000)
    cy.ValidateSpaceName(spaceName)
  
       
    })
  })