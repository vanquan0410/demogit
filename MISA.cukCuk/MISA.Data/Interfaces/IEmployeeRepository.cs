using MISA.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace MISA.Data.Interfaces
{
    public interface IEmployeeRepository:IBaseRepository<Employee>
    {
        /// <summary>
        /// kiem tra trung item
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        Employee checkItem(Object value);
    }
}
