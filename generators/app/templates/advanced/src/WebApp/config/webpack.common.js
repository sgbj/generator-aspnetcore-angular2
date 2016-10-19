const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const appRoot = path.resolve(__dirname, '../wwwroot/src/app');

module.exports = {
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.ts', '.js'],
        root: '../wwwroot/src'
    },
    context: path.resolve(__dirname, './'),
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'source-map',
                exclude: [/node_modules/]
            }, {
                test: /\.ts$/,
                loader: 'tslint',
                exclude: [/node_modules/]
            }
        ],
        loaders: [
            {
                test: /\.ts$/,
                exclude: [/\.(e2e\-spec|e2e)\.ts$/],
                loaders: ['angular2-template', 'awesome-typescript', 'angular2-router']
            }, {
                include: appRoot,
                test: /\.css$/,
                loaders: ['raw', 'postcss']
            }, {
                include: appRoot,
                test: /\.scss$|\.sass$/,
                loaders: ['raw', 'postcss', 'sass']
            }, {
                exclude: appRoot,
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ fallbackLoader: 'style', loader: ['css', 'postcss'] })
            }, {
                exclude: appRoot,
                test: /\.scss$|\.sass$/,
                loader: ExtractTextPlugin.extract({ fallbackLoader: 'style', loader: ['css', 'postcss', 'sass'] })
            },
            { test: /\.json$/, loader: 'json' },
            { test: /\.(jpg|png|gif)$/, loader: 'url?limit=10000' },
            { test: /\.html$/, loader: 'html' },
            { test: /\.(otf|woff|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000' },
            { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&mimetype=font/woff2' },
            { test: /\.eot$/, loader: 'file' }
        ]
    },
    node: {
        fs: 'empty',
        global: 'window',
        crypto: 'empty',
        process: true,
        module: false,
        clearImmediate: false,
        setImmediate: false
    }
};
