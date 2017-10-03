
const array = require('./array');
const hash = require('./hash');
const object = require('./object');

module.exports = Object.assign({},
  array,
  hash,
  object
);
