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
        public bool checkDuplicate(string employeeCode)
        {
            return _employeeRepository.checkItem(employeeCode);
        }
        //validate

        protected override bool validate(Employee entity)
        {
            var isvalid = true;
            var isvalidCode = checkDuplicate(entity.EmployeeCode);
            if (isvalidCode)
            {
                isvalid = false;
                
            }

        }
        #endregion

    }
}
