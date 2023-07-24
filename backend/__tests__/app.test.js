const request = require('supertest');
const app = require('../index');

test('GET / should return 200 status code', async () => {
  const response = await request(app).get('/');
  expect(response.status).toBe(200);
});

