
const { assert } = require('chai');
const { contains } = require('../../lib');

const array = ['a', 'b', 5, 'c'];

describe('array/index.text.js', () => {
  describe('includes', () => {
    it('finds if exists', () => {
      assert.equal(contains(array, 'b'), true, 'error finding "b"');
      assert.equal(contains(array, 5), true, 'error finding 5');
    });

    it('doesn\'t finds if doesn\'t exists', () => {
      assert.equal(contains(array, 'z'), false, 'error not finding "z"');
      assert.equal(contains(array, 0), false, 'error n ot finding 0');
    });
  });
});
