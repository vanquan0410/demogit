import { VBtn } from "vuetify/lib"
const baseMixins = mixins(VBtn);
import mixins from "vuetify/lib/util/mixins"

export default baseMixins.extend().extend({

    methods: {
        getContentBtn(){
            return this.$createElement('v-btn', {
                 small: this.small,
                 large: this.large,
            });
            
        },
        // getContentDropdown(){
        //     return this.$createElement('v-btn', {
        //         small: this.small,
        //         large: this.large,
        //    },this.$slots.default);

        // }
    },
    components: {
        'v-btn':VBtn
    },
    template:
        '<v-btn><slot ></slot> </v-btn>'
    
})
