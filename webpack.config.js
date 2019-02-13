const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const path = require('path')

module.exports = async (env, argv) => {
  return {
    mode: argv.mode || 'none',
    entry: path.resolve(__dirname, 'src/client/index.jsx'),

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js'
    },

    module: {
      rules: [
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },

    resolve: {
      extensions: ['.js', '.jsx']
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'index.html'),
        filename: 'index.html'
      }),
      new CopyWebpackPlugin([{ from: 'static', to: 'static' }])
    ]
  }
}
