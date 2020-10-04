/**
 * validate nhập đúng định dạng
 * author: DVQuan(2/10/2020)
 * */

var validateData = {

    /**
     * validate bắt buộc nhập
     * @param {any} obj input selector
    * */
    validateEmpty: function (obj) {
        var value = $(obj).val();
        if (!value || !(value && value.trim())) {
            $(obj).addClass('required-error');
            $(obj).attr("title", "Ban phải nhập thông tin này");
            return false;
        }
        else {
            $(obj).removeClass('required-error');
            $(obj).removeAttr("title");
            return true;
        }
    },
    /**
     * validate bắt buộc nhập dính dạng email
     * author: DVQuan(02/10/2020)
     * @param {any} obj input selector
     */
    validateEmail: function (obj) {

    },

    /**
     * validate bắt buộc nhập là số
     * @param {any} obj input selecttor
     */
    validateNumber: function (obj) {

    }
}