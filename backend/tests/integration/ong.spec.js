const request = require('supertest');
const app = require('../../src/app')
const connection = require('../../src/database/connection')

// Integration Tests for ONG CRUD
describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();  // clean up before starting each test!
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "Balde NPO",
            email: "balde@npo.com",
            whatsapp: "12345678901",
            city: "Paulinia",
            uf: "SP"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });

})