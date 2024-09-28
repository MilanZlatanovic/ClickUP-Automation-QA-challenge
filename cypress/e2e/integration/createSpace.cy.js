describe('Create a new space via API', () => {
    it('Happy flow', () => {

      const teamId = '9012315377'; 
      const apiUrl = `https://api.clickup.com/api/v2/team/${teamId}/space`
      const apiKey = 'pk_2142602213_E3GLJPAV9O550NM1EHHZRP7EUPFNAQNW' 
      cy.request({
        method: 'POST',
        url: apiUrl,
        headers: {
          'Content-Type': 'application/json',
          Authorization: apiKey
        },
        body: {
          name: 'New Space Name Proba',
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
      }).then((response) => {
       
        expect(response.status).to.eq(200) 
        cy.log(JSON.stringify(response.body)) 
      })
      
cy.visit('https://app.clickup.com/9012315407/settings/team/9012315407/project')

cy.get('[data-test="login-email-input"]').click().type("milanzlatanovic92@gmail.com")
cy.get('[data-test="login-password-input"]').type("Passzaclickup!")
cy.get('[data-test="login-submit"]').click()


      
    })
  })