import chaiHttp from 'chai-http';

import chai, { use, should as _should, request } from 'chai';
import app from '../app';
import { parcels } from '../db/parcel';


use(chaiHttp);

const { expect } = chai;
const should = _should(); // eslint-disable-line
let requester = null;
const ENDPOINT = '/api/v1/parcels';

describe('/api/v1/parcels', () => {
  let parcels = 0;
  let userToken = null;
  let adminToken = null;

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

 
});
