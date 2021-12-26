const withPWA = require('next-pwa')
const path = require('path')

const settings = {
  env: {},
  devIndicators: {
    autoPrerender: false,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
}

// module.exports =
//   process.env.NODE_ENV === 'development' ? settings : withPWA(settings)

module.exports = withPWA(settings)
