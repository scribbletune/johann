const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
	mode: 'production',
	entry: {
		bundle: './src/index.tsx'
	},
	output: {
		// Use `docs` for the output for Github pages
		path: path.join(__dirname, 'docs'),
		filename: '[name].js',
		chunkFilename: '[name].js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/template.html'
		})
	],
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
	devtool: 'source-map',
	module: {
		rules: [
			{ test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ },
			{ test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
			// { enforce: 'pre', test: /\.js?$/, loader: 'source-map-loader' }
		]
	},
	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: ['.ts', '.tsx', '.js', '.json'],
		alias: {
			'react': 'preact-compat',
			'react-dom': 'preact-compat'
		}
  },
  devServer: {
    contentBase: path.join(__dirname, 'docs'),
    compress: true
  },
	node: {
		fs: 'empty'
	}
};
