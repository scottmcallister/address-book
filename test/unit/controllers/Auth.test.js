var request = require('supertest');
var assert = require('assert');

describe('AuthController', function() {

  var contactId;

  describe('#home()', function() {
    it('should display the login page', function (done) {
      request(sails.hooks.http.app)
        .get('/login')
        .expect(200, done);
    });
  });

  describe('#register()', function() {
    it('should display the registration page', function (done) {
      request(sails.hooks.http.app)
        .get('/register')
        .expect(200, done);
    });
  });

  describe('#home() redirect', function() {
    it('should redirect to the login page', function (done) {
      request(sails.hooks.http.app)
        .get('/address/index')
        .expect(302)
        .expect('location', '/login', done);
    });
  });

  describe('#login()', function() {
    it('should create a new session', function (done) {
      request(sails.hooks.http.app)
        .post('/auth/local')
        .send({ identifier: 'test', password: 'test' })
        .expect('location','/', done);
    });
  });

  describe('#logout()', function() {
    it('should destroy the current session', function (done) {
      request(sails.hooks.http.app)
        .post('/auth/logout')
        .expect(302)
        .expect('location','/', done);
    });
  });

  
});