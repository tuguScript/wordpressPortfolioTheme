var path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/js/app.js",
  plugins: [
    // new CleanWebpackPlugin(["dist"]),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    })
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap:
    //     options.devtool &&
    //     (options.devtool.indexOf("sourcemap") >= 0 ||
    //       options.devtool.indexOf("source-map") >= 0)
    // })
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./src/js/build")
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: ["file-loader"]
      },
      // {
      //   test: /\.(css|scss)$/,
      //   use: ["style-loader", "css-loader", "sass-loader"]
      // },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  }
};
