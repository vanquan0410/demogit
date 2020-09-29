
$(document).ready(function () {
    var customer = new customerjs();
    if (document.getElementById('#dialog-btncancel').hasFocus()) {
        document.getElementById('txtcustomerCode').focus();
    }


});
class customerjs {

    constructor() {
        debugger
        this.initevent();
        this.loadata();
        this.shortCustomerName();
    }
    /**
     * Thực hiện gán các sự kiện
     * createdBy: DVQuan(24/9/2020)
     */
    initevent() {
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
    showfocusdetail() {
        document.getElementById('txtcustomerCode').focus();
    }
    /**
     * sự kiên khi click vao button -> show dialog
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
     * sự kiện load data
     * createdBy: DVQuan(24/9/2020)
     */
    loadata() {
        $('.tbListcustomer tbody').empty();
        $.ajax({
            url: "/api/customer",
            method: "get",
            data: "",
            datatype: "json",
            contenttype: "application/json"
        }).done(function (response) {
            debugger
            $.each(response, function (index, item) {
                // this.hideLength(item.customerName);
                if (item.address.length > 31) {

                    var address = item.address.slice(0, 31) + "...";
                }
                else {
                    var address = item.address;
                }
                var trHTML = $(`<tr data-id=` + item['customerID'] + `>
                        <td>`+ item.customerCode + `</td>
                        <td>`+ item.customerName + `</td>
                        <td>`+ item.companyName + `</td>
                        <td>`+ item.code.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + `</td>
                        <td title="`+ item.address + `">` + address + `</td>
                        <td>`+ item.phone + `</td>
                        <td>`+ item.date + `</td>
                    </tr>`);

                trHTML.data("id", item['customerID']);
                //mac dinh   chon ban ghi dau tien trong ds
                $('table#tbListCustomer tbody tr').first().addClass('row-selected');
                debugger;
                // this.hideLength(item.customerName);
                $('.tbListcustomer tbody').append(trHTML);

            })
            alert("connect thanh cong");
        }).fail(function (response) {
            // alert("connect fail");
        })
        /*$('.tbListcustomer tbody').empty();*/

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
                var item = res;
                var fieldName
               /* $('#txtcustomerCode').val(customer['customerCode']);
                $('#txtcustomerName').val(customer['customerName']);
                $('#txtdienThoai').val(customer['phone']);
                $('#txtngaySinh').val(customer['date']);
                $('#txtTenCongty').val(customer['companyName']);
                $('#txtcodeThue').val(customer['code']);
                $('#txtemail').val(customer['customerCode']);
                $('#txtDiaChi').val(customer['address']);*/

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