describe('Happy flow', () => {
   
  it('Validate Response Status', () => {

    const spaceName = "imespejsa"
    
    cy.APIPostSpace(spaceName).then((response) => {
      expect(response.status).to.eq(200) 
  })
  
    cy.login()
    cy.wait(50000)
    cy.ValidateSpaceName(spaceName)
      
    })


    
  })