using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MISA.cukCuk.model;
using MISA.cukCuk.Model;
using MySql.Data.MySqlClient;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MISA.cukCuk.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class customerController : ControllerBase
    {
        // GET: api/<customerController>
        [HttpGet]
        public IEnumerable<CustomerModel> Get()
        {
            DBConnection db = new DBConnection();
            var listCustomer = new List<CustomerModel>();
            listCustomer = db.getData();
            return listCustomer;
        }

        // GET api/<customerController>/5
        [HttpGet("{customerId}")]
        public CustomerModel Get(Guid customerId)
        {
            var customer =CustomerModel.listCustomer.Where(c=>c.CustomerID == customerId).FirstOrDefault();
            return customer;
        }

        // POST api/<customerController>
        [HttpPost]
        public bool Post([FromBody] CustomerModel customer)
        {
            if (customer != null)
            {
                customer.CustomerID = Guid.NewGuid();
                CustomerModel.listCustomer.Add(customer);
                return true;
            }
            return false;
        }

        // PUT api/<customerController>/5
        [HttpPut]
        public bool Put([FromBody] CustomerModel customerModel)
        {
            var customerEdit = CustomerModel.listCustomer.Where(x => x.CustomerID == customerModel.CustomerID).FirstOrDefault();
            if (customerEdit!=null)
            {
                customerEdit.CustomerCode = customerModel.CustomerCode;
                customerEdit.CustomerName = customerModel.CustomerName;
                customerEdit.Email = customerModel.Email;
                customerEdit.CompanyName = customerModel.CompanyName;
                customerEdit.DebitMoney = customerModel.DebitMoney;
                customerEdit.Address = customerModel.Address;
                customerModel.PhoneNumber = customerModel.PhoneNumber;
                customerEdit.DateOfBirth = customerModel.DateOfBirth;
                return true;
            }
            return false;
        }

        // DELETE api/<customerController>/5
        [HttpDelete]
        public bool Delete([FromBody] CustomerModel customerModel)
        {
            var customerDelete = CustomerModel.listCustomer.Where(x => x.CustomerID == customerModel.CustomerID).FirstOrDefault();
            if (customerDelete != null)
            {
                CustomerModel.listCustomer.Remove(customerDelete);
                return true;
            }
            return false;
        }
    }
}
