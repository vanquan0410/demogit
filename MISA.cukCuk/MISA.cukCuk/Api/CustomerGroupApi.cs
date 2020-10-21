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
    [Route("customergroup")]
    [ApiController]
    public class CustomerGroupApi : ControllerBase
    {
        #region constructor
        ICustomerGroupService _customerGroupService;
        public CustomerGroupApi(ICustomerGroupService customerGroupService)
        {
            _customerGroupService = customerGroupService;
        }
        #endregion

        #region method
        /// <summary>
        /// lấy danh sách nhóm khách hàng
        /// </summary>
        /// <returns></returns> danh sách nhóm khách hàng
        /// CreatedBy: DVQuan(20/10/2020)
        // GET: api/<CustomerGroupApi>
        [HttpGet]
        public ActionResult<CustomerGroup> Get()
        {
            var customerGroup= _customerGroupService.GetAllData();
            if (customerGroup.Count() > 0)
            {
                return Ok(customerGroup);
            }
            else
            {
                return NoContent();
            }
        }
        #endregion
    }
}
