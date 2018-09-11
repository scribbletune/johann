const path = require('path');
const webpack = require('webpack');

module.exports = {
	mode: 'production',
	entry: {
		bundle: './src/index.js'
	},
	output: {
		// Use `docs` for the output for Github pages
		path: path.join(__dirname, 'docs'),
		filename: '[name].js',
		chunkFilename: '[name].js'
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					enforce: true,
					chunks: 'initial'
				}
			}
		}
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		},
		{
			test: /\.less$/, 
			loader: 'style-loader!css-loader!less-loader'
		}]
	},
	resolve: {
		alias: {
			'react': 'preact-compat',
			'react-dom': 'preact-compat'
		}
	},
	node: {
		fs: 'empty'
	}
};
