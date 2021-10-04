const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const glob = require("glob");
const path = require("path");

const HTML_FOLDER = "public/views";

const views = glob.sync(path.join(HTML_FOLDER, "/*.html"), {}).map(
  (filePath) =>
    new HtmlWebpackPlugin({
      filename: filePath.substr(HTML_FOLDER.length + 1),
      template: filePath
    })
);

module.exports = {
  entry: path.resolve(__dirname, "public/index.js"),
  mode: process.env.NODE_ENV,
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist/")
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        loader: "babel-loader",
        type: "javascript/auto"
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
      },
      {
        test: /\.html$/i,
        use: ["html-loader"]
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin(), ...views]
};
