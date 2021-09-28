import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import CursorFx from '@luxdamore/vue-cursor-fx';
import '@luxdamore/vue-cursor-fx/dist/CursorFx.css';


Vue.config.productionTip = false

Vue.use(
  CursorFx
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
