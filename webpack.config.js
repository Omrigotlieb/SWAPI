const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: {
                    loader: "babel-loader"
                }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
      test: /\.(gif|svg|jpg|png)$/,
      loader: 'url-loader?limit=100000'
    }
    ]
  },
  devServer: {
   contentBase: path.join(__dirname, "/client/public"),
   compress: true,
   port: 3000,
 }
};
