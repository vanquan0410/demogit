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
        #region constructor
        IEmployeeService _employeeService;
        public EmployeeApi(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }
        #endregion

        /// <summary>
        /// lấy danh sách nhân viên theo phân trang
        /// </summary>
        /// <param name="page"></param> số bản ghi trong 1 trang
        /// <param name="size"></param> kích thức 1 trang
        /// <returns></returns>
        /// CreatedBy: DVQuan(15/10/2020)
        // GET: api/<EmployeeApi>
        #region method
        [HttpGet]
        public ActionResult<Employee> Get([FromQuery] int page, int size)
        {
            var employees = _employeeService.Get(page, size);
            if (employees.Count() > 0)
                return Ok(employees);
            else
                return NoContent();
        }

        /// <summary>
        /// tìm kiếm nhân viên theo id
        /// </summary>
        /// <param name="id"></param> id nhân viên
        /// <returns></returns> nhân viên
        /// CreatedBy: DVQuan(15/10/2020)
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

        /// <summary>
        /// lấy ra tổng số bản ghi của nhân viên
        /// </summary>
        /// <returns></returns> số bản ghi
        /// CreatedBy: DVQuan(15/10/2020)
        [HttpGet("countpage")]
        public int GetCount()
        {

            return _employeeService.GetCountData();

        }

        /// <summary>
        /// lấy ra mã nhân viên theo thứ tự lớn nhất
        /// </summary>
        /// <returns></returns> EmployeeCode
        /// CreatedBy: DVQuan(21/10/2020)
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
        /* [HttpPost]
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
         }*/

        /// <summary>
        /// thêm mới một nhân viên
        /// </summary>
        /// <param name="employee"></param> thông tin của nhân viên mới
        /// <returns></returns> response
        /// CreatedBy: DVQuan(19/10/2020)
        [HttpPost]
        public IActionResult Post([FromBody] Employee employee)
        {
            var serviceResponse = _employeeService.Insert(employee);
            var affectRows = serviceResponse.Data != null ? ((int)serviceResponse.Data) : 0;
            if (affectRows > 0)
                return CreatedAtAction("POST", affectRows);
            else
                return BadRequest(serviceResponse);
        }

        /// <summary>
        /// thay đổi thông tin của 1 nhân viên
        /// </summary>
        /// <param name="employee"></param> thông tin nhân viên cần thay dổi
        /// <returns></returns> true or false
        /// CreatedBy: DVQuan(17/10/2020)
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

        /// <summary>
        /// Xóa một nhân viên
        /// </summary>
        /// <param name="employee"></param> EmployeeId
        /// <returns></returns> true or false
        /// CreatedBy: DVQuan(19/10/2020)
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
        #endregion
    }
}
