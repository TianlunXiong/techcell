const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HappyPack = require('happypack');

module.exports = {
    mode: 'development',
    entry: {
        index : './client/src/index.tsx'
    },
    output: {
       path: path.resolve(__dirname, './dist'),
       filename: '[name].[contenthash].js'
    },
    devtool: 'inline-source-map',
    module:{
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'happypack/loader?id=tsx',
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'happypack/loader?id=jsx',
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './client/template/index.html')
        }),
        new HappyPack({
            id: 'jsx',
            threads: 2,
            loaders: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            ]
        }),
        new HappyPack({
            id: 'tsx',
            threads: 4,
            loaders: [
                {
                    loader: 'ts-loader',
                    options: {
                        happyPackMode : true,
                        transpileOnly: true
                    }
                }
            ]
        })
    ],
}