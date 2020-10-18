/*using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MISA.Service.Service;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MISA.cukCuk.Controllers
{
    [Route("Customers")]
    [ApiController]
    public class CustomerApi : ControllerBase
    {
        ICustomerService _customerService;
        public CustomerApi(ICustomerService customerService)
        {
            _customerService = customerService;
        }
        // GET: api/<CustomerApi>
        [HttpGet]
        public ActionResult Get([FromQuery] int page, int size)
        {
            var customers = _customerService.Get(page,size);
            if (customers.Count() > 0)
                return Ok(customers);
            else
                return NoContent();
        }

        // GET api/<CustomerApi>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<CustomerApi>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<CustomerApi>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CustomerApi>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
*/