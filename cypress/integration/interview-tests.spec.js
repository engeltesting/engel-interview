describe('starep overview', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200')
  })
  it('should open status reports overview', () => {
    cy.get('[data-cy=add-button]').click()
  });
});
