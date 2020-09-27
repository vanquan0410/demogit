class EmployeeJS {
    constructor(name) {
        super();
    }
}
var data = [];
for (var i = 0; i < 10; i++) {
    var employee = {
        EmployeeCode: "kh00" + i + 1,
        FullName="Dam Van Quan",
        Gender: "nam",
        DateOfBirth: new Date('1999-01-01'),
        Mobile: "0987887678",
        DepartmentName: "Phong cong nghe",
        Email: "abc@gmail.com",
        Salary: 14000000,
        WorkStatus: "Dang lam viec"
    };
    data.push(employee);
};
