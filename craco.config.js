const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  webpack: {
    alias: {
      "@app": path.resolve(__dirname, "src/"),
      "@components": path.resolve(__dirname, "src/components/"),
    },
    plugins: {
      //   add: [new HtmlWebpackPlugin()],
    },
    entry: "index.js",
    output: {
      path: __dirname + "/dist",
      filename: "index_bundle.js",
    },
  },
};
