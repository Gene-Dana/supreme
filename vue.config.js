const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  configureWebpack: () => {
    if (process.env.NODE_ENV !== 'production') return;
    return {
      plugins: [
        new PrerenderSPAPlugin(
          // Absolute path to compiled SPA
          path.resolve(__dirname, 'dist'),
          // List of routes to prerender
          [ '/'],
          [ '/home'],
          [ '/accordion'],
          [ '/panels'],
          [ '/free quote'],
          [ '/how to measrure'],
          [ '/rolldown'],

          {
            // options
          }
        ),
      ]
    }
  },

  "transpileDependencies": [
    "vuetify"
  ],

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/home',
        '/accordion',
        '/panels',
        '/free quote',
        '/how to measure',
        '/rolldown'
      ],
      useRenderEvent: false,
      headless: true,
      onlyProduction: true
    }
  }
}
