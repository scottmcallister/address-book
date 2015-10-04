assert = require('assert');

describe('AddressModel', function() {

  describe('#find()', function() {
    it('should check find function', function (done) {
      Address.find()
        .then(function(results) {
          // some tests
          assert.ok(results);
          done();
        })
        .catch(done);
    });
  });

});