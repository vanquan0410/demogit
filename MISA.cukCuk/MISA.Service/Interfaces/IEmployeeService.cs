using MISA.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace MISA.Service.Service
{
    public interface IEmployeeService:IBaseService<Employee>
    {
        Employee checkDuplicate(String employeeCode);

    }
}
