const request = require('supertest');
const api = require('../api');

describe('searchByCity', () => {
  describe('GET /{city}', () => {
    test('returns events for manchester', async () => {
      const city = 'manchester';
      const res = await request(api).get(`/${city}`);
      console.log(res);
      expect(res).toBeTruthy();
    })
  })
})