describe('Funcionalidades do Admin', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('header button').click();
    cy.get('[data-cy="email"]').type('fabi@test.com');
    cy.get('[data-cy="password"]').type('test123');
    cy.get('form').submit();
  });

  it('deve mostrar mensagem de alerta email não cadastrado', () => {
    cy.get('.text-red-500').should('exist').and('be.visible');
  });

  it('deve mostrar mensagem credenciais erradas - senha errada', () => {
    cy.visit('http://localhost:3000');
    cy.get('header button').click();
    cy.get('[data-cy="email"]').type('Admin@test.com');
    cy.get('[data-cy="password"]').type('test123');
    cy.get('form').submit();
    cy.get('.text-red-500').should('exist').and('be.visible');
  })
});

