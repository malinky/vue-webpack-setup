module.exports = {
  // This is the "app" file which should include all other modules
  entry: './src/app.js',
  // Where should the compiled file go?
  output: {
    // To the `public` folder
    path: './public',
    publicPath: 'public/',
    // With the filename `app.js` so it's public/app.js
    filename: 'app.js'
  },
  module: {
    // Special compilation rules
    loaders: [
      {
        // Ask webpack to check: If this file ends with .js, then apply some transforms
        test: /\.js$/,
        // Transform it with babel
        loader: 'babel',
        // don't transform node_modules folder (which don't need to be compiled)
        exclude: /node_modules/
      },
      {
        // Ask webpack to check: If this file ends with .vue, then apply some transforms
        test: /\.vue$/,
        // Transform it with vue
        loader: 'vue'
      }
    ]
  },
  vue: {
    loaders: {
      js: 'babel'
    }
  }  
}