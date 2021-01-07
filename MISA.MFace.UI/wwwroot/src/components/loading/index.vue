<template>
  <div class="mintax-loading-circle" :class="overlayClass" v-if="loading">
    <div class="main-loading-circle" :class="backgroundClass">
      <v-progress-circular
        :button="button"
        :color="color"
        :indeterminate="indeterminate"
        :rotate="rotate"
        :size="size"
        :value="value"
        :width="width"
      >
        <slot></slot>
      </v-progress-circular>
    </div>
  </div>
</template>

<script>
export default {
  name: "MintaxLoading",
  props: {
    /**
     * Không dùng nữa, đang chờ xóa
     */
    button: Boolean,

    /**
     * class của overlay (div chứa khu vực loading)
     *
     */
    overlayClass: String,
    /**
     * class xung quanh div chứa loading
     */
    backgroundClass: String,
    /**
     * Màu loading
     */
    color: {
      type: String,
      default: "primary",
    },
    /**
     * Không xác định
     */
    indeterminate: {
      type: Boolean,
      default: true,
    },

    /**
     * Rotate
     */
    rotate: Number,
    /**
     * Kích cỡ
     */
    size: {
      type: Number,
      default: 36,
    },

    /**
     * Gia trị
     */
    value: Number,

    /**
     * Độ rộng của con loading
     */
    width: {
      type: Number,
      default: 2,
    },
    /**
     * Hiện loading
     */
    loading:Boolean,

  },
};
</script>

<style lang="scss">
@import "~@/styles/variables";
.mintax-loading-circle {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $BG-Light;
  z-index: 10;
}
</style>