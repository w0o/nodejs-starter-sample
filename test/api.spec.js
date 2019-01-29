const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const should = chai.should;
const app = require('../app');

describe('API tests', () => {

  it('should return the correct object', async () => {
    let res = await request(app)
      .get('/api/helloJson');

    expect(res.status).to.equal(200);
    expect(res.body).to.exist.and.be.an('object');
    expect(res.body).to.haveOwnProperty('message');
    expect(res.body.message).to.equal('hello from server');
  });

  it('should return the correct string', async () => {
    let res = await request(app)
      .get('/api/hello');

    expect(res.status).to.equal(200);
    expect(res.text).to.exist;
    expect(res.text).to.equal('this is not right');
  });

});