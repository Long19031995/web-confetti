import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: 'AIzaSyClSzMYK_HHOWaiCwWVIdZ40VYfk-JaQz4',
  authDomain: 'pikalong-cft.firebaseapp.com',
  databaseURL: 'https://pikalong-cft.firebaseio.com',
  projectId: 'pikalong-cft',
  storageBucket: 'pikalong-cft.appspot.com',
  messagingSenderId: '308378526236',
  appId: '1:308378526236:web:7ca979cad87298d1'
}

firebase.initializeApp(firebaseConfig)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
