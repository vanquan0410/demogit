using MISA.cukCuk.model;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MISA.cukCuk.Model
{
    public class DBConnection
    {
        public static MySqlConnection getConncetion()
        {
            String sql = "server=35.194.166.58;port=3306;user=nvmanh;password=12345678@Abc;database=MISACukCuk_F09_DVQuan";
            MySqlConnection conn = new MySqlConnection(sql);
            if (conn != null)
            {
                return conn;
            }
            return null;
        }

        public List<CustomerModel> getData()
        {
            var customers = new List<CustomerModel>();
            MySqlConnection mySqlConnection = getConncetion();
            //mở kết nối database
            mySqlConnection.Open();
            MySqlCommand mySqlCommand = mySqlConnection.CreateCommand();
            //khai bao cau truy van
            mySqlCommand.CommandText= "select *from Customer";
            //thực thi công việc tới database
            MySqlDataReader mySqlDataReader = mySqlCommand.ExecuteReader();
            //xử lý dữ liệu trả về
            while (mySqlDataReader.Read())
            {
                var customer = new CustomerModel();
                for(int i = 0; i < mySqlDataReader.FieldCount; i++)
                {
                    //lấy tên cột dữ liệu đang đọc
                    var colName = mySqlDataReader.GetName(i);

                    //lấy giá trị cell đang đọc
                    var value = mySqlDataReader.GetValue(i);

                    //lấy property giống với tên cột được khai báo ở trên
                    var property = customer.GetType().GetProperty(colName);

                    //nếu có property tương ứng với tên cột thì gán dữ liệu tương ứng
                    if (property != null && value!=DBNull.Value)
                    {
                        property.SetValue(customer, value);
                    }
                }
                customers.Add(customer);
            }
            return customers;
        }
    }
}
