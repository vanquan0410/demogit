using System;
using System.Collections.Generic;
using System.Text;

namespace MISA.Model
{
    /// <summary>
    /// danh mục nhóm khách hàng
    /// CreatedBy: DVQuan(05/10/2020)
    /// </summary>
    public class CustomerGroup
    {
        /// <summary>
        /// id nhóm khách hàng
        /// </summary>
        public Guid CustomerGroupId { get; set; }
        /// <summary>
        /// tennnhoms khách hàng
        /// </summary>
        public String CustomerGroupName { get; set; }

    }
}
