const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlInstance = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
  title: "React Tutorial",
});

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [htmlInstance],
};
