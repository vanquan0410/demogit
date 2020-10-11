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
            mySqlCommand.CommandType = System.Data.CommandType.StoredProcedure;
            //khai bao cau truy van
            mySqlCommand.CommandText= "Proc_GetCustomers";
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
                //thêm khách hàng vừa build được vào list
                customers.Add(customer);
            }
            //đóng kết nối
            mySqlConnection.Close();
            return customers;
        }

        public CustomerModel getElementById(Guid customerId)
        {
            MySqlConnection mySqlConnection = getConncetion();
            //mở kết nối database
            mySqlConnection.Open();

            MySqlCommand mySqlCommand = mySqlConnection.CreateCommand();
            //đối tượng sql cho phép thwo thác với csdl
            mySqlCommand.CommandType = System.Data.CommandType.StoredProcedure;
            //khai báo câu truy vấn
            mySqlCommand.CommandText = "Proc_GetCustomerById";
            //gán giá trị đầu vào cho các tham số trong store
            mySqlCommand.Parameters.AddWithValue("CustomerId", customerId);
            //đọc dữ liệu
            MySqlDataReader mySqlDataReader = mySqlCommand.ExecuteReader();
            //xử lý dữ liệu trả về
            var customer = new CustomerModel();
            while (mySqlDataReader.Read())
            {
               
                for (int i = 0; i < mySqlDataReader.FieldCount; i++)
                {
                    //lấy tên cột dữ liệu đang đọc
                    var colName = mySqlDataReader.GetName(i);

                    //lấy giá trị cell đang đọc
                    var value = mySqlDataReader.GetValue(i);

                    //lấy property giống với tên cột được khai báo ở trên
                    var property = customer.GetType().GetProperty(colName);

                    //nếu có property tương ứng với tên cột thì gán dữ liệu tương ứng
                    if (property != null && value != DBNull.Value)
                    {
                        property.SetValue(customer, value);
                    }
                }
               
                mySqlConnection.Close();
            }
            //đóng kết nối

            return customer;
        }
    }
}
