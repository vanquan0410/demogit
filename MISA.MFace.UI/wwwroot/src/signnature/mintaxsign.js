import { MintaxData } from './mintaxdata.js'
import usbtoken from "./usbtoken.js"
import message from "@/enums/signusbtoken.js"
import Vue from 'vue'
import ServiceSign from "@/api/etax/signusbtoken.js"
import Cookies from 'js-cookie'
import store from "@/store"

export const sign = new Vue({
    name: "Sign",
    store,
    data() {
        return {
            name: "",
            TaxCode: "",
            files: [
                {
                    name: 'demo.xml',
                    data: 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48SFNvVGh1ZURUdSB4bWxuczp4c2k9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlIiB4bWxucz0iaHR0cDovL2tla2hhaXRodWUuZ2R0Lmdvdi52bi9US2hhaVRodWUiPjxIU29LaGFpVGh1ZSBpZD0iaWQtMDkzODRmYjgtOGY0My00NjlkLTkxMzAtYmIwY2UwYjNiODk1Ij48VFRpbkNodW5nPjxUVGluRFZ1PjxtYURWdT5IVEtLPC9tYURWdT48dGVuRFZ1Pkjhu5YgVFLhu6IgS8OKIEtIQUkgVEhV4bq+PC90ZW5EVnU+PHBiYW5EVnU+NC4zLjE8L3BiYW5EVnU+PHR0aW5OaGFDQ2FwRFZ1PkU5Njc5ODRBQTc2NDNGRDdFNEVBOERFQTAzOUI0QkZGPC90dGluTmhhQ0NhcERWdT48L1RUaW5EVnU+PFRUaW5US2hhaVRodWU+PFRLaGFpVGh1ZT48bWFUS2hhaT42MDwvbWFUS2hhaT48dGVuVEtoYWk+VOG7nCBLSEFJIFFVWeG6vlQgVE/DgU4gUEjDjSBC4bqiTyBW4buGIE3DlEkgVFLGr+G7nE5HIChN4bqrdSBz4buRIDAyL0JWTVQpPC90ZW5US2hhaT48bW9UYUJNYXU+KEJhbiBow6BuaCBrw6htIHRoZW8gVGjDtG5nIHTGsCBz4buRIDE1Ni8yMDEzL1RULUJUQyBuZ8OgeSAwNi8xMS8yMDEzIGPhu6dhIELhu5kgVMOgaSBjaMOtbmgpPC9tb1RhQk1hdT48cGJhblRLaGFpWE1MPjIuMC41PC9wYmFuVEtoYWlYTUw+PGxvYWlUS2hhaT5DPC9sb2FpVEtoYWk+PHNvTGFuPjA8L3NvTGFuPjxLeUtLaGFpVGh1ZT48a2lldUt5Plk8L2tpZXVLeT48a3lLS2hhaT4yMDIwPC9reUtLaGFpPjxreUtLaGFpVHVOZ2F5IC8+PGt5S0toYWlEZW5OZ2F5IC8+PGt5S0toYWlUdVRoYW5nPjAxLzIwMjA8L2t5S0toYWlUdVRoYW5nPjxreUtLaGFpRGVuVGhhbmc+MTIvMjAyMDwva3lLS2hhaURlblRoYW5nPjwvS3lLS2hhaVRodWU+PG1hQ1FUTm9pTm9wPjEwMTAxPC9tYUNRVE5vaU5vcD48dGVuQ1FUTm9pTm9wPkNoaSBj4bulYyBUaHXhur8gUXXhuq1uIEJhIMSQw6xuaDwvdGVuQ1FUTm9pTm9wPjxuZ2F5TGFwVEtoYWk+MjAyMC0wMi0yODwvbmdheUxhcFRLaGFpPjxHaWFIYW4+PG1hTHlEb0dpYUhhbiAvPjxseURvR2lhSGFuIC8+PC9HaWFIYW4+PG5ndW9pS3k+Z2lhbmc8L25ndW9pS3k+PG5nYXlLeT4yMDIwLTAyLTI4PC9uZ2F5S3k+PG5nYW5oTmdoZUtEIC8+PC9US2hhaVRodWU+PE5OVD48bXN0PjAxMDEyNDMxNTAtOTk5PC9tc3Q+PHRlbk5OVD5waGFuIHRoaWogaHVvd25nIGdpYW5nPC90ZW5OTlQ+PGRjaGlOTlQ+MjM0IFBWRDwvZGNoaU5OVD48cGh1b25nWGEgLz48bWFIdXllbk5OVCAvPjx0ZW5IdXllbk5OVD5CYWMgVHUgTGllbTwvdGVuSHV5ZW5OTlQ+PG1hVGluaE5OVCAvPjx0ZW5UaW5oTk5UPkhhIE5vaTwvdGVuVGluaE5OVD48ZHRob2FpTk5UIC8+PGZheE5OVCAvPjxlbWFpbE5OVCAvPjwvTk5UPjwvVFRpblRLaGFpVGh1ZT48L1RUaW5DaHVuZz48Q1RpZXVUS2hhaUNoaW5oPjxLU0NTVHVLaGFpVGhhYz48Q1RpZXRLU0NTVHVLaGFpVGhhYyBpZD0iSURfMSI+PGN0MT4wMTAxMDM8L2N0MT48Y3QyPlRpLXRhbiAodGl0YW4pPC9jdDI+PGN0Mz5U4bqlbjwvY3QzPjxjdDQ+MzAwMDAwLjAwMDwvY3Q0PjxjdDU+MTAwMDAwMDAwPC9jdDU+PGN0Nj4zMDAwMDAwMDAwMDAwMDwvY3Q2PjxjdDc+MDwvY3Q3PjxjdDg+MzAwMDAwMDAwMDAwMDA8L2N0OD48L0NUaWV0S1NDU1R1S2hhaVRoYWM+PC9LU0NTVHVLaGFpVGhhYz48S1NDU1RodU11YT48Q1RpZXRLU0NTVGh1TXVhIGlkPSJJRF8xIj48Y3QxIC8+PGN0MiAvPjxjdDMgLz48Y3Q0PjAuMDAwPC9jdDQ+PGN0NT4wPC9jdDU+PGN0Nj4wPC9jdDY+PGN0Nz4wPC9jdDc+PGN0OD4wPC9jdDg+PC9DVGlldEtTQ1NUaHVNdWE+PC9LU0NTVGh1TXVhPjx0b25nX2N0Nj4zMDAwMDAwMDAwMDAwMDwvdG9uZ19jdDY+PHRvbmdfY3Q3PjA8L3RvbmdfY3Q3Pjx0b25nX2N0OD4zMDAwMDAwMDAwMDAwMDwvdG9uZ19jdDg+PC9DVGlldVRLaGFpQ2hpbmg+PC9IU29LaGFpVGh1ZT48Q0t5RFR1IC8+PC9IU29UaHVlRFR1Pg0K',
                }
            ],
            ListSignatureLocation: [],
            declarationData: {},
            listdeclarationData: [],
            listXMLData: [],
            OrganizationName: Cookies.get("OrganizationID"),
            IsBuildState: false,
            mode: "",
            keyProperty: "",
            nameOfDeclaration: "",
            callFalsePopup: () => { },
            currentSign: {},
            reloadPage: false,
            currentResult: {},
            listSignedData: [],
            index: 0,
            indexSend: 0,
            sendSuccess: false,
            sendSuccessNumber: 0,
            //Kiểu kí: state - Build và kí từng file , multi - buid toàn bộ và kí từng file,  single - kí toàn bộ
            state: "state",
        }
    },
    mixins: [usbtoken],

    methods: {
        /**
         * Hàm truyền thông tin vào để lấy danh sách chứng thư 
         * @param {danh sách thông tin tờ khai cần ký nộp} listdeclarationData 
         * @param {Mã taxcode của đơn vị} TaxCode
         * Created by: CVCuong created date: 20/5/2020
         */
        async getCertificatesDeclaration(listdeclarationData, TaxCode) {
            //Bật popup loading
            this.$_Popup.loading("", "Đang lấy thông tin chứng thư số.<br/> ", [])
            for (var i = 0; i < listdeclarationData.length; i++) {
                this.ListSignatureLocation = "CKyDTu;"
            }
            this.listdeclarationData = listdeclarationData
            this.TaxCode = TaxCode
            this.TaxCode = "0101243150"
            await this.cleartoDefaultData();
            this.getAllCertificates()
        },

        /**
         * Hàm gọi tool MISA KYSO để chọn danh sách trong chứng thư
         * Created by: CVCuong created date: 29/8/2020
         */
        getAllCertificates() {
            let checkCertificates = new MintaxData(this.Action.GetAllCertificates, 'callbackGetAllCertificates', '0101243150', [], this.ListSignatureLocation);
            this.GetAllCertificates(checkCertificates, "callbackGetAllCertificates", "")
        },

        /**
         * Hàm callback lấy danh sách chứng thư
         * @param {*} res 
         * Created by: CVCuong created date: 20/5/2020
         * Modifed by nvbinh2 12.11.2020 - Chỉnh sửa để có thể kí tất cả mọi loại tờ khai
         */
        async callbackGetAllCertificates(res) {
            if (res.status == true) {
                var certificate = JSON.parse(res.data)
                var data = {
                    CASerialID: certificate.SerialNumber,
                    TaxCode: this.TaxCode
                }
                var respone = await ServiceSign.getUsbToken(data);
                if (!respone.data.Data) {
                    this.callFalsePopup(400, false);
                }
                else {
                    // nếu là build và kí từng file
                    if (this.state == "state") {
                        this.buildDeclarationState();
                        return;
                    }
                    // nếu là build toàn bộ và kí từng file
                    if (this.state == "multi") {
                        var xmlData = await this.buildDeclarations();
                        if (xmlData) {
                            this.files = xmlData;
                            if (this.files.length > 1) {
                                this.currentSign = this.files[0];
                                this.index = 0;
                                this.multiSignDeclaration();
                            }
                            else {
                                this.signDeclarations();
                            }
                        }
                        else {
                            this.callFalsePopup(401, false);
                        }
                    }
                }
            }
            else {
                this.checkErrorCode(res.code)
            }
        },

        /**
         * State dựng tờ khai
         * created by nvbinh2 13.11.2020
         */
        async buildDeclarationState() {
            // Lấy danh sách check tờ khai vào dựng tờ khai gọi lên Mtax
            await this.buildDeclarationService();
            // Thực hiên build từng tờ khai 
            if (this.listXMLData) {
                this.prepareToSign();
            }

        },

        /**
         * Chuẩn bị thao tác kí
         */
        prepareToSign() {
            var element = this.listXMLData[this.index];
            if (element) {
                var nameXML = this.listdeclarationData.find(x => x[this.keyProperty] == element.DeclarationID)[this.nameOfDeclaration];
                if (element.MISACode == 200 && element.Base64Data) {
                    var xmlData = {
                        id: element.DeclarationID,
                        name: nameXML,
                        data: element.Base64Data ,
                        code: 11,
                    }
                    this.currentSign = xmlData;
                    this.multiSignState();
                }
                else {
                    this.showWarningtoCotinueSign(nameXML);
                }
            }
            else {
                if (this.listSignedData) {
                    this.sendEachDeclaration()
                }
                else {
                    return;
                }
            }
        },

        /**
         * hàm gửi từng tờ khai thuế
         * created by nvbinh2 13.11.2020
         */
        sendEachDeclaration() {
            var eachDeclaration = this.listSignedData[this.indexSend];
            if (eachDeclaration) {
                var declarationSigned = {
                    IsUseUSBToken: 1,   //1 có nghĩa sử dụng ký usb token
                    DeclarationFile: eachDeclaration.data, //dữ liệu danh sách tờ khai sau khi ký dạng b64
                    DeclarationFileName: eachDeclaration.name, //tên tờ khai
                    TaxCode: "0101243150999",   //Mã taxcode của đơn vị
                    DeclarationID: eachDeclaration.id,
                    DeclarationType: this.mode,
                }
                this.sendDeclaration(declarationSigned);
            }
            else if (this.listSignedData && this.sendSuccess) {
                this.$_Notification.success("Thành công", this.listdeclarationData.length > 1 ? `${this.sendSuccessNumber} đã được ký và nộp cho Tổng cục thuế thành công` : "", []);
                this.$_Popup.isPopup = false;
                
                this.$store.dispatch("reload/updateReload", true);

            }
            else if (!this.sendSuccess) {
                this.$_Notification.error("Thất bại", "Ký nộp hồ sơ thất bại", []);
                this.$_Popup.isPopup = false;

                store.dispatch("reload/updateReload", true);
            }
        },

        /**
         * Thực hiện dựng từng tờ khai
         * created by nvbinh2 13.11.2020
         */
        async buildDeclarationService() {
            this.$_Popup.loading("", "Đang ký văn bản <br/> ", [])
            var declaration = await ServiceSign.buildDeclaration(this.mode, this.listdeclarationData, this.keyProperty)
            if (declaration.data && declaration.data.Success) {
                this.listXMLData = declaration.data.Data;
            }
            else {
                this.callFalsePopup(1000, false);
            }
        },

        /**
         * Xây dựng và kí từng tờ khai
         */
        multiSignState() {
            this.$_Popup.loading("", "Đang ký văn bản <br/> ", [])
            var newListFile = [];
            newListFile.push(this.currentSign);
            let mintaxdatadeclaration = new MintaxData(this.Action.SignXMLForIntegrated, 'callBackMutilSignState', this.TaxCode, newListFile, this.ListSignatureLocation);
            this.SignXMLMinTax(mintaxdatadeclaration, "callBackMutilSignState", "");
        },

        /**
         * Kết quả từ việc kí
         * @param {*} res 
         */
        callBackMutilSignState(res) {
            if (res.status) {
                var data = JSON.parse(res.data).files[0];
                if (data.code != 0) {
                    this.showWarningtoCotinueSign(data.name);
                    // if (this.warnState == "resign") {
                    //     this.prepareToSign();
                    // }
                    // else if (this.warnState == "continue") {
                    //     this.index += 1;
                    //     this.prepareToSign();
                    // }
                }
                else {

                    data.id = this.currentSign.id;
                    
                    this.listSignedData.push(data);
                    this.index += 1;
                    this.prepareToSign();
                }
            }

        },
        /**
         * Hàm thực hiện build tờ khai (Danh sách tờ khai)
         * @param {danh sách thông tin tờ khai} data 
         * Created by: CVCuong created date: 27/8/2020
         * Modifed by: nvbinh2 12.11.2020 - Thay đổi hàm để có thể dùng chung cho việc kí tờ khai
         */
        async buildDeclarations() {
            this.$_Popup.loading("", "Đang ký văn bản <br/> ", [])
            var declaration = await ServiceSign.buildDeclaration(this.mode, this.listdeclarationData, this.keyProperty)
            var listXML = [];
            if (declaration.data.Success) {
                this.listXMLData = [...declaration.data.Data];
                declaration.data.Data.forEach(element => {
                    if (element.MISACode == 200 && element.Base64Data) {
                        listXML.push({
                            name: this.listdeclarationData.find(x => x[this.keyProperty] == element.DeclarationID)[this.nameOfDeclaration],
                            data: element.Base64Data,
                            code: 11
                        })
                    }
                });
            }
            else {
                this.callFalsePopup(1000, false);
                return null
            }
            return listXML;
        },

        /**
         * Thực hiện kí từng file cho việc kí danh sách tờ khai
         * Created by nvbinh2 12.11.2020
         */
        multiSignDeclaration() {
            this.$_Popup.loading("", "Đang ký văn bản <br/> ", [])
            var newListFile = [];
            newListFile.push(this.currentSign);
            let mintaxdatadeclaration = new MintaxData(this.Action.SignXMLForIntegrated, 'callBackMutilSignDeclaration', this.TaxCode, newListFile, this.ListSignatureLocation);
            this.SignXMLMinTax(mintaxdatadeclaration, "callBackMutilSignDeclaration", "");
        },

        /**
         * Call back trả về kết quả kí từng tờ khai 
         * created by nvbinh2 13.11.2020
         * @param {Kết quả trả về} res 
         */
        async callBackMutilSignDeclaration(res) {
            var successToSend = false;
            if (res.status == true) {
                var data = JSON.parse(res.data).files[0];
                if (data.code != 0) {
                    var messError = `Thực hiện ký tờ khai không thành công, Vui lòng thực hiện lại.`
                    this.$_Popup.warn("Thông báo lỗi", messError, [
                        {
                            text: "Hủy",
                            class: "btn-seconds",
                            callback: this.multiSignDeclaration(),
                        },
                        {
                            text: "Bỏ qua",
                            class: "btn-primary",
                            callback: () => {
                                this.index += 1;
                                this.currentSign = this.files[this.index];
                                if (this.currentSign) {
                                    this.multiSignDeclaration();
                                }
                                else {
                                    successToSend = true;
                                }
                            }
                        }]);
                }
                else {
                    this.listSignedData.push(data);
                    this.index += 1;
                    this.currentSign = this.files[this.index];
                    if (this.currentSign) {
                        this.multiSignDeclaration();
                    }
                    else {
                        successToSend = true;
                    }
                }
            }
            if (successToSend) {
                this.listSignedData.forEach(element => {
                    var declarationsigned = {
                        IsUseUSBToken: 1,   //1 có nghĩa sử dụng ký usb token
                        DeclarationFile: element.data, //dữ liệu danh sách tờ khai sau khi ký dạng b64
                        DeclarationFileName: element.name, //tên tờ khai
                        TaxCode: this.TaxCode,   //Mã taxcode của đơn vị
                        DeclarationID: element.DeclarationID,
                        DeclarationType: this.mode,
                    }
                    this.sendDeclaration(declarationsigned)
                });
            }
        },

        /**
         * Thực hiện ký tờ khai
         * Created by: CVCuong created date: 20/5/2020
         */
        signDeclarations() {
            let mintaxdatadeclaration = new MintaxData(this.Action.SignXMLForIntegrated, 'callbackSignDeclarations', this.TaxCode, this.files, this.ListSignatureLocation);
            this.SignXMLMinTax(mintaxdatadeclaration, "callbackSignDeclarations", "")
        },

        /**
         * Hàm callback khi thực hiện ký
         * @param {*} res 
         * Created by: CVCuong created date: 20/5/2020
         */
        async callbackSignDeclarations(res) {
            if (res.status == true) {
                var data = JSON.parse(res.data)
                var success = true
                data.files.forEach(element => {
                    // kiểm tra code trả về 7 || 0
                    if (element.code != 0) {
                        success = false
                        this.$_Popup.warn("Cảnh báo", message.showMessageErrorSign(element.name), [{
                            text: "Hủy",
                            class: "btn-seconds",
                            callback: () => { }
                        },
                        {
                            text: "Bỏ qua",
                            class: "btn-primary",
                            callback: this.signDeclarations,
                        }])
                    }
                })
                if (success == true) {
                    this.$_Popup.loading("", "Đang gửi tờ khai lên Tổng cục thuế.<br/>", [])
                    data.files.forEach(element => {
                        var declarationsigned = {
                            IsUseUSBToken: 1,   //1 có nghĩa sử dụng ký usb token
                            DeclarationFile: element.data, //dữ liệu danh sách tờ khai sau khi ký dạng b64
                            DeclarationFileName: element.name, //tên tờ khai
                            TaxCode: "0101243150999"  //Mã taxcode của đơn vị
                        }
                        this.sendDeclaration(declarationsigned)
                    })
                }
            }
            else {
                this.checkErrorCode(res.code, this.signDeclarations)
            }
        },

        /**
         * Hàm nộp tờ khai lên MTax
         * @param {Danh sách tờ khai đã ký} data 
         * Created by: CVCuong created date: 27/8/2020
         */
        async sendDeclaration(data) {
            this.$_Popup.loading("", "Đang gửi tờ khai lên Tổng cục thuế.<br/>", [])
            var resSendDeclaration = await ServiceSign.mTaxDeclarationSender(data)
            if (resSendDeclaration.status == 200 && resSendDeclaration.data.MISACode ==200) {
                this.sendSuccess = true;
                this.sendSuccessNumber += 1;
                this.indexSend += 1;
                this.sendEachDeclaration();
            }
            else {
                this.$_Popup.warn("Thông báo", `Thực hiện nộp tờ khai <strong>${data.DeclarationFileName}</strong> không thành công, vui lòng thực hiện lại`, [{
                    text: "Bỏ qua",
                    class: "btn-grey",
                    callback: () => { this.indexSend += 1; this.sendEachDeclaration() }
                },
                {
                    text: "Nộp",
                    class: "btn-primary",
                    callback: () => { this.sendEachDeclaration() }
                }
                ])
            }
        },

        /**
         * Hàm check lỗi trả về
         * @param {mã lỗi trả về} code 
         * @param {function thực hiện khi chọn chứng thư không hợp lệ} callback
         * Created by: CVCuong created date: 20/5/2020
         */
        checkErrorCode(code, callback) {
            if (code === 8 || code === 9) {
                this.$_Popup.warn("Cảnh báo", message.findMessage(code), [{
                    text: "Đóng",
                    class: "btn-primary",
                    callback: callback
                }])
            }
            else {
                this.$_Popup.warn("Cảnh báo", message.findMessage(code), [{
                    text: "Đóng",
                    class: "btn-primary",
                    callback: () => { }
                }])
            }
        },

        /**
         * Gọi cảnh báo ký nộp không thành công
         */
        showWarningtoCotinueSign(name) {
            var messError = `Thực hiện ký tờ khai <strong>${name}</strong> không thành công, vui lòng thực hiện lại.`
            this.$_Popup.warn("Thông báo", messError, [
                {
                    text: this.listXMLData.length > 1 ? "Bỏ qua" : "Đóng",
                    class: "btn-grey",
                    callback: () => { this.warnState = "continue", this.index += 1; this.prepareToSign()  },
                },
                {
                    text: "Ký nộp",
                    class: "btn-primary",
                    callback: () => { this.warnState = "resign", this.prepareToSign() }
                },
            ]);
        },

        /**
         * Gọi hiển thị ký nộp lỗi
         * @param {*} name 
         */
        showErrorSign(name) {
            var messError = `Thực hiện ký tờ khai <strong>${name}</strong> không thành công, vui lòng thực hiện lại.`
            this.$_Popup.warn("Thông báo", messError, [
                {
                    text: "Đóng",
                    class: "btn-grey",
                    callback: () => { this.warnState = "exit" }
                },
                {
                    ttext: "Nộp",
                    class: "btn-primary",
                    callback: () => { this.warnState = "resign" },
                }
            ])
        },
        async cleartoDefaultData() {
            this.index = 0;
            this.indexSend = 0;
            this.currentSign = {};
            this.listSignedData = [];
            this.sendSuccess = false;
            this.sendSuccessNumber = 0;
        }
    }
});
