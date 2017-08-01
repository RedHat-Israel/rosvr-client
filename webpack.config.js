var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devtool: '#inline-source-map',
	devServer: {
		contentBase: './dist',
		disableHostCheck: true
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'OSVR Demo',
			template: './src/index.ejs',
		})
	],
	node: {
		fs: 'empty'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components|lib)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env'],
						plugins: ['transform-object-rest-spread']
					}
				}
			}
		]
	}
}
