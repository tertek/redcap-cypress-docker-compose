it('detects website', () => {
    cy.visit('/')
  
    cy.get('#username-reference')
      .should('contain', 'site_admin')
  })