<template>
  <div :id="id" class="mintax-custom-field">
    <span v-text="label" v-if="label" class="text-label text-lg-body-1"></span>
    <v-text-field
      :placeholder="placeholder"
      :solo="solo"
      :single-line="singleLine"
      :flat="flat"
      :color="color"
      :error="error"
      :error-messages="errorMessages"
      :clearable="clearable"
      :loading="loading"
      :readonly="readonly"
      :disabled="disabled"
      :height="height"
      :prepend-icon="prependIcon"
      :prepend-inner-icon="prependInnerIcon"
      :hide-details="hideDetails"
      :type="type"
      clear-icon="ico-g-clear"
      :validate-on-blur="validateOnBlur"
      :append-icon="iconError"
      @blur="blur"
      @update:error="error = $event"
      @focus="focus"
      @input="input"
      @keydown="keydown"
      :rules="rules"
      v-model="valueInCache"
    >
      <slot></slot>
      <template v-slot:append>
        <slot name="append"></slot>
      </template>
      <template v-slot:label>
        <slot name="label"></slot>
      </template>
      <template v-slot:prepend>
        <slot name="prepend"></slot>
      </template>
      <template v-slot:message>
        <slot name="prepend"></slot>
      </template>
      <template v-slot:prepend-inner>
        <slot name="prepend-inner"></slot>
      </template>
    </v-text-field>
  </div>
</template>

<script>
import { formatMoney } from "@/utils";
export default {
  props: {
    id: String,
    loading: Boolean,
    autofocus: Boolean,
    readonly: Boolean,
    singleLine: {
      type: Boolean,
      default: true,
    },
    hideDetails: {
      type: Boolean,
      default: false,
    },
    type: String,
    placeholder: String,
    disabled: Boolean,
    appendIcon: String,
    appendOuterIcon: String,
    prependInnerIcon: String,
    color: String,
    errorMessages: String,
    flat: {
      type: Boolean,
      default: true,
    },
    solo: {
      type: Boolean,
      default: true,
    },
    label: String,

    rules: {
      type: Array,
      default: () => {},
    },

    height: {
      type: Number,
      default: 40,
    },
    validateOnBlur: {
      type: Boolean,
      default: true,
    },
    clearable: {
      type: Boolean,
      default: true,
    },
    prependIcon: String,
    onlyNumber: Boolean,
    date: Boolean,
    money: Boolean,
    onlyText: Boolean,
    value: null,
  },

  data() {
    return {
      // clearable: false,
      error: false,
      valueInCache: null,
      selectionStart: 0,
      selectionEnd: 0,
    };
  },

  model: {
    prop: "value",
    event: "change",
  },

  computed: {
    iconError() {
      if (this.error) {
        return "ico-g-error";
      } else return null;
    },
  },

  watch: {
    /**
     * Lắng nghe biến mặc định và gán giá trị cho ô input
     * Created by nvbinh2 06.01.2021
     */
    value(val) {
      if (val) {
        this.error = false;
      }
      this.valueInCache = this.formatValueWithType(val);
    },

    /**
     * watch giá trị nhập vào và validate theo theo type đã chọn
     * created by nvbinh2 06.01.2021
     */
    valueInCache(newVal) {
      var unFormatValue = this.unFormatValueWithType(newVal);
      unFormatValue = this.formatValueWithType(unFormatValue);
      this.$nextTick(() => {
        this.valueInCache = unFormatValue;
      });

      var valueEmit = this.formatValueEmit(unFormatValue);
      this.$emit("change", valueEmit);
    },
  },
  methods: {
    /**
     * Sự kiện blur ô input
     * Created by nvbinh2 29.12.2020
     */
    blur() {
      if (!this.error) this.clearable = true;
      this.$emit("blur");
    },
    focus() {
      this.error = false;
      this.$emit("focus");
    },

    /**
     * Sự kiện nhập ô Input
     * Created by nvbinh2 06.01.2020
     */
    input(val,$event) {
      console.log(val, $event);
      if (val) {
        this.error = false;
      }

      // var unFormatValue = this.unFormatValueWithType(val);
      // this.valueInCache = unFormatValue;
      // console.log("value", this.valueInCache);
      // this.$emit("change", val);
    },
    
    keydown(val) {
      this.selectionStart = val.target.selectionStart;
      this.selectionEnd = val.target.selectionEnd;
      this.$emit("keydown", val);
    },

    /**
     * Định dạng các loại format theo type
     * Created by nvbinh2 06.01.2021
     */
    formatValueWithType(val) {
      if (this.onlyNumber) {
        return this.formatValueWithNumberType(val);
      }
      if (this.date) {
        return this.formatValueWithDateType(val);
      }
      if (this.money) {
        return this.formatValueWithMoneyType(val);
      }

      if (this.onlyText) {
        return this.formatValueWithOnlyTextType(val);
      }
      return val;
    },

    /**
     * Gỡ định dạng trên biến và đẩy giá dạng lên component cha
     * Created by nvbinh2 06.1.2021
     */
    unFormatValueWithType(val) {
      val = val.toString();
      if (this.onlyNumber) {
        return this.unFormatValueWithNumberType(val);
      }
      if (this.onlyText) {
        return this.unFormatValueWithOnlyTextType(val);
      }
      if (this.date) {
        return this.unFormatValueWithDateType(val);
      }
      if (this.money) {
        return this.unFormatValueWithMoneyType(val);
      }
      return val;
    },

    /**
     * Định dạng loại format theo tiền tệ
     * Created by nvbinh2 06.1.2021
     */
    formatValueWithMoneyType(val) {
      var money = formatMoney(val, ",");
      return money;
    },

    /**
     * Định dạng loại chỉ có số
     * Created by nvbinh2 06.01.2021
     */
    formatValueWithNumberType(val) {
      return val.replace(/\D/g, "");
    },

    /**
     * Định dạng dữ liệu với kiểu only text
     * created by nvbinh2 06.01.2021
     */
    formatValueWithOnlyTextType(val) {
      return val;
    },

    /**
     * Format theo dạng ngày tháng
     * Created by nvbinh2 06.01.2021
     */
    formatValueWithDateType(val) {

      var date = "";
      var month = "";
      var year = "";
      var valueResult = val;
      var firstSlash = val.indexOf("/");
      if(firstSlash  != -1){
        date = val.slice(0,firstSlash );
        
        var secondSlash = val.indexOf("/", firstSlash +1 );
        if(secondSlash != -1){
          month = val.slice(firstSlash +1, secondSlash);
          year = val.slice(secondSlash + 1);
        }
        else {
          month = val.slice(firstSlash +1,firstSlash +3);
          
        }

      }
      

      if(parseInt(date) > 31){
        date = "31";
      }

      if(date.length > 2 && month == ""){
        date = date.slice(0,2);
        month = date.slice(2,4);
      }

      if(val.length > 10){
        valueResult = val.slice(0,10)
      }
      console.log(date, month, year,valueResult);
      console.log("vị trí selection",this.selectionStart, this.selectionEnd);

      valueResult = this.setDateformArrayInfo(date, month,year);

      return valueResult;
    },

    setDateformArrayInfo(date, month,year){
      if(date){
        if(month){
          if(year){
            return date + '/' + month + '/' + year;
          }
          else {
            return date + '/' + month;
          }
        }
        else {
          return date;
        }
      }
      return "";
    },

    /**
     * Gỡ định dạng chỉ có số
     * Created by nvbinh2 06.01.2021
     */
    unFormatValueWithNumberType(val) {
      val = val.replace(/\D/g, "");
      return val;
    },

    /**
     * Gỡ định dạng ngày tháng năm
     * Created by nvbinh2 06.01.2021
     */
    unFormatValueWithDateType(val) {
      return val;
    },

    /**
     * Gỡ định dạng tiền tệ
     * Created by nvbinh2 06.01.2021
     */
    unFormatValueWithMoneyType(val) {
      val = val.replace(",", "");
      return val;
    },

    /**
     * Gỡ định dạng chỉ có kí tự chữ
     * Created by nvbinh2 06.01.2021
     */
    unFormatValueWithOnlyTextType(val) {
      var regex = /[^a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W]/g;
      var valResult = val.replace(regex, "");
      return valResult;
    },

    formatValueEmit(val) {
      if (this.onlyNumber) {
        return this.formatValueNumberEmit(val);
      }
      if (this.onlyText) {
        return this.formatValueOnlyTextEmit(val);
      }
      if (this.date) {
        return this.formatValueDateEmit(val);
      }
      if (this.money) {
        return this.formatValueMoneyEmit(val);
      }
    },

    /**
     * Format emit dạng number
     * Created by nvbinh2 06.01.2021
     */
    formatValueNumberEmit(val) {
      return parseFloat(val);
    },

    /**
     * Emit dạng chỉ có text
     * Created by nvbinh2 06.01.2021
     */
    formatValueOnlyTextEmit(val) {
      return val;
    },

    /**
     * Emit dạng ngày tháng
     * Created by nvbinh2 06.01.2021
     */
    formatValueDateEmit(val) {
      // var date = "";
      // var month = "";
      // var year = "";
      // if (val > 4) {
      //   date = val.splice(0, 2);
      //   month = val.splice(2, 2);
      //   year = val.splice(4);
      // } else if (val > 2) {
      //   date = val.splice(0, 2);
      //   month = val.splice(2);
      // }
      // var valueResult = date + "/" + month + "/" + year;
      return val;
    },

    /**
     * Emit dạng tiền tệ
     * Created by nvbinh2 06.01.2021
     */
    formatValueMoneyEmit(val) {
      var unformat = this.unFormatValueWithMoneyType(val);
      return parseFloat(unformat);
    },
  },
};
</script>

<style lang="scss" scoped>
.mintax-custom-field {
  width: 100%;

  .text-label {
    margin-bottom: 8px;
  }
}
</style>