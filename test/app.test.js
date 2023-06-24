const request = require('supertest');
const app = require('../app');


describe('GET /students', () => {

    it('should return a list of Students with a response of 200 OK', async () => {
            const response = await request(app).get('/students');
            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveLength(3);
    });

});