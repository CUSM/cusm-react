module.exports ={
  rules: [{
    test: /\.less$/,
    use: [{
      loader: 'style-loader'
    },{
      loader: 'css-loader'
    },{
      loader: 'less-loader',
      options: {
        modifyVars: {
          'primary-color': '#007bff',
          'link-color': '#007bff'
        }
      }
    }]
  }]
}