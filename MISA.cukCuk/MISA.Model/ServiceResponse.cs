using System;
using System.Collections.Generic;
using System.Text;

namespace MISA.Model
{
   public  class ServiceResponse
    {
        /// <summary>
        /// thông báo
        /// </summary>
        public List<string> Msg { get; set; } = new List<string>();
        /// <summary>
        /// 
        /// </summary>
        public bool Success { get; set; }
        /// <summary>
        /// data trả về
        /// </summary>
        public object Data { get; set; }
    }
}
