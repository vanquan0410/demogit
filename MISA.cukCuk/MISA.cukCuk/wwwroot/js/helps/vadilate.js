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
        var email = $(obj).val();
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(email)) {
            $(obj).removeClass('required-error');
            $(obj).removeAttr("title");
            return true;
        }
        else {
            $(obj).addClass('required-error');
            $(obj).attr("title", "email không hợp lệ");
            return false;
        }
    },

    /**
     * validate bắt buộc nhập là số
     * @param {any} obj input selecttor
     */
    validateNumber: function (obj) {
        var value = $(obj).val();
        if (!(/^[0-9]+$/.test(value))) {
            $(obj).addClass('required-error');
            $(obj).attr("title", "vui lòng nhập toàn bộ là chữ số");
            return false;
        }
        else {
            $(obj).removeClass('required-error');
            $(obj).removeAttr("title", "email không hợp lệ");
            return true;
        }
    }
}