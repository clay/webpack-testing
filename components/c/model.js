'use strict'

const foo = require('../../services/foo');
const bar = require('../../services/bar');

module.exports.save = (uri, data, locals) => {
  console.log('component c!');

  foo();

  return data;
}


module.exports.save()
