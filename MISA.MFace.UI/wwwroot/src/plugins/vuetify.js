import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import "@/styles/overrides.scss";
import Ripple from 'vuetify/lib/directives/ripple';

Vue.use(Vuetify,{
  directives: {
    Ripple,
  },
});
Vuetify.config.silent = true;

const MINTAX_ICONS = {

}

export default new Vuetify({
  icons:{
    values:MINTAX_ICONS
  },
  theme: {
    disable:true,
  },
});
