require('dotenv').config()
const path = require('path')
const webpack = require('webpack')
const AssetsPlugin = require('assets-webpack-plugin')
const pkg = require('../package.json')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const isDebug = global.DEBUG === false ? false : !process.argv.includes('--release')
const isVerbose = process.argv.includes('--verbose') || process.argv.includes('-v')
const useHMR = !!global.HMR
const babelConfig = Object.assign({}, pkg.babel, {
  babelrc: false,
  cacheDirectory: useHMR,
  presets: pkg.babel.presets.map(x => x === 'latest' ? ['latest', { es2015: { modules: false } }] : x), // eslint-disable-line
})

// http://webpack.github.io/docs/configuration.html
const config = {
  mode: isDebug ? 'development' : 'production',
  context: path.resolve(__dirname, '../src'),

  entry: [
    './main.js',
  ],

  // Options affecting the output of the compilation
  output: {
    path: path.resolve(__dirname, '../public/dist'),
    publicPath: isDebug ? `http://localhost:${process.env.PORT || 8080}/dist/` : '/dist/',
    filename: isDebug ? '[name].js?[fullhash]' : '[name].[fullhash].js',
    chunkFilename: isDebug ? '[id].js?[chunkhash]' : '[id].[chunkhash].js',
    sourcePrefix: '  ',
  },

  // Developer tool to enhance debugging, source maps
  // http://webpack.github.io/docs/configuration.html#devtool
  devtool: isDebug ? 'source-map' : false,

  // What information should be printed to the console
  stats: {
    colors: true,
    reasons: isDebug,
    hash: isVerbose,
    version: isVerbose,
    timings: true,
    chunks: isVerbose,
    chunkModules: isVerbose,
    cached: isVerbose,
    cachedAssets: isVerbose,
  },

  // The list of plugins for Webpack compiler
  plugins: [
    new webpack.DefinePlugin({
      // 'process.env.NODE_ENV' : isDebug ? '"development"' : '"production"',
      'process.env.MEMBERS_SEARCH_API' : JSON.stringify(process.env.MEMBERS_SEARCH_API) || '"http://localhost:3000"',
      'process.env.CLIENT_ID' : JSON.stringify(process.env.CLIENT_ID) || '',
      'process.env.API_KEY' : JSON.stringify(process.env.API_KEY) || '',
      'process.env.API_PASSWORD' : JSON.stringify(process.env.API_PASSWORD) || '',
      'process.env.ENDPOINT' : JSON.stringify(process.env.ENDPOINT) || '"http://localhost:3000"',
      // 'process.env': {
      //   // NODE_ENV: isDebug ? '"development"' : '"production"',
      //   // MEMBERS_SEARCH_API: JSON.stringify(process.env.MEMBERS_SEARCH_API) || '"http://localhost:3000"',
      //   // CLIENT_ID: JSON.stringify(process.env.CLIENT_ID) || '',
      //   // API_KEY: JSON.stringify(process.env.API_KEY) || '',
      //   // API_PASSWORD: JSON.stringify(process.env.API_PASSWORD) || '',
      //   ENDPOINT: JSON.stringify(process.env.ENDPOINT) || '"http://localhost:3000"',
      // },
      __DEV__: isDebug,
    }),
    // Emit a JSON file with assets paths
    // https://github.com/sporto/assets-webpack-plugin#options
    new AssetsPlugin({
      path: path.resolve(__dirname, '../public/dist'),
      filename: 'assets.json',
      prettyPrint: true,
    }),
    new webpack.LoaderOptionsPlugin({
      debug: isDebug,
      minimize: !isDebug,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, '../src'),
        loader: 'babel-loader',
        options: babelConfig,
      },
      {
        test: /\.css/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDebug,
              importLoaders: true,
              // CSS Modules https://github.com/css-modules/css-modules
              modules: {
                localIdentName: isDebug ? '[name]_[local]_[hash:base64:3]' : '[hash:base64:4]',
              },
              // CSS Nano http://cssnano.co/options/
              // minimize: !isDebug,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, "./postcss.config.js"),
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|webp)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
      {
        test: /\.(eot|ttf|wav|mp3)$/,
        loader: 'file-loader',
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin(),
      new CssMinimizerPlugin(),
    ],
  },
}

// Optimize the bundle in release (production) mode
if (!isDebug) {
  // config.plugins.push(new webpack.optimize.UglifyJsPlugin({
  //   sourceMap: true,
  //   compress: {
  //     warnings: isVerbose,
  //   },
  // }))
  config.plugins.push(new webpack.optimize.AggressiveMergingPlugin())
}

// Hot Module Replacement (HMR) + React Hot Reload
if (isDebug && useHMR) {
  babelConfig.plugins.unshift('react-hot-loader/babel')
  config.entry.unshift('react-hot-loader/patch', 'webpack-hot-middleware/client')
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
  config.plugins.push(new webpack.NoEmitOnErrorsPlugin())
}

module.exports = config
