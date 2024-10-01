describe('Happy flow', () => {
   
  it('Validate Response Status', () => {

    const spaceName = "imespejsa"
    
    cy.APIPostSpace(spaceName).then((response) => {
      cy.APIVerifyResponseValid(response)
  })
  
    cy.login()
    cy.wait(50000)
    cy.ValidateSpaceName(spaceName)
      
    })


    
  })