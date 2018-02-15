import { join } from 'path';

const include = join(__dirname, 'src');

export default {
  entry: ['babel-polyfill', './src/index'],
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'ephtrackingViz',
    libraryExport: 'default'
  },
  devtool: 'source-map',
  module: {
    loaders: [{ test: /\.js$/, loader: 'babel-loader', include }]
  }
};
