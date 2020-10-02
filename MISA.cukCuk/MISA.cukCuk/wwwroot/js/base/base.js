$(document).ready(function () {
   
    baseJS = new BaseJS();

});
/**
 * object cha quản lý danh mục
 */
class BaseJS {
    constructor(name) {
        try {
            this.FormType = null;
            this.getData();
            this.loadData();
            this.initEvents();

        } catch (e) {

        }
    }
    /**
     * Thực hiện gán các sự kiện
     * author: DVQuan(24/9/2020)
     */
    initEvents() {
        $('#btnAdd').click(this.btnAddOnClick.bind(this));
        $('#btnCancel').click(this.btnCancelOnClick.bind(this));
        $('#btnEdit').click(this.btnEditOnClick.bind(this));
        $('#btnDelete').click(this.btnDeleteOnClick.bind(this));
        $('#btnRefresh').click(this.btnRefreshOnclick.bind(this));
        $("input[required]").blur(this.checkRequired);
        $('#dialog-btnAdd').click(this.btnSaveOnClick.bind(this));
        $('#dialog-btnCancel').click(this.btnCancelOnClick.bind(this));
        $('#dialog-btnfocus').focus(this.showFocusDetail);
        $("table").on("click", "tbody tr", this.rowOnClick);
    }

    /**
     * lớp con sẽ override và mặc định focus vào trường dữ liệu mà nó mọng muốn
     * author:DVQuan(30/9/2020)
     * */
    showFocusDetail() {
    }

    /**
     * lớp con sẽ override lại hàm này và getData theo ý muốn của nó
     * author:DVQuan(30/9/2020)
     */
    getData() {
        this.Data = [];
    }

    /**
     * Hàm lấy dữ liệu tương ứng của 1 đối tượng
     * author: DVQuan(01/10/2020)
     * @param {any} objCode
     */
    getObjData(objCode) {
        //lớp con sẽ override lại hàm này lấy dữ liệu theo dối tượng của nó
    }

    /**
     * lớp con sẽ override lại hàm này và save lại theo ý muốn của nó
     * author:DVQuan
     * @param {any} obj một mảng của đối tượng
     * @param {any} method xác định xem là post or put
     */
    saveToDB(obj, method) {
    }

    /**
     * sự kiện load data
     * author:DVQuan(27/9/2020)
     */
    loadData() {
            $('table#tbListData tbody').empty();
            try {
                //đọc thông tin các cột dữ liệu
                var fields = $('table#tbListData thead th');
                var filedID = $('table#tbListData tr')[0];
                //lấy dữ liệu
                var data = this.Data;
                var seft = this;
                //đọc dữ liệu:
                $.each(data, function (index, obj) {
                    //gán id vao attr của dòng dữ liệu tương ứng
                    var id = $(filedID).attr('fieldID');
                    var tr = $(`<tr fieldID=`+obj[id]+`></tr>`);
                    $.each(fields, function (index, field) {
                        var fieldName = $(field).attr('fieldName');
                        var formatName = $(field).attr('format');
                        var value = obj[fieldName];
                        //nếu dữ liệu trống thì sẽ thay thế bằng ""
                        if (value == null || !value) {
                            value = "";
                            td = $(`<td>` + value + `</td>`);
                        }
                        var td = $(`<td>` + value + `</td>`);
                        //nếu dữ liệu là money thì định dạng theo money
                        if (formatName == "Money") {
                            var valueMoney = commonjs.formatMoney(value);
                            td = $(`<td>` + valueMoney + `</td>`);
                            td.addClass("format-money");
                        }
                        else if (formatName) {
                            td.addClass("format");
                        }

                        if (formatName == "Address") {
                            td.addClass("format-address");
                            if (value.length > 0) {
                                var address = value.slice(0, 70);
                                td = $(`<td title="` + value + `">` + address + `</td>`);
                            }
                            else {
                                td = $(`<td>` + value + `</td>`);
                            }
                        }
                        // định dạng type date
                        //không cần vì có thể xử lý ở service trả về một chuỗi
                       /* if (formatName == "Date") {
                            debugger
                            var valueDate = commonjs.formatDate(value);
                            td = $(`<td>` + valueDate + `</td>`);
                            td.addClass("format");
                        }
                       */
                        $(tr).append(td);
                    })
                    //Biding dữ liệu lên UI
                    $("#tbListData tbody").append(tr);
                })
            } catch (e) {
                console.log("error");
            }
    }

    // #region even-click

    /**
     * sự kiên khi click vao button thêm mới -> show dialog
     * createdBy: DVQuan(24/9/2020)
     */
    btnAddOnClick() {
        this.showDialogDetail();
        this.showFocusDetail();
    }

    /**
     * sự kiên khi click vao button cancel-> ẩn dialog
     * createdBy: DVQuan(24/9/2020)
     */
    btnCancelOnClick() {
        this.hideDialogDetail();
    }

    /**
     * khi click vao button Refresh -> load lại toàn bộ dữ liệu
     * author: DVQuan(29/9/2020)
     * */
    btnRefreshOnclick() {
        this.loadData();
    }

    // #endregion

    //#region event-show-hide-dialog

    /**
     * sự kiện show dialog
     * author:DVQuan(28/9/2020)
     */
    showDialogDetail() {
        $('.form-dialog').show();
        $('.dialog-modal').show();
    }

    /**
     * sự kiện ẩn dialog
     * createBy: DVQuan(24/9/2020)
     */
    hideDialogDetail() {
        $('.form-dialog').hide();
        $('.dialog-modal').hide();
    }

    //#endregion

    //#region event-them-sua-xoa
    /**
     * Sự kiện lưu một bản ghi mới
     * createBy: DVQuan(24/9/2020)
     */
    btnSaveOnClick() {
        var inputRequired = $("[required]");
        var isValid = true;
        $.each(inputRequired, function (index, input) {
            debugger
            if (!vadilateData.vadilateEmpty(input)) {
                isValid = false;
            }
        })
        if (isValid) {
            var self = this;
            var method = "POST";
            if (self.FormType == "Edit") {
                method = "PUT";
            }
            var obj = {};
            var fields = $('.dialog-body input,.dialog-body select,.dialog-body textarea');
            $.each(fields, function (index, field) {
                var fieldName = $(field).attr('fieldName');
                var format = $(field).attr('format');
                if (format == 'number') {
                    obj[fieldName] = Number($(field).val());
                }
                else {
                    obj[fieldName] = $(field).val();
                }
            })
            this.saveToDB(obj, method);
        }
    }

    /**
     * sự kiện sửa 1 bản ghi mới
     * author: DVQuan(28/9/2020)
     * @param {any} seder
     */
    btnEditOnClick(seder) {
        //xác định đối tượng cần sửa
        var rowSelected = $('tr.row-selected');
        if (rowSelected && rowSelected.length == 1) {
            debugger
            var customerID = $('tr.row-selected').attr('fieldID');
            $.ajax({
                url: "/api/customer/" + customerID,
                method: "GET",
                // data: "",
                datatype: "json",
                contentType: "application/json"
            }).done(function (res) {
                //thực hiện binding dữ liệu lên form chi tiết
                var fields = $('table.dialog-information tbody tr td')
                $.each(fields, function (index, data) {
                    if (fieldName) {
                        var fieldName = $(data).attr('fieldName');
                        $(fieldName).val(res[fieldName]);
                    } 
                })
            }).fail(function (res) {

            })
        }
        this.showDialogDetail();
    }

    /**
     * sự kiện xóa 1 bản ghi trong trường dữ liệu
     * author:DVQuan(28/9/2020)
     */
    btnDeleteOnClick() {
        $.each(this.Data, function (index, value) {
             //TODO đang thực hiện build chức năng xóa dở dang
        })
    }

    //#endregion

    /**
    * vadilate kiểm tra trường nhập dữ liệu không được để trống
    * author: DVQuan(28/9/2020)
    */
    checkRequired() {
        // trường nhập liệu không được để trống
        var value = vadilateData.vadilateEmpty(this)
        // nhập liệu đúng email
        //TODO: đang thực hiện validate email
        //nhập liêu đúng number
        //TODO: đang thực hiện number
    }

    /**
     * sự kiện click vào table thì đổi màu dòng được chọn
     * @param {object} sender 
     * createBy: DVQuan(24/9/2020)
     */
    rowOnClick(sender) {
        $(this).addClass("row-selected");
        $(this).siblings().removeClass("row-selected");
    }
}