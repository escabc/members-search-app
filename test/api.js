import request from 'supertest';
import { expect } from 'chai'
import { config } from 'dotenv';

describe('POST /ams/authenticate', function() {
  it('responds with json', function(done) {
    const env = config().parsed;
    const req = request(env.ENDPOINT);

    req
      .post('/ams/authenticate')
      .send({
        "UserType": "Admin",
        "ClientID": env.CLIENT_ID,
        "Username": env.API_KEY,
        "Password": env.API_PASSWORD
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        return done();
      });
  });
});