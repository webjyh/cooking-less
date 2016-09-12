var load = require('./less-loader')

module.exports = function (cooking) {
  var loader
  var SOURCE_MAP = cooking.config.devtool

  if (process.env.NODE_ENV === 'production') {
    loader = load({
      sourceMap: SOURCE_MAP ? '#source-map' : false,
      extract: !!cooking.config.extractCSS,
      postcss: !!cooking.config.postcss
    })
  } else {
    loader = load({
      postcss: !!cooking.config.postcss
    })
  }

  cooking.add('loader.less', {
    test: /\.less$/,
    loader: loader.less
  })

}
