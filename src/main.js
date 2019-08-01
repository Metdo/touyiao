import Vue from 'vue'
import App from './App.vue'

import router from './routers';

// Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),

  // 把router实例注入到vue实例中
  router,

}).$mount('#app')
