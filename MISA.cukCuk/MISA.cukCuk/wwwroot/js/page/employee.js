$(document).ready(function () {
    employeeJS = new EmployeeJS("quan");
})
/**
 * object js quản lý danh mục nhân viên
 * author: DVQuan(28/9/2020)
 * */
class EmployeeJS extends BaseJS{
    constructor(name) {
        debugger
        super();
    }
    /**
     * lấy dữ liệu fake
     * author:DVQuan
     * */
    getData() {
        this.Data = data;
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

