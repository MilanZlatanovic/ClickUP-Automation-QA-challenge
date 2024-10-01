
import testdata from '../fixtures/testdata.json';

Cypress.Commands.add('APIPostSpace', (spaceName) => {
    const teamId = testdata.userdata.teamid
    const apiUrl = `team/${teamId}/space`


    var requestBody = {
        name: spaceName,
        multiple_assignees: true,
        features: {
            due_dates: {
                enabled: true,
                start_date: false,
                remap_due_dates: true,
                remap_closed_due_date: false
            },
            time_tracking: { enabled: false },
            tags: { enabled: true },
            time_estimates: { enabled: true },
            checklists: { enabled: true },
            custom_fields: { enabled: true },
            remap_dependencies: { enabled: true },
            dependency_warning: { enabled: true },
            portfolios: { enabled: true }
        }
    }


    cy.APIPost(apiUrl, requestBody);

})

Cypress.Commands.add('APIDeleteSpace', (spaceId) => {

    const urlPart =`space/${spaceId}`;
    cy.APIDelete(urlPart).then(response=>{
        expect(response.status).to.eq(200)
    });
})


Cypress.Commands.add('IncompliteRequestSpacePost', (fieldToRemove) => {

    const teamId = testdata.userdata.teamid;
    const urlPart = `team/${teamId}/space`;

    const requestBody = {
        name: 'some random name',
        multiple_assignees: true,
        features: {
            due_dates: {
                enabled: true,
                start_date: false,
                remap_due_dates: true,
                remap_closed_due_date: false
            },
            time_tracking: { enabled: false },
            tags: { enabled: true },
            time_estimates: { enabled: true },
            checklists: { enabled: true },
            custom_fields: { enabled: true },
            remap_dependencies: { enabled: true },
            dependency_warning: { enabled: true },
            portfolios: { enabled: true }
        }
    };

    const requestCopy = JSON.parse(JSON.stringify(requestBody));
    removeField(requestCopy, fieldToRemove);

    cy.APIPost(urlPart,requestCopy).then((response) => {
        expect(response.status).to.eq(400)
    });
})