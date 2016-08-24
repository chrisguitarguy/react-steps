var path = require('path');

module.exports = {
    entry: {
        app: [
            path.join(__dirname, 'src', 'app')
        ]
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js',
        sourceMapFilename: '[file].map',
        publicPath: '/build/',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true
    }
}
