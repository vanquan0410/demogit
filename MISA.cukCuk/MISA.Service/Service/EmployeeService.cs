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
                return false;    //đã tồn tại mã nhân viên
            return true;    //chưa tồn tại mã nhân viên
            
        }
        /// <summary>
        /// ghi dè phương thức Validate của lớp cho
        /// </summary>
        /// <param name="entity"> Emploee</param>
        /// <returns>true or flase</returns> 
        /// CreatedBy: DVQuan(19/10/2020)
        protected override bool Validate(Employee entity)
        {
            var isvalid = true;
            //check trùng mã
            if (!checkDuplicate(entity.EmployeeCode)) //đã tồn tại mã nhân viên ->false
            {
                isvalid = false;
                validateErrorResponseMsg.Add("bị trùng với mã nhân viên  " + _employeeRepository.checkItem(entity.EmployeeCode).EmployeeName);
            }
            else   //true chưa tồn tại mã nhân viên
            {
                validateErrorResponseMsg.Add(" thêm thành công");
            } 
            return isvalid;
        }
        #endregion

    }
}
