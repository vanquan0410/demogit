
/// Thực đăng kí toàn cục cho việc loading toàn màn hình
/// Created by nvbinh2 05.01.2020
/// -----------------------------------------------------------///

// import { component } from "vue/types/umd";
import MintaxLoading from "./index.vue";

MintaxLoading.install = (Vue, options = {}) => {
    let LoadingComponent = Vue.extend({
        render:h => {
            return h(MintaxLoading, {
                 props:{
                     options:options
                 },
                 ref: "mintax-loading"   
            })
        }
    })
    var mountComponent = new LoadingComponent().$mount()
    document.body.appendChild(mountComponent.$el);
    Vue.prototype.$_loading = mountComponent.$refs['mintax-loading'];
}
export default MintaxLoading;