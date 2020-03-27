const supertest = require('supertest');
const app = require('../../app');
const connection = require("../../src/database/connection");

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    })

    it('should be able to create a new ONG', async () => {
        const response = await supertest(app).post('/ongs').send({
            name: "APAD2",
            email: "contatl@d.com",
            whatsapp: "4192299229",
            city: "Rio do Sul",
            uf: "SC"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});

// npm install supertest -D // uma library de desenvolvimento para fazer chamadas a api no backend