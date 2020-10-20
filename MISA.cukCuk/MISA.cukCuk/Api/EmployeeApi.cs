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
    [Route("api/employee")]
    [ApiController]
    public class EmployeeApi : ControllerBase
    {
        IEmployeeService _employeeService;
        public EmployeeApi(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }
        // GET: api/<EmployeeApi>
        [HttpGet]
        public ActionResult<Employee> Get([FromQuery] int page, int size)
        {
            var employees = _employeeService.Get(page, size);
            if (employees.Count() > 0)
                return Ok(employees);
            else
                return NoContent();
        }

        // GET api/<EmployeeApi>/5
        [HttpGet("{id}")]
        public ActionResult Get(Guid id)
        {
            var employee = _employeeService.GetById(id);
            if (employee != null)
                return Ok(employee);
            else
                return NoContent();
        }
        [HttpGet("countpage")]
        public int GetCount()
        {

            return _employeeService.GetCountData();

        }
        [HttpGet("maxcodeemployee")]
        public ActionResult GetCountData()
        {
            var max= _employeeService.GetMaxItemCode();
            if (max != null)
                 return Ok(max);
            else
                return NoContent();

        }

        // POST api/<EmployeeApi>
        [HttpPost]
        public IActionResult Post([FromBody] Employee employee)
        {
            var customerResult = _employeeService.Insert(employee);
            if (customerResult)
            {
                return Ok(true);
            }
            else
            {
                return Ok(false);
            }
        }

        // PUT api/<EmployeeApi>/5
        [HttpPut]
        public IActionResult Put([FromBody] Employee employee)
        {
            var customerResult = _employeeService.Update(employee);
            if (customerResult)
            {
                return Ok(true);
            }
            else
            {
                return Ok(false);
            }
        }

        // DELETE api/<EmployeeApi>/5
        [HttpDelete]
        public IActionResult Delete([FromBody] Employee employee)
        {
            var customerResult = _employeeService.Delete(employee);
            if (customerResult)
            {
                return Ok(true);
            }
            else
            {
                return Ok(false);
            }
        }
    }
}
