
const { assert } = require('chai');
const { hashObject, shortHash } = require('../../lib');

const str = 'a';
const obj1 = { c: 'cc', b: 'bb', a: 'aa' };
const obj2 = { b: 'bb', a: 'aa', c: 'cc' };

describe('hash/index.text.js', () => {
  describe('shortHash', () => {
    it('produces short length', () => {
      assert.isBelow(shortHash(str).length, 12, 'unexpected length str');
    });

    it('no trivial clash', () => {
      assert.notEqual(shortHash(str), shortHash('a '), 'hash clash');
    });
  });

  describe('hashObject', () => {
    it('produces a predictable hash', () => {
      const obj1Hash = hashObject(obj1);
      assert.isString(obj1Hash, 'unexpected type str');
      assert.isBelow(obj1Hash.length, 12, 'unexpected length str');

      const obj2Hash = hashObject(obj2);
      assert.isString(obj2Hash, 'unexpected type str');
      assert.isBelow(obj2Hash.length, 12, 'unexpected length str');

      assert.equal(obj1Hash, obj2Hash, 'hash not same');
    });

    it('no trivial clash', () => {
      assert.notEqual(hashObject({ a: 'a' }), hashObject({ a: 'a ' }), 'hash same');
    });
  });
});
