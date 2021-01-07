<template>
  <v-menu :offset-y="offsetY">
    <template v-slot:activator="{ on, attrs }">
      <div class="v-btn-group__content">
        <v-btn
          class="btn-right"
          :small="small"
          :large="large"
          :x-small="xSmall"
          :x-large="xLarge"
          :disable="disable"
          :depressed="depressed"
          :minWidth="minWidth"
          :minHeight="minHeight"
          :maxWidth="maxWidth"
          :maxHeight="maxHeight"
          :outlined="outlined"
          :plain="plain"
          :right="right"
          :width="width"
          :color="color"
        >
          <slot></slot>
        </v-btn>
        <v-btn
          class="ico-dropdown"
          :small="small"
          :x-small="xSmall"
          :x-large="xLarge"
          :color="color"
          :disable="disable"
          :depressed="depressed"
          ico
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>ico-w-expand</v-icon>
        </v-btn>
      </div>
    </template>

    <v-list type="btn-list">
        <v-list-item v-for="(item, index) in dataDropdown" :key="index" @click="clickItem(item)" >
          <v-list-item-icon v-show="item.icon">
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content v-if="item.name">
            <v-list-item-title v-text="item.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  props: {

    offsetY:{
      type:Boolean,
      default: true,
    },
    items: {},
    /**
     * Màu cho button
     */
    color: String,
    /**
     * Chiều cao small
     */
    small: {
      type: Boolean,
      default: false,
    },
    /**
     * Chiều cao large
     */
    large: {
      type: Boolean,
      default: false,
    },

    /**
     * Chiều cao x-small
     */
    xSmall: {
      type: Boolean,
      default: false,
    },
    /**
     * Chiều cao x-large
     */
    xLarge: {
      type: Boolean,
      default: false,
    },

    disable: {
      type: Boolean,
      default: false,
    },

    /**
     * Xóa button box shadow
     */
    depressed: {
      type: Boolean,
      default: true,
    },
    /**
     * Xác độ độ dài tối thiểu
     */
    minWidth: {
      type: Number,
    },

    /**
     * Xác định độ cao tối thiểu
     */
    minHeight: {
      type: Number,
    },

    /**
     * Xác độ độ dài tối đa
     */
    maxWidth: Number,

    /**
     * Xác định độ cao tối đa
     */
    maxHeight: {
      type: Number,
    },

    outlined: {
      type: Boolean,
      default: false,
    },
    plain: {
      type: Boolean,
      default: false,
    },
    replace: {
      type: Boolean,
      default: false,
    },

    /**
     * Float right cho thẻ
     */
    right: {
      type: Boolean,
      default: false,
    },

    /**
     * Độ Dài cho button trái
     */
    width: {
      type: Number,
      default: null,
    },

    /**
     * Danh sách giá trị cho list
     */
    dataDropdown:{
      type:Array,
      default:null,
    }
  },

  data(){
    return {
    }
  },
  computed:{
    keyList(){
       if(!this.name){
        return null;
      }
      if(this.key){
        return this.key;
      }
      else {
        return this.name;
      }
    }

  },
  methods:{
    /**
     * Sự kiện Emit Item đã chọn cho component cha
     * Created by nbvinh2 29.12.2020
     */
    clickItem(val){
      this.$emit("click-item",val);
    },

  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/variables";
.v-btn-group__content {
  display: inherit;
  width: fit-content;
  .btn-right {
    padding-right: 12px !important;
    border-top-right-radius: 0px !important;
    border-bottom-right-radius: 0px !important;
  }

  .ico-dropdown {
    padding: 0 12px !important;
    min-width: 0px !important;
    border-top-left-radius: 0px !important;
    border-bottom-left-radius: 0px !important;
    border-left: 1px solid $B-Light !important;
  }
}
</style>