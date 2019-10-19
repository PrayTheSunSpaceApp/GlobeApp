const path = require('path');

/* Plugins */
// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const WebpackMd5Hash = require('webpack-md5-hash');
// eslint-disable-next-line import/no-extraneous-dependencies
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].bundle.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        // assets loader
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'assets',
                        name: 'asset-[name].[ext]',
                    },
                }
            ]
        },
        // fonts loader
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'fonts',
                        name: 'font-[name].[ext]',
                    },
                }
            ]
        }
      ]
    },
    plugins: [
        // new MiniCssExtractPlugin({
        //   filename: 'style.[contenthash].css',
        // }),
        new HtmlWebpackPlugin({
          inject: true,
          hash: true,
          template: path.resolve(__dirname, 'public', 'index.html'),
          filename: 'index.html',
          favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
        }),
        new WebpackMd5Hash(),
        new CleanWebpackPlugin(),
      ]
  }