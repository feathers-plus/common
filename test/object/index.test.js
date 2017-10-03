
const { assert } = require('chai');
const { isObject, sortKeys } = require('../../lib');

const array = ['a', 'b', 5, 'c'];
const obj = {
  z: 'zz',
  m: { w: 9, s: 'ss', t: [1, 2, 3] },
  a: 'aa'
};

describe('object/index.text.js', () => {
  describe('isObject', () => {
    it('recognize plain object', () => {
      assert.equal(isObject(obj), true, 'not recognize POJO');
    });

    it('not recognize others', () => {
      assert.equal(isObject(array), false, 'error array');
      assert.equal(isObject(null), false, 'error null');
      assert.equal(isObject(undefined), false, 'error undefined');
      assert.equal(isObject(() => {}), false, 'error function');
      assert.equal(isObject('abc'), false, 'error string');
      assert.equal(isObject(5), false, 'error number');
      assert.equal(isObject(String), false, 'error built-in');
    });
  });

  describe('sortKeys', () => {
    it('sorts deeply', () => {
      const expected = {
        a: 'aa',
        m: { s: 'ss', t: [1, 2, 3], w: 9 },
        z: 'zz'
      };

      assert.deepEqual(sortKeys(obj), expected);
    });
  });
});
