const { injectBabelPlugin } = require('react-app-rewired')

module.exports = function override (config, env) {
  console.log('injectBabelPlugin')
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
    config
  )
  return config
}
