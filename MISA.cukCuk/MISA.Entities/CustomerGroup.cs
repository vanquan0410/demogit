using System;
using System.Collections.Generic;
using System.Text;

namespace MISA.Entities
{
    public class CustomerGroup
    {
        public CustomerGroup()
        {

        }
        public Guid CustomerGroupId { get; set; }
        public String CustomerGroupName { get; set; }
    }
}
