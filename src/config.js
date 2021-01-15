const merge = require('lodash/merge')

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    isDev: process.env.NODE_ENV !== 'production',
    basename: process.env.PUBLIC_URL,
    isBrowser: typeof window !== 'undefined',
  },
  test: {},
  development: {
    apiUrl: process.env.REACT_APP_API_URL,
    oauth: {
      clientId: process.env.REACT_APP_OAUTH_CLIENT_ID,
      clientSecret: process.env.REACT_APP_OAUTH_CLIENT_SECRET,
    },
    notificationURL: process.env.REACT_APP_NOTIFICATION_URL,
  },
  production: {
    apiUrl: process.env.REACT_APP_API_URL,
    oauth: {
      clientId: process.env.REACT_APP_OAUTH_CLIENT_ID,
      clientSecret: process.env.REACT_APP_OAUTH_CLIENT_SECRET,
    },
    notificationURL: process.env.REACT_APP_NOTIFICATION_URL,
  },

}

module.exports = merge(config.all, config[config.all.env])