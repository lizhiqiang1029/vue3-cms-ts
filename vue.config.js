module.exports = {
  publicPath: '/',
  // outputDir: './build',
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    }
  }
}
