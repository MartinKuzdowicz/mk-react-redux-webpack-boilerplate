var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

loaders.push({
	test: /\.scss$/,
	loader: ExtractTextPlugin.extract('style', 'css?sourceMap&localIdentName=[local]___[hash:base64:5]!sass?outputStyle=expanded'),
	exclude: ['node_modules']
});

loaders.push({
	test: /\.scss$/,
	include: [/nowtv-web-toolkit/, '/src/assets/styles'],
	loader: ExtractTextPlugin.extract('style', [
		'css?sourceMap',
		'postcss',
		'sass?sourceMap&outputStyle=expanded'].join('!'))
});

loaders.push({
	test: /\.css$/,
	loader: ExtractTextPlugin.extract('style', 'css?sourceMap&localIdentName=[local]___[hash:base64:5]'),
	exclude: ['node_modules']
});

loaders.push({
	test: /\.js?$/,
	loader: 'babel',
	include: [/nowtv-web-toolkit/],
	query: {
		presets: ["es2015", "stage-1", "react"]
	}
});

module.exports = {
	entry: [
		'./src/app/index.jsx',
		'./src/assets/styles/index.scss'
	],
	output: {
		publicPath: '/',
		path: path.join(__dirname, 'public'),
		filename: '[chunkhash].js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders
	},
	plugins: [
		new WebpackCleanupPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				screw_ie8: true,
				drop_console: true,
				drop_debugger: true
			}
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.DedupePlugin(),
	    new ExtractTextPlugin("style.css", {
		      allChunks: true
		}),
		new HtmlWebpackPlugin({
			template: './src/app/template.html',
			files: {
				css: ['style.css'],
				js: [ "bundle.js"]
			}
		})
	]
};
