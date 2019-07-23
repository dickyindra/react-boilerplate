const HtmlWebPackPlugin = require("html-webpack-plugin")
const Dotenv = require('dotenv-webpack')
const path = require('path')

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/views/index.html",
            filename: "./index.html"
        }),
        new Dotenv()
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    devServer: {
        historyApiFallback: true
    }
}