<template>
  <div id="id" :class="componentClass">
    <span v-text="label" v-if="label" class="text-label text-lg-body-1"></span>
    <v-select
      :color="color"
      :solo="solo"
      :flat="flat"
      :single-line="singleLine"
      :item-value="itemValue"
      :item-text="itemText"
      :items="items"
      :height="height"
      :clearable="clearable"
      :label="labelSelect"
      :error-messages="null"
      :menu-props="menuProps"
      :placeholder="placeholder"
      :no-data-text="noDataText"
      clear-icon="ico-g-clear"
      :append-icon="appendIcon"
      v-model="itemSelected"
      :multiple="multiple"
      :loading="loading"
      :hide-details="hideDetails"
      :hide-selected="hideSelected"
      :autoSelectFirst="autoSelectFirst"
      :filter="filter"
      :filled="filled"
      :errorMessages="errorMessages"
      :error="error"
      :readonly="readonly"
      :returnObject="returnObject"
      :rules="rules"
      :smallChips="smallChips"
      :open-on-clear="openOnClear"
    >
    </v-select>
  </div>
</template>

<script>
export default {
  name: "MintaxComboBox",
  props: {
    id: String,
    label: String,
    labelSelect: String,
    color: String,
    prependInnerIcon: String,

    /**
     * Có hiển thị lại danh sách khi clear không
     */
    openOnClear:{
      type:Boolean,
      default: false
    },

    /**
     * Hiển thị message khi không có items data
     */
    noDataText: {
      type: String,
      default: "Không có kết quả hợp lệ."
    },
    
    /**
     * Có ẩn message detail validate không
     */
    hideDetails: {
      type: Boolean,
      default: false
    },

    /**
     * Có ẩn lựa chọn đã chọn trong danh sách không
     */
    hideSelected: {
      type: Boolean,
      default: false
    },

    /**
     * Title k di chuyển
     */
    singleLine: {
      type: Boolean,
      default: true
    },

    /**
     * Kiểu input đơn
     */
    solo: {
      type: Boolean,
      default: true
    },

    /**
     * Xóa bỏ box shadow
     */
    flat: {
      type: Boolean,
      default: true
    }
    ,
    /**
     * list Item
     */
    items: {
      type: Array,
      default: () => {}
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
      default: true
    },

    height: {
      type: Number,
      default: 40
    },

    menuProps: {
      type: Object,
      default: val => {
        return Object.assign({ offsetY: true }, val);
      }
    },

    appendIcon: {
      type: String,
      default: "ico-g-expand"
    },

    /**
     * Placcholder
     */
    placeholder: String,

    /**
     * Cho chọn nhiều
     */
    multiple: {
      type: Boolean,
      default: false
    },

    /**
     * Giảm chiều cao đầu vào của ô input
     */
    dense: {
      type: Boolean,
      default: false
    },
    /**
     * Đưa input vào trạng thái lỗi
     */
    error: {
      type: Boolean,
      default: false
    },

    /**
     * Danh sách lỗi tương ứng với rules
     */
    errorMessages: {
      type: Array,
      default: () => []
    },

    /**
     * Thay đổi kiểu đầu vào đã điền
     */
    filled: {
      type: Boolean,
      default: false
    },

    /**
     * Function lọc
     */
    filter: {
      type: Function,
      default: () => {}
    },

    /**
     * hiển thị loading
     */
    loading: {
      type: Boolean,
      default: false
    },

    /**
     * Luôn chọn phần tử query đầu tiên
     */
    autoSelectFirst: {
      type: Boolean,
      default: true
    },

    rules: {
      type: Array,
      default: () => []
    },

    /**
     * Resize chíp nhỏ đi
     */
    smallChips: Boolean,

    /**
     * Trả về object
     */
    returnObject: {
      type: Boolean,
      default: true
    },

    /**
     * Kiểu chỉ cho phép đọc
     */
    readonly: {
      type: Boolean,
      default: false
    },

    value: null,

    componentClass: String
  },

  model: {
    prop: "value",
    event: "change"
  },

  methods: {},

  computed: {
    itemSelected: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("change", val);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.text-label {
  margin-bottom: 8px;
}
</style>

