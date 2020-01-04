

module.exports = {

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
