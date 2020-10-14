using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MISA.cukCuk.Model
{
    public class EnumAction
    {
        /// <summary>
        /// giới tính 0-Nam, 1-nữ
        /// </summary>
        /// CreatedBy(14/10/2020)
        public enum Gender
        {
            /// <summary>
            /// Nam
            /// </summary>
            Male=0,
            /// <summary>
            /// Nữ
            /// </summary>
            Female=1
            
        }

        /// <summary>
        /// tình trạng công việc
        /// </summary>
        /// CreatedBy: DVQuan(14/10/2020)
        public enum WorkStatus
        {
            /// <summary>
            /// Đã nghỉ việc
            /// </summary>
            Stopeed=0,
            /// <summary>
            /// đang làm việc
            /// </summary>
            Working=1
        }
    }
}
