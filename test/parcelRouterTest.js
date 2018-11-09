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
});
