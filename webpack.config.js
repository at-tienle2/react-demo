const Webpack = require('webpack');
const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProduction = process.argv.indexOf('-p') >= 0;
const outPath = Path.join(__dirname, './dist');
const sourcePath = Path.join(__dirname, './src');

var extractCss = new ExtractTextPlugin({
  filename: 'style.css'
});

const scriptIncludes = [
  'script-loader!../node_modules/jquery/dist/jquery.min.js',
  'script-loader!../node_modules/bootstrap/dist/js/bootstrap.min.js',
  'script-loader!./assets/js/ui-load.js',
  //'script-loader!./assets/js/ui-jp.js',
  'script-loader!./assets/js/ui-include.js',
  'script-loader!./assets/js/ui-device.js',
  'script-loader!./assets/js/ui-form.js',
  'script-loader!./assets/js/ui-nav.js',
  'script-loader!./assets/js/ui-screenfull.js',
  'script-loader!./assets/js/ui-scroll-to.js',
  'script-loader!./assets/js/ui-toggle-class.js',
  'script-loader!./assets/js/ui-taburl.js'
];

module.exports = {
  context: sourcePath,
  entry: {
    main: './app/index.tsx',
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'redux'
    ],
    scripts: scriptIncludes,
    styles: [
      '../node_modules/font-awesome/scss/font-awesome.scss',
      './stylesheet/style.scss'
    ]
  },
  output: {
    path: outPath,
    publicPath: '/',
    filename: '[name].js',
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    // Fix webpack's default behavior to not load packages with jsnext:main module
    // https://github.com/Microsoft/TypeScript/issues/11677
    mainFields: ['browser', 'main']
  },
  module: {
    loaders: [
      // .ts, .tsx
      {
        test: /\.tsx?$/,
        use: isProduction
          ? 'awesome-typescript-loader?module=es6'
          : [
            'react-hot-loader/webpack',
            'awesome-typescript-loader'
          ]
      },
      {
        test: /\.scss$/,
        use: extractCss.extract({
          use: ['css-loader', 'sass-loader']
        })
      },
      // font
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=image/svg+xml'},
      {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=application/font-woff'},
      {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=application/octet-stream'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
      // static assets
      { test: /\.html$/, use: 'html-loader' },
      { test: /\.png$/, use: 'url-loader?limit=10000' },
      { test: /\.jpg$/, use: 'file-loader' },
    ],
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': isProduction === true ? JSON.stringify('production') : JSON.stringify('development')
    }),
    new Webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js',
      minChunks: Infinity
    }),
    new Webpack.optimize.AggressiveMergingPlugin(),
    extractCss,
    // new ExtractTextPlugin({
    //   filename: 'style.css',
    //   disable: !isProduction
    // }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  devServer: {
    contentBase: sourcePath,
    hot: true,
    stats: {
      warnings: false
    },
  },
  node: {
    // workaround for webpack-dev-server issue
    // https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
    fs: 'empty',
    net: 'empty'
  }
};
