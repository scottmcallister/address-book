assert = require('assert');

describe('UserModel', function() {

  describe('#find()', function() {
    it('should check find function', function (done) {
      User.find()
        .then(function(results) {
          // some tests
          assert.ok(results);
          done();
        })
        .catch(done);
    });
  });


  describe('#findOne()', function() {
    it('should check findOne function', function (done) {
      User.findOne({username: 'test'})
        .then(function(results) {
          // some tests
          assert.ok(results);
          done();
        })
        .catch(done);
    });
  });

});