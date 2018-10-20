const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",

  output: {
    filename: "bundle.js",
    path: path.resolve("dist")
  },

  plugins: [
    new webpack.ProvidePlugin({
      cowsay: "cowsay-browser"
    })
  ]
};
