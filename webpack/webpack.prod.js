const {merge} = require("webpack-merge");
const {readEnv} = require('./utils');
const config = readEnv("./.env.production");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const chalk = require("chalk");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const {DefinePlugin} = require("webpack");
const webpackCommonConfig = require("./webpack.common.js");

//读取环境变量
module.exports = merge(webpackCommonConfig, {
  mode: 'production',
  // devtool: "cheap-module-source-map",
  devtool: false,
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new DefinePlugin({
      BASE_URL: JSON.stringify("./"),
      'process.env': config
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name]_[contenthash:8].css"
    }),
    new CleanWebpackPlugin(),
    // 进度条
    new ProgressBarPlugin({
      format: `  :msg [:bar] ${chalk.green.bold(":percent")} (:elapsed s)`
    }),
    ...process.env.APP_GZIP === "ON" ? [new CompressionPlugin({
      filename: "[path][base].gz",
      threshold: 10240,
      minRatio: 0.8
    })] : []
  ],
  optimization: {
    moduleIds: "deterministic",
    runtimeChunk: true,
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false
          }
        },
        extractComments: false
      })

    ],
    splitChunks: {
      chunks: 'all'
    }

  }

});
