const request = require('supertest');
const app = require('../app');
const pool = require('../config/db');
const exp = require('constants');

//mocking with jest db
jest.mock('../config/db', () => ({
    getConnection: jest.fn(),
}));

test('should return 200 when get /users', async () => {
  const mockRows = [
    {
      "user_id": 1,
      "username": "user1",
      "password": "password1"
    },
    {
      "user_id": 2,
      "username": "user2",
      "password": "password2"
    },
    {
      "user_id": 3,
      "username": "user3",
      "password": "password3"
    }
  ]

    //Mock the pool method implementations
    pool.getConnection.mockResolvedValueOnce({
        query: jest.fn().mockResolvedValueOnce(mockRows),
        release: jest.fn()
    });

    const res = await request(app).get('/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(...mockRows);

});



