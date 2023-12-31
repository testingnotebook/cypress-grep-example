describe('home page - recent posts', { tags: '@example-tag-1' }, () => {
  it('should contain recent posts elements', () => {
    cy.visit('/')
    cy.get('[data-testid="recent-posts"]').within(() => {
      cy.contains('Recent Posts')
      cy.get('[data-testid="post-list"]').within(() => {
        cy.contains('Read Article', { matchCase: false })
      })
    })
  })
})
