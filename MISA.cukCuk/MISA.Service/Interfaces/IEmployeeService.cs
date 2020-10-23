using MISA.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace MISA.Service.Service
{
    public interface IEmployeeService:IBaseService<Employee>
    {
        /// <summary>
        /// check trùng mã
        /// </summary>
        /// <param name="employeeCode">employeeCode</param>
        /// <returns>true(chưa tồn tại mã nhân viên) false (đã tồn tại mã nhân viên)</returns>
        /// CreatedBy:DVQuan(20/10/2020)
        bool checkDuplicate(String employeeCode);

    }
}
