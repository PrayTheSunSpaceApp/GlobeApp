// eslint-disable-next-line import/no-extraneous-dependencies
const merge = require('webpack-merge');
// eslint-disable-next-line import/no-extraneous-dependencies
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// eslint-disable-next-line import/no-extraneous-dependencies
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    module: {
      rules: [
        {
          test: /\.scss$/,
          use:  [MiniCssExtractPlugin.loader, 
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                modules: true,
                localIdentName: "[local]___[hash:base64:5]",
                // minimize: true
              }
            },
            'postcss-loader', 
            'sass-loader']
        }
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'style.[contenthash].css',
        chunkFilename: '[id].[contenthash].css'
      })
    ],
    optimization: {
      minimizer: [new UglifyJsPlugin(), new OptimizeCSSAssetsPlugin({})],
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'node_vendor',
            chunks: 'all',
            priority: -10
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'async',
            priority: 10,
            reuseExistingChunk: true,
            enforce: true
          }
        }
      }
    }
});