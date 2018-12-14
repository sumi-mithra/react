const path = require('path');
const options = {
    host:'localhost',
    port:'1234'
  };

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.join(__dirname,'src'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    

    devServer: {
        contentBase: path.join(__dirname,'src'),
        host: options.host,
      port: options.port 
    }
    
    
}