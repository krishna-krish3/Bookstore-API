const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            // Rule to load JavaScript/JSX files
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            // Rule to load CSS files
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            // Rule to load images
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
        }),
    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        port: 3000,
        open: true,
        hot: true,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};