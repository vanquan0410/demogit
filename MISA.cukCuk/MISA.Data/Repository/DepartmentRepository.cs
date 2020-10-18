using MISA.Data.Interfaces;
using MISA.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace MISA.Data.Repository
{
    public class DepartmentRepository:BaseRepository<Department>,IDepartmentRepository
    {
        #region constructor
        public DepartmentRepository(IDataContext<Department> dataContext) : base(dataContext)
        {
        }
        #endregion
    }
}
