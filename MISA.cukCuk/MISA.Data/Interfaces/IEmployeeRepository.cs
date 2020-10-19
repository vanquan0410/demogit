using MISA.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace MISA.Data.Interfaces
{
    public interface IEmployeeRepository:IBaseRepository<Employee>
    {
        Employee checkItem(Object value);
    }
}
