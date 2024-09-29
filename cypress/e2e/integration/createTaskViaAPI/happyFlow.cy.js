describe('Happy flow', () => {

    it('Validate Response Status', () => {

        const folderName = "imefoldera"
        const spaceName = "imespejsa"

        cy.APIPostSpace(spaceName).then((response) => {

            cy.APIPostFolder(response.body.id, folderName).then((response) => {

            });


        })




    })



})