const path = require('path')
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ],
          },
          {
              test: /\.(png|svg|jpg|jpeg|gif)$/i,
              use: ['file-loader']
            },
        ]
      }
}