using MISA.Data.DataAccess;
using MISA.Data.Interfaces;
using MISA.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace MISA.Data.Repository
{
    public class EmployeeRepository:BaseRepository<Employee>,IEmployeeRepository
    {
        #region constructor
        public EmployeeRepository(IDataContext<Employee> dataContext) : base(dataContext)
        {

        }
        #endregion
    }
}
