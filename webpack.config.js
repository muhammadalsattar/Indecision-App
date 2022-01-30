const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ["@babel/plugin-proposal-class-properties"]
                }
            }
        }, {
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public/'),
            publicPath: '/'
        }
    },
    devtool: 'eval-cheap-module-source-map'
    
}