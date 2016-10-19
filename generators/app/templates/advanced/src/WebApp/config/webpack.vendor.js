const webpack = require('webpack');
const merge = require('webpack-merge');
const atl = require('awesome-typescript-loader');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const path = require('path');
const common = require('./webpack.common');

module.exports = merge(common, {
    entry: {
        polyfills: ['../wwwroot/src/polyfills.ts'],
        vendor: ['../wwwroot/src/vendor.ts']
    },
    output: {
        path: path.resolve(__dirname, '../wwwroot/dist'),
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        publicPath: '/dist/',
        library: '[name]_lib'
    },
    plugins: [
        // https://github.com/angular/angular/issues/11580
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            path.resolve(__dirname, '../wwwroot/src')
        ),
        new ExtractTextPlugin('vendor.css'),
        new atl.ForkCheckerPlugin(),
        new webpack.DllPlugin({
            path: path.resolve(__dirname, '../wwwroot/dist/[name]-manifest.json'),
            name: '[name]_lib'
        }),
        new UglifyJsPlugin({
            beautify: false,
            mangle: { screw_ie8: true, keep_fnames: true },
            compress: { screw_ie8: true, warnings: false },
            comments: false
        })
    ]
});
