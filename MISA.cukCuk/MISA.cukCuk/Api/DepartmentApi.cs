using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MISA.Data.Interfaces;
using MISA.Model;
using MISA.Service.Service;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MISA.cukCuk.Api
{
    [Route("department")]
    [ApiController]
    public class DepartmentApi : ControllerBase
    {
        IDepartmentService _departmentService;
        public DepartmentApi(IDepartmentService departmentService)
        {
            _departmentService = departmentService;
        }
        // GET: api/<DepartmentApi>
        [HttpGet]
        public ActionResult<Department> Get()
        {
            var customerGroup = _departmentService.GetAllData();
            if (customerGroup.Count() > 0)
            {
                return Ok(customerGroup);
            }
            else
            {
                return NoContent();
            }
        }
    }
}
