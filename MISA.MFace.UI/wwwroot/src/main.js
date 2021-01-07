
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import vuetify from './plugins/vuetify';
import "@/plugins/base.js";
import "@/styles/mintax-base-custom.scss";

// Vue.use(money);
Vue.use(router);

// Vue.config.devtools = false;
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");

