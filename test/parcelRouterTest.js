import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

const should = chai.should();
const { expect, assert } = chai;

const apiVersion = '/api/v1';

chai.use(chaiHttp);

// Test for parcels routes //

describe('## /GET parcels without Authorization header', () => {
  it('should GET all the parcels', (done) => {
    chai.request(app)
      .get(`${apiVersion}/parcels`)
      .end((err, res) => {
        res.should.have.status(401);
        done();
      });
  });
});

// get all parcel delivery orders
describe('## /GET parcels with Authorization header', () => {
  it('should GET all the parcels', (done) => {
    chai.request(app)
      .get(`${apiVersion}/parcels`)
      .set('Authorization', 'Bearer a41f8a8dbb67735da4d0f1ac100975ea3dc1409b022d4043d8584f0a18c3efbe')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});

// test create parcel routes
describe('## /POST create new parcel delivery order without Authorization header', () => {
  it('should POST a new parcel', (done) => {
    chai.request(app)
      .post(`${apiVersion}/parcels`)
      .end((err, res) => {
        res.should.have.status(401);
        done();
      });
  });
});

// to fetch a specific delivery order by its ID
describe('## /GET parcels/:orderId', () => {
  const orderId = '001';
  it('should GET a specific delivery order by its ID', (done) => {
    chai.request(app)
      .get(`${apiVersion}/parcels/${orderId}`)
      .set('Authorization', 'Bearer a41f8a8dbb67735da4d0f1ac100975ea3dc1409b022d4043d8584f0a18c3efbe')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});


// for cancelling a parcel delivery order
describe('## /PUT parcels/:parcelId/cancel without Authorization header', () => {
  it('should cancel a parcel delivery order', (done) => {
    chai.request(app)
      .put(`${apiVersion}/parcels/:parcelId/cancel`)
      .end((err, res) => {
        res.should.have.status(401);
        done();
      });
  });
});