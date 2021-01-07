
/// Cấu hình cho các plugin và các component dùng chung
/// Created by nvbinh2 25.12.2020
/// --------------------------------------------------------//

import Vue from 'vue'
// import upperFirst from 'lodash/upperFirst'
// import camelCase from 'lodash/camelCase'
import MintaxLoadingPlugin from "@/components/loading/register";
import MintaxLoading from "@/components/loading";

// Đăng kí plugin
Vue.use(MintaxLoadingPlugin);

// Đăng kí component 
Vue.component(MintaxLoading);

