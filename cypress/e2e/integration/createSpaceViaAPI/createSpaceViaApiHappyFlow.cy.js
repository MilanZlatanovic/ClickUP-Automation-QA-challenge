describe('Happy flow', () => {

  it('Validate Response Status', () => {

    const spaceName = "random"


    cy.APIPostSpace(spaceName).then((response) => {
      const spaceId = response.body.id
      expect(response.status).to.eq(200)

      cy.login()
      cy.wait(50000)
      cy.ValidateSpaceName(spaceName)

      cy.APIDeleteSpace(spaceId).then((response) => {
        expect(response.status).to.eq(200)
      })

    })
  })
})