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
            if(_employeeRepository.checkItem(employeeCode)!=null)    //đã tồn tại mã nhân viên
                return false;
            return true;
            
        }
        protected override bool Validate(Employee entity)
        {
            var isvalid = true;
            //check trùng mã
            if (!checkDuplicate(entity.EmployeeCode))
            {
                isvalid = false;
                validateErrorResponseMsg.Add("bị trùng với mã nhân viên  " + _employeeRepository.checkItem(entity.EmployeeCode).EmployeeName);
            }
            else
            {
                validateErrorResponseMsg.Add(" thêm thành công");
            }
              
            return isvalid;
        }
        #endregion

    }
}
