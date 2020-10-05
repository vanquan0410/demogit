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
        $('#btnAdd').click(this.btnAddOnClick.bind(this));                //thực hiện showdialog add
        $('#btnEdit').click(this.btnEditOnClick.bind(this));              //thực hiện hide dialog edit
        $('#btnDelete').click(this.btnDeleteOnClick.bind(this));          // thực hiện event delete
        $('#btnRefresh').click(this.btnRefreshOnclick.bind(this));        //thực hiện event refresh
        $('input[required]').blur(this.checkRequired);                    //thực hiện event check require
        $('#txtMoney').keyup(this.formatNumber);                          //convert text number
        $('#dialog-btnAdd').click(this.btnSaveOnClick.bind(this));        //thực hiện event save data
        $('#btnCancel').click(this.btnCancelOnClick.bind(this));          //thực hiện event hủy
        $('#dialog-btnCancel').click(this.btnCancelOnClick.bind(this));   //thực hiện event hủy
        $('#dialog-btnfocus').focus(this.showFocusDetail);                //thực hiện event focus
        $("table").on("click", "tbody tr", this.rowOnClick);              //thực hiện event click on table
    }

    /**
     * lớp con sẽ override và mặc định focus vào trường dữ liệu mà nó mọng muốn
     * author:DVQuan(30/9/2020)
     * */
    showFocusDetail() {
    }

    /**
     * lớp con sẽ override lại hàm này và getData của nó
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
        //lớp con sẽ override lại hàm này lưu dữ liệu theo dối tượng của nó
    }

    /**
     * lớp con sẽ override lại hàm này và delete lại theo ý muốn của nó
     * @param {any} obj
     */
    deleteToDB(obj) {
        //lớp con sẽ override lại hàm này xóa dữ liệu theo dối tượng của nó
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
                        if (formatName == "Date") {
                            debugger
                            var valueDate = commonjs.formatDate(value);
                            td = $(`<td>` + valueDate + `</td>`);
                            td.addClass("format");
                        }
                        if (formatName == "Gender") {
                            if (value == true) {
                                var valueGender = "nam"
                                td = $(`<td>` + valueGender + `</td>`);
                            } else {
                                var valueGender = "nữ"
                                td = $(`<td>` + valueGender + `</td>`);
                            }
                        }
                        $(tr).append(td);
                    })
                    //Biding dữ liệu lên UI
                    $("#tbListData tbody").append(tr);
                })
            } catch (e) {
                console.log("error");
            }
    }

    // #region even->click

    /**
     * sự kiên khi click vao button thêm mới -> show dialog
     * author: DVQuan(24/9/2020)
     */
    btnAddOnClick() {
        this.FormType = "Add";
        this.showDialogDetail();
        this.showFocusDetail();
    }

    /**
     * sự kiên khi click vao button cancel-> ẩn dialog
     * author: DVQuan(24/9/2020)
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

    //#region event-show-hide->dialog

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
        try {
            var inputRequired = $("[required]");
            var inputEmail = $("[requiredEmail]");
            var isValid = true;
            $.each(inputRequired, function (index, input) {
                if (!validateData.validateEmpty(input)) {
                    isValid = false;
                }
            })
            debugger
            if (!validateData.validateEmail(inputEmail)) {
                isValid = false;
            }
            if (isValid) {
                var self = this;
                var obj = {};
                var method = "POST";
                if (self.FormType == "Edit") {
                    method = "PUT";
                    debugger
                    var fieldIDName = $('table thead tr').attr('fieldid');
                    obj[fieldIDName] = $('tr.row-selected').attr('fieldID');
                }
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
                debugger

                this.saveToDB(obj, method);
            }
        } catch (e) {
            alert('lỗi trong quá trình save');
        }  
    }

    /**
     * sự kiện sửa 1 bản ghi mới
     * author: DVQuan(28/9/2020)
     * @param {any} seder
     */
    btnEditOnClick(seder) {
        try {
            var self = this;
            debugger;
            var rowSelected = null;
            //xác định đối tượng cần sửa
            rowSelected = $('tr.row-selected');
            if (rowSelected && rowSelected.length != 0) {
                debugger
                //lấy ID của đối tượng cần sửa
                var fieldID = $('tr.row-selected').attr('fieldID');
                debugger;
                var formatName = $('table thead tr').attr('formatName');
                $.ajax({
                    url: "/api/" + formatName + "/" + fieldID,
                    method: "GET",
                    // data: "",
                    datatype: "json",
                    contentType: "application/json"
                }).done(function (res) {
                    //thực hiện binding dữ liệu lên form chi tiết
                    var fields = $('input[fieldName],select[fieldName]');
                    $.each(fields, function (index, field) {
                        debugger
                        var fieldName = $(field).attr('fieldName');
                        var format = $(field).attr('format');
                        //biding dl lên input=date
                        if (format == "date") {
                           
                            $(field).val(commonjs.convertDate(res[fieldName]))
                        } 
                        else {
                            var fieldName = $(field).attr('fieldName');
                            $(field).val(res[fieldName]);
                        }
                    })
                    self.FormType = "Edit";
                    /* self.btnSaveOnClick(customerID);*/
                }).fail(function (res) {

                })
                this.showDialogDetail();
            } else {
                alert('vui lòng chọn một bản ghi để thực hiện thay đổi');
            }
        } catch (e) {
            alert('lỗi trong quá trình sửa');
        } 
    }

    /**
     * sự kiện xóa 1 bản ghi trong trường dữ liệu
     * author:DVQuan(28/9/2020)
     */
    btnDeleteOnClick() {
        try {
            var dataToDelete = {}
            var rowSelected = $('tr.row-selected');
            if (rowSelected && rowSelected.length != 0) {
                var r = confirm("bạn có chắc muốn xóa bản ghi này");
                if (r == true) {
                    debugger
                    //lấy ID của đối tượng cần xoa
                    var fieldID = $('tr.row-selected').attr('fieldID');
                    var fieldIDName = $('table thead tr').attr('fieldid');
                    dataToDelete[fieldIDName] = $('tr.row-selected').attr('fieldID');
                    //thực hiện delete
                    this.deleteToDB(dataToDelete);
                } else {
                    return;
                }
            }
            else {
                alert('vui long chọn 1 bản ghi để xóa');
            }
        } catch (e) {

        } 
    }

    //#endregion
    formatNumber() {
        debugger
        commonjs.reformatText(this);
    }
    //#region validate
    /**
    * vadilate kiểm tra trường nhập dữ liệu nhập
    * author: DVQuan(28/9/2020)
    */
    checkRequired() {
        // trường nhập liệu không được để trống
        if (validateData.validateEmpty(this)) {
            /*$(this).removeClass('required-error');
            $(this).removeAttr("title");*/
        }
        // nhập liệu đúng email
        //TODO: đang thực hiện validate email
       
        //nhập liêu đúng number
        //TODO: đang thực hiện number
    }
    //#endregion
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