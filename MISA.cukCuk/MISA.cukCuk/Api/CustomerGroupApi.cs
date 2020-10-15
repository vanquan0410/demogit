using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MISA.cukCuk.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerGroupApi : ControllerBase
    {
        // GET: api/<CustomerGroupApi>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<CustomerGroupApi>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<CustomerGroupApi>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<CustomerGroupApi>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CustomerGroupApi>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
