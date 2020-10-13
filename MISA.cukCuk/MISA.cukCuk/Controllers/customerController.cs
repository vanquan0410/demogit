using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MISA.cukCuk.model;
using MISA.cukCuk.Model;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MISA.cukCuk.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        // GET: api/<CustomerController>
        [HttpGet]
        public IEnumerable<CustomerModel> Get([FromQuery] int page,int size)
        {
            DBConnection db = new DBConnection();
            var listCustomer = new List<CustomerModel>();
            listCustomer = db.getData(page,size);
            return listCustomer;
        }

        // GET api/<CustomerController>/5
        [HttpGet("{customerId}")]
        public CustomerModel Get(Guid customerId)
        {
            DBConnection db = new DBConnection();
            CustomerModel customer = db.getElementById(customerId);
            return customer;
        }
        [HttpGet("countpage")]
        public int GetCountData()
        {
            DBConnection db = new DBConnection();
            return db.getCountData();
        }

        // POST api/<CustomerController>
        [HttpPost]
        public bool Post([FromBody] CustomerModel customer)
        {
            DBConnection db = new DBConnection();
            return db.insertCustomer(customer);
        }

        // PUT api/<CustomerController>/5
        [HttpPut]
        public bool Put([FromBody] CustomerModel customerModel)
        {
            DBConnection db = new DBConnection();
            return db.updateCustomer(customerModel);
        }

        // DELETE api/<CustomerController>/5
        [HttpDelete]
        public bool Delete([FromBody] CustomerModel customerModel)
        {
            DBConnection db = new DBConnection();
            return db.deleteCustomer(customerModel);
           
        }
    }
}
