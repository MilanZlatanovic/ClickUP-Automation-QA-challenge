describe('Space Creation - Error Handling', () => {
   
    it('Validate Response Status', () => {
  
      const spaceName = "Overthecharacterboundaryspacename" //33 characters
      
      cy.APIPostSpace(spaceName).then((response) => {
        cy.APIVerifyResponseInvalid(response)
    })
    
    //   cy.login()
    //   cy.wait(50000)
      //cy.ValidateSpaceName(spaceName)
        
      })
  
  
      
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