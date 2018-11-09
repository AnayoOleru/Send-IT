import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../src/server';
import store from '../src/store';

chai.use(chaiHttp);

const { expect } = chai;
const should = chai.should(); // eslint-disable-line
const requester = null;
const ENDPOINT = '/api/v1/users';

// this is to get all users's specific parcels

describe('/api/v1/users', () => {
  const userToken = null;
  const adminToken = null; //eslint-disable-line

  describe('GET /:id/orders', () => {
    before(() => {
      store.orders = {}; // clear orders
    });

    it('should error for unauthorized users', (done) => {
      requester
        .get(`${ENDPOINT}/12233/orders`)
        .then((res) => {
          expect(res.status).to.equal(401);
          done();
        })
        .catch(done);
    });

    it('should get order history for authenticated user', (done) => {
      requester
        .get(`${ENDPOINT}/12233/orders`)
        .set('Authorization', userToken)
        .then((res) => {
          res.body.should.be.a('array').that.is.empty; // eslint-disable-line
          done();
        })
        .catch(done);
    });
  });

//   to get a specific user parcels
describe('GET /:id/orders', () => {
    before(() => {
      store.orders = {}; // clear orders
    });

    it('should error for unauthorized users', (done) => {
      requester
        .get(`${ENDPOINT}/12233/orders`)
        .then((res) => {
          expect(res.status).to.equal(401);
          done();
        })
        .catch(done);
    });

    it('should get order history for authenticated user', (done) => {
      requester
        .get(`${ENDPOINT}/12233/orders`)
        .set('Authorization', userToken)
        .then((res) => {
          res.body.should.be.a('array').that.is.empty; // eslint-disable-line
          done();
        })
        .catch(done);
    });
  });
});
