
const shortHash1 = require('short-hash');
const sortKeys = require('sort-keys');
const { isObject } = require('../object');

module.exports = {
  hashObject,
  shortHash
};

// Predictable hash for equivalent objects.
function hashObject (obj) {
  if (!isObject(obj)) return null;
  return shortHash(JSON.stringify(sortKeys(obj, { deep: true })));
}

// If you just want to have a good hash function djb2, a.k.a. "Bernstein times 33",
// is one of the best string hash functions.
function shortHash (...args) {
  return shortHash1(...args);
}
