$(document).ready(function () {
    customerJS = new CustomerJS("quan");
})
class CustomerJS extends BaseJS {
    constructor(name) {
        debugger
        super();
    }

    getData() {
        this.Data = data;
    }

    makeTrHTML(item) {
        debugger
        var trHTML = $(`<tr>
                        <td>`+ item.CustomerCode + `</td>
                        <td>`+ item.CustomerName + `</td>
                        <td>`+ item.CompanyName + `</td>
                        <td>`+ item.Code + `</td>
                        <td>`+ item.Address + `</td>
                        <td>`+ item.Phone + `</td>
                        <td>`+ item.DateOfBirth + `</td>
                    </tr>`);
        return trHTML;
    }
}

/**
 * data fake
 * author: DVQuan
 * */
var data = [
    {
        CustomerCode: "kh10",
        CustomerName: "tran van teo",
        Email: "abc@gmail.com",
        CompanyName: "cong ty rickit",
        Code: "1234",
        Address: "Thượng Mỗ - Đan Phượng - Hà Nội",
        Phone: "0165985629",
        DateOfBirth: "01/10/1999"
    },
    {
        CustomerCode: "kh10",
        CustomerName: "tran van teo",
        Email: "abc@gmail.com",
        CompanyName: "cong ty rickit",
        Code: "1234",
        Address: "Thượng Mỗ - Đan Phượng - Hà Nội",
        Phone: "0165985629",
        DateOfBirth: "01/10/1999"
    },
]

