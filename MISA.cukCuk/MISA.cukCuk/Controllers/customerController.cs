using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MISA.cukCuk.model;

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
            return CustomerModel.listCustomer;
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
        [HttpPut("{id}")]
        public String Put(int id, [FromBody] string value)
        {
            return value;
        }

        // DELETE api/<customerController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
