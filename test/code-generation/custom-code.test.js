
const { assert } = require('chai');
const { EOL } = require('os');
const { extractCustomCode, insertCustomCode } = require('../../lib/code-generation');

const code = [
  'a',

  '//!location:label-z',
  '//!custom:label-z',
  'z-1',
  'z-2',
  '//!end',

  'b',

  '//!location:label-y',
  '//!default',
  'y-1',
  '//!end',

  'c',

  '     //!location:  label-x',
  '   //!custom:   label-x   ',
  '  x-1',
  '    x-2',
  '  //!end',

  'd'
];

const extracted = {
  'label-z': [ 'z-1', 'z-2' ],
  'label-x': [ 'x-1', 'x-2' ]
};

function customCode (label) {
  if (label in extracted) return extractedCode(label);

  return `//!location: ${label}`;
}

function customCodeDefault (label, dflt) {
  if (label in extracted) return extractedCode(label);

  return [
    `//!location: ${label}`,
    '//!default',
    dflt,
    '//!end'
  ].join(EOL);
}

function extractedCode (label) {
  return [].concat(
    `//!custom: ${label}`,
    extracted[label],
    '//!end'
  ).join(EOL);
}

describe('code-generation/custom-code.text.js', () => {
  describe('extractCustomCode', () => {
    it('extracts extracted code', () => {
      assert.deepEqual(extractCustomCode(code), extracted, 'unexpected extracted code');
    });
  });

  describe('insertCustomCode', () => {
    beforeEach(() => {
      extractCustomCode(code); // prime module
    });

    it('without default', () => {
      assert.deepEqual(insertCustomCode('label-z'), customCode('label-z'), 'return existing code');
      assert.deepEqual(insertCustomCode('label-zzz'), customCode('label-zzz'), 'return location');
    });

    it('with default', () => {
      assert.deepEqual(insertCustomCode('label-z', 'z-99'), customCodeDefault('label-z'), 'return existing code');
      assert.deepEqual(insertCustomCode('label-zzz', 'z-99'), customCodeDefault('label-zzz', 'z-99'), 'return default code');
    });
  });
});
