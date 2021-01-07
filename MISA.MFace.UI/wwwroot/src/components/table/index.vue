<template>
  <div class="misa-container-base-table">
    <v-data-table
      :headers="headers"
      :items="dataTables"
      :items-per-page="pageSize"
      :loading="tableLoading"
      :item-class="itemClass"
      hide-default-footer
      class="elevation-0 ma-0 pa-0"
      hide-default-header
      disable-pagination
      calculate-widths
      :no-data-text="noDataText"
      :loading-text="loadingText"
    >
    <template v-slot:loading>
      <mintax-loading :loading="tableLoading"></mintax-loading>
    </template>
      <template #header="{}">
        <thead class="misa-data-table-header">
          <tr class="misa-tr-thead">
            <th
              rowspan="2"
              class="text-center px-3"
              :class="[{ 'misa-th-thead': typeTable != tableType.Tbl_Simple }]"
            >
              <v-checkbox
                @change="getAllRowSelected"
                :indeterminate="((listSelectedRow.length < dataTables.length) && listSelectedRow.length > 0) ? true : false"
              ></v-checkbox>
            </th>
            <th
              :class="[{ 'misa-th-thead': typeTable != tableType.Tbl_Simple }]"
              v-for="(column, index) in headers"
              :key="index"
              class="parent-header"
              :rowspan="column.children ? 1 : 2"
              :colspan="column.children ? column.children.length : 1"
            >
              {{ column.text }}
            </th>
          </tr>
          <tr class="misa-tr-thead">
            <th
              :class="[{ 'misa-th-thead': typeTable != tableType.Tbl_Simple }]"
              v-for="(subColumn, subIndex) in getSubHeader(headers)"
              :key="subIndex"
              class="child-header"
            >
              {{ subColumn.text }}
            </th>
          </tr>
        </thead>
      </template>
      <template v-slot:item="{ item}">
        <tr
          @mouseover="selectItem(item)"
          @mouseleave="unSelectItem()"
          @click="getRowData"
          class="misa-tr-body"
          :class="[{'misa-selected-row': listSelectedRow.includes(item)}]"
        >
          <td
            class="text-center px-3"
            :class="[{ 'misa-td-border': typeTable != tableType.Tbl_Simple }]"
          >
            <v-checkbox
              v-model="listSelectedRow"
              :hideDetails="true"
              :value="item"
              @change="getRowSelected"
            ></v-checkbox>
          </td>
          <td
            v-for="(column, columnIndex) in getRows(item)"
            :key="columnIndex"
            @mousemove="selectColumn(columnIndex)"
            @mouseleave="unSelectColumn()"
            class="misa-td-tbody-table"
            :class="[
              getTextAlign(headers[columnIndex]),
              { 'misa-td-border': typeTable != tableType.Tbl_Simple },
            ]"
          >
            <!--dạng table 1
              Table chỉ có đường ngang kẻ ngang, hover cột sẽ hiển thị group các option
            -->
            <span v-if="typeTable == tableType.Tbl_Simple">
              <div
                v-if="
                  item === selectedItem &&
                  columnIndex === selectedColumn &&
                  column.header[columnIndex].editable
                "
                class="misa-group-button-table"
              >
                <!--btn edit-->
                <mintax-button
                  class="mx-2 misa-button-icon"
                  :maxWidth="'36px'"
                  :width="'36px'"
                  :height="'36'"
                  :small="true"
                  :rounded="true"
                  :handleClick="handleClickEdit"
                >
                  <div class="ico-g-edit"></div>
                </mintax-button>

                <!--btn delete-->
                <mintax-button
                  class="mx-2 misa-button-icon"
                  :maxWidth="'36px'"
                  :width="'36px'"
                  :height="'36'"
                  :small="true"
                  :rounded="true"
                  :handleClick="handleClickDelete"
                >
                  <div class="ico-r-delete"></div>
                </mintax-button>

                <!--btn more-->
                <mintax-button
                  class="mx-2 misa-button-icon"
                  :maxWidth="'36px'"
                  :width="'36px'"
                  :height="'36'"
                  :small="true"
                  :rounded="true"
                  :handleClick="handleClickMore"
                >
                  <div class="ico-g-menu-point"></div>
                </mintax-button>
              </div>

              <!--chip hiển thị trạng thái-->
              <v-chip
                v-else-if="
                  getTypeOfData(column.header[columnIndex]) == 'chip' &&
                  column.header[columnIndex].editable
                "
                :class="
                  getChipColorClass(column.header[columnIndex], column.infor)
                "
                label
              >
                <span>{{
                  convertContent(column.header[columnIndex], column.infor)
                }}</span>
              </v-chip>
              <span v-else>
                {{
                  getValueByType(
                    getTypeOfData(column.header[columnIndex]),
                    column.infor
                  )
                }}
              </span>
            </span>

            <!--dạng table 2
              Cột và hàng có border phân cách với nhau. Không có mục edit khi hover vào dòng hoặc cột
            -->
            <span v-if="typeTable == tableType.Tbl_grid">
              <!--chip hiển thị trạng thái-->
              <v-chip
                v-if="getTypeOfData(column.header[columnIndex]) == 'chip'"
                :class="
                  getChipColorClass(column.header[columnIndex], column.infor)
                "
                label
              >
                <span>{{ convertContent(column.header[columnIndex]) }}</span>
              </v-chip>
              <span v-else>
                {{
                  getValueByType(
                    getTypeOfData(column.header[columnIndex]),
                    column.infor
                  )
                }}
              </span>
            </span>

            <!--dạng table 3
              Cột và hàng có border phân cách với nhau. có thể edit ngay tại ô được chọn
            -->
            <span v-if="typeTable == tableType.Tbl_grid_v2">
              <!--chip hiển thị trạng thái-->
              <v-chip
                v-if="getTypeOfData(column.header[columnIndex]) == 'chip'"
                :class="
                  getChipColorClass(column.header[columnIndex], column.infor)
                "
                label
              >
                <span>{{ convertContent(column.header[columnIndex]) }}</span>
              </v-chip>

              <span v-else>
                {{
                  getValueByType(
                    getTypeOfData(column.header[columnIndex]),
                    column.infor
                  )
                }}
              </span>

              <!--btn edit-->
              <mintax-button
                class="mx-2 misa-btn-action-table misa-edit-btn"
                v-if="
                  !edit &&
                  column.header[columnIndex].editable &&
                  item === selectedItem &&
                  columnIndex === selectedColumn
                "
                :maxWidth="'36'"
                :width="'36'"
                :height="'36'"
                :handleClick="showEditOption"
                :small="true"
                :rounded="true"
                :absolute="true"
              >
                <div class="ico-g-edit"></div>
              </mintax-button>

              <div
                v-if="
                  edit &&
                  column.header[columnIndex].editable &&
                  columnIndex === selectedColumn &&
                  item === selectedItem
                "
                class="misa-group-button-table"
              >
                <mintax-input
                  v-if="column.header[columnIndex].editstyle == 'input'"
                  :height="36"
                  :value="column.infor"
                ></mintax-input>

                <mintax-select
                  v-else-if="column.header[columnIndex].editstyle == 'select'"
                  :items="[]"
                  item-text="name"
                  v-model="itemCurrent"
                  :height="36"
                ></mintax-select>

                <!-- <mintax-date-picker v-else-if="column.header[columnIndex].editstyle == 'date-picker'" v-model="itemSelectMonth" ></mintax-date-picker> -->

                <!--btn xác nhận lưu thay đổi-->
                <mintax-button
                  class="ma-1 misa-btn-action-table misa-save-table"
                  :maxWidth="'36'"
                  :width="'36'"
                  :height="'36'"
                  :small="true"
                  :rounded="true"
                  :absolute="true"
                  :handleClick="agreeChange"
                >
                  <div class="ico-r-check" style="color: red"></div>
                </mintax-button>

                <!--btn không lưu thay đổi-->
                <mintax-button
                  class="ma-1 misa-btn-action-table misa-cancel-table"
                  :maxWidth="'36'"
                  :width="'36'"
                  :height="'36'"
                  :small="true"
                  :rounded="true"
                  :absolute="true"
                  :handleClick="disAgreeChange"
                >
                  <div class="ico-r-close"></div>
                </mintax-button>

                <div v-if="edit" class="misa-wall-paper-button"></div>
              </div>
            </span>
          </td>
        </tr>
      </template>
      <template v-if="havePaging" v-slot:footer="{}">
        <footer>
          <v-row class="misa-paging-table ma-0">
            <v-col cols="4" class="misa-col-footer-table">
              <span class="text-lg-body-2">
                Tổng:
                <span class="text-lg-subtitle-1">{{ totalRecord }}</span>
              </span>
              <div class="misa-separator"></div>
              <span class="text-lg-body-2">
                Hiển thị:
                <span class="text-lg-subtitle-1">
                  {{
                    dataTables.length > 0
                      ? pageIndex * pageSize - pageSize + 1
                      : 0
                  }}
                  -
                  {{
                    dataTables.length > pageIndex * pageSize
                      ? pageIndex * pageSize
                      : dataTables.length
                  }}
                </span>
              </span>
            </v-col>
            <v-col cols="4" class="misa-col-footer-table">
              <v-row>
                <v-col
                  cols="7"
                  class="pa-0 px-1 d-flex justify-end align-center"
                >
                  <span class="text-lg-body-2">Số bản ghi/trang:</span>
                </v-col>
                <v-col cols="3" class="pa-0 select-item-per-page align-center">
                  <mintax-select
                    :clearable="false"
                    :items="lstItemPerPage"
                    item-text="name"
                    item-value="value"
                    :returnObject="false"
                    v-model="pageSize"
                    :height="36"
                    :hide-details="true"
                    @change="pageSize = $event"
                  ></mintax-select>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="4" class="misa-col-footer-table justify-end">
              <mintax-pagination
                :length="totalPage"
                @page-index="pageIndex = $event"
              ></mintax-pagination>
            </v-col>
          </v-row>
        </footer>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { TYPE_TABLE } from "@/enums/typeTable.js";
import { formatDate } from "@/utils/index.js";
import { formatMoney } from "@/utils/index.js";
import ChipEnum from "@/enums/chipEnum.js";
import Input from "@/components/inputs";
import Select from "@/components/select";
import Button from "@/components/button";
import Pagination from "../pagination";
import Loading from "@/components/loading";

export default {
  components: {
    "mintax-input": Input,
    "mintax-select": Select,
    "mintax-button": Button,
    "mintax-pagination": Pagination,
    "mintax-loading": Loading
  },

  props: {
    dataTables: {
      type: Array,
      default: null,
    },

    loadingText:{
      type: String,
      default: "Loading ..."
    },

    totalPage: {
      type: Number,
      default: 0
    },

    totalRecord: {
      type: Number,
      default: 0
    },

    singleSelect: {
      type: Boolean,
      default: false
    },

    itemClass: {
      type: String,
      default: "",
    },

    tableLoading: {
      type: Boolean,
      default: true
    },

    showSelect: {
      type: Boolean,
      default: true
    },

    headers: {
      type: Array,
      default: null
    },

    havePaging: {
      type: Boolean,
      default: true
    },

    selectItems: {
      type: Array,
      default: null
    },

    tableName: {
      type: String,
      default: "Tên Bảng"
    },

    typeTable: {
      type: String,
      default: ""
    },

    noDataText: {
      type: String,
      default: "Không có kết quả hợp lệ."
    },

    handleClickEdit: {
      type: Function,
      default: () => {},
    },

    handleClickDelete: {
      type: Function,
      default: () => {},
    },
  },

  data() {
    return {
      checked:false,
      itemCurrent: null,
      checkbox: false,
      selectedItem: [],
      selectedColumn: [],
      lstItemPerPage: [
        {
          name: "15",
          value: 15
        },
        {
          name: "25",
          value: 25
        },
        {
          name: "50",
          value: 50
        },
        {
          name: "100",
          value: 100
        }
      ],
      pageSize: 15,
      pageIndex: 1,
      tableType: {},
      edit: false,
      classChipEnum: {
        Primary: "misa-chip-primary",
        Default: "misa-chip-default",
        Secondary: "misa-chip-secondary",
        Warn: "misa-chip-warn",
        Error: "misa-chip-error",
      },
      selectedRow: null,
      listSelectedRow: [],
      isSelectAll: false,
      litRowIndex:[],
    };
  },

  methods: {
    /**
     * Hàm thực hiện lưu thay đổi khi người dùng edit nội dung trên bảng
     * created by nvnguyen 28/12/2020
     */
    agreeChange() {
      this.edit = false;
    },

    /**
     * Hàm thực hiện hủy thay đổi khi người dùng edit nội dung trên bảng
     * created by nvnguyen 28/12/2020
     */
    disAgreeChange() {
      this.edit = false;
    },

    /**
     * Hàm lấy màu cho chip theo trang thái truyền vào
     * create by nvnguyen 28/12/2020
     */
    getChipColorClass(column, value) {
      //trạng thái đang làm việc
      switch (column.value) {
        case "EmployeeStatus":
          if (value === ChipEnum.EMPLOYEE_STATUS[0].value) {
            return this.classChipEnum.Primary;
          } else {
            return this.classChipEnum.Default;
          }
        default:
          break;
      }
    },

    /**
     * Hàm trả về class định dạng text-align cho td
     * created by nvnguyen 04/01/2021
     */
    getTextAlign(value) {
      if (value) {
        switch (value.align) {
          case "start":
            return "text-left";
          case "center":
            return "text-center";
          case "end":
            return "text-right";
        }
      }
    },

    /**
     * hàm lấy type của dữ liệu(data, money, text,...)
     * created by nvnguyen 04/01/2021
     */
    getTypeOfData(value) {
      if (value) {
        if (value.children) {
          value.children.forEach((element) => {
            switch (element.type) {
              case "date":
                return "date";
              case "money":
                return "money";
              case "month":
                return "month";
              case "chip":
                return "chip";
              default:
                return "text";
            }
          });
        } else {
          switch (value.type) {
            case "date":
              return "date";
            case "money":
              return "money";
            case "month":
              return "month";
            case "chip":
              return "chip";
            default:
              return "text";
          }
        }
      }
    },

    /**
     * Hàm thực hiện trả về subHeader của bảng
     * created by nvnguyen 04/11/2021
     */
    getSubHeader(headers) {
      let result = [];
      headers
        .filter((i) => i.children)
        .forEach((v) => {
          result = result.concat(v.children);
        });
      return result;
    },

    /**
     * hàm lấy danh sách header và format lại
     * created by nvnguyen 04/01/2021
     */
    getlistHeader() {
      let tempHeader = [];
      this.headers.forEach((element) => {
        if (element.children) {
          element.children.forEach((subElement) => {
            tempHeader.push(subElement);
          });
        } else {
          tempHeader.push(element);
        }
      });
      return tempHeader;
    },

    /**
     * Hàm lấy giá trị từ data truyền vào để bind lên table
     * created by nvnguyen 04/01/2021
     */
    getRows(rows) {
      const result = [];
      let objectItem = {};
      let temptHeader = this.getlistHeader();
      let row = this.cleanDataBeforeMap(rows, temptHeader);
      Object.entries(row).forEach(([, value]) => {
        if (value && value.children) {
          Object.entries(value.children).forEach(([, subValue]) => {
            objectItem.infor = subValue;
            objectItem.header = temptHeader;
            let temptObjectChild = JSON.parse(JSON.stringify(objectItem));
            result.push(temptObjectChild);
          });
        } else {
          objectItem.infor = value;
          objectItem.header = temptHeader;
          let temptObjectParent = JSON.parse(JSON.stringify(objectItem));
          result.push(temptObjectParent);
        }
      });
      return result;
    },

    /**
     * Hàm thực hiện làm sạch dữ liệu từ Service trả về để map vào bảng dữ liệu
     * created by vdthang 06.01.2021
     */
    cleanDataBeforeMap(originRow, temptHeader) {
      var obj = {};
      temptHeader.forEach((item) => {
        obj[item.value] = originRow[item.value];

        if (item.children) {
          item.children.forEach((childItem) => {
            obj[item.value][childItem.value] =
              originRow[item.value][childItem.value];
          });
        }
      });
      return obj;
    },

    /**
     * Hàm thực thi khi có sự kiện mouseover lên row của table
     * created by nvnguyen 28/12/2020
     */
    selectItem(item) {
      this.selectedItem = item;
    },

    /**
     * Hàm thực thi khi có sự kiện mouseleave khỏi row của table
     * created by nvnguyen 28/12/2020
     */
    unSelectItem() {
      this.selectedItem = false;
      this.edit = false;
    },

    /**
     * Hàm thực thi khi có sự kiện mouseover lên column
     * created by nvnguyen 28/12/2020
     */
    selectColumn(index) {
      this.selectedColumn = index;
    },

    /**
     * Hàm thực thi khi có sự kiện mouseleave khỏi column của table
     * created by nvnguyen 28/12/2020
     */
    unSelectColumn() {
      this.selectedColumn = false;
      this.edit = false;
    },

    /**
     * Hàm trả về định dạng data theo kiểu dữ liệu
     * created by nvnguyen 04/01/2021
     */
    getValueByType(type, value) {
      switch (type) {
        case "date":
          return formatDate(value, "dd/mm/yyyy");
        case "money":
          return formatMoney(value, ".");
        case "month":
          return formatDate(value, "mm/yyyy");
        case "text":
          return value;
        default:
          return value;
      }
    },

    /**
     * Hàm trả về giá trị chip dạng nội dung chữ thay cho số
     * created by nvnguyen 29/12/2020
     */
    convertContent(column, value) {
      switch (column.value) {
        case "EmployeeStatus":
          if (value == ChipEnum.EMPLOYEE_STATUS[0].value) {
            return ChipEnum.EMPLOYEE_STATUS[0].name;
          } else {
            return ChipEnum.EMPLOYEE_STATUS[1].name;
          }
        case "DependentStatus":
          if (value == ChipEnum.DEPENDENT_STATUS[0].value) {
            return ChipEnum.DEPENDENT_STATUS[0].name;
          } else {
            return ChipEnum.DEPENDENT_STATUS[1].name;
          }
        case "Gender":
          if (value == ChipEnum.GENDER[0].value) {
            return ChipEnum.GENDER[0].name;
          } else {
            return ChipEnum.GENDER[1].name;
          }
      }
    },

    /**
     * Hàm hiển thị các thao tác edit nội dung ô dữ liệu khi click nút edit
     * creted by nvnguyen 28/12/2020
     */
    showEditOption() {
      this.edit = true;
    },

    /**
     * Hàm xử lý khi click nút more trên table
     * created by nvnguyen 06/01/2021
     */
    handleClickMore() {},

    /**
     * Hàm lấy dữ liệu của dòng khi click vào tr
     * created by nvnguyen 06/01/2021
     */
    getRowData() {},

    /**
     * Lấy thông tin dòng được chọn và emit ra component cha
     * creted by nvnguyen 06/01/2021
     */
    getRowSelected() {
      this.$emit("item-selected", this.listSelectedRow);
    },

    /**
     * Hàm kiểm tra chọn tất cả các dòng hay không
     * created by nvnguyen 06/01/2021
     */
    getAllRowSelected() {
      this.isSelectAll = !this.isSelectAll;
    },
  },

  created() {
    this.tableType = TYPE_TABLE;
  },

  watch: {
    /**
     * Lắng nghe thau đổi của biến isSelectAll chọn tất cả các dòng
     * emit dữ liệu sang component cha
     * created by nvnguyen 07/01/2021
     */
    isSelectAll(val) {
      if (val) {
        this.listSelectedRow = [];
        this.dataTables.forEach((element) => {
          this.listSelectedRow.push(element);
        });
        this.$emit("item-selected", this.listSelectedRow);
      } else {
        this.listSelectedRow = [];
        this.$emit("item-selected", this.listSelectedRow);
      }
    },

    /**
     * Lắng nghe thau đổi của biến pageIndex 
     * emit dữ liệu sang component cha
     * created by nvnguyen 07/01/2021
     */
    pageIndex(val){
      this.$emit("page-index", val);
    },

    /**
     * Lắng nghe thau đổi của biến pageSize 
     * emit dữ liệu sang component cha
     * created by nvnguyen 07/01/2021
     */
    pageSize(val){
      this.$emit("page-size", val);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.misa-container-base-table {
  width: 100%;
  height: 100%;

  .mintax-loading-circle{
    top: 48px;
    background-color: $BG-White;
  }

  .misa-data-table-header {
    .misa-tr-thead {
      th {
        position: sticky;
        top: 0;
        background-color: $BG-White;
        border-bottom: 1px solid $BG-Dark;
        z-index: 1;

        &:first-child {
          padding: 0 12px !important;
          width: 44px;
        }
      }

      .misa-th-thead {
        border-bottom: 1px solid $BG-Dark;
        border-left: 1px solid $BG-Dark;
        &:first-child {
          border-left: none;
        }
      }

      &:last-child {
        border-bottom: 1px solid $BG-Dark;
        .misa-th-thead {
          &:first-child {
            border-left: 1px solid $BG-Dark;
          }
        }
      }
      .child-header {
        &:first-child {
          width: auto !important;
        }
      }
    }
  }

  .misa-tr-body {
    .misa-td-border {
      border: 1px solid $BG-Dark;
      border-right: none;
      padding: 0 10px !important;
      &:first-child {
        border-left: none;
      }
    }

    &:first-child {
      .misa-td-border {
        border-top: none;
      }
    }

    &:not(:last-child) {
      .misa-td-border {
        border-bottom: none !important;
      }
    }

    .misa-td-tbody-table {
      padding: 0 10px;
      border-bottom: 1px solid $BG-Dark !important;

      span {
        font-size: $_font-14;
        color: $Body-Menu-Button;
      }

      position: relative;

      .misa-edit-btn {
        top: 6px;
        right: 0;
        background-color: $BG-White;
        &:hover {
          background-color: $B-Secondary;
        }
      }

      .misa-button-icon {
        background-color: $BG-White;

        &:hover {
          background-color: $BG-Dark;
        }
      }

      .misa-group-button-table {
        position: absolute;
        top: 0;
        left: 0;
        padding: 6px 3px;

        .misa-save-table {
          position: absolute;
          top: 3px;
          z-index: 2;
          right: -46px;
          background-color: $BG-White;
        }

        .misa-cancel-table {
          position: absolute;
          right: -92px;
          top: 3px;
          z-index: 2;
          background-color: $BG-White;
        }

        .misa-wall-paper-button {
          width: 92px;
          height: 48px;
          position: absolute;
          top: 0;
          z-index: 1;
          right: -92px;
        }
      }

      &:last-child {
        .misa-group-button-table {
          .misa-save-table {
            left: -46px !important;
          }

          .misa-cancel-table,
          .misa-wall-paper-button {
            left: -92px !important;
          }
        }
      }
    }

    .misa-chip-active {
      color: $Succes-Primary;
    }

    .misa-chip-unactive {
      color: $Heading;
    }
  }

  .misa-selected-row {
    background-color: $B-Secondary;
  }

  .misa-paging-table {
    border: 1px solid $BG-Dark;

    .misa-col-footer-table {
      display: flex;
      align-items: center;
      padding: 0 12px;

      .misa-separator {
        margin-left: 10px;
        margin-right: 10px;
        height: 16px;
        width: 1px;
        border-left: 1px solid $BG-Dark;
      }

      .select-item-per-page {
        height: 40px !important;
        padding-top: 2px !important;
      }
    }
  }
}
</style>