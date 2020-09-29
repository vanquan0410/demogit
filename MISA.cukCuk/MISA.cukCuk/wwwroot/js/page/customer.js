﻿$(document).ready(function () {
    customerJS = new CustomerJS("quan");
})

/**
 * Object JS quản lý các sự kiện cho danh mục khách hàng
 * */
class CustomerJS extends BaseJS {
    constructor(name) {
        debugger
        super();
    }
    /**
    * lấy dữ liệu fake
    * author:DVQuan
    * */
    getData() {
        /* this.Data = data;*/
        var res = this;
        $.ajax({
            url: "/api/customer",
            method: "get",
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
       /* this.Data = data;*/
        debugger
    }

    /**
     * định dạng lại dòng dữ liệu của customer
     * author: DVQuan(24/9/2020)
     * @param {any} item
     */
    makeTrHTML(item) {
        debugger
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
    selectRow() {
        var values = [];
        var fields = $('table.dialog-information tbody tr td');
        $.each(fields, function (index, item) {
            var filedName = $(item).attr('fieldName');
            if (filedName) {
                values = values.push(filedName);
            }
        })


    }
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

