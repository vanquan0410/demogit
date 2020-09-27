$(document).ready(function () {
    debugger
    baseJS = new BaseJS();

});
/**
 * Object JS quản lý các sự kiện cho danh mục khách hàng
 * */
class BaseJS {
    constructor(name) {
        try {
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
    initEvent() {
        $('#btnAdd').click(this.btnAddOnClick.bind(this));
        $('#btnCancel').click(this.btnCancelOnClick.bind(this));
        $('#dialog-btncancel').click(this.btnCancelOnClick.bind(this));
        $('#btnEdit').click(this.btnEditOnClick.bind(this));
        $("input[required]").blur(this.checkrequired);
        $('#dialog-btnadd').click(this.btnSaveOnClick.bind(this));
        $('#dialog-btnfocus').focus(this.showfocusdetail);
        debugger
        $("table").on("click", "tbody tr", this.rowOnClick);

    }
    getData() {
        this.Data = [];
    }
    makeTrHTML(obj) {

    }
    /**
     * sự kiện loaddata
     * author:DVQuan(27/9/2020)
     * */
    loadData() {
        debugger;
        try {

            var data = this.Data;
            var seft = this;

            $.each(data, function (index, obj) {
                var trHTML = seft.makeTrHTML(obj);
                $("#tbListData tbody").append(trHTML);
            })
        } catch (e) {
            console.log("error");
        }
    }

   

    // #region even click

    /**
     * sự kiên khi click vao button thêm mới -> show dialog
     * createdBy: DVQuan(24/9/2020)
     */
    btnAddOnClick() {
        this.showDialogDetail();
        document.getElementById('txtcustomerCode').focus();
    }
    /**
     * sự kiên khi click vao button cancel-> ẩn dialog
     * createdBy: DVQuan(24/9/2020)
     */
    btnCancelOnClick() {
        this.hideDialogDetail();
    }
    /**
     * sự kiện hiện dialog
     * createdBy: DVQuan(24/9/2020)
     */
    // #endregion even click

    //#region event-show-hide-dialog
    showfocusdetail() {
        document.getElementById('txtcustomerCode').focus();
    }
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
    //#endregion event show-hide dialog
    checkrequired() {

        var value = this.value;
        if (!value) {
            $(this).addClass('required-error');
            //$(this).focus();
            $(this).attr("title", "Ban phai nhap thong tin nay");
            return;
        }
        else {
            $(this).removeClass('required-error');
            //$(this).focus();
            $(this).removeAttr("title");
            return;
        }
    }
    /**
     * Sự kiện thêm customer mới
     * createBy: DVQuan(24/9/2020)
     */
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
            customer.customerCode = $("#txtcustomerCode").val();
            customer.customerName = $("#txtcustomerName").val();
            customer.email = $("#txtemail").val();
            customer.companyName = $("#txtTenCongty").val();
            customer.codeThue = $("#txtcodeThue").val();
            customer.diaChi = $("#txtDiaChi").val();
            customer.dienThoai = $("#txtdienThoai").val();
            debugger
            customer.ngaySinh = $("#txtngaySinh").val();
            data.push(customer);
            this.loadata();
            this.hideDialogDetail();
        }
    }
    btnEditOnClick(seder) {
        debugger

        var rowSelected = $('tr.row-selected');
        if (rowSelected && rowSelected.length == 1) {
            var customerID = $('tr.row-selected').data('id');
            $.ajax({
                url: "/api/customer/" + customerID,
                method: "get",
                // data: "",
                datatype: "json",
                contenttype: "application/json"
            }).done(function (res) {
                var customer = res;
                $('#txtcustomerCode').val(customer['customerCode']);
                $('#txtcustomerName').val(customer['customerName']);
                $('#txtdienThoai').val(customer['phone']);
                $('#txtngaySinh').val(customer['date']);
                $('#txtTenCongty').val(customer['companyName']);
                $('#txtcodeThue').val(customer['code']);
                $('#txtemail').val(customer['customerCode']);
                $('#txtDiaChi').val(customer['address']);

            }).fail(function (res) {

            })
        }
        this.showDialogDetail();

    }
    /**
     * sự kiện click vào table thì lấy id tương ứng
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


