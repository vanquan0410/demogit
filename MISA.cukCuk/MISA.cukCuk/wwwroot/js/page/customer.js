$(document).ready(function () {
    
    customerJS = new CustomerJS("quan");
})

/**
 * Object JS quản lý các sự kiện cho danh mục khách hàng
 * */
class CustomerJS extends BaseJS {
    //#region constructor
    constructor(name) {
        super();
        this.loadDataSelect();
    }
    //#endregion

    //#region method
    /**
     * focus và input mã khách hàng
     * author: DVQuan(5/10/2020)
     * */
    showFocusDetail() {
        $('#txtCustomerCode').focus();
    }

    /**
     * bidding dữ liệu ra select option
     * author: DVQuan(12/10/2020)
     * */
    loadDataSelect() {
        $.ajax({
            url: "/api/CustomerGroup",
            method: "GET",
            data: "",
            datatype: "json",
            contenttype: "application/json"
        }).done(function (res) {
            $.each(res, function (index, value) {
                var o = new Option(value.CustomerGroupName, value.CustomerGroupId);
               
                $(o).html(value.CustomerGroupName);
                $('#customerGroup').append(o);
            })
        })
    }

    /**
    * lấy dữ liệu fake của customer-> phân trang
    * author:DVQuan
    * */
    getData(page, size) {

        var res = this;
        $.ajax({
            url: "/api/customer?page=" + page + "&size=" + size,
            method: "GET",
            data: "",
            datatype: "json",
            contenttype: "application/json"
        }).done(function (response) {
            res.Data = response;
            console.log("thanh cong");
            //load lai data khi co data từ server trả về
            res.loadData();
        }).fail(function (response) {
            res.Data = null;
        })
    }


    /**
     * định dạng lại dòng dữ liệu của customer
     * author: DVQuan(24/9/2020)
     * @param {any} item
     * */
    makeTrHTML(item) {
        var trHTML = $(`<tr>
                        <td>`+ item.CustomerCode + `</td>
                        <td>`+ item.CustomerName + `</td>
                        <td>`+ item.CompanyName + `</td>
                        <td>`+ item.Code + `</td>
                        <td>`+ item.Address + `</td>
                        <td style="text-align:center">`+ item.Phone + `</td>
                        <td>`+ item.DateOfBirth + `</td>
                    </tr>`);
        return trHTML;
    }

    /**
     * lưu trữ dữ liệu xuống DB mục đích của việc thêm mới hoặc chỉnh sửa
     * author: DVQuan(30/9/2020)
     * @param {any} customer
     * @param {any} POST
     * */
    saveToDB(customer, method) {
        var self = this;
        var alter = 'Thêm';
        if (method == 'PUT') {
            alter = 'Sửa';
        }
            $.ajax({
                url: "/api/customer/",
                method: method,
                data: JSON.stringify(customer),
                contentType: "application/json",
                
            }).done(function (res) {
                if (res) {
                    //close form-dialog
                    self.btnCancelOnClick();
                    //load lại dữ liệu
                    self.getData(self.page, self.startPage);
                    self.loadData();
                    self.showMessage();
                    $('.message-title').html(alter+ " thành công")
                }
            }).fail(function (res) {
                self.showMessage();
                $('.message-title').html(alter + " thất bại")
            })
    }

    /**
     * xóa 1 bản ghi của khách hàng
     * @param {any} obj  customer id
     * author: DVQuan(4/10/2020)
     */
    deleteToDB(customer) {
        var self = this;
        if (customer != null) {
            $.ajax({
                url: "/api/customer",
                method: "DELETE",
                data: JSON.stringify(customer),
                contentType: "application/json",
            }).done(function (res) {
                if (res) {
                    self.btnCancelOnClick();
                    //load lại dữ liệu
                    self.getData(self.page, self.startPage);
                    self.loadData();
                    alert('xóa thành công');
                }
            }).fail(function (res) {
                console.log(res);
                alert('xóa that bai');
            })
        }
    }

    /**
     * show message
     * author: DVQuan(14/10/2020)
     * */
    showMessage() {
        $('.dialog-modal-messages').show();
        $('.form-message').show();
        setTimeout(this.hideMessage, 1000);
    }

    /**
     * hide message
     * author: DVQuan(14/10/2020)
     * */
    hideMessage() {
        $('.dialog-modal-messages').hide();
        $('.form-message').hide();
    }

    //#endregion
}

/**
 * data fake
 * author: DVQuan(20/9/2020)
 * */
var dataa = [
    {
        CustomerCode: "KH2",
        Fullname: "trần van teo",
        Email: "abc1@gmail.com",
        CompanyName: "cong ty rickit",
        Money: "5678000000",
        Address: "số nhà 1 - ngõ 10 - Thôn phượng trì - Thị trấn phùng - Đan Phượng - Hà Nội",
        Phone: "0165985629",
        DateOfBirth: new Date('1999-01-01')
    },
    {
        CustomerCode: "KH3",
        Fullname: "Nguyễn thị anh",
        Email: "abc2@gmail.com",
        CompanyName: "cong ty rickit",
        Money: "1234000000",
        Address: "Thượng Mỗ - Đan Phượng - Hà Nội",
        Phone: "0165984629",
        DateOfBirth: new Date('1999-01-01')
    },
]

