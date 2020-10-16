using System;
using System.Collections.Generic;
using System.Text;

namespace MISA.Model
{
    public class Department
    {
        /// <summary>
        /// Id phong ban
        /// </summary>
        /// CreatedBy: DVQuan(16/10/2020)
        public Guid DepartmentId { get; set; }

        /// <summary>
        /// Ma phong ban
        /// </summary>
        /// CreatedBy: DVQuan(16/10/2020)
        public String DepartmentCode { get; set; }

        /// <summary>
        /// ten phong ban
        /// </summary>
        public String DepartmentName { get; set; }
    }
}
