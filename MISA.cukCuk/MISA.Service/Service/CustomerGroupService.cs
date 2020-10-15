using MISA.Data.Interfaces;
using MISA.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace MISA.Service.Service
{
    public class CustomerGroupService:BaseService<CustomerGroup>,ICustomerGroupService
    {
        public CustomerGroupService(ICustomerGroupRepository customerGroupRepository):base(customerGroupRepository)
        {
        }
    }
}
