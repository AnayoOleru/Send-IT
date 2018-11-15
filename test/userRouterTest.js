
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

const should = chai.should(); // disable eslint
const { expect, assert } = chai; // disable eslint

const apiVersion = '/api/v1';

chai.use(chaiHttp);

// fetch all parcel delivery order by a user
describe('/GET /:userId/parcels', () => {
  const userId = '45547';
  it('should fetch all parcel delivery order by an user', (done) => {
    chai.request(app)
      .get(`${apiVersion}/user/${userId}/parcels`)
      .set('Authorization', 'Bearer a41f8a8dbb67735da4d0f1ac100975ea3dc1409b022d4043d8584f0a18c3efbe')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
