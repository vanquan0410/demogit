$(document).ready(function () {
    employeeJS = new EmployeeJS("quan");
})

/**
 * object js quản lý danh mục nhân viên
 * author: DVQuan(28/9/2020)
 * */
class EmployeeJS extends BaseJS{
    //#region constructor
    constructor(name) {
        super();
    }
    //#endregion

    //#region method
    /**
     * lấy dữ liệu fake của employee-> phân trang
     * author:DVQuan
     * */
    getData(page, size) {
        debugger
        var res = this;
        $.ajax({
            url: "/api/employee?page=" + page + "&size=" + size,
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
            url: "/api/employee/",
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
                $('.message-title').html(alter + " thành công")
            }
        }).fail(function (res) {
            self.showMessage();
            $('.message-title').html(alter + " thất bại")
        })
    }

    /**
     * xóa một bản ghi trong cơ sở dữ liệu
     * @param {any} employee
     * author: DVQuan(10/10/2020)
     */
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
    //#endregion
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

