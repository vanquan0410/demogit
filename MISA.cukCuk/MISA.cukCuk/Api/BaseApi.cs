using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MISA.Service.Service;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MISA.cukCuk.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class BaseApi<T> : ControllerBase
    {
        #region constructor
        IBaseService<T> _baseService;
        public BaseApi(IBaseService<T> baseService)
        {
            _baseService = baseService;
        }
        #endregion

        #region method
        /// <summary>
        /// lấy danh sách theo phân trang
        /// </summary>
        /// <param name="page"></param>
        /// <param name="size"></param>
        /// <returns></returns>
        /// author: DVQuan(15/10/2020)
        // GET: api/<BaseApi>
        [HttpGet]
        public ActionResult Get([FromQuery] int page, int size)
        {
            var customers = _baseService.Get(page, size);
            if (customers.Count() > 0)
                return Ok(customers);
            else
                return NoContent();
        }

        /// <summary>
        /// lấy thông tin theo Id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        /// CreatedBy: DVQaun(15/10/2020)
        // GET api/<BaseApi>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }
        /// <summary>
        /// thêm mới mooti item
        /// </summary>
        /// <param name="value"></param>
        /// author: DVQuan(29/10/2020)
        // POST api/<BaseApi>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        /// <summary>
        /// sửa thong tin của 1 item
        /// </summary>
        /// <param name="id"></param> id
        /// <param name="value"></param> giá trị
        /// createdBy: DVQuan(15/10/2020)
        // PUT api/<BaseApi>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        /// <summary>
        /// xóa một bản ghi
        /// </summary>
        /// <param name="id"></param> id
        /// CreatedBy: DVQaun(15/10/2020)
        // DELETE api/<BaseApi>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
        #endregion
    }
}
