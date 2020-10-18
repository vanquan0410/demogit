using MISA.Data.Interfaces;
using MISA.Model;
using MISA.Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace MISA.Service.Service
{
    class DepartmentService:BaseService<Department>,IDepartmentService
    {
        #region constructor
        public DepartmentService(IDepartmentRepository departmentRepository):base(departmentRepository)
        {

        }
        #endregion
    }
}
