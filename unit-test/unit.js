var assert = require('assert');
var message = require('../message')

describe('Message', function() {
  describe('#getMessage()', function() {
    it('Should return a message when a name is included', function() {
        assert.equal(message.getMessage("Sean"), "Hello Sean.");
    });
    it('Should return a message when a name is not included', function() {
        assert.equal(message.getMessage(), "Hello friend.");
    });
  });
});

