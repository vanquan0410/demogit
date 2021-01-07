<template>
  <v-container fluid id="styleguideline">

      <v-row class="container v-flex">
          <v-col class="col-6 box">
              <div class="title">Typography và text</div>
                <div class="text-lg-h1">H1</div>
                <div class="text-lg-h2">H2</div>
                <div class="text-lg-h3">H3</div>
                <div class="text-lg-h4">H4</div>
                <div class="text-lg-subtitle-1">SubTitlte hoặc SubHeader</div>
                <div class="text-lg-body-1">Body 1</div>
                <div class="text-lg-body-2">Body 2</div>
                <div class="text-lg-button">Button</div>
                <div class="text-lg-caption">Caption</div>
                <div class="text-lg-overline">Over line hoặc hinttext</div>
          </v-col>
          <v-col class="col-6 box">
              <div class="title">Button</div>
              <div>
                  <div class="text-lg-body-2">Kích thước ICON</div>
                <mintax-button depressed color="b-primary" x-large
                :click="clickBtn">Nut Primary SMALL </mintax-button>
                <mintax-button depressed color="b-primary" large>Nut Primary Kích cỡ LARGE</mintax-button>
                <mintax-button depressed color="b-primary">Nut Primary MEDIUM </mintax-button>
                <mintax-button depressed color="b-primary" small>Nut Primary SMALL </mintax-button>
                <mintax-button depressed color="b-primary" x-small>Nut Primary SMALL </mintax-button>

              </div>
               <div>
                  <div class="text-lg-body-2">Button With ICon</div>
                <mintax-button depressed color="b-primary" ><v-icon left >ico-24 ico-w-upload</v-icon>Nút Icon Trái</mintax-button>on>
                
                <mintax-button-group color="b-primary" :dataDropdown="listItems"
                :selectItem.sync="selectItem"
                >
                  <span slot="slot-btn" >
                    Bình
                  </span>

                </mintax-button-group>
              </div>
            
          </v-col>
      </v-row>
    <v-row class="container v-flex">
      <v-col class="col-12 box">
        <div class="title">Table</div>
        <mintax-table
          :dataTables="tableData"
          :headers="headers"
          :typeTable="'style3'"
        >
        </mintax-table>
      </v-col>
    </v-row>

      <v-row class="container v-flex">
          <v-col class="col-6 box">
              <div class="title">Typography và text</div>
              <mintax-input label="Tôi là ai"
              :rules="[rules.required]"
              :value.sync="value"
              date
              ></mintax-input>
              <v-text-field label="tôi la ai"
              only-text
              solo
              height="40"
              flat
              prepend-inner-icon="ico-g-search"
              >
              <template slot:append>
                <v-icon>ico-g-search</v-icon>
              </template>
              </v-text-field>
              <mintax-input readonly></mintax-input>
              <mintax-input disabled :value="'123'"></mintax-input>
              <MintaxSelect :items="listItems"
              item-text="name"
              v-model="itemCurrent"
              ></MintaxSelect>

              <mintax-combo-box
              :items="listItems"
              item-text="name"
              
              >

              </mintax-combo-box>
                <mintax-combo-box
              :items="listItems"
              item-text="name"
              readonly
              >

              </mintax-combo-box>

          </v-col>
          <v-col class="col-6">
            <mintax-dialog
            title="Người nộp thuế"
            v-model="showDialog"
            :xl="[5,4]"
            :lg="[5,4]"
            >
            <template v-slot:body>
              <mintax-input label="Tôi là 1 người tốt" :error-messages="['lỗi validate']"
              :rules="rules"
              ></mintax-input>
              <mintax-input label="Tôi là 1 người tốt"></mintax-input>
              <mintax-input label="Tôi là 1 người tốt"></mintax-input>

              

            </template>
            <template v-slot:footer>
              <mintax-button depressed color="b-primary">123</mintax-button>
              <mintax-button depressed color="b-primary">12313</mintax-button>
              

            </template>
            </mintax-dialog>

            <mintax-tree-select :items="itemTree" selectable>

            </mintax-tree-select>
          </v-col>
      </v-row>
    <v-row class="container v-flex">
      <v-col class="col-6 box">
        <div class="title">Radio Button</div>
        <mintax-radio-button>
          <template v-slot:radio>
              <v-radio label="Option 1" value="1" :ripple="false" color="radio-btn"></v-radio>
              <v-radio label="Option 2" value="2" :ripple="false" color="radio-btn"></v-radio>
          </template>
        </mintax-radio-button>
      </v-col>
      <v-col class="col-6 box">
        <div class="title">Date picker</div>
        <mintax-date-picker v-model="itemSelectMonth" ></mintax-date-picker>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import MintaxDialog from "@/components/dialog";
import MintaxInput from "@/components/inputs";
import MintaxSelect from "@/components/select";
import MintaxTreeSelect from "@/components/tree-select";
import MintaxComboBox from "@/components/combo-box";
import MintaxDatePicker from "@/components/date-picker";
import MintaxTable from "@/components/table";
import MintaxButton from "@/components/button";
export default {
  components:{
    MintaxInput,MintaxSelect,MintaxComboBox,MintaxDialog,
    MintaxTreeSelect,MintaxDatePicker,
    'mintax-table': MintaxTable,
    'mintax-button':MintaxButton,
  },
  data() {
    return {
      selectItem: 1,
      value:"123125",
      rules:{
        required: value => !!value || 'Required.',
      },
      itemCurrent: null,
      showDialog: false,
      headers: [
        {
          text: "Mã nhân viên",
          value: "EmployeeCode",
          align: "center",
          sortable: true,
          filterable: true,
          editable: true,
          type: "text",
          width:"180",
          editstyle:'input'
        },
        {
          text: "ngày sinh",
          value: "time",
          align: "end",
          sortable: true,
          filterable: true,
          type: "date",
          editable: true,
          editstyle:'date-picker'
        },
        {
          text: "Họ tên",
          value: "name",
          align: "start",
          sortable: true,
          filterable: true,
          type: "text",
          editable: true,
          editstyle:'input'
        },
        {
          text: "Authen",
          value: "author",
          divider: true,
          children: [
            {
              text: "Giới tính",
              align: "start",
              sortabl: false,
              filterable: false,
              type: "text",
              editable: true,
              editstyle:'select'
            },
            {
              text: "head2",
              align: "start",
              sortabl: false,
              filterable: false,
              editable: true,
              type: "text",
              editstyle:'input'
            },
            {
              text: "head3",
              align: "start",
              sortabl: false,
              filterable: false,
              editable: false,
              type: "text",
              editstyle:'input'
            },
          ],
        },
        {
          text: "Cấp bậc",
          value: "klevel",
          align: "start",
          editable: false,
          type: "text",
        },
        {
          text: "Trạng thái",
          value: "EmployeeStatus",
          align: "start",
          type: "chip",
          editable: true,
          editstyle:'select'
        },
      ],

      tableData: [
        {
          EmployeeCode: "1001",
          time: "2019/09/24 12:32",
          name: "Nguyên",
          author: {
            children: {
              name: "infor",
              position: "abc",
              age: 19,
            },
          },
          klevel: "LV3",
          EmployeeStatus: 0,
        },
        {
          EmployeeCode: "1002",
          time: "2019/09/24 12:32",
          name: "Nguyên 2",
          author: {
            children: {
              name: "haha",
              position: "abc",
              age: 20,
            },
          },
          klevel: "LV3",
          EmployeeStatus: 0,
        },
      ],

      itemTree:[
        {
          OrganizationUnitID:1,
          OrganizationUnitName:"Chính là",
          OrganizationUnitsChildren: [
            {
              OrganizationUnitID:3,
              OrganizationUnitName:"Chính là",
            },
            {
              OrganizationUnitID:5,
              OrganizationUnitName:"Chính là",
            },
          ]
        },
        {
          OrganizationUnitID:2,
          OrganizationUnitName:"Tôi đây",
        }
      ],

      

    };
  },
  methods : {
    clickBtn(){
          console.log("tôi là ai");
      }
  }
};
</script>

<style lang="scss" scoped>
.box {
  background-color: white;

  .title {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid gray;
  }
}
</style>