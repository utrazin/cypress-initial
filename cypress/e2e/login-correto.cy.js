describe('Página de Login', () => {
    beforeEach(()=> {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="login-button"]').click();
    })

    it('Deve preencher todos os campos com informações corretar e autenticar o usuário na página', () => {
        cy.login('enzo.dutra@retornar.com.br', 'Teste123')
    })
})