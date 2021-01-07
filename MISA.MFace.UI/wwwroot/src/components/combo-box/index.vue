<template>
  <div id="id">
    <span v-text="label" v-if="label" class="text-label text-lg-body-1"></span>
    <v-combobox
      color="pink"
      :solo="solo"
      :flat="flat"
      :single-line="singleLine"
      :item-color="itemColor"
      :item-value="itemValue"
      :item-text="itemText"
      :items="items"
      :height="height"
      :clearable="clearable"
      :menu-props="menuProps"
      clear-icon="ico-g-clear"
      :append-icon="appendIcon"
      v-model="itemSelected"
      :allow-overflow="allowOverflow"
      :chips="chips"
      :deletable-chips="deletableChips"
      :delimiters="delimiters"
      :dense="dense"
      :disableLookup="disableLookup"
      :disabled="disabled"
      :error="error"
      :errorMessages="errorMessages"
      :filled="filled"
      :filter="filter"
      :autoSelectFirst="autoSelectFirst"
      :loading="loading"
      :multiple="multiple"
      :no-filter="noFilter"
      :open-on-clear="openOnClear"
      :outlined="outlined"
      :placeholder="placeholder"
      :readonly="readonly"
      :returnObject="returnObject"
      :rules="rules"
      :smallChips="smallChips"
      :validateOnBlur="validateOnBlur"
      :hideNoData="hideNoData"
      :value-comparator="valueComparator"
      :type="type"
      :hide-details="hideDetails"
      @blur="blur"
      @change="change"
      @click="click"
      @click-append="clickAppend"
      @click-clear="clickClear"
      @click:prepend="clickPrepend"
      @click:prepend-inner="clickPrependInner"
    >
    </v-combobox>
  </div>
</template>

<script>
export default {
  name: "MintaxComboBox",
  props: {
    menuProps: {
      type: Object,
      default: function () {
        return { offsetY: true };
      },
    },
    /**
     * cho phép overflow
     */
    allowOverflow: {
      type: Boolean,
      default: true,
    },

    /**
     *  Icon sổ xuống
     */
    appendIcon: {
      type: String,
      default: "ico-g-expand",
    },
    /**
     * Ô tích chọn
     */
    chips: {
      type: Boolean,
      default: false,
    },

    /**
     * Thêm mới icon xóa tới nút chíp
     */
    deletableChips: {
      type: Boolean,
      default: false,
    },

    /**
     * Cho phép 1 dãy các chuỗi sẽ thực thi 1 tag khi đang typing
     * Sẽ không thay đổi sự kiện nút Tab hay Enter key
     */
    delimiters: {
      type: Array,
      default: () => [],
    },

    /**
     * Giảm chiều cao đầu vào của ô input
     */
    dense: {
      type: Boolean,
      default: false,
    },
    /**
     * Khóa tính năng nhập bàn phím
     */
    disableLookup: {
      type: Boolean,
      default: false,
    },
    /**
     * Trạng thái disabled ô input
     */
    disabled: {
      type: Boolean,
      default: false,
    },

    /**
     * Đưa input vào trạng thái lỗi
     */
    error: {
      type: Boolean,
      default: false,
    },

    /**
     * Danh sách lỗi tương ứng với rules
     */
    errorMessages: {
      type: Array,
      default: () => [],
    },

    /**
     * Thay đổi kiểu đầu vào đã điền
     */
    filled: {
      type: Boolean,
      default: false,
    },

    /**
     * Function lọc
     */
    filter: {
      type: Function,
      default: () => {},
    },

    /**
     * hiển thị loading
     */
    loading: {
      type: Boolean,
      default: false,
    },
    /**
     * Cho chọn nhiều
     */
    multiple: {
      type: Boolean,
      default: false,
    },

    /**
     * Không lọc ki typing
     */
    noFilter: {
      type: Boolean,
      default: false,
    },

    /**
     * Mở khi clear dữ liệu trong ô input
     */
    openOnClear: {
      type: Boolean,
      default: false,
    },

    /**
     * Kiểu outline
     */
    outlined: {
      type: Boolean,
      default: false,
    },
    /**
     * Kiểu chỉ cho phép đọc
     */
    readonly: {
      type: Boolean,
      default: false,
    },

    /**
     * Luôn chọn phần tử query đầu tiên
     */
    autoSelectFirst: {
      type: Boolean,
      default: true,
    },
    id: String,
    label: String,
    /**
     * Title k di chuyển
     */
    singleLine: {
      type: Boolean,
      default: true,
    },
    /**
     * Kiểu input đơn
     */
    solo: {
      type: Boolean,
      default: true,
    },
    /**
     * Xóa bỏ box shadow
     */
    flat: {
      type: Boolean,
      default: true,
    },
    /**
     * list Item
     */
    items: {
      type: Array,
      default: () => {},
    },
    /**
     * trường chọn giá trị Item
     */
    itemValue: String,
    /**
     * Trường hiển thị item
     */
    itemText: String,

    /**
     * Màu sắc cho từng item
     */
    itemColor: String,
    /**
     * Có nút clear hay không
     */
    clearable: {
      type: Boolean,
      default: true,
    },
    /**
     * Độ cao cho thẻ input
     */
    height: {
      type: Number,
      default: 40,
    },

    /**
     * Placcholder
     */
    placeholder: String,

    returnObject: {
      type: Boolean,
      default: true,
    },

    rules: {
      type: Array,
      default: () => [],
    },

    /**
     * Resize chíp nhỏ đi
     */
    smallChips: Boolean,
    /**
     * Ẩn menu khi không chưa data
     */
    validateOnBlur: {
      default: true,
      type: Boolean,
    },

    hideNoData: {
      type: Boolean,
      default: true,
    },

    /**
     * Hàm chuyển đổi giá trị
     */
    valueComparator: {
      type: Function,
      default: () => Boolean,
    },

    hideDetails:{
      type:Boolean,
      default: true,
    },

    type: {
      type: String,
      default: "text",
    },
    itemCurrent: null,
  },
  model: {
    prop: "item-selected",
    event: "change",
  },
  data() {
    return {
      selectedItem: null,
    };
  },
  methods: {
    blur(val) {
      this.$emit("blur", val);
    },
    change(val) {
      this.$emit("change", val);
    },
    click(val) {
      this.$emit("click", val);
    },
    clickAppend(val) {
      this.$emit("click-append", val);
    },
    clickClear(val) {
      this.$emit("click-clear", val);
    },
    clickPrepend(val) {
      this.$emit("click:prepend", val);
    },
    clickPrependInner(val) {
      this.$emit("click:prepend-inner", val);
    },
  },

  computed: {
    itemSelected: {
      get() {
        return this.itemCurrent;
      },
      set(val) {
        this.$emit("change", val);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.text-label {
  margin-bottom: 8px;
}
</style>

