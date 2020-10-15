using MISA.Data.Interfaces;
using MISA.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace MISA.Service.Service
{
    public class CustomerService :BaseService<Customer>,ICustomerService
    {
        public CustomerService(ICustomerRepository customerRepository):base(customerRepository)
        {

        }
    }
}
