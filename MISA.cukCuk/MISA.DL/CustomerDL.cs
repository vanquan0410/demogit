using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using MISA.Entities;
using MySql.Data.MySqlClient;

namespace MISA.DL
{
    class CustomerDL
    {
        public List<Customer> getCustomers()
        {
            var customers = new List<Customer>();
            MySqlConnection mySqlConnection = DbContext.getConncetion();
            //mở kết nối database
            mySqlConnection.Open();
            MySqlCommand mySqlCommand = mySqlConnection.CreateCommand();
            mySqlCommand.CommandType = System.Data.CommandType.StoredProcedure;
            //khai bao cau truy van
            mySqlCommand.CommandText = "Proc_GetCustomers";
            //thực thi công việc tới database
            MySqlDataReader mySqlDataReader = mySqlCommand.ExecuteReader();
            //xử lý dữ liệu trả về
            while (mySqlDataReader.Read())
            {
                var customer = new Customer();
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
                //thêm khách hàng vừa build được vào list
                customers.Add(customer);
            }
            //đóng kết nối
            mySqlConnection.Close();
            return customers;
        }

        public Customer getElementById(Guid customerId)
        {
            var customers = new List<Customer>();
            //khởi tạo đối tượng mysqlconnection
            MySqlConnection mySqlConnection = DbContext.getConncetion();
            //đối tượng mysql cho phép thao tác sối tươngj
            MySqlCommand mySqlCommand = mySqlConnection.CreateCommand();
            //đối tượng sql cho phép thwo thác với csdl
            mySqlCommand.CommandType = System.Data.CommandType.StoredProcedure;
            //khai báo câu truy vấn
            mySqlCommand.CommandText = "Proc_GetCustomerById";
            //gán giá trị đầu vào cho các tham số trong store
            mySqlCommand.Parameters.AddWithValue("CustomerId", customerId);
            //mở kết nối database
            mySqlConnection.Open();
            //đọc dữ liệu
            MySqlDataReader mySqlDataReader = mySqlCommand.ExecuteReader();
            //xử lý dữ liệu trả về           
            while (mySqlDataReader.Read())
            {
                var customer = new Customer();
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
                customers.Add(customer);
            }
            //đóng kết nối
            mySqlConnection.Close();
            return customers.FirstOrDefault();
        }

        public bool updateCustomer(Customer customerModel)
        {
            //khởi tạo đối tượng mysql connection
            MySqlConnection mySqlConnection = DbContext.getConncetion();
            //đối tượng mysqlcommand cho phép thao tác với csdl
            MySqlCommand mySqlCommand = mySqlConnection.CreateCommand();
            mySqlCommand.CommandType = System.Data.CommandType.StoredProcedure;
            //khai báo câu truy vấn
            mySqlCommand.CommandText = "Proc_UpdateCustomer";
            //gán giá trị đầu vào cho các tham sô store
            mySqlCommand.Parameters.AddWithValue("CustomerId", customerModel.CustomerId);
            mySqlCommand.Parameters.AddWithValue("CustomerCode", customerModel.CustomerCode);
            mySqlCommand.Parameters.AddWithValue("CustomerName", customerModel.CustomerName);
            mySqlCommand.Parameters.AddWithValue("CustomerGroupId", customerModel.CustomerGroupId);
            mySqlCommand.Parameters.AddWithValue("PhoneNumber", customerModel.PhoneNumber);
            mySqlCommand.Parameters.AddWithValue("CompanyName", customerModel.CompanyName);
            mySqlCommand.Parameters.AddWithValue("DebitMoney", customerModel.DebitMoney);
            mySqlCommand.Parameters.AddWithValue("Email", customerModel.Email);
            mySqlCommand.Parameters.AddWithValue("Address", customerModel.Address);

            //mở kết nối database
            mySqlConnection.Open();
            //thực thi công việc
            var result = mySqlCommand.ExecuteNonQuery();
            if (result > 0)
            {
                return true;
            }
            return false;
        }

        public bool insertCustomer(Customer customerModel)
        {
            //khởi tạo đối tượng mysql connection
            MySqlConnection mySqlConnection = DbContext.getConncetion();
            //đối tượng mysqlcommand- cho phép thao tác với csdl
            MySqlCommand mySqlCommand = mySqlConnection.CreateCommand();
            mySqlCommand.CommandType = System.Data.CommandType.StoredProcedure;
            //khai báo câu truy vấn
            mySqlCommand.CommandText = "Proc_AddCustomer";
            //gán giá trị đầu vào cho các tham số trong store
            mySqlCommand.Parameters.AddWithValue("CustomerCode", customerModel.CustomerCode);
            mySqlCommand.Parameters.AddWithValue("CustomerName", customerModel.CustomerName);
            mySqlCommand.Parameters.AddWithValue("CustomerGroupId", customerModel.CustomerGroupId);
            mySqlCommand.Parameters.AddWithValue("PhoneNumber", customerModel.PhoneNumber);
            mySqlCommand.Parameters.AddWithValue("DateOfBirth", customerModel.DateOfBirth);
            mySqlCommand.Parameters.AddWithValue("CompanyName", customerModel.CompanyName);
            mySqlCommand.Parameters.AddWithValue("DebitMoney", customerModel.DebitMoney);
            mySqlCommand.Parameters.AddWithValue("Email", customerModel.Email);
            mySqlCommand.Parameters.AddWithValue("Address", customerModel.Address);

            //mở kết nối database
            mySqlConnection.Open();
            //thực thi công việc
            var result = mySqlCommand.ExecuteNonQuery();
            //đóng kết lối database
            mySqlConnection.Close();
            if (result > 0)
            {
                return true;
            }
            return false;  
        }

        public bool deleteCustomer(Customer customerModel)
        {
            //khởi tạo đối tượng mysqlconnection
            MySqlConnection mySqlConnection = DbContext.getConncetion();
            //đối tượng mysql cho phép thao tác với csdl:
            MySqlCommand mySqlCommand = mySqlConnection.CreateCommand();
            mySqlCommand.CommandType = System.Data.CommandType.StoredProcedure;
            //khai báo câu truy vấn 
            mySqlCommand.CommandText = "Proc_DeleteCustomer";
            //gán giá trị đầu vào cho các tham số trong store
            mySqlCommand.Parameters.AddWithValue("Customer_CustomerId", customerModel.CustomerId);
            //mở kết nối database:
            mySqlConnection.Open();
            //thực thi công việc
            var result = mySqlCommand.ExecuteNonQuery();
            //đóng kết nối
            mySqlConnection.Close();
            if (result > 0)
            {
                return true;
            }

            return false;
        }
    }
}
