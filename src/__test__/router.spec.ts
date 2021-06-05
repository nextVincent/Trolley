import express from 'express';
import request from 'supertest';
import nock from 'nock';
import { router } from '../routes';
import { TOKEN } from '../shared/constant';


describe('route testing', () => {
  let app, server;
  
  beforeAll(async () => {
    app = express();
    app.use('/api', router);
    server = await app.listen(0);
  });

  afterAll(async () => {
    await server.close();
  });

  it('user api', () => {
    request(app).get('/api/user').expect(response => {
      const data = JSON.parse(response.text);
      expect(data.token).toBe(TOKEN)
    })
  })

  it('sort api 200 reponse', () => {
    nock('http://dev-wooliesx-recruitment.azurewebsites.net').get(`/api/resource/products?token=${TOKEN}`).reply(200, [{
      name: 'test product',
      price: 1,
      quantity: 1
    }])
    request(app).get('/api/sort?sortOption=Low').expect(response => {
      const data = JSON.parse(response.text);
      expect(data.length).toBeGreaterThan(0)
    })
  })

  it('sort api 400 reponse if param invalid', () => {
    request(app).get('/api/sort?sortOption=Test').expect(400)
  })

  it('trolley api 200 reponse', () => {
    nock('http://dev-wooliesx-recruitment.azurewebsites.net').get(`/api/trolleyCalculator?token=${TOKEN}`).reply(200)
    request(app).post('/api/trolleyTotal').expect(200)
  })
});
