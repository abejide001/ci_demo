const chai = require('chai')
const chaiHttp = require('chai-http');
const app = require('../app.js')

let should = chai.should();
chai.use(chaiHttp)
describe('GET /', () => {
  it('should return 200 res', (done) => {
    chai.request(app)
    .get('/')
    .end((err, res) => {
      res.should.have.status(200);
      res.should.be.an('object');
      done();
    })
  })
  it ('should be an object', (done) => {
    chai.request(app)
    .post('/')
    .send([1,3,4,4])
    .end((err, res) => {
      res.should.be.an('object')
      done()
    })
  })
})
