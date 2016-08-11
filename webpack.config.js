var path = require('path'),
    fs   = require('fs');

var externals = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    externals[mod] = 'commonjs ' + mod;
  });

externals['./package.json'] = 'commonjs ./package.json';

module.exports = {
  entry: {'hello-world/server': './src/components/hello-world/server.js'},
  target: 'node',
  output: {
    path: './build/components/',
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  externals: externals,
  module: {
    loaders: [
      {
        test: /\.json$/,
        exclude: /package\.json/,
        loader: 'json'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0']
        }
      }
    ]
  }
};