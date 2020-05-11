const GitVersionPlugin = require('@eloquent/git-version-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const { join } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const StatsPlugin = require('stats-webpack-plugin')
const { HotModuleReplacementPlugin } = require('webpack')
const WebpackbarPlugin = require('webpackbar')

module.exports = (_, { mode = 'development' } = {}) => {
  const isProduction = mode === 'production'

  const config = {
    mode,
    context: join(__dirname, 'src'),
    entry: {
      main: [
        './main.js'
      ]
    },
    output: {
      filename: isProduction ? '[name].hash~[contenthash].js' : '[name].js',
      path: join(__dirname, 'artifacts/webpack/build', mode),
      publicPath: '/'
    },
    devtool: 'source-map',
    plugins: [
      new GitVersionPlugin(),
      new MiniCssExtractPlugin({
        filename: isProduction ? '[name].hash~[contenthash].css' : '[name].css'
      }),
      new HtmlPlugin({
        title: 'Banque Dogmatique'
      }),
      new WebpackbarPlugin(),
      new StatsPlugin('.stats.json')
    ],
    resolve: {
      alias: {}
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /\/node_modules\//,
          use: [
            {
              loader: 'babel-loader',
              options: {
                sourceMaps: true
              }
            }
          ]
        },
        {
          test: /\.module\.css$/,
          exclude: /\/node_modules\//,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: !isProduction
              }
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: {
                  localIdentName: isProduction ? '[name]__[local]--[hash:base64:5]' : '[path][name]__[local]'
                },
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        },
        {
          test: /\.(gif|jpg|png)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: isProduction ? '[name].hash~[contenthash:20].[ext]' : '[path][name].[ext]'
              }
            }
          ]
        }
      ]
    }
  }

  if (!isProduction) {
    config.devServer = {
      hot: true,
      proxy: {
        '/api': {
          target: process.env.API_URL || 'http://localhost:3000',
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }

    config.plugins.push(new HotModuleReplacementPlugin())

    config.resolve.alias['react-dom'] = '@hot-loader/react-dom'
    for (const name in config.entry) config.entry[name].push('react-hot-loader/patch')
  }

  return config
}
