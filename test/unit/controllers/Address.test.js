var request = require('supertest');

describe('AddressController', function() {

  var contactId;

  describe('#index()', function() {
    it('should redirect to index page', function (done) {
      request(sails.hooks.http.app)
        .post('/auth/local')
        .send({ identifier: 'test', password: 'test' })
        .expect(302)
        .expect('location','/', done);
    });
  });

  describe('#create()', function() {
    it('should create a new contact', function (done) {
      request(sails.hooks.http.app)
        .post('/address/create')
        .send({ name: 'test contact', email: 'test@gmail.com', address: "123 Test St", city: "Toronto"})
        .expect(302, done);
    });
  });

  
});