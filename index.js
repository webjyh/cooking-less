var load = require('./less-loader')

module.exports = function (cooking) {
  var loader
  var SOURCE_MAP = cooking.config.sourceMap

  if (process.env.NODE_ENV === 'production') {
    loader = load({
      sourceMap: SOURCE_MAP ? '#source-map' : false,
      extract: !!cooking.config.extractCSS
    })
  } else {
    loader = load()
  }

  cooking.add('loader.less', {
    test: /\.less$/,
    loader: loader.less
  })

}
