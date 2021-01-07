<template>
  <div class="misa-container-content">
    <v-row class="mx-0 mt-0 mb-4 pa-0 misa-section-title">
      <v-col class="ma-0 pa-0" cols="12" align-self="center">
        <span class="text-md-h1">{{ titleView }}</span>
      </v-col>
    </v-row>
    <v-row class="ma-0 pa-0 misa-section-grid">
      <mintax-loading :loading="loadFirst && isFirstTime"></mintax-loading>
      <v-col class="ma-0 pa-6 misa-empty-grid" cols="12" v-if="isEmpty">
        <div class="misa-content-grid d-flex flex-column align-center justify-center">
          <img src="@/assets/images/empty-employee.png">
          <span class="text-md-caption text-md-center mt-4 mb-4">
            Hiện chưa có người nộp thuế.
            <br>Vui lòng thêm mới người nộp thuế.
          </span>
          <div class="misa-group-button d-flex align-center justify-center">
            <mintax-button class="mr-2" depressed color="b-info">
              <v-icon left>ico-g-reload</v-icon>Đồng bộ từ AMIS HRM
            </mintax-button>
            <mintax-button class="mr-2" depressed color="b-info">
              <v-icon left>ico-g-file</v-icon>Nhập khẩu từ Excels
            </mintax-button>
            <mintax-button color="b-primary">
              <v-icon left>ico-w-plus</v-icon>Tạo mới người nộp thuế
            </mintax-button>
          </div>
        </div>
      </v-col>
      <v-col class="ma-0 pa-0 misa-data-grid" cols="12" v-if="!isEmpty">
        <v-row class="misa-container-filter ma-0 pa-0 misa-height-40">
          <v-col
            class="misa-filter-left ma-0 py-0 pl-0 d-flex justify-start misa-height-40 misa-pr-10"
            cols="3"
          >
            <mintax-input
              prepend-inner-icon="ico-g-search"
              :hide-details="true"
              v-model="keyword"
              placeholder="Tìm kiếm theo họ và tên, mã nhân viên, mã số thuế, số CMND/CCCD/Hộ chiếu, ..."
            ></mintax-input>
          </v-col>
          <v-col
            class="misa-filter-left ma-0 py-0 pl-0 misa-pr-10 d-flex justify-start misa-height-40"
            cols="2"
          >
            <mintax-tree-select
              :items="organizationList"
              item-children="OrganizationUnitChilren"
              selectable
            ></mintax-tree-select>
          </v-col>
          <v-col
            class="misa-filter-left ma-0 py-0 pl-0 misa-pr-10 d-flex justify-start misa-height-40"
            cols="2"
          >
            <mintax-select
              :hide-details="true"
              :items="dataListStatus"
              item-value="value"
              item-text="name"
              v-model="employeeStatus"
              :returnObject="false"
              :open-on-clear="true"
              label-select="Trạng thái làm việc"
            ></mintax-select>
          </v-col>
          <v-col class="misa-filter-right ma-0 pa-0 d-flex justify-end misa-height-40" cols="5">
            <mintax-button-group color="b-primary" :flat="false" :dataDropdown="dataDropdownAdd">
              <v-icon left>ico-w-add-person</v-icon>Tạo mới người nộp thuế
            </mintax-button-group>
            <mintax-button icon class="misa-ml-10" color="b-info" :handleClick="getDataFromAPI">
              <v-icon>ico-g-reload</v-icon>
            </mintax-button>
          </v-col>
        </v-row>
        <v-row class="misa-container-table mx-0 mt-4 mb-0 pa-0">
          <mintax-table
            :total-page="totalPage"
            :total-record="totalRecord"
            :headers="headers"
            :data-tables="dataTables"
            :type-table="typeTable"
            :handleClickEdit="handleClickEdit"
            :handleClickDelete="handleClickDelete"
            :table-loading="loadSecond"
            @item-selected="listItemSelected =$event"
            @page-index="paging.pageIndex = $event"
            @page-size="paging.pageSize = $event"
          ></mintax-table>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Button from "@/components/button";
import ButtonGroup from "@/components/button-group";
import Input from "@/components/inputs";
import Select from "@/components/select";
import Table from "@/components/table";
import Loading from "@/components/loading";
import Tree from "@/components/tree-select";

export default {
  components: {
    "mintax-button": Button,
    "mintax-button-group": ButtonGroup,
    "mintax-input": Input,
    "mintax-select": Select,
    "mintax-table": Table,
    "mintax-loading": Loading,
    "mintax-tree-select": Tree
  },

  setup() {
    return {};
  },

  data() {
    return {
      // Phần thông tin chung
      titleView: "Hồ sơ người nộp thuế",
      isEmpty: true,

      // Phần thông tin dành cho filter
      dataDropdownAdd: [
        {
          icon: "ico-g-file",
          name: "Nhập khẩu từ file Excel"
        },
        {
          icon: "ico-g-reload",
          name: "Đồng bộ từ AMIS HRM"
        }
      ],
      dataListStatus: [
        {
          name: "Đã nghỉ việc",
          value: 0
        },
        {
          name: "Đang làm việc",
          value: 1
        }
      ],
      employeeStatus: "",
      keyword: "",
      paging: {
        pageIndex: 1,
        pageSize: 15,
        keyword: "",
        organizationUnitID: "",
        employeeStatus: "",
        isFilterTaxNo: 0
      },

      // Phần thông tin dành cho table
      headers: [
        {
          text: "Mã nhân viên",
          value: "EmployeeCode",
          align: "",
          editable: false,
          type: "text",
          width: "",
          editstyle: ""
        },
        {
          text: "Họ và tên",
          value: "FullName",
          align: "",
          editable: false,
          type: "text",
          width: "",
          editstyle: "",
          sortable: true
        },
        {
          text: "Bộ phận/Phòng ban",
          value: "OrganizationUnitName",
          align: "",
          editable: false,
          type: "text",
          width: "160",
          editstyle: ""
        },
        {
          text: "Vị trí/Chức vụ",
          value: "PositionName",
          align: "",
          editable: false,
          type: "text",
          width: "160",
          editstyle: ""
        },
        {
          text: "Số CMND/CCCD/Hộ chiếu",
          value: "CitizenIdentityNo",
          align: "",
          editable: false,
          type: "text",
          width: "120",
          editstyle: ""
        },
        {
          text: "MST Cá nhân",
          value: "TaxNo",
          align: "",
          editable: false,
          type: "text",
          width: "120",
          editstyle: "",
          sortable: true
        },
        {
          text: "Trạng thái làm việc",
          value: "EmployeeStatus",
          align: "",
          editable: true,
          type: "chip",
          width: "160",
          editstyle: ""
        }
      ],
      dataTables: [],
      typeTable: "style1",
      totalPage: 0,
      totalRecord: 0,

      // Phần cấu hình dành cho loading
      loadFirst: true,
      loadSecond: false,
      isFirstTime: true,

      // Phần data dành cho tree select
      organizationList: [
        {
          OrganizationUnitID: 1,
          OrganizationUnitName: "Khối sản xuất",
          OrganizationUnitChilren: [
            {
              OrganizationUnitID: 3,
              OrganizationUnitName: "Khối sản xuất"
            }
          ]
        },
        {
          OrganizationUnitID: 2,
          OrganizationUnitName: "Khối sản xuất"
        }
      ]
    };
  },

  methods: {
    /**
     * Hàm thực hiện gọi lấy dữ liệu phân trang nhân viên
     * created by vdthang 06.01.2021
     */
    async getDataFromAPI() {
      this.loadFirst = true;
      this.loadSecond = true;
      this.dataTables = [];
      // var res = await EmployeeAPI.getEmployeePaging(this.paging);
      // if (res.data && res.data.Success) {
      //   this.dataTables = res.data.Data.DataPaging;
      //   this.totalPage = res.data.Data.TotalPage;
      //   this.isEmpty = res.data.Data.IsEmpty;
      //   this.totalRecord = res.data.Data.TotalRecord;
      // } else {
      //   this.isEmpty = true;
      // }
      this.loadFirst = false;
      this.loadSecond = false;
      this.isFirstTime = false;
    },

    /**
     * Hàm xử lý khi click nút edit
     */
    handleClickEdit() {
      event.stopPropagation();
      alert("edit");
    },

    /**
     * Hàm xử lý khi click nút xóa
     */
    handleClickDelete() {
      event.stopPropagation();
      alert("Xóa");
    }
  },

  computed: {},

  watch: {
    employeeStatus: {
      handler(val) {
        if(val == null){
          val = "";
        }
        this.paging.employeeStatus = val;
      },
      deep: true
    },

    keyword:{
      handler(val){        
        this.paging.keyword = val;
      },
      deep: true
    },

    paging:{
      handler(val){
        if(val){
          this.getDataFromAPI();
        }
      },
      deep: true
    }
  },

  created() {
    this.getDataFromAPI();
  }
};
</script>

<style lang="scss" scoped>
.misa-container-content {
  padding-top: 16px;
  height: 100%;

  .misa-section-title {
    height: 40px;
  }

  .misa-section-grid {
    height: calc(100% - 56px);
    position: relative;

    .misa-empty-grid {
      background-color: $BG-White;
      border-radius: 6px;

      .misa-content-grid {
        height: 100%;
        border-radius: 6px;
        border: 1px dashed $Hint-Text;
      }
    }

    .misa-data-grid {
      height: 100%;

      .misa-container-table {
        height: calc(100% - 56px);
      }
    }
  }
}
</style>