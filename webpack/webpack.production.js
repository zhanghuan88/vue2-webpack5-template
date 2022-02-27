const {merge} = require("webpack-merge")
const webpackCommonConfig = require("./webpack.common.js")
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const chalk = require("chalk");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin")
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = merge(webpackCommonConfig, {
    mode: 'production',
    // devtool: "cheap-module-source-map",
    devtool: false,
    module: {
        rules: [
            {
                test: /\.css$/,
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
                ]
            }, {
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
                ],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name]_[hash].css",
        }),
        new CleanWebpackPlugin(),
        // 进度条
        new ProgressBarPlugin({
            format: `  :msg [:bar] ${chalk.green.bold(":percent")} (:elapsed s)`,
        }),
        new CompressionPlugin({
            filename: "[path][base].gz",
            threshold: 10240,
            minRatio: 0.8,
        })
    ],
    optimization: {
        concatenateModules:true,
        moduleIds: "deterministic",
        runtimeChunk: true,
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin({
                exclude: 'node_modules'
            }),
            new TerserPlugin({
                parallel: true, // 可省略，默认开启并行
                terserOptions: {
                    toplevel: true, // 最高级别，删除无用代码
                    ie8: true,
                    safari10: true,
                },
                extractComments:false,
            })


        ],
    },

})
