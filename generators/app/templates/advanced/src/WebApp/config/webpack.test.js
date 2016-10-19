const webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['', '.ts', '.js'],
        root: '../wwwroot/src',
    },
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
                loader: 'awesome-typescript',
                query: {
                    sourceMap: false,
                    inlineSourceMap: true,
                    compilerOptions: {
                        removeComments: true
                    }
                },
                exclude: [/\.e2e\.ts$/]
            },
            { test: /\.css$/, loaders: ['raw', 'css'] },
            { test: /\.html$/, loader: 'raw' }
        ],
        postLoaders: [
          {
              test: /\.(js|ts)$/, loader: 'istanbul-instrumenter-loader',
              include: path.resolve(__dirname, '../wwwroot/src'),
              exclude: [/\.(e2e\-spec|spec)\.ts$/, /node_modules/]
          }
        ]
    },
    plugins: [
        // https://github.com/angular/angular/issues/11580
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            path.resolve(__dirname, '../wwwroot/src')
        )
    ]
};
