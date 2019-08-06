'use strict'
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: {
        app: ['babel-polyfill', path.resolve(__dirname, 'src', 'index.js')],
        vendor: ['phaser']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            { test: /\.js$/, include: path.join(__dirname, 'src'), loader: "babel-loader" },
            { test: [/\.vert$/, /\.frag$/], use: 'raw-loader' }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            path: path.resolve(__dirname, 'dist', 'index.html'),
            template: path.resolve(__dirname, 'src', 'index.html')
        }),
        new CopyWebpackPlugin([
            {from:path.resolve(__dirname,'assets'), to:path.resolve(__dirname, 'dist', 'assets')}
        ])
    ]
}
