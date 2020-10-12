using System;
using System.Collections.Generic;
using System.Text;

namespace MISA.Entities
{
    public class Customer
    {
        public Customer()
        {

        }
        public Guid? CustomerId { get; set; }
        public String CustomerCode { get; set; }
        public String CustomerName { get; set; }
        public String Email { get; set; }
        public String CompanyName { get; set; }
        public Guid? CustomerGroupId { get; set; }
        public double DebitMoney { get; set; }
        public string Address { get; set; }
        public String PhoneNumber { get; set; }
        public DateTime DateOfBirth { get; set; }
    }
}
