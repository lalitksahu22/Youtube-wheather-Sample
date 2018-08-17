const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: [
    './src/index.js',
    
  ],
 
  output: {
    path: __dirname+"/dist",
    publicPath: '/',
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
      {
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    // { test: /(\.css$)/, loader:'style-loader'
    //  },
    // { test: /(\.css$)/, loader: 'css-loader'
    //   ,query: {
    //     modules:true,
    //     localIdentName:'[name]__[local]__[hash:base64:5]'
    //   }
    //  },
    {
      test: /\.(sa|sc|c)ss$/,
      use: [
        //devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
        MiniCssExtractPlugin.loader,
        'css-loader'
        // {
        //   loader:MiniCssExtractPlugin.loader,
        // },
       
        // {loader: 'css-loader'
        //   ,query: {
        //     modules:true,
        //     localIdentName:'[name]__[local]__[hash:base64:5]'
        //   }
        // }
      ],
    },
     { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
     {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {}
        }
      ]
    },
    {
      test: /\.html$/,
      loader: 'html-loader'
     
    }
  ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true
  },
  plugins: [
     new webpack.HotModuleReplacementPlugin(),
     new CleanWebpackPlugin(['dist']),
     new HtmlWebpackPlugin({template: './src/index.html',}),
     new MiniCssExtractPlugin({
      filename: "style/[name].css",
      chunkFilename: "[id].css",
    })
   
  ],
  devtool: 'inline-source-map',
 
};
