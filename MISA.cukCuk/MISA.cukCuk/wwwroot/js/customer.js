$(document).ready(function () {
    /**//*  loadData();*//*
        $('#btnAdd').click(function () {
            $('.form-dialog').show();
            $('.dialog-modal').show();
        })
    
        $('#btnCancel').click(function () {
            $('.form-dialog').hide();
            $('.dialog-modal').hide();
        })
        $('#dialog-btncancel').click(function () {
            debugger
            $('.form-dialog').hide();
            $('.dialog-modal').hide();
        })*/
    /*  var employee = new employeejs();*/
    var customer = new customerjs();
        debugger
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
       /* this.loaddata();*/
    }
    initevent() {
        $('#btnAdd').click(this.btnAddOnClick.bind(this));
        $('#btnCancel').click(this.btnCancelOnClick.bind(this));
        $('#dialog-btncancel').click(this.btnCancelOnClick.bind(this));
        $("input[required]").blur(this.checkrequired);
        $('#dialog-btnadd').click(this.btnSaveOnClick.bind(this));
        $('#dialog-btnfocus').focus(this.showfocusdetail);
        $("table").on("click", "tbody tr", this.rowOnClick);
        
    }
    showfocusdetail(){
        document.getElementById('txtcustomerCode').focus();
    }
    btnAddOnClick() {
        debugger
       
        this.showDialogDetail();
        document.getElementById('txtcustomerCode').focus();
    }
    btnCancelOnClick() {
        this.hideDialogDetail();
    }
/*hien dialog */
    showDialogDetail() {
        $('.form-dialog').show();
        $('.dialog-modal').show();
        
    }
/*an dialog*/
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
/*load data*/
    loadata() {
        /*$('.tbListcustomer tbody').empty();*/
        $.each(data, function (index, item) {
             // this.hideLength(item.customerName);
             if(item.diaChi.length>31){

               var address=item.diaChi.slice(0,31)+"...";
            }
            else{
                var address=item.diaChi;
            }
            var trHTML = $(`<tr>
                        <td>`+ item.customerCode + `</td>
                        <td>`+ item.customerName + `</td>
                        <td>`+ item.companyName + `</td>
                        <td>`+ item.codeThue + `</td>
                        <td title="`+item.diaChi+`">`+ address + `</td>
                        <td>`+ item.dienThoai + `</td>
                        <td>`+ item.ngaySinh + `</td>
                    </tr>`);
                    // this.hideLength(item.customerName);
                   
            $('.tbListcustomer tbody').append(trHTML);

        })
    }
    hideLength(item){
        debugger
        var text=item;
        if(text.length==1){
            alert("check");
        }
    }
    btnSaveOnClick() {
        debugger;
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
    rowOnClick(sender){
        $(this).addClass("row-selected");
        $(this).siblings().removeClass("row-selected");
    }
    
}
var data = [
    {
        customerCode: "kh10",
        customerName: "tran van teo",
        email: "abc@gmail.com",
        companyName: "cong ty rickit",
        codeThue: "1234",
        diaChi: "Thượng Mỗ - Đan Phượng - Hà Nội",
        dienThoai: "0165985629",
        ngaySinh:"01/10/1999"
    },
    {
        customerCode: "Kh11",
        customerName: "Trần thị tý",
        email: "tyabc@gmail.com",
        companyName: "cong ty rickit",
        codeThue: "1234",
        diaChi: "so nha gi đó Thôn an sơn ngõ thượng cát Thượng Mỗ - Đan Phượng - Hà Nội",
        dienThoai: "0165985629",
        ngaySinh:"01/10/1999"
    },
]