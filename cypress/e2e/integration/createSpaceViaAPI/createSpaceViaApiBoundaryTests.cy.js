describe('Space Creation - Boundary Conditions', () => {
   
     //This test assumes there is validation on the backend that matches the one on the frontend
    it('Verify response for creating space with space as name', () => {
  
      const spaceName = " "
      
      cy.APIPostSpace(spaceName).then((response) => {
        cy.APIVerifyResponseInvalid(response)
    })
    
      })
  
  
      
    })