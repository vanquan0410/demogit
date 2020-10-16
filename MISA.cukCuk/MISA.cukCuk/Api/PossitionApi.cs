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
    public class PossitionApi : ControllerBase
    {
        // GET: api/<PossitionApi>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<PossitionApi>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<PossitionApi>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<PossitionApi>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<PossitionApi>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
