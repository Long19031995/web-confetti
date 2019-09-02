import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyCd3B2u6na1Tn8mH6VDTF4kyhwTstkTrl4",
  authDomain: "confetti-live.firebaseapp.com",
  databaseURL: "https://confetti-live.firebaseio.com",
  projectId: "confetti-live",
  storageBucket: "confetti-live.appspot.com",
  messagingSenderId: "266485291719",
  appId: "1:266485291719:web:55035f0c928c15e1"
}

firebase.initializeApp(firebaseConfig)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
