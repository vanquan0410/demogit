<template>
  <div class="mintax-date-picker" type="mintax-date-picker" :id="id">
    <v-menu
      offset-y
      :close-on-click="true"
      :close-on-content-click="false"
      v-model="menu"
    >
      <template v-slot:activator="{ on, attrs }">
        <mintax-input
          v-model="timeSelected.dateSelected"
          type="date"
          placeholder="_ _/_ _/_ _ _ _"
          @keydown="keydown"
        >
          <template v-slot:append>
            <v-icon v-on="on" v-bind="attrs">ico-g-calendar</v-icon>
          </template>
        </mintax-input>
        >
      </template>
      <div class="menu-date-picker">
        <div class="date-picker--header">
          <div class="search-bar">
            <mintax-select
              :clearable="false"
              append-icon="ico-g-up-down"
              dense
              :items="listMonths"
              item-value="value"
              item-text="text"
              :hide-details="true"
              :menu-props="{
                contentClass: 'month-picker-menu',
                offsetY: true,
                auto: true,
              }"
              v-model="timeSelected.monthSelected"
              :returnObject="false"
            ></mintax-select>
            <mintax-select
              :hide-details="true"
              :clearable="false"
              append-icon="ico-g-up-down"
              dense
              :items="listYears"
              item-value="value"
              item-text="text"
              :menu-props="{
                contentClass: 'month-picker-menu',
                auto: true,
                offsetY: true,
              }"
              v-model="timeSelected.yearSelected"
              :returnObject="false"
              
            ></mintax-select>

            <div class="next-prev-bar">
              <div class="icon-date-picker">
                <v-icon @click="backMonth">ico24-g-back</v-icon>
              </div>
              <div class="icon-date-picker next-icon">
                <v-icon @click="nextMonth">ico24-g-next</v-icon>
              </div>
            </div>
          </div>
        </div>
        <VDatePickerDateTable
          :tableDate="tableDate"
          :showCurrent="showCurrent"
          @input="clickDateBtn"
          :value="timeSelected.dateSelected"
          :color="color"
          @
        ></VDatePickerDateTable>
      </div>
    </v-menu>
  </div>
</template>

<script>
import { VDatePickerDateTable } from "vuetify/lib";
import { wrapInArray } from "vuetify/lib/util/helpers";
// import { daysInMonth } from 'vuetify/lib/components/VCalendar/util/timestamp'
import { pad } from "vuetify/lib/components/VDatePicker/util";
import MintaxSelect from "../select";
import MintaxInput from "../inputs";
// import {formatDate} from "@/utils";
function sanitizeDateString(dateString, type) {
  const [year, month = 1, date = 1] = dateString.split("-");
  return `${year}-${pad(month)}-${pad(date)}`.substr(
    0,
    {
      date: 10,
      month: 7,
      year: 4,
    }[type]
  );
}

export default {
  components: {
    VDatePickerDateTable,
    MintaxSelect,
    MintaxInput,
  },
  props: {
    id: String,
    showCurrent: {
      type: [Boolean, String],
      default: true,
    },
    pickerDate: String,
    firstDayOfWeek: {
      type: [String, Number],
      default: 0,
    },
    localeFirstDayOfYear: {
      type: [String, Number],
      default: 0,
    },

    showAdjacentMonths: Boolean,
    showWeek: Boolean,
    weekdayFormat: Function,
    type: {
      type: String,
      default: "date",
      validator: (type) => ["date", "month"].includes(type),
    },
    color: String,
    value: null,
    formatDate: {
      type: String,
      default: "dd/mm/yyyy",
    },
  },
  data() {
    const now = new Date();
    return {
      listMonths: [
        {
          value: 0,
          text: "Tháng 01",
        },
        {
          value: 1,
          text: "Tháng 02",
        },
        {
          value: 2,
          text: "Tháng 03",
        },
        {
          value: 3,
          text: "Tháng 04",
        },
        {
          value: 4,
          text: "Tháng 05",
        },
        {
          value: 5,
          text: "Tháng 06",
        },
        {
          value: 6,
          text: "Tháng 07",
        },
        {
          value: 7,
          text: "Tháng 08",
        },
        {
          value: 8,
          text: "Tháng 09",
        },
        {
          value: 9,
          text: "Tháng 10",
        },
        {
          value: 10,
          text: "Tháng 11",
        },
        {
          value: 11,
          text: "Tháng 12",
        },
      ],

      listYears: (() => {
        var list = [];
        for (var i = 1900; i < 2100; i++) {
          list.push({
            text: `Năm ${i}`,
            value: i,
          });
        }
        return list;
      })(),

      timeSelected: {
        monthSelected: now.getMonth(),
        yearSelected: now.getFullYear(),
        dateSelected: now.getDate(),
      },
      menu: false,
      inputDate: "",

      listKeywordActive: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "-",
        "/",
        "Backspace",
        "Delete",
      ],
    };
  },

  watch: {
    value(val) {
      console.log(val);
    },

    inputDate(date){
      console.log(date);
    },
    /**
     * Lắng nghe thay đổi của ngày
     */
    'timeSelected.dateSelected': function(val){
       var date = new Date(val);
       var dateMonth = date.getMonth();
       var dateYear = date.getFullYear();

       if(dateMonth != this.timeSelected.monthSelected){
         this.timeSelected.monthSelected = dateMonth;
       } 
       if(dateYear != this.timeSelected.yearSelected){
         this.timeSelected.yearSelected = dateYear;
       }
    }

  },

  model: {
    prop: "timeSelected",
    event: "change",
  },
  computed: {
    itemSelected: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("change", val);
      },
    },

    /**
     * Tháng năm cho bảng
     * created by nvbinh2 
     */
    tableDate() {
      if (this.pickerDate) {
        return this.pickerDate;
      }

      const multipleValue = wrapInArray(this.value);
      const date =
        multipleValue[multipleValue.length - 1] ||
        (typeof this.showCurrent === "string"
          ? this.showCurrent
          : `${this.timeSelected.yearSelected}-${
              this.timeSelected.monthSelected + 1
            }`);
      return sanitizeDateString(date, this.type === "date" ? "month" : "year");
    },

    current() {
      if (this.showCurrent === true) {
        return sanitizeDateString(
          `${this.now.getFullYear()}-${
            this.now.getMonth() + 1
          }-${this.now.getDate()}`,
          this.type
        );
      }

      return this.showCurrent || null;
    },

    // /**
    //  * Input nhập ngày tháng năm
    //  */
    // inputDate:{
    //   get(){
    //     return formatDate(this.timeSelected.dateSelected, 'dd/mm/yyyy');
    //   },
    //   set(val){
    //     this.setInputDate(val);
    //   }
    // }
  },

  methods: {
    /**
     * Click vào ngày trong menu
     * created by nvbinh2 04.01.2021
     * Void Function
     */
    clickDateBtn(val) {
      this.timeSelected.dateSelected = val;
      this.inputDate = val
      this.menu = false;
    },
    /**
     * Sự kiện ấn nút trước
     * Created by nvbinh2 04.01.2021
     */
    backMonth() {
      var date = this.setPeriodMonth(this.tableDate);

      this.timeSelected.monthSelected = date.getMonth();
      this.timeSelected.yearSelected = date.getFullYear();
    },

    /**
     * Sự kiện ấn nút tiếp
     * Created by nvbinh2 04.01.2021
     */
    nextMonth() {
      var date = this.setNextMonth();
      this.timeSelected.monthSelected = date.getMonth();
      this.timeSelected.yearSelected = date.getFullYear();
    },

    /**
     * Lấy tháng trước đó
     * Created by nvbinh2 04.01.2021
     * Trả về tháng
     */
    setPeriodMonth() {
      var date = new Date(
        this.timeSelected.yearSelected,
        this.timeSelected.monthSelected
      );
      if (date.getMonth() == 0) {
        date.setMonth(11);
        date.setFullYear(date.getFullYear() - 1);
        return date;
      }
      date.setMonth(date.getMonth() - 1);
      return date;
    },
    /**
     * Lấy tháng tiếp theo
     * Created by nvbinh2 04.01.2021
     */

    setNextMonth() {
      var date = new Date(
        this.timeSelected.yearSelected,
        this.timeSelected.monthSelected
      );
      if (date.getMonth() == 12) {
        date.setMonth(0);
        date.setFullYear(date.getFullYear() + 1);
        return date;
      }
      date.setMonth(date.getMonth() + 1);
      return date;
    },

    valueInput(date) {
      console.log(date);
    },

    // setInputDate(val){
    //    var currentDate = val;

    // },

    keydown(val) {
      console.log(val);
      // var indexKey = this.listKeywordActive.findIndex(val.key);
      // if( indexKey>=0){

      //   if(indexKey >=0 && indexKey <= 9){
      //     this.insertNumberToInput(val);
      //   }

      // }
    },

    // insertNumberToInput(val){
    //   var tempInput = this.inputDate;
    //   this.validateNumberDate(val,tempInput);
    //   this.validateNumberMonth(val,tempInput);
    //   this.validateNumberYear(val,tempInput);

    // },
    handleScroll() {},
  },
  created() {},
};
</script>

<style lang="scss" >
@import "~@/styles/variables";
.menu-date-picker {
  width: 400px;
  background-color: $BG-White;
  padding: 24px 24px;

  .search-bar {
    display: flex;
    position: relative;
    align-items: center;
    margin-bottom: 16px;

    .next-prev-bar {
      position: absolute;
      right: 0px;
      display: flex;
      justify-content: center;
      .icon-date-picker {
        display: flex;
        align-items: center;
        cursor: pointer;
        height: 40px;
        width: 40px;
      }
      .next-icon {
        margin-left: 10px;
      }
    }
  }

  .v-input {
    width: fit-content;

    .v-select__slot {
      .v-select__selections {
        .v-select__selection {
          overflow: unset;
        }
        input {
          width: 0px;
          padding-left: 0px;
        }
      }
    }
  }

  [class~="v-text-field"]:first-of-type {
    margin-right: 12px;
  }
  .v-select {
    .v-input__icon--append {
      .v-icon {
        transform: none;
      }
    }
  }
}

.mintax-date-picker[type="mintax-date-picker"] {
  .input-prepend-inner {
    display: flex;
  }
  .v-text-field__slot {
    // input{
    //   display: none;
    // }
  }
}
.month-picker-menu {
}
</style>