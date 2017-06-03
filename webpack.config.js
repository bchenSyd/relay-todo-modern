const path = require('path')
const webpack = require('webpack')

var config = {
  debug: true,
  devtool: 'source-map',
  entry: ['whatwg-fetch', path.resolve(__dirname, 'js', 'app.js')],
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
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      }]
  },
  devServer: {
    historyApiFallback: true,
    proxy: { '/graphql': `http://localhost:8081` }
  }
}
module.exports = config
