import Vue from 'vue'
import App from '../src/App.vue';
import router from '../src/router'
import store from '../src/store'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import Mixins from '../src/plugins/mixins'
import antdv from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.prototype.$http = axios;
Vue.use(Mixins);
Vue.use(antdv);
Vue.config.productionTip = false
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
