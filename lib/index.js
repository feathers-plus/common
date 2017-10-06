
const array = require('./array');
const hash = require('./hash');
const object = require('./object');
const services = require('./services');

module.exports = Object.assign({},
  array,
  hash,
  object,
  services
);
