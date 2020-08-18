// nastavení cesty:
const path=require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProd=process.env.NODE_env === 'production'
const isDev = !isProd

const filename = ext => isDev ? `bundle.${ext}`:`bundle.[hash].${ext}`

const jsLoaders = () =>{
    const loaders = [{
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
        }
    }]
    if (isDev) {
        loaders.push('eslint-loader')
    }
    return loaders
}

module.exports = {
    //určení kde je zdroják:
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    //vstupní bod:
    entry: ['@babel/polyfill', './index.js'],
    output: {
        //název výstupního souboru:
        filename: filename( 'js'),
        //vytvoření výstupní složky 'dist'
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@core': path.resolve(__dirname, 'src/core')
        }
    },
    devtool: isDev ? 'source-map' : false,
    devServer: {
        port: 4200,
        hot: isDev
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({template: 'index.html'}),
        new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname, 'src/favicon.ico'),
                        to: path.resolve(__dirname, 'dist')
                    }
                ]
            }
        ),
        new MiniCssExtractPlugin({
            filename: filename('css')
        })
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDev,
                            reloadAll: true
                        }
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {test: /\.js$/,
                exclude: /node_modules/,
                use: jsLoaders(),

            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            }


        ]
    }
}
