//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const assert = require('assert');
describe('', () => {
 it('should return 2', () => {
        assert.equal(1 + 1, 2);
    });
 it('should return 9', () => {
        assert.equal(3 * 3, 9);
    });
});