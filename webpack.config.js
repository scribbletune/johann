const path = require('path');
const webpack = require('webpack');

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		// Use `docs` for the output for Github pages
		path: path.join(__dirname, 'docs'),
		filename: 'bundle.js'
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
	"resolve": {
		"alias": {
			"react": "preact-compat",
			"react-dom": "preact-compat"
		}
	},
	node: {
		fs: 'empty'
	}
};
