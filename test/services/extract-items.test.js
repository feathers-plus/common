
const { assert } = require('chai');
const { extractAllItems, extractFirstItem } = require('../../lib');

const result0 = null;
const result1 = { id: 0, value: 10 };
const result2 = [{ id: 0, value: 0 }, { id: 1, value: 1 }];

const resultPaginated0 = { data: result0 };
const resultPaginated1 = { data: result1 };
const resultPaginated2 = { data: result2 };

describe('extract-items.test.js', () => {
  describe('extractAllItems', () => {
    it('handles no data', () => {
      assert.strictEqual(extractAllItems(result0), null, 'non-paginated');
      assert.strictEqual(extractAllItems(resultPaginated0), null, 'paginated');
    });
    
    it('handles single object', () => {
      assert.deepEqual(extractAllItems(result1), [result1], 'non-paginated');
      assert.deepEqual(extractAllItems(resultPaginated1), [result1], 'paginated');
    });
  
    it('handles paginated object', () => {
      assert.deepEqual(extractAllItems(result2), result2, 'non-paginated');
      assert.deepEqual(extractAllItems(resultPaginated2), result2, 'paginated');
    });
  });
  
  describe('extractFirstItem', () => {
    it('handles no data', () => {
      assert.strictEqual(extractFirstItem(result0), null, 'non-paginated');
      assert.strictEqual(extractFirstItem(resultPaginated0), null, 'paginated');
    });
    
    it('handles single object', () => {
      assert.deepEqual(extractFirstItem(result1), result1, 'non-paginated');
      assert.deepEqual(extractFirstItem(resultPaginated1), result1, 'paginated');
    });
    
    it('throws on multiple objects', () => {
      assert.throws(() => extractFirstItem(result2), Error, 'expected 0 or 1 objects', 'non-paginated');
      assert.throws(() => extractFirstItem(resultPaginated2), Error, 'expected 0 or 1 objects', 'paginated');
    });
  });
});
