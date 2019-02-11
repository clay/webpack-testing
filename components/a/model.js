'use strict'

const foo = require('../../services/foo');

module.exports.save = (uri, data, locals) => {
  console.log('component a!');

  foo();

  return data;
}
