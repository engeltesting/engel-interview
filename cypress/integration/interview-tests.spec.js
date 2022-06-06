describe('starep overview', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200')
  })

  it('should open add machine', () => {
    cy.get('[data-cy=add-button]').click()
    cy.get('.mat-dialog-container').should('be.visible');
  });

  it('should open add machine and close popup', () => {

  });

  it('should click next and then back', () => {

  });

  it('should input numbers in field', () => {

  });

  it('should click next', () => {

  });

  it('should input values in text-fields', () => {

  });

  it('should click next', () => {

  });

  it('should input descriptions', () => {

  });

  it('should click save', () => {

  });

  it('should render row', () => {

  });
});
