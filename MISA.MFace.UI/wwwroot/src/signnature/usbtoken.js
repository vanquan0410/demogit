/*eslint no-unused-vars: "off"*/
import Vue from "vue";
export default {
  data() {
    return {
      message_NoSetup_misakyso:
        'Để thực hiện ký điện tử, bạn cần cài đặt công cụ MISA KYSO. Tải bộ cài <strong><a id="download-ky-so" href="http://product.misa.com.vn/misasoftware/MISAKyso/R10.1.5/MISA.KySo_Setup.exe" style="color:#0e1d61" target="_blank">tại đây</a></strong>.',
      isCalling_Misa_Kyso: false,
      ports: [11984, 11985, 12680, 12681, 12683],
      webSocker: null,
      portIndex: 0,
      connectStatus: false,
      securityError: true,
      Action: {
        GetRawVersion: "GetRawVersion",
        GetVersionNumber: "GetVersionNumber",
        SignXML: "SignXML",
        GetAllCertificates: "GetAllCertificates", // Lay chung thu
        SignPDF: "SignPDF",                        //Ký PDF
        SignOffice: "SignOffice",
        CheckSignXML: "CheckSignXML",
        SignXmlInvoiceUsingInfor: "SignXmlInvoiceUsingInfor",
        SignXMLForIntegrated: "SignXMLMinTax",
      },
      ErrorCode: {
        BrowserNotSupport: "BrowserNotSupport",
        PluginNotExist: "PluginNotExist",
        RuntimeError: "RuntimeError",
      },
    };
  },
  methods: {
    get_browser: function () {
      var t,
        n = navigator.userAgent,
        e = n.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
      return /trident/i.test(e[1])
        ? {
          name: "IE",
          version: (t = /\brv[ :]+(\d+)/g.exec(n) || [])[1] || "",
        }
        : "Chrome" === e[1] && null != (t = n.match(/\b(OPR|Edge)\/(\d+)/))
          ? {
            name: t.slice(1)[0].replace("OPR", "Opera"),
            version: t.slice(1)[1],
          }
          : ((e = e[2] ? [e[1], e[2]] : [navigator.appName, navigator.appVersion, "-?"]),
            null != (t = n.match(/version\/(\d+)/i)) && e.splice(1, 1, t[1]),
          {
            name: e[0],
            version: e[1],
          });
    },

    // Connect to plugin and send data
    // created by vdthang 13.05.2020
    connect: function (port, data) {
      var me = this,
        jsonData = JSON.stringify(data);

      if (me.webSocket == null || me.connectStatus == false) {
        try {
          me.webSocket = new WebSocket("ws://localhost:" + port + "/plugin");
        } catch (ex) {
          if (ex.code == 18) {
            // MISA.CommonFn.showMessageBox(MISA.Constant.MessageBox.Warning, 'MeInvoice.vn', MISA.Resource.EinvoiceResource.ErrorBrower.format("misa_kyso.showHelpBrower()"), null, { width: 500 });
            // MISA.mask.hide();
          }
        }
      } else {
        me.webSocket.send(jsonData);
        //MISA.mask.hide();
      }
      // Open the connection to the Web Socket server
      me.webSocket.onopen = function (e) {
        me.connectStatus = true;
        me.securityError = false;
        me.webSocket.send(jsonData);
        //MISA.mask.hide();
      };

      // When the connection is closed by the server
      me.webSocket.onclose = function (e) {
        me.connectStatus = false;
        me.securityError = false;
        me.isCalling_Misa_Kyso = false;
      };

      // Log messages from the server
      me.webSocket.onmessage = function (e) {
        var res,
          serviceResult = me.ServiceResult;
        me.isCalling_Misa_Kyso = false;
        if (e && e.data) {
          res = JSON.parse(e.data);

          if (res) {
            if (res.jsObject) {
              var jsObject = eval(res.jsObject);
              if (res.jsCallBackFn && jsObject[res.jsCallBackFn]) {
                jsObject[res.jsCallBackFn](res);
              }
            } else if (res.jsCallBackFn) {
              me[res.jsCallBackFn](res);
            }
          }
        }
      };

      // Log errors
      me.webSocket.onerror = function (e) {
        me.connectStatus = false;
        me.securityError = false;
        me.webSocket = null;
        me.portIndex += 1;
        if (me.portIndex < me.ports.length) {
          me.connect(me.ports[me.portIndex], {});
        } else {
          me.onErrorMISA_KYSO();
          me.portIndex = 0;
        }
      };
    },
    /**
     * hàm show popup cảnh báo
     */
    onErrorMISA_KYSO() {
      var me = this;
      new Vue({
        created: function () {
          this.$_Popup.warn("Cảnh báo", me.message_NoSetup_misakyso, [
            {
              text: "Đóng",
              class: "btn-primary",
              callback: () => { },
            },
          ]);
        },
      });
    },

    // Reconnect other port
    // Created by vdthang 13.05.2020
    reconnect: function (data) {
      var me = this;
      me.connect(me.ports[me.portIndex], data);
    },

    // Get current version number
    // created by vdthang 13.05.2020
    getRawVersion: function (callbackFn, jsObject) {
      var me = this,
        data = {
          action: me.Action.GetRawVersion,
        };

      this.sendDataToPlugin(data, callbackFn, jsObject);
    },

    // Get current cersion number
    // created by vdthang 13.05.2020
    getVersionNumber: function (callbackFn, jsObject) {
      var me = this,
        data = {
          action: me.Action.GetVersionNumber,
        };

      me.sendDataToPlugin(data, callbackFn, jsObject);
    },

    //Kiểm tra ký fign xml
    //created by vdthang 13.05.2020
    checkSignXML: function (data, callbackFn, jsObject) {
      var me = this;
      me.sendDataToPlugin(data, callbackFn, jsObject);
    },

    //Show thông tin chứng thư số
    //created by vdthang 13.05.2020
    GetCertificateFromSignedXML: function (data, callbackFn, jsObject) {
      var me = this;
      me.sendDataToPlugin(data, callbackFn, jsObject);
    },

    //Ký file xml
    //created by vdthang 13.05.2020
    SignPDFMinTax: function (data, callbackFn, jsObject) {
      var me = this;
      me.sendDataToPlugin(data, callbackFn, jsObject);
    },

    //Created by vdthang 13.05.2020
    SignXMLForIntegrated: function (data, callbackFn, jsObject) {
      var me = this;
      me.sendDataToPlugin(data, callbackFn, jsObject);
    },

    //Ký file xml mintax
    //Created by vdthang 13.05.2020
    SignXMLMinTax(data, callbackFn, jsObject) {
      var me = this;
      me.sendDataToPlugin(data, callbackFn, jsObject);
    },

    SignPDF: function (data, callbackFn, jsObject) {
      var me = this;
      me.sendDataToPlugin(data, callbackFn, jsObject);
    },

    //Send data to plugin
    //Created by vdthang 13.05.2020
    /*eslint no-redeclare: "off"*/
    /*eslint no-undef: "off"*/
    sendDataToPlugin(data, callbackFn, jsObject) {
      var me = this,
        data = data || {};

      if (callbackFn && (!data.jsCallBackFn || data.jsCallBackFn == "")) {
        data.jsCallBackFn = me.getFnName(callbackFn);
      }
      if (jsObject && (!data.jsObject || data.jsObject == "")) {
        data.jsObject = me.getInstanceName(jsObject);
      }
      if (me.ports[me.portIndex]) {
        me.connect(me.ports[me.portIndex], data);
      } else {
        me.isCalling_Misa_Kyso = false;

        //MISA.CommonFn.showMessageBox(MISA.Constant.MessageBox.Warning, 'MeInvoice.vn', me.message_NoSetup_misakyso, null, { width: 500 });
        // misa_kyso.hanlderErrorConnectKySo();
        //misa_kyso.showMessage(me.message_NoSetup_misakyso, 210, 500);
      }
    },

    //Kiểm tra version được support
    //created by vdthang 13.05.2020
    checkBrowserSupportWS: function () {
      var t = get_browser(),
        isSupport = false;

      switch (t.name.toLowerCase()) {
        case "chrome":
          if (t.version > 44) {
            isSupport = true;
          }
          break;
        case "firefox":
          if (t.version > 41) {
            isSupport = true;
          }
          break;
        case "opera":
          if (t.version > 26) {
            isSupport = true;
          }
          break;
        case "edge":
          if (t.version > 15) {
            isSupport = true;
          }
          break;
        case "safari":
          if (t.version > 10) {
            isSupport = true;
          }
          break;
      }

      return isSupport;
    },

    //Lấy function string name
    //created by vdthang 13.05.2020
    /*eslint no-useless-escape: "off"*/
    getFnName: function (fn) {
      if (typeof fn == "string") {
        return fn;
      }

      var f = typeof fn == "function";
      var s = f && ((fn.name && ["", fn.name]) || fn.toString().match(/function ([^\(]+)/));
      return (!f && "not a function") || (s && s[1]) || "anonymous";
    },

    //Lấy thông tin instance name object of class
    //created by vdthang 13.05.2020
    getInstanceName: function (obj) {
      if (typeof obj == "string") {
        return obj;
      }

      for (var name in window) {
        if (window[name] == obj) {
          return name;
        }
      }
    },

    //Hiển thị message thông báo
    //created by vdthang 13.05.2020
    showMessage: function (content, height, width) {
      html = '<div class="icon-warning-lagger"></div><div class="message">{0}<div>';
      $("#dialogMsg").html(String.format(html, String.format(content, _mainconfig.MISAKYSO_URL)));
      $("#dialogMsg").dialog({
        height: height,
        width: width,
        resizable: false,
        position: { my: "center", at: "center", of: window },
        modal: true,
        buttons: {
          Đóng: function () {
            $(this).dialog("close");
          },
        },
        open: function () {
          $(".ui-dialog-buttonpane button").focus();
        },
      });
    },
    //Hàm show trang help
    //created by vdthang 13.05.2020
    showHelpBrower: function () {
      //window.open(MISA.SystemConfig.HelpUrl + 'toi_khong_ky_dien_tu_duoc_thi_lam_the_nao.htm');
    },

    //Hàm handle errorConnectKySo
    //created by vdthang 13.05.2020
    hanlderErrorConnectKySo: function () { },

    //Hàm lấy tất cả thông tin chứng thư số
    //created by vdthang 13.05.2020
    GetAllCertificates: function (data, callbackFn, jsObject) {
      var me = this;
      me.sendDataToPlugin(data, callbackFn, jsObject);
    },

    //Hàm thực hiện validate taxcode hồ sơ
    //Created by vdthang 14.05.2020
    formatTaxCode(taxCode) {
      //Thực hiện replace loại bỏ tất cả dấu '-' và khoảng trắng trong mã số thuế
      if (taxCode) {
        taxCode = taxCode.replace(/[-\s]/g, "");
        return taxCode;
      }
    },
    //Hàm thực hiện phân tách lấy common name từ subject name USB Token
    //Created by VDThang 18.05.2020
    getCommonName(data) {
      var subjectName = "";
      if (data) {
        var subs = data.split(",");
        subs.forEach((item) => {
          if (
            item
              .toLocaleLowerCase()
              .trim()
              .includes("cn")
          ) {
            subjectName = item.trim().substring(3);
          }
        });
      }
      return subjectName;
    },
    isOrganizationInvalid(organization) {
      return !organization || typeof organization == "undefined" || organization == "" || this.isObjEmpty(organization);
    },
    isXmlInvalid(xml) {
      return !xml || typeof xml == "undefined" || xml == "";
    },
    /**
     * Hàm chuyển XML thành String
     * Created by vdthang
     */
    parseXMLtoString(data) {
      //IE
      if (window.ActiveXObject) {
        var oString = data.xml;
        return oString;
      }
      //Chrome, Safari, Firefox, Opera, etc.
      else {
        return new XMLSerializer().serializeToString(data);
      }
    },
    //Hàm xử lý string to xml và add thêm thẻ chữ ký Dvi
    //Created by vdthang 18.05.2020
    addDviElement(data) {
      /*eslint no-undef: "off"*/
      //IE
      if (window.ActiveXObject) {
        var oXML = new ActiveXObject("Microsoft.XMLDOM");
        oXML.loadXML(data);
        return oXML;
      }
      //Chrome, Safari, Firefox, Opera, etc.
      else {
        return new DOMParser().parseFromString(data, "text/xml");
      }
    },
  },
};
