const babelOptions = {
  presets: ['@babel/react', '@babel/env', 'babel-preset-gatsby'],
  plugins: [],
}

module.exports = require('babel-jest').createTransformer(babelOptions)
