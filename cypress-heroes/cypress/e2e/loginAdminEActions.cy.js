describe('Funcionalidades do Admin', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('header button').click();
    cy.get('[data-cy="email"]').type('admin@test.com');
    cy.get('[data-cy="password"]').type('test123');
    cy.get('form').submit();
    cy.get("[href='/heroes/new']").should('exist').and('be.visible');
  });
  it('Deve permitir curtir um herói', () => {
    cy.get('[data-cy="like"]').first().click();
  });
  it('Deve aumentar número de fãs ao curtir', () => {
    cy.get(".text-slate-700[data-cy='fans']").first()
      .invoke('text')
      .then((textBefore) => {
        const initialCount = parseInt(textBefore.trim());
        cy.get('[data-cy="like"]').first().click();
        cy.get(".text-slate-700[data-cy='fans']")
          .first()
          .should('contain', initialCount + 1);
      });
  });
  it("deve editar um hero existente" , () => {
    cy.get("[data-cy='pencil']").eq(3).click();
    cy.get('[data-cy="nameInput"]').click().clear().type('novoNome')
    cy.get('[value="6"]').click();
    cy.get('form button.bg-blue-700').click();

  });
  it('Deve criar 1 novo herói', () => {
    cy.get("[href='/heroes/new']").click();
    cy.get('[data-cy="nameInput"]').click().type('larvaGirl');
    cy.get('[data-cy="priceInput"]').click().type('8');
    cy.get('[data-cy="fansInput"]').click().type('1');
    cy.get('[data-cy="savesInput"]').click().type('2');
    cy.get('[value="6"]').click();
    // Upload de avatar
    cy.get('[data-cy="avatarFile"]').selectFile(
      './cypress/fixtures/superFofs.png',
      { force: true }
    );

    cy.get('form button.bg-blue-700').click();
  });

  it('Deve permitir excluir 1 hero', () => {
    cy.get('[data-cy="trash"]').eq(2).click(); 
    cy.get('.gap-2 > .text-white').click();// Clica no 3º botão de deletar
  });
 
  it('Deve permitir alugar 1 hero', () => {
   cy.get("[data-cy='money']").eq(2).click(); 
    cy.get(".bg-white .text-white").click();// Clica no 3º botão de deletar
  });
  it('Deve mostrar botão de logout', () => {
    cy.get('header button').should('contain', 'Logout').click();

  });
});
