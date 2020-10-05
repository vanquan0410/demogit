using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MISA.cukCuk.model
{
    public class EmployeeModel
    {
        public static List<EmployeeModel> listEmployee = new List<EmployeeModel>()
        {
            new EmployeeModel("NV001","trần thị anh",true,new DateTime(1999,10,10),"0989987655","phong nhan sự","abc@gmail.com",100000000,"Đang làm việc"),
            new EmployeeModel("NV002","trần thị anh",false,new DateTime(1999,10,10),"0989987655","phong nhan sự","abc@gmail.com",100000000,"Đang làm việc"),
            new EmployeeModel("NV003","trần thị anh",true,new DateTime(1999,10,10),"0989987655","phong nhan sự","abc@gmail.com",100000000,"Đang làm việc"),
            new EmployeeModel("NV004","trần thị anh",false,new DateTime(1999,10,10),"0989987655","phong nhan sự","abc@gmail.com",100000000,"Đang làm việc"),
            new EmployeeModel("NV005","trần thị anh",true,new DateTime(1999,10,10),"0989987655","phong nhan sự","abc@gmail.com",100000000,"Đang làm việc"),
            new EmployeeModel("NV006","trần thị anh",true,new DateTime(1999,10,10),"0989987655","phong nhan sự","abc@gmail.com",100000000,"Đang làm việc"),
            new EmployeeModel("NV007","trần thị anh",false,new DateTime(1999,10,10),"0989987655","phong nhan sự","abc@gmail.com",100000000,"Nghỉ việc"),
            new EmployeeModel("NV008","trần thị anh",true,new DateTime(1999,10,10),"0989987655","phong nhan sự","abc@gmail.com",100000000,"Đang làm việc")
        };
        public EmployeeModel()
        {
            EmployeeID = Guid.NewGuid();
        }
        public EmployeeModel(String employeeCode,String fullName,bool gender,DateTime date,String phone,String departmentName,String email,double salary,String workstatus)
        {
            this.EmployeeID = Guid.NewGuid();
            this.EmployeeCode = employeeCode;
            this.FullName = fullName;
            this.Gender = gender;
            this.DateOfBirth = date;
            this.Phone = phone;
            this.DepartmentName = departmentName;
            this.Email = email;
            this.Salary = salary;
            this.WorkStatus = workstatus;
        }
        public Guid? EmployeeID { get; set; }
        public String EmployeeCode { get; set; }
        public String FullName { get; set; }
        public bool Gender { get; set; }
        public DateTime DateOfBirth { get; set; }
        public String Phone { get; set; }
        public String DepartmentName { get; set; }
        public String Email { get; set; }
        public Double Salary { get; set; }
        public String WorkStatus { get; set; }
    }
}
