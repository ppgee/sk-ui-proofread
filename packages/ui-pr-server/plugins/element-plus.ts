import * as ElementPlus from 'element-plus/dist/index.full'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp: {
  vueApp: {
    use: (arg0: typeof ElementPlus) => void
  }
}) => {
  nuxtApp.vueApp.use(ElementPlus)
})