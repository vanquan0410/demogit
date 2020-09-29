﻿$(document).ready(function () {
    debugger
    baseJS = new BaseJS();

});
/**********************************************
 * object cha quản lý danh mục
 * author:DVQuan(28/9/2020)
 * ********************************************/
class BaseJS {
    constructor(name) {
        try {

            this.getData();
            this.loadData();
            this.initEvents();

        } catch (e) {

        }
    }
    /******************************************
     * Thực hiện gán các sự kiện
     * author: DVQuan(24/9/2020)
     ******************************************/
    initEvents() {
        debugger
        $('#btnAdd').click(this.btnAddOnClick.bind(this));
        $('#btnCancel').click(this.btnCancelOnClick.bind(this));
        $('#dialog-btnCancel').click(this.btnCancelOnClick.bind(this));
        $('#btnEdit').click(this.btnEditOnClick.bind(this));
        $('#btnDelete').click(this.btnDeleteOnClick.bind(this));
        $('#btnRefresh').click(this.btnRefreshOnclick.bind(this));
        $("input[required]").blur(this.checkrequired);
        $('#dialog-btnAdd').click(this.btnSaveOnClick.bind(this));
        $('#dialog-btnfocus').focus(this.showfocusdetail);
        debugger
        $("table").on("click", "tbody tr", this.rowOnClick);

    }
    getData() {
        this.Data = [];
    }
    makeTrHTML(obj) {
    }
    /****************************************
     * sự kiện load data
     * author:DVQuan(27/9/2020)
     ***************************************/
    loadData() {
        debugger;
            try {
                debugger
                //đọc thông tin các cột dữ liệu
                var fields = $('table#tbListData thead th');
                var filedID = $('table#tbListData tr')[0];
                //lấy dữ liệu
                var data = this.Data;
                var seft = this;
                //đọc dữ liệu:
                $.each(data, function (index, obj) {
                    debugger
                    var id = $(filedID).attr('fieldID');
                    debugger
                    var tr = $(`<tr fieldID=`+obj[id]+`></tr>`);
                    
                    $.each(fields, function (index, field) {
                        var fieldName = $(field).attr('fieldName');
                        var value = obj[fieldName];
                        //nếu dữ liệu trống thì sẽ thay thế bằng ***
                        if (value == null || !value) {
                            value = "*****";
                            td = $(`<td>` + value + `</td>`);
                        }
                        var formatName = $(field).attr('format');
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
                            if (value.length > 40) {
                                var address = value.slice(0, 40) + "...";
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
                    /* var trHTML = seft.makeTrHTML(obj);*/
                    $("#tbListData tbody").append(tr);
                })
            } catch (e) {
                console.log("error");
            }

    }

    // #region even click

    /**************************************************
     * sự kiên khi click vao button thêm mới -> show dialog
     * createdBy: DVQuan(24/9/2020)
     **************************************************/
    btnAddOnClick() {
        debugger
        this.showDialogDetail();
        document.getElementById('txtCustomerCode').focus();
    }
    /****************************************************
     * sự kiên khi click vao button cancel-> ẩn dialog
     * createdBy: DVQuan(24/9/2020)
     ****************************************************/
    btnCancelOnClick() {
        this.hideDialogDetail();
    }
    /**
     * khi click vao button Refresh -> load lại toàn bộ dữ liệu
     * author: DVQuan(29/9/2020)
     * */
    btnRefreshOnclick() {
        debugger
        this.loadData();
    }
    /**************************************************
     * sự kiện hiện dialog
     * createdBy: DVQuan(24/9/2020)
     **************************************************/

    // #endregion even click

    //#region event-show-hide-dialog
    showfocusdetail() {
        document.getElementById('txtCustomerCode').focus();
    }

    /**************************************************
     * sự kiện show dialog
     * author:DVQuan(28/9/2020)
     **************************************************/
    showDialogDetail() {
        $('.form-dialog').show();
        $('.dialog-modal').show();

    }
    /************************************************
     * sự kiện ẩn dialog
     * createBy: DVQuan(24/9/2020)
     ************************************************/
    hideDialogDetail() {
        $('.form-dialog').hide();
        $('.dialog-modal').hide();
    }
    //#endregion event show-hide-dialog

    /***********************************************
     * sự kiện kiểm tra trường nhập dữ liệu không được để trống
     * author: DVQuan(28/9/2020)
     * 
     ***********************************************/
    checkrequired() {

        var value = this.value;
        if (!value) {
            $(this).addClass('required-error');
            //$(this).focus();
            $(this).attr("title", "Ban phải nhập thông tin này");
            return;
        }
        else {
            $(this).removeClass('required-error');
            //$(this).focus();
            $(this).removeAttr("title");
            return;
        }
    }
    /**********************************************
     * Sự kiện thêm một bản ghi mới
     * createBy: DVQuan(24/9/2020)
     *********************************************/
    btnSaveOnClick() {
        var inputrequired = $("[required]");
        var isValid = true;
        $.each(inputrequired, function (index, input) {

            var valid = $(input).trigger("blur");
            if (isValid && valid.hasClass("required-error")) {
                isValid = false;
            }
        })
        if (isValid) {
            var customer = {};
            customer.customerCode = $("#txtCustomerCode").val();
            customer.customerName = $("#txtCustomerName").val();
            customer.email = $("#txtEmail").val();
            customer.companyName = $("#txtCompanyName").val();
            customer.codeThue = $("#txtMoney").val();
            customer.diaChi = $("#txtAddress").val();
            customer.dienThoai = $("#txtPhone").val();
            debugger
            customer.ngaySinh = $("#txtDate").val();
            data.push(customer);
            this.loadata();
            this.hideDialogDetail();
        }
    }
    /**
     * sự kiện sửa 1 bản ghi mới
     * author: DVQuan(28/9/2020)
     * @param {any} seder
     */
    btnEditOnClick(seder) {
        debugger
        var rowSelected = $('tr.row-selected');
        if (rowSelected && rowSelected.length == 1) {
            debugger
            var customerID = $('tr.row-selected').attr('fieldID');
            $.ajax({
                url: "/api/customer/" + customerID,
                method: "get",
                // data: "",
                datatype: "json",
                contenttype: "application/json"
            }).done(function (res) {
                //thực hiện binding dữ liệu lên form chi tiết
                var fields = $('table.dialog-information tbody tr td')
                $.each(fields, function (index, data) {
                    if (fieldName) {
                        var fieldName = $(data).attr('fieldName');
                        $(fieldName).val(res[fieldName]);
                    }
                   
                })
               /* var customer = res;
                $('#txtCustomerCode').val(customer['CustomerCode']);
                $('#txtCustomerName').val(customer['FullName']);
                $('#txtPhone').val(customer['phone']);
                $('#txtDate').val(customer['DateOfBirth']);
                $('#txtCompanyName').val(customer['CompanyName']);
                $('#txtMoney').val(customer['Money']);
                $('#txtEmail').val(customer['Email']);
                $('#txtAddress').val(customer['Address']);*/

            }).fail(function (res) {

            })
        }
        this.showDialogDetail();

    }
    /**
     * sự kiện xóa 1 bản ghi trong trường dữ liệu
     * author:DVQuan(28/9/2020)
     * */

    //TODO đang thực hiện build chức năng xóa dở dang
    btnDeleteOnClick() {
        $.each(this.Data, function (index, value) {

        })
    }

    /**
     * sự kiện click vào table thì đổi màu dòng được chọn
     * @param {object} sender 
     * createBy: DVQuan(24/9/2020)
     */
    rowOnClick(sender) {
        debugger
        $(this).addClass("row-selected");
        $(this).siblings().removeClass("row-selected");
    }
}
/**
 * dữ liệu fake
 * createBy: DVQuan(24/9/2020)
 */
var data = [
    {
        customerCode: "kh10",
        customerName: "tran van teo",
        email: "abc@gmail.com",
        companyName: "cong ty rickit",
        codeThue: "1234",
        diaChi: "Thượng Mỗ - Đan Phượng - Hà Nội",
        dienThoai: "0165985629",
        ngaySinh: "01/10/1999"
    },
    {
        customerCode: "Kh11",
        customerName: "Trần thị tý",
        email: "tyabc@gmail.com",
        companyName: "cong ty rickit",
        codeThue: "1234",
        diaChi: "so nha gi đó Thôn an sơn ngõ thượng cát Thượng Mỗ - Đan Phượng - Hà Nội",
        dienThoai: "0165985629",
        ngaySinh: "01/10/1999"
    },
]


