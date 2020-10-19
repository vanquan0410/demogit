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
    [Route("possition")]
    [ApiController]
    public class PossitionApi : ControllerBase
    {

        IPossitionService _possitionService;
        public PossitionApi(IPossitionService possitionService)
        {
            _possitionService = possitionService;
        }
        // GET: api/<PossitionApi>
        [HttpGet]
        public ActionResult<Possition> Get()
        {
            var customerGroup = _possitionService.GetAllData();
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
