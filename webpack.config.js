const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		// Use `docs` for the output for Github pages
		path: path.join(__dirname, 'docs'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		},
		{
			test: /\.less$/, 
			loader: 'style-loader!css-loader!less-loader'
		}]
	},
	node: {
		fs: 'empty'
	}
};
