const {merge} = require("webpack-merge")
const webpackCommonConfig = require("./webpack.common.js")
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = merge(webpackCommonConfig, {
    mode: "development",
    devtool: "eval-cheap-module-source-map",
    // devtool:false,
    module: {
        rules: [{
            oneOf: [
                {
                    test: /\.css$/,
                    use: [
                        "style-loader",
                        "css-loader",
                        'postcss-loader'
                    ]
                }, {
                    test: /\.s[ac]ss$/i,
                    use: [
                        "style-loader",
                        'css-loader',
                        'postcss-loader',
                        'sass-loader',
                    ],
                },
            ]
        }
        ]
    },
    plugins: [
        new ESLintPlugin({
            fix: true, /* 自动帮助修复 */
            extensions: ['js', 'json', 'coffee', 'vue'],
            exclude: 'node_modules'
        })

    ],
    devServer: {
        port: 8082,
        hot:true,
        compress: true,
        host: "localhost",
        historyApiFallback: true,//history路由错误问题
        client: {
            logging: 'warn',
            overlay: {
                errors: true,
                warnings: false,
            },
        },

    },
    stats: 'errors-warnings',
})
