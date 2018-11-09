import chaiHttp from 'chai-http';

import chai, { use, should as _should, request } from 'chai';
import app from '../app';
import { parcels } from '../db/parcel';


use(chaiHttp);

const { expect } = chai;
const should = _should(); // eslint-disable-line
const requester = null;
const ENDPOINT = '/api/v1/parcels';

describe('/api/v1/parcels', () => {
  const parcels = 0;
  const userToken = null;
  const adminToken = null;

  describe('GET /', () => {
    it('should get all parcels', (done) => {
      requester
        .get(ENDPOINT)
        .then((res) => {
          res.body.should.be.a('object');
          done();
        })
        .catch(done);
    });
  });

  // to change the status of delivery order
  describe('PUT /:id', () => {
    it('should not update order without status param in req.body', (done) => {
      requester
        .put(`${ENDPOINT}/1`)
        .then((res) => {
          res.status.should.be.equal(400);
          done();
        })
        .catch(done);
    });

    it('should update order status', (done) => {
      requester
        .put(`${ENDPOINT}/1`)
        .send({ status: 'decline' })
        .then((res) => {
          res.status.should.be.equal(200);
          expect(res.body).to.have.property('status', 'decline');
          done();
        })
        .catch(done);
    });
  });

  //   test to place new parcel delivery orders
  describe('POST /', () => {
    it('should not allow unauthorized user to place order', (done) => {
      requester
        .post(ENDPOINT)
        .then((res) => {
          res.status.should.be.equal(401);
          done();
        })
        .catch(done);
    });

    it('should place order for logged/authorized user', (done) => {
      requester
        .post(ENDPOINT)
        .set('Authorization', userToken)
        .then((res) => {
          res.status.should.be.equal(201);
          done();
        })
        .catch(done);
    });

    it('size should increase by 1', (done) => {
      requester
        .get(ENDPOINT)
        .set('Authorization', adminToken)
        .then((res) => {
          const actualLength = Object.keys(res.body).length;
          expect(actualLength)
            .to.be.a('number')
            .that.equals(orders + 1);
          done();
        })
        .catch(done);
    });
  });
});
