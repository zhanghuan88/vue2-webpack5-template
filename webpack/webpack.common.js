const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("./path");
const {VueLoaderPlugin} = require("vue-loader");
const CopyWebpackPlugin = require('copy-webpack-plugin')
const {DefinePlugin} = require("webpack");

module.exports = {
    entry: {
        index: "./src/index.js",
    },
    output: {
        filename: "js/[name].[contenthash:8].js",
        path: path.resolve("dist"),
    },
    cache: {
        type: 'filesystem',
    },
    externals: {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'vuex': 'Vuex',
        'axios': 'axios',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve("src"),
                use: ['babel-loader']
            },
            {
                test: /\.(png|gif|jpe?g|svg)$/,
                type: 'asset', // webpack5使用内置静态资源模块，且不指定具体，根据以下规则使用
                generator: {
                    filename: 'img/[name].[contenthash:6][ext]' // ext本身会附带点，放入img目录下
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024 // 超过10kb的进行复制，不超过则直接使用base64
                    }
                }
            },
            {
                test: /\.(ttf|woff2?|eot)$/,
                type: 'asset/resource', // 指定静态资源类复制
                generator: {
                    filename: 'font/[name].[contenthash:6][ext]' // 放入font目录下
                }
            },
            {
                test: /\.vue$/,
                use: ["vue-loader"]
            },


        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new DefinePlugin({
            BASE_URL: '"./"',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve("public/index.html"),
            inject: "body",
            minify: {
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: true, // 删除空符与换符
                minifyCSS: true // 压缩内联css
            }
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve("public"),
                    to: path.resolve("dist"),
                    globOptions: {
                        dot: true,
                        gitignore: true,
                        ignore: ["**/index.html"],
                    },
                }
            ]
        }),

    ],
    resolve: {
        extensions: [".vue", ".js", ".json"],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            "@": path.resolve("src"),
        }
    },

}
