'use strict'
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  mode: 'production',
  entry: [
    './src/app.ts'
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}