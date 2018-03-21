const webpack = require('webpack');
const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const scssMixin = path.resolve(__dirname, './site/assets_src/scss/common/mixin.scss');

const config = {
    context: path.resolve(__dirname, './site/assets_src/'),
    entry: {
        'app':['./js/main.js']
    },

    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, './site/assets/'),
        sourceMapFilename: '[name].map'
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                use:[
                    {
                        loader: 'vue-loader',
                        options: {
                            loaders: {
                                // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                                // the "scss" and "sass" values for the lang attribute to the right configs here.
                                // other preprocessors should work out of the box, no loader config like this necessary.
                                'scss': 'vue-style-loader!css-loader!sass-loader',
                                'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                            }
                            // other vue-loader options go here
                        }
                    }
                ]

            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:[
                    {
                        loader:'babel-loader',
                        options: {
                            presets: [[
                                'env', {
                                    targets: {
                                        browsers: ['last 3 versions']
                                    }
                                }
                            ]]
                        }
                    }
                ]
            },

            {
                test: /\.(glsl|frag|vert)$/,
                use: [{ loader: 'raw-loader' }, { loader: 'glslify-loader' }],
                exclude: /node_modules/
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            // 'vue$': 'vue/dist/vue.esm.js',
            // scssMixin
        }
    },

    plugins: [
        new CopyWebpackPlugin(
            [
                {from:"./css/**/*"},
                {from:"./fonts/**/*"},
                {from:"./images/**/*"},
                {from:"./video/**/*"},
                {from:"./data/**/*"}
            ]
        )
    ]
};

module.exports = config;


//https://github.com/vuejs-templates/webpack-simple/tree/master/template
