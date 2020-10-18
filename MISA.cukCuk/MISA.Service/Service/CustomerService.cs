using MISA.Data.Interfaces;
using MISA.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace MISA.Service.Service
{
    public class CustomerService:BaseService<Customer>,ICustomerService
    {
        #region constructor
        public CustomerService(ICustomerRepository customerRepository):base(customerRepository)
        {
        }
        #endregion
    }
}
