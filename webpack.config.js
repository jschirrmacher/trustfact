var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var debug = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: {
        TrustFact: (debug ? [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server'
        ] : []).concat([
            './src/main.scss',
            './src/App'
        ])
    },
    output: {
        path: './htdocs',
        publicPath: 'http://localhost:8080/',
        filename: 'App.js'
    },
    devtool: debug && 'eval',
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
                loaders: ['jsx', 'babel']
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('main.css', {
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    babel: {
        "presets": ["es2015", "react"]
    },
    devServer: {
        contentBase: "./src"
    },
    debug: true
};
