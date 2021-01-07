<template>
  <v-radio-group v-model="radioValue" label="label radiobutton">
    <div id="misa-radio-button-container">
      <slot name="radio"></slot>
      <!-- <v-radio label="Option 1" value="1" :ripple="false" color="misa-radio-btn"></v-radio>
      <v-radio label="Option 2" value="2" :ripple="false" color="misa-radio-btn"></v-radio> -->
    </div>
  </v-radio-group>
</template>

<script>
export default {
  data() {
    return {
      radioValue: "1",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

  .misa-radio-btn--text {
    color: $B-Primary !important;
    font-size: $_font-20 !important;
  }

  #misa-radio-button-container {
    display: flex;
    align-items: center;
    height: 40px;
  }
</style>

<style lang="scss" scoped>

</style>