
const array = require('./array');
const hash = require('./hash');
const object = require('./object');
const services = require('./services');
const string = require('./string');

const exports = Object.assign({},
  array,
  hash,
  object,
  services
);

module.exports = exports;
module.exports.default = exports;
