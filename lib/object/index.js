
const sortKeys1 = require('sort-keys');

module.exports = {
  isObject,
  sortKeys
};

function isObject (obj) {
  return typeof obj === 'object' && !Array.isArray(obj) && obj !== null;
}

// To get a predictable object to hash, etc.
function sortKeys (...args) {
  return sortKeys1(...args);
}
