<template>
  <v-pagination
    v-model="page"
    :length="length"
    :circle="circle"
    color="misa-btn-bg-active"
    page-aria-label="btn-none-active"
    prev-icon="ico24-g-back"
    next-icon="ico24-g-next"
  ></v-pagination>
</template>

<script>
export default {
  props: {
    length: {
      type: Number,
      default: 4,
    },

    circle: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      page: 1,
    };
  },

  watch: {
    /**
     * gửi giá trị page được chọn tới component cha
     * created by nvnguyen
     */
    page(val) {
      this.$emit("page-index", val);
    },
  },
};
</script>

<style lang="scss" >
@import "@/styles/variables.scss";
.misa-btn-bg-active {
  color: $B-Light !important;
  background-color: $B-Secondary !important;
  box-shadow: none;
  font-family: $_fontbold;
  font-size: $_font-13;

  &:focus {
    outline: none !important;
  }
}

[aria-label=btn-none-active] {
  box-shadow: none !important;  
  background-color: transparent !important;
  font-size: $_font-13;
  color: $Body-Menu-Button !important;

  &:hover {
    background-color: $BG-Light !important;
  }
  &:focus {
    outline: none !important;
  }
}
</style>>

