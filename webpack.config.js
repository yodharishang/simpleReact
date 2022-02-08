const path = require('path');
const webpack = require('webpack');
const htmlWebPlug = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env','@babel/preset-react']
        }
        }
        },
      {
          test:/\.css$/,
          use:['style-loader','css-loader']
      },
      {
        test: /\.html$/i,
        use: "html-loader",
      },
      {
    test: /\.html$/,
    exclude: [/node_modules/, require.resolve('./dist/index.html')],
    use: {
        loader: 'file-loader',
    },
},
    ],
  },
  stats:{

    children:true
  },
  resolve: {
    extensions: ['*', '.js', '.jsx','.css'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    clean:true
  },
  plugins: [new webpack.HotModuleReplacementPlugin(),new htmlWebPlug(/*{
      template:path.resolve(__dirname,'./dist/index.html')
  }*/)],
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    hot: true,
    historyApiFallback:true
  },
};
