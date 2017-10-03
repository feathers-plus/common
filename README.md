# feathers-plus-common

[![Build Status](https://travis-ci.org/feathers-plus/feathers-plus-common.png?branch=master)](https://travis-ci.org/feathers-plus/feathers-plus-common)
[![Code Climate](https://codeclimate.com/github/feathers-plus/feathers-plus-common/badges/gpa.svg)](https://codeclimate.com/github/feathers-plus/feathers-plus-common)
[![Test Coverage](https://codeclimate.com/github/feathers-plus/feathers-plus-common/badges/coverage.svg)](https://codeclimate.com/github/feathers-plus/feathers-plus-common/coverage)
[![Dependency Status](https://img.shields.io/david/feathers-plus/feathers-plus-common.svg?style=flat-square)](https://david-dm.org/feathers-plus/feathers-plus-common)
[![Download Status](https://img.shields.io/npm/dm/feathers-plus-common.svg?style=flat-square)](https://www.npmjs.com/package/feathers-plus-common)

> Shared utility functions.

## Installation

```
npm install feathers-plus-common --save
```

## Documentation

Please refer to the [feathers-plus-common documentation](http://docs.feathersjs.com/) for more details.

## Complete Example

Here's an example of a Feathers server that uses `feathers-plus-common`. 

```js
const feathers = require('feathers');
const rest = require('feathers-rest');
const hooks = require('feathers-hooks');
const bodyParser = require('body-parser');
const errorHandler = require('feathers-errors/handler');
const plugin = require('feathers-plus-common');

// Initialize the application
const app = feathers()
  .configure(rest())
  .configure(hooks())
  // Needed for parsing bodies (login)
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  // Initialize your feathers plugin
  .use('/plugin', plugin())
  .use(errorHandler());

app.listen(3030);

console.log('Feathers app started on 127.0.0.1:3030');
```

## License

Copyright (c) 2017

Licensed under the [MIT license](LICENSE).
