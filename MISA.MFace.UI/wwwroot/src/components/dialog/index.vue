<template>
  <v-dialog v-model="open"
    :scrollable="scrollable"
    :closeDelay="closeDelay"
    :contentClass="contentClass"
    :disabled="disabled"
    :eager="eager"
    :fullscreen="fullscreen"
    :hideOverlay="hideOverlay"
    :internalActivator="internalActivator"
    :maxWidth="maxWidth"
    :noClickAnimation="noClickAnimation"
    :openDelay="openDelay"
    :openOnFocus="openOnFocus"
    :openOnHover="openOnHover"
    :origin="origin"
    :overlayColor="overlayColor"
    :overlayOpacity="overlayOpacity"
    :persistent="persistent"
    :retainFocus="retainFocus"
    :returnValue="returnValue"
    :transition="transition"
    :width="widthDialog"
    
    >
    <v-card>
      <v-card-title>
        <div v-text="title" class="text-lg-h1 "></div>
        <slot name="header" class="header-dialog"></slot>
        <v-icon class="ico-close" @click="open = !open">ico-g-close</v-icon>
      </v-card-title>
      <v-card-text>
        <v-container> 
            <slot name="body" class="body-dialog"></slot>
        </v-container>
      </v-card-text>
      <v-card-actions>
          <slot name="footer" class="footer-dialog"></slot>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "MinTaxDialog",

  props: {
    title: String,
    /**
     * Delay mở dialog
     */
    closeDelay:{
      type: Number,
      default: 0,
    },
    /**
     * class cho nội dung
     */
    contentClass: String,
    /**
     * disable dialog
     */
    disabled: Boolean,
    /**
     * dùng lại component
     */
    eager: Boolean,
    /**
     * Toàn màn hình
     */
    fullscreen: Boolean,

    /**
     * ẩn lớp phủ
     */
    hideOverlay:Boolean,

    internalActivator: Boolean,
    /**
     * Đồ dài max của component
     */
    maxWidth:{
      type:Number,
      default: null,
    },
    /**
     * 
     */
    noClickAnimation: Boolean,

    /**
     * Delay thời gian mở dialog
     */
    openDelay:{
      type:Number,
      default: 0,
    },

    /**
     * Tự động mở dilog khi focus
     */
    openOnFocus:Boolean,
    /**
     * mở dialog khi hover qua
     */
    openOnHover: Boolean,
    /**
     * 
     */
    origin:{
      type:String,
      default: 'center center'
    },

    /**
     * Màu lớp phủ
     */
    overlayColor: String,
    /**
     * Độ mờ của lớp phủ
     */
    overlayOpacity: String,

    /**
     * Click bên ngoài sẽ không hủy kích hoạt dialog
     */
    persistent: {
      type: Boolean,
      default: true,
    },

    /**
     * Tab Key sẽ quay lại phần tử đầu tiên của dialog
     */
    retainFocus:{
      type: Boolean,
      default: true,
    },

    returnValue:{
      type: Object,
      default: () => {},
    },

    transition: {
      type:String,
      default: ''
    },
    scrollable:Boolean,

    width:{
      type:String,
      default:'auto'
    },
    showDialog: Boolean,

    version: {
      type: Number,
      default: 1,
    },
    xl:{
      type:Array,
      default: () => {return []},
    },
    lg:{
      type:Array,
      default: () => {return []},
    },
    md:{
      type:Array,
      default: () => {return []},
    },
    sm:{
      type:Array,
      default: () => {return []},
    },
    xs:{
      type:Array,
      default: () => {return []},
    },
    guiter:{
      type: Array,
      default: function(){ return [8,8,8, 24,24]}
      
    },
    colList:{
      type: Array,
      default: function(){ return [8,8,8, 78,78]}
    } 
  },

  data() {
    return {
      widthDialog: 0,
      windowWidth: null,
    };
  },
  model:{
    prop:'showDialog',
    event:'change'
  },
  computed:{
    open:{
      get(){
        return this.showDialog;
      },
      set(val){
        this.$emit('change',val)
      }
    }
  },

  watch:{
    windowWidth(screenWith){
      console.log(screenWith);
      this.getWithDialog(screenWith);
    }
  },
  methods:{
    getWithDialog(screenWith){
      if(screenWith > 1920){
        this.widthDialog = this.xl[0] * this.colList[4] + this.xl[1]* this.guiter[4];
      }
      if(screenWith > 1260){
        this.widthDialog = this.lg[0] * this.colList[3] + this.lg[1]* this.guiter[3];
      }
    }
  },
  created() {
    this.windowWidth = window.innerWidth;
    window.addEventListener("resize", this.handleResize);
  },
};
</script>

<style lang="scss" scoped>
.footer-dialog{
  float: right;
}
</style>