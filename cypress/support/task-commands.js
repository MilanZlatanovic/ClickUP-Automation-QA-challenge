


Cypress.Commands.add('APIPostTask', (listId, taskName) => {
    const apiUrl = `list/${listId}/task`;
    var requestBody = {
        name: taskName
    }
    cy.APIPost(apiUrl, requestBody);
})

Cypress.Commands.add('APIGetTask',(taskId) => {
    const apiUrl = `task/${taskId}`;
    cy.APIGet(apiUrl);
})


Cypress.Commands.add('APIVerifyTask', (name) => {

    cy.ClickTaskByName(name)
    cy.get('[data-test="task-view-task-label__taskid-button"]')
        .invoke('text')
        .then((taskId) => {
            const taskID = taskId;
            cy.APIGetTask(taskId).then(respond => {
                expect(respond.status).to.eq(200)
            })
        })
})