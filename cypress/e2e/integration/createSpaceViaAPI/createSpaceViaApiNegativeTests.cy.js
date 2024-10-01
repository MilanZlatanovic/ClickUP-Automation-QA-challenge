describe('Space Creation - Error Handling', () => {

  it('Verify response for creating two spaces with the same name', () => {

    const spaceName = "random"
    
    cy.APIPostSpace(spaceName).then((response) => {
      expect(response.status).to.eq(200) 
     })

  cy.APIPostSpace(spaceName).then((response) => {
    expect(response.status).to.eq(400) 
    })
   
})

  

   
  //This test assumes that there is validation on the backend that matches the
  // one on the frontend. Since it is not possible to input Space name over 33 characters this
  //API request should return 400 bad response
    it('Validate Response Status for space name over the limit', () => {
      const spaceName = "Overthecharacterboundaryspacename" //33 characters
      cy.APIPostSpace(spaceName).then((response) => {
        expect(response.status).to.eq(400) 
    })
  
});


it(`Validate Response Status 400 when name is missing`, () => {
  cy.IncompliteRequestSpacePost('name')
});

it(`Validate Response Status 400 when multiple_assignees is missing`, () => {
  cy.IncompliteRequestSpacePost('multiple_assignees')
});

it(`Validate Response Status 400 when features.due_dates.enabled is missing`, () => {
  cy.IncompliteRequestSpacePost('features.due_dates.enabled')
 });

    
  
})
  
  
      
    



























// //dodao
// describe('Missing fields', () => {

   

//     const pathsToTest = [
//         'name',
//         'multiple_assignees',
//         'features.due_dates.enabled',
//         'features.due_dates.start_date',
//         'features.due_dates.remap_due_dates',
//         'features.due_dates.remap_closed_due_date',
//         'features.time_tracking.enabled',
//         'features.tags.enabled',
//         'features.time_estimates.enabled',
//         'features.checklists.enabled',
//         'features.custom_fields.enabled',
//         'features.remap_dependencies.enabled',
//         'features.dependency_warning.enabled',
//         'features.portfolios.enabled'
//     ];


//     it(`Validate Response Status 400 when name is missing`, () => {
//         cy.APIVerifyBadResponseSpacePost('name')
//     });

//     it(`Validate Response Status 400 when multiple_assignees is missing`, () => {
//         cy.APIVerifyBadResponseSpacePost('multiple_assignees')
//     });

//     it(`Validate Response Status 400 when features.due_dates.enabled is missing`, () => {
//         cy.APIVerifyBadResponseSpacePost('features.due_dates.enabled')
//     });

// })