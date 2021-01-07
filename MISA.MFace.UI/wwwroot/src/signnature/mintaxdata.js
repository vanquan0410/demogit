export class MintaxData {
    constructor(action, callback, taxcode, files, ListSignatureLocation) {
            this.sessionId = process.env.VUE_APP_SESSION_ID ;
            this.productName = process.env.VUE_APP_PRODUCT_NAME ;
            this.action = action;
            this.jsCallBackFn = callback;
            this.taxcode = this.formatTaxCode(taxcode);
            this.files = [
                {
                    name: "ExampleName.xml",
                    data: ""
                }
            ]
            if (files !== (null || "") || typeof (files) != "undefined")
                this.files = files;

            this.ListSignatureLocation = "";
            if (ListSignatureLocation !== (null || "") || typeof (files) != "undefined")
                this.ListSignatureLocation = ListSignatureLocation;
            this.sellerInfo = {
                sellerTaxCode: taxcode
            }
            this.jsObject = ''
    }

    /**
     * Thực hiện replace loại bỏ tất cả dấu '-' và khoảng trắng trong mã số thuế
     * @param {*} taxCode mã số thuế
     * created by vdthang 20.06.2020
     */
    formatTaxCode(taxCode) {
        if (taxCode) {
            taxCode = taxCode.replace(/[-\s]/g, "");
            return taxCode;
        }
    }
}