using MISA.Data.Interfaces;
using MISA.Model;

using System;
using System.Collections.Generic;
using System.Text;

namespace MISA.Service.Service
{
    public class DepartmentService:BaseService<Department>,IDepartmentService
    {
        #region constructor
        public DepartmentService(IDepartmentRepository departmentRepository):base(departmentRepository)
        {

        }
        #endregion
    }
}
