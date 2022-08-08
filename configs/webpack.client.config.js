const path = require('path')
const { HotModuleReplacementPlugin, DefinePlugin } = require('webpack')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';
const GLOBAL_CSS_REGEX = /\.global\.css$/

function setupDevtool() {
    if (IS_DEV) return 'eval-source-map';
    if (IS_PROD) return false;
}

const DEV_PLUGINS = [
    new HotModuleReplacementPlugin(),
]

const COMMON_PLUGINS = [
    new DefinePlugin({
        'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'`
    }),
]

module.exports = {
    devtool: setupDevtool(),
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: [
        path.resolve(__dirname, '../src/client/index.jsx'),
        'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr'
    ],
    output: {
        path: path.resolve(__dirname, '../dist/client'),
        filename: 'client.js',
        clean: true,
        publicPath: '/static/'
    },

    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: ['ts-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]--[hash:base64:5]'
                            }
                        }
                    },
                ],
                exclude: GLOBAL_CSS_REGEX
            },
            {
                test: GLOBAL_CSS_REGEX,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },

        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
        // alias: {
        //     'react-dom': IS_DEV ? '@hot-loader/react-dom' : 'react-dom'
        // }
    },

    plugins: IS_DEV ? DEV_PLUGINS.concat(COMMON_PLUGINS) : COMMON_PLUGINS,

    watchOptions: {
        ignored: '/dist/'
    },
}