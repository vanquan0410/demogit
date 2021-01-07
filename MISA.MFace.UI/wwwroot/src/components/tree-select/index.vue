<template>
  <div class="mintax--tree-select">
    <v-menu offset-y content-class="mintax--tree-select--menu">
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-bind="attrs"
          v-on="on"
          solo
          flat
          clear-icon="ico-g-clear"
          append-icon="ico-g-expand"
          height="40"
          readonly
        >
          <template v-slot:prepend-inner>
            <v-chip
              v-for="index in valueSelected"
              :key="index[itemKey]"
              close
              @click:close="close(index)"
              class="multiple-select--chip"
              >{{ index[itemText] }}</v-chip
            >
          </template>
        </v-text-field>
      </template>
      <v-treeview
        :activatable="activatable"
        :active="active"
        :active-class="activeClass"
        :color="colorTree"
        :dense="denseItem"
        :expand-icon="expandIcon"
        :filter="filter"
        :hoverable="hoverable"
        :indeterminate-icon="indeterminateIcon"
        :item-children="itemChildren"
        :item-disabled="itemDisabled"
        :item-key="itemKey"
        :item-text="itemText"
        :items="items"
        :load-children="loadChildren"
        :loading-icon="loadingIcon"
        :multiple-active="multipleActive"
        :open="open"
        :open-all="openAll"
        :open-on-click="openOnClick"
        :return-object="returnObject"
        :search="search"
        :selectable="selectable"
        :selected-color="selectedColor"
        :selection-type="selectionType"
        :shaped="shaped"
        :transition="transition"
        v-model="valueSelected"
      >
      </v-treeview>
    </v-menu>
  </div>
</template>

<script>
// import MintaxInput from "@/components/inputs"
export default {
  components: {
    // MintaxInput,
  },
  props: {
    /// Các prop đối với tree
    /// ---------------------------------////
    /**
     * Cho phép đánh dấu một node active bằng việc click lên node đó
     */
    activatable: {
      type: Boolean,
      default: false,
    },
    /**
     * Danh sách cho phép các node nào được active.
     * Giá trị là item-key của danh sách items
     */
    active: {
      type: Array,
      default: () => [],
    },
    /**
     * Class lúc active
     */
    activeClass: {
      type: String,
      default: "v-treeview-node--active",
    },
    /**
     * Màu sắc cho active node
     */
    colorTree: {
      type: String,
      default: "primary",
    },
    /**
     * Giảm chiều cao của item
     */
    denseItem: Boolean,

    // Icon mở ra
    expandIcon: {
      type: String,
      default: "ico-g-expand",
    },
    /**
     * Hàm lọc của function
     */
    filter: {
      type: Function,
      default: () => {},
    },

    /**
     * Thêm class khi hover qua node
     */
    hoverable: {
      type: Boolean,
      default: true,
    },

    /**
     * Icon check
     */
    indeterminateIcon: {
      type: String,
      default: "$checkboxIndeterminate",
    },

    /**
     * Property để chỉ lên danh sách node con của 1 node cha
     */
    itemChildren: {
      type: String,
      default: "OrganizationUnitsChildren",
    },

    /**
     * Property để chỉ đến property disable node
     */
    itemDisabled: {
      type: String,
      default: "disabled",
    },

    /**
     * Property để chỉ đến key của node
     */
    itemKey: {
      type: String,
      default: "OrganizationUnitID",
    },

    /**
     * Property để chỉ đến property hiển thị của node
     */
    itemText: {
      type: String,
      default: "OrganizationUnitName",
    },

    /**
     * Danh sách items
     */
    items: {
      type: Array,
      default: () => [],
    },

    /**
     * Hàm load các node con
     */
    loadChildren: {
      type: Function,
      default: () => null,
    },

    /**
     * Icon loading
     */
    loadingIcon: {
      type: String,
      default: "$loading",
    },

    /**
     * Cho phép chọn nhiều
     */
    multipleActive: {
      type: Boolean,
      default: false,
    },
    /**
     * Danh sách item sẽ sổ ra khi xuất hiện tree
     */
    open: {
      type: Array,
      default: () => [],
    },
    /**
     * Mở ra toàn bộ
     */
    openAll: Boolean,

    /**
     * Kích vào node sẽ mở ra node con thay vì kích vào icon mở
     */
    openOnClick: {
      type: Boolean,
      default: false,
    },

    /**
     * Trả về objet khi chọn
     */
    returnObject: {
      type: Boolean,
      default: true,
    },

    /**
     * Tìm kiếm cho kết quả bộ lọc
     */
    search: {
      type: String,
      default: null,
    },

    /**
     * render checkbox tiếp theo cho từng node đã được chọn
     */
    selectable: Boolean,
    /**
     * Màu khi select
     */
    selectedColor: {
      type: String,
      default: "accent",
    },
    selectionType: {
      type: String,
      default: "leaf",
    },
    /**
     * Kiểu tree shape
     */
    shaped: Boolean,

    /**
     * transition của node
     */
    transition: {
      type: Boolean,
      default: true,
    },

    /// Các prop đối với ô input để xổ ra danh sách
    /// -----------------------------------------------------///
  },

  data() {
    return {
      valueSelected: null,
    };
  },
  computed: {},

  methods: {
    close(val) {
      var index = this.valueSelected.findIndex(
        (x) => (x[this.itemKey] = val[this.itemKey])
      );
      this.valueSelected.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" >
@import "~@/styles/variables";

.mintax--tree-select {
  .multiple-select--chip {
  }

  .v-input--is-readonly {
    .v-input__control {
      .v-input__slot {
        background-color: $BG-White !important;
        border: 1px solid $Hint-Text !important;
      }
    }
  }
}

.mintax--tree-select--menu {
  background-color: $BG-White;
}
</style>