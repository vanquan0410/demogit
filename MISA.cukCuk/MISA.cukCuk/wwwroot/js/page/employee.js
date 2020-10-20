$(document).ready(function () {
    employeeJS = new EmployeeJS("quan");
})

/**
 * object js quản lý danh mục nhân viên
 * author: DVQuan(28/9/2020)
 * */
class EmployeeJS extends BaseJS {
    //#region constructor
    constructor(name) {
        super();
        this.loadDataSelectPossition();
        this.loadDataSelectDepartment();
    }
    //#endregion

    //#region method
    /**
     * bidding dữ liệu ra select option
     * author: DVQuan(12/10/2020)
     * */
    loadDataSelectPossition() {
        debugger
        $.ajax({
            url: "/possition",
            method: "GET",
            data: "",
            datatype: "json",
            contenttype: "application/json"
        }).done(function (res) {
            debugger
            $.each(res, function (index, value) {
                var o = new Option(value.PossitionId, value.PositionName);
                $(o).val(value.PossitionId);
                $(o).html(value.PositionName);
                $('#possition').append(o);
            })
        })
    }

    /**
     * load data department
     * author: DVQuan(19/10/2020)
     * */
    loadDataSelectDepartment() {
        debugger
        $.ajax({
            url: "/department",
            method: "GET",
            data: "",
            datatype: "json",
            contenttype: "application/json"
        }).done(function (res) {
            debugger
            $.each(res, function (index, value) {
                var o = new Option(value.DepartmentId, value.DepartmentName);
                $(o).val(value.DepartmentId);
                $(o).html(value.DepartmentName);
                $('#department').append(o);
            })
        })
    }

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
                debugger
                self.getData(self.page, self.startPage);
                self.loadData();
                self.showMessageWarning();
                $('.message-title-warning').html(alter + " thành công");
                setTimeout(self.hideMessageWarning, 1000);
            }
        }).fail(function (res) {
            self.showMessageWarning();
            $('.message-title-warning').html(alter + " thất bại");
            setTimeout(self.hideMessageWarning, 1000);
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
                    self.getData(self.page, self.startPage);
                    self.loadData();
                    self.showMessageWarning();
                    $('.message-title-warning').html("xóa thành công");
                    setTimeout(self.hideMessageWarning, 1000);
                }
            }).fail(function (res) {
                console.log(res);
                self.showMessageWarning();
                $('.message-title-warning').html("xóa thất bại");
                setTimeout(self.hideMessageWarning, 1000);
            })
        }
    }

    /**
     * focus vào ô employee code
     * */
    showFocusDetail() {
        $('#txtEmployeeCode').focus();
    }

    addItemCode() {
        $.ajax({
            url: "/api/employee/maxcodeemployee",
            method: "GET",
            data: "",
            datatype: "json",
            contenttype: "application/json"
        }).done(function (res) {
            //todo đang thực hiện
            debugger
            var code = res.slice(2);
            var value = (code) + 1;
            value = 'NV' + value;
            
            $('#txtEmployeeCode').val(res);
        })
    }
    /**
    * show message warning
     * author: DVQuan(14/10/2020)
    * */
    showMessageWarning() {
        $('.dialog-modal-messages-warning').show();
        $('.form-message-warning').show();
    }

    /**
    * hide message warning
    * author: DVQuan(14/10/2020)
    * */
    hideMessageWarning() {
        $('.dialog-modal-messages-warning').hide();
        $('.form-message-warning').hide();
    }

    /**
     * freturn tên nhân viên
     * author: DVQuan(20/10/2020)
     * */
    getName() {
        return "nhân viên";
    }

    /**
     * return tên class
     * author: DVQuan(20/10/2020)
     * */
    getClassName() {
        return "employee";
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
        Fullname: "Dam Van Quan",
        Gender: "nam",
        DateOfBirth: '1999-01-01',
        Phone: "0987887678",
        DepartmentName: "Phong cong nghe",
        Email: "abc@gmail.com",
        Salary: 14000000,
        WorkStatus: "Đang làm việc"
    }
    data.push(employee);
};

