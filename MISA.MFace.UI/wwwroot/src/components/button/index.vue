<template>
  <v-btn
    :absolute="absolute"
    :append="append"
    :block="block"
    :bottom="bottom"
    :color="color"
    :depressed="depressed"
    :disabled="disabled"
    :elevation="elevation"
    :exact="exact"
    :exact-active-class="exactActiveClass"
    :fab="fab"
    :fixed="fixed"
    :height="height"
    :href="href"
    :ico="ico"
    :large="large"
    :left="left"
    :link="link"
    :loading="loading"
    :max-height="maxHeight"
    :max-width="maxWidth"
    :min-width="minWidth"
    :min-height="minHeight"
    :outlined="outlined"
    :plain="plain"
    :replace="replace"
    :retain-focus-on-click="retainFocusOnClick"
    :right="right"
    :rounded="rounded"
    :small="small"
    :target="target"
    :text="text"
    :tile="tile"
    :to="to"
    :top="top"
    :type="type"
    :value="value"
    :width="width"
    :x-large="xLarge"
    :x-small="xSmall"
    @click="handleClick"
  >
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  name: "MintaxBtn",
  props: {
    /**
     * Thuộc tính absolute
     */
    absolute: Boolean,

    /**
     *
     */
    append: Boolean,

    /**
     * Thuộc tính block
     */
    block: Boolean,
    /**
     *
     */
    bottom: Boolean,
    /**
     * Màu sắc
     */
    color: String,

    /**
     * Loại bỏ shadow
     */
    depressed: {
      type: Boolean,
      default: true
    },
    /**
     * Disable
     */
    disabled: Boolean,

    /**
     * Độ sâu của nút
     * Khoảng từ 0-24px
     * Khi = 0px thì tương đương với props depressed
     */
    elevation: {
      type: Number,
      default: null
    },

    /**
     * Link đến
     */
    exact: Boolean,
    /**
     * Class khi link được active
     */
    exactActiveClass: String,

    /**
     * Kiểu nút round hình tròn
     */
    fab: Boolean,

    /**
     * Position fixed cho nút
     */
    fixed: Boolean,

    height: String,
    /**
     * Đặt href
     */
    href: String,

    /**
     * Btn dạng như một ico
     */
    ico: Boolean,

    /**
     * Kích cỡ nút large
     */
    large: Boolean,

    /**
     * Style left:0px
     */
    left: Boolean,

    /**
     * Nút như 1 dạng link
     */
    link: Boolean,

    /**
     * loading cho nút
     */
    loading: Boolean,

    maxHeight: String,
    maxWidth: String,
    minWidth: String,
    minHeight: String,

    /**
     * Dạng outline
     */
    outlined: Boolean,

    /**
     * Ẩn backgournd khi hover qua btn
     */
    plain: Boolean,

    /**
     *
     */
    replace: Boolean,

    /**
     * Không blur khi click
     */
    retainFocusOnClick: Boolean,

    /**
     * Style: right:0px
     */
    right: Boolean,

    /**
     * Border radius lớn hơn
     */
    rounded: Boolean,

    /**
     * Btn small
     */
    small: Boolean,

    /**
     * tạo thuộc tính target
     */
    target: String,

    /**
     * Làm background trong suốt
     */
    text: Boolean,
    /**
     * Không dùng border radius
     */
    tile: Boolean,

    /**
     * link
     */
    to: String,
    /**
     * style: top:0px
     */
    top: Boolean,
    type: {
      type: String,
      default: "button"
    },
    value: null,
    /**
     * Độ dài
     */
    width: String,

    xLarge: Boolean,
    xSmall: Boolean,
    handleClick: {
      type: Function,
      default: () => {}
    }
  }
};
</script>

<style>

</style>
  