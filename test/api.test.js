const app = require('../server/index.js');
const supertest = require('supertest');
const request = supertest(app);
import 'regenerator-runtime/runtime';

describe('API Endpoints', () => {

  afterAll(async () => {
    await mongoose.connection.close();
});

  describe('/description/:productId Endpoint', () => {
    test('/description/:productId endpoint will respond with 200 if productId is between 1000-1099', async () => {
      const response = await request.get('/description/1001');
      expect(response.status).toBe(200);
    })

    test('/description/:productId endpoint will respond with 404 if productId is not found', async () => {
      const response = await request.get('/description/990');
      expect(response.status).toBe(404);
    })

    test('/description/:productId endpoint will respond with one item description', async () => {
      const res = await request.get('/description/1001');
      expect(res.body.length).toBe(1);
    })
  })

  describe('/descriptions/multiple Endpoint', () => {
    test('/descriptions/multiple endpoint will respond with 200 if array of productIds between 1000-1090 are sent', async () => {
      const res = await request.get('/descriptions/multiple/?1001=1001&1002=1002&1003=1003');
      expect(res.status).toBe(200);
    })

    test('/descriptions/multiple endpoint should send back multiple descriptions', async () => {
      const res = await request.get('/descriptions/multiple/?1001=1001&1002=1002&1003=1003')
      expect(res.body.length).toBe(3);
    })
  })
})


