const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mainConfig = {
    mode: 'development',
    entry: "./src/main/main.ts",
    target: 'electron-main',
    module: {
        rules:[
            {
                test:/\.ts$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        compileOptions: {
                            noEmit: false,
                        },
                    },
                },
            exclude: /node_modules/,
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    node: {
        __dirname: false,
        __filename: false,
    },
};

const renderConfig = {
    mode: 'development',
    entry: "./src/render/render.tsx",
    target: 'electron-renderer',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        compileOptions: {
                            noEmit: false,
                        },
                    },
                },
                exclude: /node_modules/,
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist/renderer'),
        filename: 'index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/render/index.html',
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};

module.exports = [mainConfig, renderConfig];