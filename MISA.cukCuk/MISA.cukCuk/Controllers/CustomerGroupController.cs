using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MISA.cukCuk.Model;
using MySql.Data.MySqlClient;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MISA.cukCuk.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerGroupController : ControllerBase
    {
        // GET: api/<CustomerGroupController>
        [HttpGet]
        public IEnumerable<CustomerGroupModel> Get()
        {
            var customerGroupModels = new List<CustomerGroupModel>();
            MySqlConnection mySqlConnection = DBConnection.getConncetion();
            //mở kết nối database
            mySqlConnection.Open();
            MySqlCommand mySqlCommand = mySqlConnection.CreateCommand();
            mySqlCommand.CommandType = System.Data.CommandType.StoredProcedure;
            //khai bao cau truy van
            mySqlCommand.CommandText = "Proc_GetCustomerGroup";
            //thực thi công việc tới database
            MySqlDataReader mySqlDataReader = mySqlCommand.ExecuteReader();
            //xử lý dữ liệu trả về
            while (mySqlDataReader.Read())
            {
                var customerGroup = new CustomerGroupModel();
                for (int i = 0; i < mySqlDataReader.FieldCount; i++)
                {
                    //lấy tên cột dữ liệu đang đọc
                    var colName = mySqlDataReader.GetName(i);

                    //lấy giá trị cell đang đọc
                    var value = mySqlDataReader.GetValue(i);

                    //lấy property giống với tên cột được khai báo ở trên
                    var property = customerGroup.GetType().GetProperty(colName);

                    //nếu có property tương ứng với tên cột thì gán dữ liệu tương ứng
                    if (property != null && value != DBNull.Value)
                    {
                        property.SetValue(customerGroup, value);
                    }
                }
                //thêm khách hàng vừa build được vào list
                customerGroupModels.Add(customerGroup);
            }
            //đóng kết nối
            mySqlConnection.Close();
            return customerGroupModels;
        }

        // GET api/<CustomerGroupController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<CustomerGroupController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<CustomerGroupController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CustomerGroupController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
