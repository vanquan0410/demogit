using System;
using System.Collections.Generic;
using System.Security.Principal;
using System.Text;

namespace MISA.Model
{
    /// <summary>
    /// danh mực vị trí
    /// </summary>
    /// CreatedBy: DVQuan(10/10/2020)
    public class Possition
    {
        /// <summary>
        /// id vij tri cong viec
        /// </summary>
        /// CreatedBY: DVQuan(16/10/2020)
        public Guid PositionId { get; set; }

        /// <summary>
        /// Ten ci tri cong viec
        /// </summary>
        /// CreatedBy: DVQuan(16/10/2020)
        public String PositionName { get; set; }
    }
}
