const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
//const {CleanWebpackPlugin} = require('clean-webpack-plugin');
         
module.exports = {               
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'index.bundle.js',
  },
  mode: 'development',
    devServer: {
      static: path.resolve(__dirname, './build'),
      port: 3000,
    },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'main page',
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
    }), 
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './src/img'),
          to: path.resolve(__dirname, './build/img'),
        },
        {
          from: path.resolve(__dirname, './src/fonts'),
          to: path.resolve(__dirname, './build/fonts'),
        },
      ],
    }),
    new webpack.HotModuleReplacementPlugin(),
    //new CleanWebpackPlugin(), // чистит итогувую папку перед повторной сборкой проекта
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
    },
    ],
  },
}