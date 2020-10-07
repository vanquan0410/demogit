$(document).ready(function () {
    employeeJS = new EmployeeJS("quan");
})

/**
 * object js quản lý danh mục nhân viên
 * author: DVQuan(28/9/2020)
 * */
class EmployeeJS extends BaseJS{
    constructor(name) {
        super();
    }

    /**
     * lấy dữ liệu fake
     * author:DVQuan
     * */
    getData() {
        var res = this;
        $.ajax({
            url: "/api/employee",
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
        /* this.Data = data;*/
    }

    saveToDB(employee, method) {
        var self = this;
        console.log(employee)
        console.log(method)
            $.ajax({
                url: "/api/employee",
                method: method,
                data: JSON.stringify(employee),
                contentType: "application/json",
            }).done(function (res) {
                if (res) {
                    self.btnCancelOnClick();
                    self.getData();
                    self.loadData();
                    alert('thanh cong');
                }
            }).fail(function (res) {
                console.log(res);
                alert('that bai');
            })

    }

    deleteToDB(employee) {
        var self = this;
        if (employee != null) {
            $.ajax({
                url: "/api/employee",
                method: "DELETE",
                data: JSON.stringify(employee),
                contentType: "application/json",
            }).done(function (res) {
                if (res) {
                    self.btnCancelOnClick();
                    //load lại dữ liệu
                    self.getData();
                    self.loadData();
                    alert('xóa thành công');
                }
            }).fail(function (res) {
                console.log(res);
                alert('xóa that bai');
            })
        }
    }
    showFocusDetail() {
        $('#txtEmployeeCode').focus();
    }
}

/**
 * data fake
 * author:DVQuan
 * */
var data = [];
for (var i = 0; i < 10; i++) {
    var employee = {
        EmployeeCode: "kh00" + i + 1,
        Fullname:"Dam Van Quan",
        Gender: "nam",
        DateOfBirth:'1999-01-01',
        Phone: "0987887678",
        DepartmentName: "Phong cong nghe",
        Email: "abc@gmail.com",
        Salary: 14000000,
        WorkStatus: "Đang làm việc"
    }
    data.push(employee);
};

