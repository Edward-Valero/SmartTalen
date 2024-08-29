const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3003,
  },
  output: {
    publicPath: 'http://localhost:3003/',
  },
  module: {
    rules: [
        {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
              presets: ['@babel/preset-react'],
            },
          },
        ],
      },
      plugins: [
        new ModuleFederationPlugin({
          name: 'reports',
          filename: 'remoteEntry.js',
          exposes: {
            './ReportsApp': './src/App',
          },
          shared: ['react', 'react-dom'],
        }),
      ],
    };