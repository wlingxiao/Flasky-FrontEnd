const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname + '/src/app/app.js',
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js',
        publicPath: 'http://localhost:8080'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader'},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.html$/, loader: 'raw-loader'},
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file-loader'
            }
        ]
    },
    devServer: {
        historyApiFallback: true, // angularjs ui router html5mode
        contentBase: './src/public',
        stats: 'minimal',
        proxy: {
            '/post': {
                target: 'http://127.0.0.1:5000',
                changeOrigin: true
            },
            '/auth': {
                target: 'http://127.0.0.1:5000',
                changeOrigin: true
            }
        }
    },
    devtool: 'inline-source-map',
    plugins: [new HtmlWebpackPlugin({
        template: './src/app.html',
        inject: 'body'
    })]
};