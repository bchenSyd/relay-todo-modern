const path = require('path');
const webpack = require('webpack');

const isVendorModule = (module) => {
  const white_list = ['react-relay','relay-runtime'];
  if(module.context){
    if(white_list.find(m=> module.context.indexOf(m) !== -1 )){
      return false; // don't put it into vendor.js
    }
    return module.context.indexOf('node_modules') !== -1;
  }
  return false;
}

var config = {
  debug: true,
  entry: {
    vendor: ['whatwg-fetch'],
    a: path.resolve(__dirname, 'js', 'app.js'),
  },
  output: {
    // easy to understand. where do you want to store the linked [filename] at server side? (client needs to download bundle.js first from server)
    // you will only notice this when you do a build (wds store files in memory)
    path: path.join(__dirname, 'public'),
    //                  first thought
    // [virtual directory] say you store the bundle.js in "./foo/bundle.js", what url do you want to allocate for it?
    // http://localhost:8000/foo/bundle.js, or http://localhost:8000/bar/bundle.js, or http://localhost:8000/bundle.js
    // the <script src="url_for_bundle.js"/> need to match this
    // BUT, is it should be a wds config rather than webpack config?? (wds cli has --content-base which allow to specify directory for '/' which is virtual)
    //                  more thoughts
    // the author of webpack created this `publicPath` property for `loader` providers
    // e.g. css-loader needs to handle the `url("imag/greentick.png")`, but where to fetch the png file?
    // the author of `css-loader` may refer to webpack.config.publicPath to figure it out if he/she likes (most don't, which render this configuration meaningless)
    // `wds` also take a hint from it, which is where the [virtual directory] thing comes from
    filename: '[name].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      //PRODUCTION: JSON.stringify(true), must have JSON.stringify !!
      '__WSENV__': JSON.stringify('http://localhost:8081'),
    }),

    /** you don't want to generate source map for vendor code; 8M -> 1M
     * https://github.com/webpack/webpack/issues/2431#issuecomment-293281981
     */
    // Seperate vendor code into a seperate file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: isVendorModule
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
      exclude: [
        'vendor.js',
      ]
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
      }],
  },
  devServer: {
    historyApiFallback: true,
    proxy: {'/graphql': 'http://localhost:8081'},
  },
};
module.exports = config;
