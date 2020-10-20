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
        /// <param name="employeeCode"></param>
        /// <returns></returns>
        /// CreatedBy:DVQuan(20/10/2020)
        bool checkDuplicate(String employeeCode);

    }
}
