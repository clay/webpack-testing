'use strict';

const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    'a.model.js': './components/a/model.js',
    'b.model.js': './components/b/model.js',
    'c.model.js': './components/c/model.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]'
  },
  optimization: {
    splitChunks: {
      chunks: 'initial',
      minChunks: 1,
      minSize: 1,
      name (module, chunks, cacheGroupKey) {
        const filename = module.resource.split('/').pop().split('.')[0];

        return `${filename}.dep.js`
      }
    }
  },
  plugins: []
};
