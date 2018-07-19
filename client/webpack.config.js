const path = require('path');
const webpack = require('webpack');
const copyWebpackPlugin = require('copy-webpack-plugin');

const env = process.env.NODE_ENV;
console.log(`********** webpack env=${JSON.stringify(env)} *********`);
const production = env === 'production';

var config = {
  mode: production ? 'production' : 'development',
  devtool: production ? '' : 'cheap-module-source-map',
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.join(__dirname, '../public'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env),
      },
    }),
    new webpack.HotModuleReplacementPlugin(), //required when run from wds cli
    new copyWebpackPlugin([path.resolve(__dirname, './index.html')]),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 3000,
    historyApiFallback: true,

    //#######################################################################
    //> https://github.com/webpack/webpack/issues/1151#issuecomment-343800515
    hot: true, // if you set `hot` to true within `devServer` section and run `webpack-dev-server` cli, you must
    // either `new webpack.HotModuleReplacementPlugin()`
    // or,
    // put `--hot` in cli options (which instruct wds to auto insert a HMRPlugin into your webpac.config.js)
    //#######################################################################

    proxy: { '/graphql': 'http://localhost:8081' },
  },
};
module.exports = config;
