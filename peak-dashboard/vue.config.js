const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    public: 'mas.gecad.isep.ipp.pt:8080'
  }
})
