const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "devlopment"),
    filename: "output.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, "devlopment"),
    compress: true,
    port: 3000,
  },
};

/**
 * if (fileextension === 'css' || fileextension === 'html') {
 *  ....
 * }
 */
