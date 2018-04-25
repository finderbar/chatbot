const path = require('path');
const glob = require('glob');

require('dotenv').config({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env',
});

module.exports = {
  webpack: (config) => {
    config.plugins = config.plugins.filter((plugin) => {
      if (plugin.constructor.name === 'UglifyJsPlugin') {
        return false
      }
      return true
    })

    return config
  },
}
