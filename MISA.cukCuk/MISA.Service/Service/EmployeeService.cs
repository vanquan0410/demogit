using MISA.Data.Interfaces;
using MISA.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace MISA.Service.Service
{
    public class EmployeeService:BaseService<Employee>,IEmployeeService
    {
        #region constructor
        public EmployeeService(IEmployeeRepository employeeRepository):base(employeeRepository)
        {

        }
        #endregion  
    }
}
