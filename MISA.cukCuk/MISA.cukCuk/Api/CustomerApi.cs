using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MISA.Model;
using MISA.Service.Service;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MISA.cukCuk.Api
{
    [Route("api/customer")]
    [ApiController]
    public class CustomerApi : ControllerBase
    {
        #region constructor
        ICustomerService _customerService;
        public CustomerApi(ICustomerService customerService)
        {
            _customerService = customerService;
        }
        #endregion

        #region method
        // GET: api/<CustomerApi>
        [HttpGet]
        public ActionResult Get([FromQuery] int page, int size)
        {
            var customers = _customerService.Get(page, size);
            if (customers.Count() > 0)
                return Ok(customers);
            else
                return NoContent();
        }

        [HttpGet("countpage")]
        public int GetCountData()
        {
            return _customerService.GetCountData();
            
        }

        // GET api/<CustomerApi>/5
        [HttpGet("{id}")]
        public ActionResult Get(Guid id)
        {
            var customers = _customerService.GetById(id);
            if (customers!=null)
                return Ok(customers);
            else
                return NoContent();
        }

        // POST api/<CustomerApi>
        [HttpPost]
        public IActionResult Post([FromBody] Customer customer)
        {
            var customerResult = _customerService.Insert(customer);
            if (customerResult)
            {
                return Ok(true);
            }
            else
            {
                return Ok(false);
            }
        }

        // PUT api/<CustomerApi>/5
        [HttpPut]
        public IActionResult Put([FromBody] Customer customer)
        {
            var customerResult = _customerService.Update(customer);
            if (customerResult)
            {
                return Ok(true);
            }
            else
            {
                return Ok(false);
            }
        }

        // DELETE api/<CustomerApi>/5
        [HttpDelete]
        public IActionResult Delete([FromBody] Customer customer)
        {
            var customerResult = _customerService.Delete(customer);
            if (customerResult)
            {
                return Ok(true);
            }
            else
            {
                return Ok(false);
            }
        }
        #endregion
    }
}
