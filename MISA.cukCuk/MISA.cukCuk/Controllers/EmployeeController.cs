using System;
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
    public class EmployeeController : ControllerBase
    {
        // GET: api/<EmployeeController>
        [HttpGet]
        public IEnumerable<EmployeeModel> Get()
        {
            return EmployeeModel.listEmployee;
        }

        // GET api/<EmployeeController>/5
        [HttpGet("{employeeId}")]
        public EmployeeModel Get(Guid employeeId)
        {
            var employee = EmployeeModel.listEmployee.Where(c => c.EmployeeID == employeeId).FirstOrDefault();
            return employee;
        }

        // POST api/<EmployeeController>
        [HttpPost]
        public bool Post([FromBody] EmployeeModel employee)
        {
            if (employee != null)
            {
                employee.EmployeeID = Guid.NewGuid();
                EmployeeModel.listEmployee.Add(employee);
                return true;
            }
            return false;
        }

        // PUT api/<EmployeeController>/5
        [HttpPut]
        public bool Put([FromBody] EmployeeModel employeeModel)
        {
            var employeeEdit = EmployeeModel.listEmployee.Where(x => x.EmployeeID == employeeModel.EmployeeID).FirstOrDefault();
            if (employeeEdit != null)
            {
                employeeEdit.EmployeeCode = employeeModel.EmployeeCode;
                employeeModel.FullName = employeeModel.FullName;
                employeeEdit.Gender = employeeModel.Gender;
                employeeEdit.DateOfBirth = employeeModel.DateOfBirth;
                employeeEdit.Phone = employeeModel.Phone;
                employeeEdit.DepartmentName = employeeModel.DepartmentName;
                employeeEdit.Email = employeeModel.Email;
                employeeEdit.Salary = employeeModel.Salary;
                employeeEdit.WorkStatus = employeeModel.WorkStatus;
                return true;
            }
            return false;
        }

        // DELETE api/<EmployeeController>/5
        [HttpDelete]
        public bool Delete([FromBody] EmployeeModel employeeModel)
        {
            var employeeDelete = EmployeeModel.listEmployee.Where(x => x.EmployeeID == employeeModel.EmployeeID).FirstOrDefault();
            if (employeeDelete != null)
            {
                EmployeeModel.listEmployee.Remove(employeeDelete);
                return true;
            }
            return false;
        }
    }
}
