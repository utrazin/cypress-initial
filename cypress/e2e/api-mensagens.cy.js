describe('Api Adopet', ()=> {
    it('Mensagens da Api', ()=> {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/9861ed46-a8a6-4c36-b089-a374bf66bea8',
            headers: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200);
            expect(res.body).is.not.empty;
            expect(res.body).to.have.property('msg');
        })
    })
})