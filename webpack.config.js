var path = require("path");
var config = {
   entry: './src/js/client.js',
	
   output: {
      path : path.resolve('./build'),
      filename : "client.min.js",
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['stage-0', 'es2015', 'react'],
               
            }
         }
      ]
   }
}

module.exports = config;