const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: "./index.jsx",

  output: {
    // path: path.resolve(__dirname, "public"),

    filename: "main.js",

    publicPath: "/",
  },

  target: "web",

  devServer: {
    port: "3000",

    static: ["./public"],

    open: true,

    hot: true,

    liveReload: true,

    historyApiFallback: true,
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,

        exclude: /node_modules/,

        use: "babel-loader",
      },

      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images",
              publicPath: "images/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      inject: "body",
    }),
  ],
};
