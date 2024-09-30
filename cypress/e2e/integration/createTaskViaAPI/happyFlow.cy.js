describe('Happy flow', () => {

    it('Validates creation of task', () => {

        const folderName = "imefoldera"
        const spaceName = "imespejsa"
        const listName = 'imeliste'
        const taskName ='imetaska'

        cy.APIPostSpace(spaceName)
      .its('body.id')
      .then((spaceId) => {      
        cy.APIPostFolder(spaceId, folderName)
          .its('body.id')
          .then((folderId) => {           
            cy.APIPostList(folderId, listName)
              .its('body.id')
              .then((listId) => {
                cy.APIPostTask(listId, taskName);
              });
          });
      });

      cy.login()
      cy.wait(50000)
      cy.ClickSpaceByName(spaceName)
      cy.ValidateFolderName(folderName)
      cy.ClickFolderByName(folderName)
      cy.ValidateListName(listName)
      cy.ClickListByName(listName)
      cy.ValidateTaskName(taskName)
});


})