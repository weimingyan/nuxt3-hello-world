export default defineNuxtConfig({
  modules: [ '@invictus.codes/nuxt-vuetify' ], 

  css: ['bootstrap/dist/css/bootstrap.min.css'], 
  
  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },

    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: true,
      useIconCDN: true,
      /* vite-plugin-vuetify options */
      styles: true ,
      autoImport: true,
    }
  }
})
