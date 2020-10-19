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
        IEmployeeRepository _employeeRepository;
        public EmployeeService(IEmployeeRepository employeeRepository):base(employeeRepository)
        {
            _employeeRepository = employeeRepository;
        }
        #endregion

        #region method
        //check trùng mã
        public Employee checkDuplicate(string employeeCode)
        {
            return _employeeRepository.checkItem(employeeCode);
        }
        #endregion

    }
}
