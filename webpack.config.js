const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';
const publicPath = process.env.PUBLIC_URL || '/';
const target = process.env.NODE_ENV === "production" ? "browserslist" : "web";
const config = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname,'dist'),
    publicPath:'/dist/',
    filename: '[name].js'

  },
  target:target,
  devtool: 'source-map',
  stats:{
      errorDetails:true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx','.css'],
  },
  mode: isDev ? 'development' : 'production',
  devServer: {
    static: {
      directory: path.join('dist'),
    },
    client: {
      progress: true,
    },
    hot:true,
    historyApiFallback:true,
    
  },
  plugins: [
      isDev && new ReactRefreshWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: 'src/index.html' }],
    }),
   isDev &&  new HtmlWebpackPlugin({
      // templateContent: ({ htmlWebpackPlugin }) => '<!DOCTYPE html><html><head><meta charset=\"utf-8\"><title>' + htmlWebpackPlugin.options.title + '</title></head><body><div id=\"app\"></div></body></html>',
      filename: '[name].html',
      template:path.resolve(__dirname,'src/index.html'),
      inject:true,
      publicPath:'auto'
    }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'disabled',
  generateStatsFile: true,
  // Excludes module sources from stats file so there won't be any sensitive data
  statsOptions: { source: false }
    }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
    }),
    new MiniCssExtractPlugin(),
   new CleanWebpackPlugin({
        dry:true,
        cleanOnceBeforeBuildPatterns: ['[name].js']
    })
  ].filter(Boolean),
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
};

module.exports = (env, argv) => {
  if (argv.hot) {
    // Cannot use 'contenthash' when hot reloading is enabled.

    config.output.filename='[name].js'
  
  }

  return config;
};