describe('Api Adopet', ()=> {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5ODYxZWQ0Ni1hOGE2LTRjMzYtYjA4OS1hMzc0YmY2NmJlYTgiLCJhZG9wdGVyTmFtZSI6IkVuem8gRHV0cmEiLCJpYXQiOjE3NDE3MTkzODAsImV4cCI6MTc0MTk3ODU4MH0.zh8Zo22unoAljnsXhd6VIaE1lvYhyOr7WGMfY-nV4IA`

    it('Perfil da Api', ()=> {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/9861ed46-a8a6-4c36-b089-a374bf66bea8',
            headers: { authorization }
        }).then((res) => {
            expect(res.status).to.be.equal(200);
            expect(res.body).is.not.empty;
            expect(res.body).to.have.property('perfil');
            expect(res.body.perfil).to.have.property('nome');
            expect(res.body.perfil.nome).to.not.be.empty;
        })
    })
})