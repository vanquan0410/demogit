var vadilateData = {
    /**
     * validate bắt buộc nhập
     * @param {any} obj input selector
    */
    vadilateEmpty: function (obj) {
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
     * validate email
     * author: DVQuan(02/10/2020)
     * @param {any} obj
     */
    validataEmail(obj) {

    }
}