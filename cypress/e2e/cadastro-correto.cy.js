describe('Página de Cadastro', () => {
  beforeEach(()=> {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    cy.get('[data-test="register-button"]').click();
  })

  it('Deve preencher os campos do formulário para cadastrar um novo usuário', () => {
    cy.cadastro('Enzo Dutra', 'enzo.dutra@retornar.com.br', 'Teste123')
  })
})