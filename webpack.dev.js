// eslint-disable-next-line import/no-extraneous-dependencies
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: "[name]__[local]"
            }
          },
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "./dist",
    publicPath: "/",
    port: 3000
  }
});
