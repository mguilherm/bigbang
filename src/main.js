import Vue from 'vue'
import App from './App.vue'
import './assets/css/global.less'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBell, faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { faBolt, faPlus, faBars, faStore } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBell, faBolt, faPaperPlane, faPlus, faBars, faStore);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
