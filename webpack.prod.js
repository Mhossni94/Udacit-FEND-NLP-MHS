const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // npm install mini-css-extract-plugin
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin') 
const TerserPlugin = require('terser-webpack-plugin') // npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin
const WorkboxPlugin = require('workbox-webpack-plugin');//npm install workbox-webpack-plugin --save-dev
module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
    optimization: { 
        minimizer: [new TerserPlugin({}),new OptimizeCSSAssetsPlugin({})],
    },
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test:/\.scss$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
            }
            
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new MiniCssExtractPlugin({filename:'[name].css'}),
        new WorkboxPlugin.GenerateSW()
    ]
}
