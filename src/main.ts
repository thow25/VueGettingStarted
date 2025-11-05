import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const message = Vue.createApp({
  // Data To Be Used In The Vue App
  data() {
    return {
      textMessage: 'Binding Vue Data with Text Interpolation!',
      vueAppClass: 'pinkBG',
      showOriginalMessage: true,
      errorMessage: 'An error has occurred. Unable to display the original message.',
      listOfShapes: ['Circle', 'Square', 'Triangle', 'Hexagon', 'Octagon'],
      inputText: '',
      didUserInputText: false,
    }
  },
  // TODO: Get this working
  // Methods To Be Used In The Vue App
  // methods: {
  //   updateMessage() {
  //     this.textMessage = 'Hello from Vue!'
  //   },
  // },
  // Watchers To Be Used In The Vue App
  // watch: {
  //   inputText(inputText.length > 0) {
  //     this.didUserInputText = true
  //   },
  // },
  // Computed Properties To Be Used In The Vue App
  // computed: {
  //   textMessage() {
  //     return this.inputText
  //   },
  // },
})

message.mount('#message')
