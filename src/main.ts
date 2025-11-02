import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const message = Vue.createApp({
  data() {
    return {
      message: 'Binding Vue Data with Text Interpolation!',
      vueAppClass: 'pinkBG',
      showOriginalMessage: true,
      errorMessage: 'An error has occurred. Unable to display the original message.',
      listOfShapes: ['Circle', 'Square', 'Triangle', 'Hexagon', 'Octagon'],
    }
  },
})

message.mount('#message')
