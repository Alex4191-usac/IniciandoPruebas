const request = require('supertest');
const app = require('../app');
const pool = require('../config/db');
const exp = require('constants');

//mocking with jest db
jest.mock('../config/db', () => ({
    getConnection: jest.fn(),
}));

test('should return 200 when get /students', async () => {
    const mockRows = [
        {
            "stu_id": 123456,
            "LastName": "DrinkWater",
            "FirstName": "Walter",
            "Address": "14 NE ST TX",
            "City": "Texas"
          },
          {
            "stu_id": 123457,
            "LastName": "Gonzales",
            "FirstName": "David",
            "Address": "20 SW N TX",
            "City": "Texas"
          },
          {
            "stu_id": 123456,
            "LastName": "Jucy",
            "FirstName": "Lucy",
            "Address": "14 NE ST TX",
            "City": "Texas"
          }
    ];

    //Mock the pool method implementations
    pool.getConnection.mockResolvedValueOnce({
        query: jest.fn().mockResolvedValueOnce(mockRows),
        release: jest.fn()
    });

    const res = await request(app).get('/students');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(mockRows);

});



/*
{
      "stu_id": 123456,
      "LastName": "DrinkWater",
      "FirstName": "Walter",
      "Address": "14 NE ST TX",
      "City": "Texas"
    },
    {
      "stu_id": 123457,
      "LastName": "Gonzales",
      "FirstName": "David",
      "Address": "20 SW N TX",
      "City": "Texas"
    },
    {
      "stu_id": 123456,
      "LastName": "Jucy",
      "FirstName": "Lucy",
      "Address": "14 NE ST TX",
      "City": "Texas"
    }
 */