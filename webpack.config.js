var path = require("path");

module.exports = {
  entry: "./src/js/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./src/js/build")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
