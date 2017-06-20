const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const plugins = [
  new ExtractTextPlugin('bundle.css')
]

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: '"production"' }
    }),

    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: { warnings: false }
    }),

    new webpack.LoaderOptionsPlugin({ minimize: true }))
}

const postcssLoader = {
  loader: 'postcss-loader',
  options: { sourceMap: 'inline' }
}

const loaders = {
  html: 'pug-loader',

  css: ExtractTextPlugin.extract({
    fallback: 'vue-style-loader',
    use: ['css-loader', postcssLoader]
  }),

  scss: ExtractTextPlugin.extract({
    fallback: 'vue-style-loader',
    use: ['css-loader', 'sass-loader', postcssLoader]
  }),

  sass: ExtractTextPlugin.extract({
    fallback: 'vue-style-loader',
    use: ['css-loader', 'sass-loader?indentedSyntax', postcssLoader]
  })
}

const rules = [
  {
    test: /\.(png|jpe?g|gif|svg|ttf|woff2?|eot)$/,
    loader: 'file-loader',
    options: { name: '[name].[ext]?[hash]' }
  },

  {
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/
  },

  {
    test: /\.vue$/,
    loader: 'vue-loader',
    options: { loaders }
  },

  {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: ['css-loader', postcssLoader]
    })
  },

  {
    test: /\.s[ac]ss$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: ['css-loader', 'sass-loader', postcssLoader]
    })
  }
]

module.exports = {
  entry: './app/app.js',

  output: {
    publicPath: '/dist/',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins,
  module: { rules },

  resolve: {
    alias: { vue$: 'vue/dist/vue.common.js' }
  },

  devServer: {
    hot: true,
    host: '0.0.0.0',
    historyApiFallback: true
  },

  devtool: '#source-map'
}
