
const { assert } = require('chai');
const { EOL } = require('os');
const { indent, onlyStrings } = require('../../lib/code-generation');

const code = [
  'a',
  'b',
  'c'
].join(EOL);

describe('code-generation/index.text.js', () => {
  describe('onlyStrings', () => {
    it('returns only string elements', () => {
      const input = [
        'a',
        null,
        'b',
        undefined,
        1,
        {},
        [],
        () => {},
        'c',
        String,
        'd'
      ];

      assert.deepEqual(onlyStrings(input), ['a', 'b', 'c', 'd'], 'unexpected elements');
    });
  });

  describe('indent', () => {
    it('indents all lines 2 spaces by default', () => {
      assert.deepEqual(indent(code), ['  a', '  b', '  c'].join(EOL), 'default');
    });

    it('can control indent spaces', () => {
      assert.deepEqual(indent(code, 3), ['   a', '   b', '   c'].join(EOL), 'indent');
    });

    it('can control if first line indents', () => {
      assert.deepEqual(indent(code, null, false), ['a', '  b', '  c'].join(EOL), 'first line null');
      assert.deepEqual(indent(code, undefined, false), ['a', '  b', '  c'].join(EOL), 'first line undefined');
    });
  });
});
