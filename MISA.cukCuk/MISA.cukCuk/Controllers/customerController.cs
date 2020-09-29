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
            /*List<CustomerModel> arr = new List<CustomerModel>();
            arr.Add(new CustomerModel("kh10","Tran thi a", "cong ty rickit", "1934","phố Trần Duy Hưng, Cầu giấy, Hà nội","0988788776","10/10/2010"));
            arr.Add(new CustomerModel("kh11", "Tran thi b", "cong ty rickit", "1294", "phố Trần Duy Hưng, Cầu giấy, Hà nội", "0987588776", "10/10/2010"));
            arr.Add(new CustomerModel("kh12", "Tran thi c", "cong ty rickit", "1244", "phố Trần Duy Hưng, Cầu giấy, Hà nội", "0969788776", "10/10/2010"));
            arr.Add(new CustomerModel("kh13", "Tran thi d", "cong ty rickit", "1934", "phố Trần Duy Hưng, Cầu giấy, Hà nội", "0988478776", "10/10/2010"));
            arr.Add(new CustomerModel("kh14", "Tran thi e", "cong ty rickit", "1734", "phố Trần Duy Hưng, Cầu giấy, Hà nội", "0988798776", "10/10/2010"));
            arr.Add(new CustomerModel("kh15", "Tran thi f", "cong ty rickit", "1294", "phố Trần Duy Hưng, Cầu giấy, Hà nội", "0988778776", "10/10/2010"));
            arr.Add(new CustomerModel("kh16", "Tran thi g", "cong ty rickit", "1734", "phố Trần Duy Hưng, Cầu giấy, Hà nội", "0988799776", "10/10/2010"));*/
            /* CustomerModel customerModel = new CustomerModel();
             customerModel.customerCode = "KH10";
             customerModel.customerName = "tran thi gi";

             customerModel.code = "1123";
             customerModel.companyName = "cong ty rickit";
             customerModel.address = "ha noi";
             customerModel.phone = "0098678711";
             customerModel.date = "10/10/2010";*/
            return CustomerModel.listCustomer;
            /* return new Guid[] { Guid.NewGuid(), Guid.NewGuid() };*/
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
        public void Post([FromBody] string value)
        {
           
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
