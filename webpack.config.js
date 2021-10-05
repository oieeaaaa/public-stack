// plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

// node stuff
const glob = require("glob");
const path = require("path");

// ROOT VARS
const HTML_FOLDER = "public/views";

// PLUGIN MAGIC
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
    path: path.resolve(__dirname, "dist/"),
  },
  devServer: {
    static: './dist',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        loader: "babel-loader",
        type: "javascript/auto",
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
    ],
  },
  plugins: [new CssMinimizerPlugin(), new MiniCssExtractPlugin(), ...views],
};
