const path = require("path");

module.exports = {
    entry: "./client/index.js",
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
           {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
           },
           {
              test: /\.css$/,
              use: [
                'style-loader',
                'css-loader'
             ]
           } 
        ]
    },
    mode: "development",
    devtool: 'source-map',
    devServer: {
      static: {
        directory: path.join(__dirname, 'public')
      },
      compress: true,
      port: 3000,  
   }  
}








// const path = require("path");

// module.exports = {
//     entry: {
//        index:  "./client/index.js",
//        another: "./client/another-module.js",
//        index: {
//         import: './client/index.js',
//         dependOn: 'shared',
//       },
//       another: {
//         import: './client/another-module.js',
//         dependOn: 'shared',
//       },
//       shared: 'lodash',
//     },    
//     output: {
//         path: path.join(__dirname, 'public'),
//         filename: '[name].js'
//     },
//     module: {
//         rules: [
//            {
//             test: /\.js$/,
//             exclude: /node_modules/,
//             loader: 'babel-loader'
//            }, 
//            {
//             test: /\.css$/,
//             use: [
//                  'style-loader',
//                  'css-loader'
//             ]
//           }
//         ]
//     },
//     mode: "development",
//     devtool: 'source-map',
//     devServer: {
//       static: {
//         directory: path.join(__dirname, 'public')
//       },
//       compress: true,
//       port: 3000,  
//    }  
// }