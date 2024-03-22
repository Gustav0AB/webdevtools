const HTMLWebpackPlugin = require('html-webpack-plugin')
require('dotenv').config({path: __dirname + '/.env'})


module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules:[
            {
                test: /\.s[ac]ss$/i,
                use: [ 'style-loader', 'css-loader', 'sass-loader']
            },
			{
			  test: /\.html$/i,
			  loader: 'html-loader'
			}
        ]    
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development'
}