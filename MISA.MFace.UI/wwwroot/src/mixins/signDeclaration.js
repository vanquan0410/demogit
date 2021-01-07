// Api kí nộp tờ khai
import signApi from "@/api/etax/signusbtoken.js";
// Thông tin token từ LocalStorage
import { getTokenClaim } from "@/utils/token.js";

import { MTAX_CODE, TVAN_STATUS } from "@/enums/index.js";
import Message from "@/enums/signusbtoken";
// import { SignMintax } from "@/utils/signUsb.js";

import { sign } from "@/signnature/mintaxsign.js";

export default {
  name: "SignDeclaration",
  props: {},
  data() {
    return {
      isExpired: false,
      isConectedMtax: false,
      taxCode: this.getTaxCodeFromToken() ?? "0101243150999",
      dataSign: [],
      mode: "",
      nameOfDeclaration: "",
      reloadPage: false,
      keyProperty: "",
      validData: [],
      inValidData: [],
      xmlFile: null,
      callReloadPage:async() => {},
    };
  },
  methods: {
    /**
     * Lấy danh sách ID để kí tờ khai thuế
     * created by nvbinh2 11.11.2020
     */
    getListKeyToSign() {
      const listKeySign = this.dataSign.forEach((element) => {
        listKeySign.push(element[this.keyProperty]);
      });
      return listKeySign;
    },
    /**
     * Kí tờ khai thuế
     * created binh nvbinh2 11.11.2020
     */
    async registerByMTAX() {
      this.clearBeforeData();
      await this.getlicenseMtax();
      if(this.isConectedMtax == null || this.isExpired == null){
        return;
      }
      if (!this.isConectedMtax) {
        this.callFalsePopup(403, true);
        return;
      }
      // Đã hết hạn
      if (this.isExpired) {
        this.callFalsePopup(404, true);
        return;
      }
      var tVanLicense = await signApi.checkUsingTvan(this.taxCode);
      if (tVanLicense.data.Data.TVanStatus == TVAN_STATUS.REGISTER) {
        var listCheck = {
          DeclarationID: [],
          TaxCode: this.taxCode,
        };
        this.dataSign.forEach((element) => {
          listCheck.DeclarationID.push(element[this.keyProperty]);
        });

        var checkDeclaration = await signApi.validateReport(listCheck);
        if (checkDeclaration.data.MISACode != MTAX_CODE.SUCCESS) {
          this.callFalseNotification(404, false);
          return;
        }
        // Đưa những tờ khai hợp lệ vào danh sách để kí
        checkDeclaration.data.Data.forEach((element) => {
          var currentDeclaration = this.dataSign.find(
            (x) => x[this.keyProperty] == element.DeclarationID
          );
          if (
            element.IsActive &&
            element.IsValidReport &&
            element.ValidPeriodDate &&
            element.IsRegisted
          ) {
            this.validData.push(currentDeclaration);
          } else {
            currentDeclaration = Object.assign(currentDeclaration, element);
            this.inValidData.push(currentDeclaration);
          }
        });

        // Check valid data và thực hiện kí tờ khai
        this.checkValidData();
        this.dataSign = [];
      }
    },

    /**
     * Check tờ khai hợp lệ để kí
     * created by nvbinh
     */
    checkValidData() {
      // Nếu không có lỗi thì tiếp tục
      if (this.validData.length > 0) {
        sign.getCertificatesDeclaration(this.validData, this.taxCode);
        return;
      } else {
        this.callFalsePopup(400, false);
      }
    },
    /**
     * Lấy thông tin license từ mtax
     * created by nvbinh 10.11.2020
     */
    async getlicenseMtax() {
      var taxCode = this.getTaxCodeFromToken();
      taxCode = taxCode ?? "0101243150999";
      var res = await signApi.licenseChecker(taxCode);
      // Kiểm tra kết quả trả về dữ liệu
      if (res.data && res.data.MISACode == MTAX_CODE.SUCCESS) {
        // Nếu đã đăng kí mã số thuế
        if (res.data.Data.IsConectedMtax) {
          this.isConectedMtax = true;
        }
        else {
          this.isConectedMtax = false;
        }

        // nếu
        if (!res.data.Data.IsNotExpired) {
          this.isExpired = true;
        }
        else {
          this.isExpired = false;
        }
      } else {
        this.isConectedMtax = null;
        this.isExpired = null;
        this.callFalsePopup(1000, false);
      }
    },
    /**
     * Lấy thông tin tax_code từ token
     */
    getTaxCodeFromToken() {
      return getTokenClaim("taxcode");
    },

    /**
     * Gọi thông báo lỗi
     * @param {Mã lỗi} code
     * @param {có tắt loading hay không} withLoading
     * created by nvbinh2 11.11.2020
     */
    callFalsePopup(code, withLoading) {
      this.$_Popup.warn("Thông báo", Message.findMessage(code), [
        {
          text: "Đóng",
          class: "btn-primary",
          callback: !withLoading ? () => {} : this.closeLoading,
        },
      ]);
    },

    /**
     * Gọi thông báo lỗi
     */
    callFalseNotification(code, withLoading) {
      this.$_Notification.warning("Thông báo", Message.findMessage(code), [
        {
          text: "Đóng",
          class: "btn-primary",
          callback: !withLoading ? () => {} : this.closeLoading,
        },
      ]);
    },

    /**
     * Gọi build tờ khai xml
     */
    async buidDeclaration() {
      var xmlData = this.signApi.buildDeclaration(
        this.mode,
        this.validData,
        this.keyProperty
      );
      return xmlData;
    },

    /**
     * Xóa các dữ liệu trước đó
     * created by nvbinh2 12.11.2020
     */
    clearBeforeData() {
      this.inValidData = [];
      this.validData = [];
    },
  },
  watch: {
    buidlState(val) {
      if (val) {
        this.xmlFile = this.buidDeclaration();
      }
    },
    
    mode(val) {
      sign.mode = val;
    },

    keyProperty(val) {      
      sign.keyProperty = val;
    },
    
    nameOfDeclaration(val) {
      sign.nameOfDeclaration = val;
    },

    /**
     * Lắng nghe sự thay đổi biến store để reloadPage
     */
    "$store.getters.reloadPage" :{
      async handler(val){
        if(val){
          await this.callReloadPage();
          this.$store.dispatch("reload/updateReload", false);
        
      }
    },
    deep:true,
  }
    
  },
  created() {
    sign.callFalsePopup = this.callFalsePopup;
  },
};
