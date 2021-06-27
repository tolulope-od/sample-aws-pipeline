import { expect } from 'chai';
import { agent } from 'supertest';
import app from '../';

const request = agent;

describe('Root Route', function () {
  it('Returns a json object for a request to the base url', async () => {
    const res = await request(app).get('/');
    expect(res.status).to.equal(200);
    expect(res.body.message).to.equal('Test API Works 🚀');
    expect(res.body.status).to.equal('success');
  });
});