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
        public CustomerModel Get()
        {
            ArrayList arr = new ArrayList();
            arr.Add(new CustomerModel("KH10", "tran thi gi", "1123", "cong ty rickit", "ha noi", "0098678711", "10/10/2010"));
            CustomerModel customerModel = new CustomerModel();
            customerModel.customerCode = "KH10";
            customerModel.customerName = "tran thi gi";
           
            customerModel.code = "1123";
            customerModel.companyName = "cong ty rickit";
            customerModel.address = "ha noi";
            customerModel.phone = "0098678711";
            customerModel.date = "10/10/2010";
            return customerModel;
        }

        // GET api/<customerController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<customerController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<customerController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<customerController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
