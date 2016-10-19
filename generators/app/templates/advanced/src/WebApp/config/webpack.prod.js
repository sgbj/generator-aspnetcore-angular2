const webpack = require('webpack');
const merge = require('webpack-merge');
const atl = require('awesome-typescript-loader');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const path = require('path');
const common = require('./webpack.common');

module.exports = merge(common, {
    entry: {
        main: ['../wwwroot/src/main.ts']
    },
    output: {
        path: path.resolve(__dirname, '../wwwroot/dist'),
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        publicPath: '/dist/'
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new atl.ForkCheckerPlugin(),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('../wwwroot/dist/vendor-manifest.json')
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('../wwwroot/dist/polyfills-manifest.json')
        }),
        new UglifyJsPlugin({
            beautify: false,
            mangle: { screw_ie8: true, keep_fnames: true },
            compress: { screw_ie8: true },
            comments: false
        })
    ],
    tslint: {
        emitErrors: true,
        failOnHint: true,
        resourcePath: path.resolve(__dirname, '../wwwroot/src')
    }
});
