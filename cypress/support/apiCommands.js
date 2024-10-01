import testdata from '../fixtures/testdata.json'

  
  Cypress.Commands.add('APIGet', (apiUrl, queryParameters) => {
    const apiKey = testdata.userdata.apikey;
    const query = new URLSearchParams(queryParameters).toString();
    const completeUrl = `${apiUrl}?${query}`;
  
    cy.request({
      method: 'GET',
      url: completeUrl,
      headers: {
        'Content-Type': 'application/json',
        Authorization: apiKey,
      },
      
    });
  });
  Cypress.Commands.add('APIGetTask',(taskId) => {
   
    const apiUrl =   `https://api.clickup.com/api/v2/task/${taskId}`

    cy.APIGet(apiUrl);
   
  })
 

  Cypress.Commands.add('APIPostFolder',(spaceId,folderName) => {
    
    const apiUrl = `https://api.clickup.com/api/v2/space/${spaceId}/folder`

    var requestBody = {
        name:folderName
    }

    cy.APIPost(apiUrl, requestBody);
   
  })

  Cypress.Commands.add('APIPostList',(folderId,listName) => {
    
    const apiUrl = `https://api.clickup.com/api/v2/folder/${folderId}/list`

    
    

    var requestBody = {
        name:listName
    }

    cy.APIPost(apiUrl, requestBody);
   
  })

  Cypress.Commands.add('APIPostTask',(listId,taskName) => {
    
    const apiUrl = `https://api.clickup.com/api/v2/list/${listId}/task`

    var requestBody = {
        name:taskName
    }

    cy.APIPost(apiUrl, requestBody);
   
  })


Cypress.Commands.add('APIVerifyTask', (name) =>{

    cy.ClickTaskByName(name)
    cy.get('[data-test="task-view-task-label__taskid-button"]')
    .invoke('text')
    .then((taskId) => {
        const taskID = taskId;
        cy.APIGetTask(taskId).then(respond => {
          expect(response.status).to.eq(200) 
        })
    })
  
  
  
  })

// // dodao
// const { removeField } = require('../utils/objectUtils');




// //dodao
// Cypress.Commands.add('APISendIncompliteRequestSpacePost', (fieldToRemove) => {

//   const requestBody = {
//     name: 'imespejsa',
//     multiple_assignees: true,
//     features: {
//       due_dates: {
//         enabled: true,
//         start_date: false,
//         remap_due_dates: true,
//         remap_closed_due_date: false
//       },
//       time_tracking: { enabled: false },
//       tags: { enabled: true },
//       time_estimates: { enabled: true },
//       checklists: { enabled: true },
//       custom_fields: { enabled: true },
//       remap_dependencies: { enabled: true },
//       dependency_warning: { enabled: true },
//       portfolios: { enabled: true }
//     }
//   };

//   const requestCopy = JSON.parse(JSON.stringify(requestBody));
//   removeField(requestCopy, fieldToRemove);
//   cy.APIPostSpace(requestCopy).then((response) => {
//     cy.APIVerifyResponseInvalid(response);
//   });

// })


