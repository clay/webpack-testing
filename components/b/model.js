'use strict'

const foo = require('../../services/foo');

module.exports.save = (uri, data, locals) => {
  console.log('component b!');
  foo()

  return data;
}
