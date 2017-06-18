import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const loaders = {
  html: 'pug-loader',

  css: ExtractTextPlugin.extract({
    use: 'css-loader',
    fallback: 'vue-style-loader'
  }),

  scss: ExtractTextPlugin.extract({
    fallback: 'vue-style-loader',
    use: ['css-loader', 'sass-loader']
  }),

  sass: ExtractTextPlugin.extract({
    fallback: 'vue-style-loader',
    use: ['css-loader', 'sass-loader?indentedSyntax']
  })
}

const rules = [
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
    test: /\.s[ac]ss$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: ['css-loader', 'sass-loader']
    })
  }
]

export default {
  entry: './app/app.js',

  output: {
    publicPath: '/dist/',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
    new ExtractTextPlugin('bundle.css')
  ],

  module: { rules },

  resolve: {
    alias: { vue$: 'vue/dist/vue.common.js' }
  },

  devServer: {
    hot: true,
    host: '0.0.0.0',
    historyApiFallback: true
  }
}
