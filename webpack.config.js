const path = require('path');


module.exports = {
  entry: {
    app:"./app/assets/scripts/app.js",
    Vendor:"./app/assets/scripts/Vendor.js"
  },
  output: {
    path: path.resolve(__dirname, "./app/temp/scripts"),
    filename: "[name].js"
  },

  module: {
    rules: [
      {
       test: /\.js$/,
       exclude: /(node-modules|bower_components)/,
       use: {
         loader: 'babel-loader',
         options: {
           presets: ['es2015']
       }
      }


      }
    ]
  }
}
