using MISA.Data.Interfaces;
using MISA.Model;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Text;

namespace MISA.Data.DataAccess
{
    public class DataContext<T>:IDisposable,IDataContext<T>
    {
        readonly String _connectionString = "server=35.194.166.58;port=3306;user=nvmanh;password=12345678@Abc;database=MISACukCuk_F09_DVQuan";
        MySqlConnection _mySqlConnection;
        MySqlCommand _mySqlCommand;

        public DataContext()
        {
            //khởi tạo kết nối
            _mySqlConnection = new MySqlConnection(_connectionString);
            //mở kết nối
            _mySqlConnection.Open();
            //đới tượng sử lý command
            _mySqlCommand = _mySqlConnection.CreateCommand();
            _mySqlCommand.CommandType = System.Data.CommandType.StoredProcedure;
        }

        public bool Delete(T value)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<T> Get(int page, int size)
        {
            //khỏi tạo danh sách đối tượng cần trả về
            var values = new List<T>();
            //khai bao cau truy van
            _mySqlCommand.CommandText = "Proc_GetCustomerByPage";
            //gán giá trị đầu vào cho các các store
            _mySqlCommand.Parameters.AddWithValue("Page", page);
            _mySqlCommand.Parameters.AddWithValue("Size", size);
            //thực thi công việc tới database
            MySqlDataReader mySqlDataReader = _mySqlCommand.ExecuteReader();
            //xử lý dữ liệu trả về
            while (mySqlDataReader.Read())
            {
                var customer = Activator.CreateInstance<T>();
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
                values.Add(customer);
            }
            return values;
        }


        public T GetByID(Guid Id)
        {
            //khai báo câu truy vấn
            _mySqlCommand.CommandText = "Proc_GetCustomerById";
            //gán giá trị đầu vào cho các tham số trong store
            _mySqlCommand.Parameters.AddWithValue("CustomerId", Id);
            //đọc dữ liệu
            MySqlDataReader mySqlDataReader = _mySqlCommand.ExecuteReader();
            //xử lý dữ liệu trả về           
            while (mySqlDataReader.Read())
            {
                var entity = Activator.CreateInstance<T>();
                for (int i = 0; i < mySqlDataReader.FieldCount; i++)
                {
                    //lấy tên cột dữ liệu đang đọc
                    var colName = mySqlDataReader.GetName(i);

                    //lấy giá trị cell đang đọc
                    var value = mySqlDataReader.GetValue(i);

                    //lấy property giống với tên cột được khai báo ở trên
                    var property = entity.GetType().GetProperty(colName);

                    //nếu có property tương ứng với tên cột thì gán dữ liệu tương ứng
                    if (property != null && value != DBNull.Value)
                    {
                        property.SetValue(entity, value);
                    }
                }
                return entity;
            }
            return default;
        }

        public int GetCountData()
        {
            //đối tượng mysql cho phép thao tác với csdl
            _mySqlCommand.CommandType = System.Data.CommandType.Text;
            //khai báo câu truy vấn 
            _mySqlCommand.CommandText = "SELECT COUNT(*) FROM View_Customer vc";
            //mở kết nối database;
            _mySqlConnection.Open();
            //đọc dữ liệu
            MySqlDataReader mySqlDataReader = _mySqlCommand.ExecuteReader();
            //xử lý dữ liệu trả về

            while (mySqlDataReader.Read())
            {
                var value = mySqlDataReader.GetValue(0);
                return Convert.ToInt32(value);
            }
            return 0;
        }

        public bool Insert(T value)
        {
            var customer = value as Customer;
            //khai báo câu truy vấn
            _mySqlCommand.CommandText = "Proc_AddCustomer";
            //gán giá trị đầu vào cho các tham số trong store
            _mySqlCommand.Parameters.AddWithValue("CustomerCode", customer.CustomerCode);
            _mySqlCommand.Parameters.AddWithValue("CustomerName", customer.CustomerName);
            _mySqlCommand.Parameters.AddWithValue("CustomerGroupId", customer.CustomerGroupId);
            _mySqlCommand.Parameters.AddWithValue("PhoneNumber", customer.PhoneNumber);
            _mySqlCommand.Parameters.AddWithValue("DateOfBirth", customer.DateOfBirth);
            _mySqlCommand.Parameters.AddWithValue("CompanyName", customer.CompanyName);
            _mySqlCommand.Parameters.AddWithValue("DebitMoney", customer.DebitMoney);
            _mySqlCommand.Parameters.AddWithValue("Email", customer.Email);
            _mySqlCommand.Parameters.AddWithValue("Address", customer.Address);
            //thực thi công việc
            var result = _mySqlCommand.ExecuteNonQuery();

            if (result > 0)
            {
                return true;
            }
            return false;
        }

        public bool Update(T value)
        {
            var customer = value as Customer;
            //khai báo câu truy vấn
            _mySqlCommand.CommandText = "Proc_UpdateCustomer";
            //gán giá trị đầu vào cho các tham sô store
            _mySqlCommand.Parameters.AddWithValue("CustomerId", customer.CustomerId);
            _mySqlCommand.Parameters.AddWithValue("CustomerCode", customer.CustomerCode);
            _mySqlCommand.Parameters.AddWithValue("CustomerName", customer.CustomerName);
            _mySqlCommand.Parameters.AddWithValue("CustomerGroupId", customer.CustomerGroupId);
            _mySqlCommand.Parameters.AddWithValue("PhoneNumber", customer.PhoneNumber);
            _mySqlCommand.Parameters.AddWithValue("CompanyName", customer.CompanyName);
            _mySqlCommand.Parameters.AddWithValue("DebitMoney", customer.DebitMoney);
            _mySqlCommand.Parameters.AddWithValue("Email", customer.Email);
            _mySqlCommand.Parameters.AddWithValue("Address", customer.Address);

            //thực thi công việc
            var result = _mySqlCommand.ExecuteNonQuery();
            if (result > 0)
            {
                return true;
            }
            return false;
        }


        /// <summary>
        /// đóng kết nôi
        /// </summary>
        /// CreateBy: DVQuan(14/10/2020)
        public void Dispose()
        {
            _mySqlConnection.Close();
        }

        public IEnumerable<T> GetAllData()
        {
            //khỏi tạo danh sách đối tượng cần trả về
            var values = new List<T>();
            //khai bao cau truy van
            _mySqlCommand.CommandText = "Proc_GetCustomerGroup";

            //thực thi công việc tới database
            MySqlDataReader mySqlDataReader = _mySqlCommand.ExecuteReader();
            //xử lý dữ liệu trả về
            while (mySqlDataReader.Read())
            {
                var customer = Activator.CreateInstance<T>();
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
                values.Add(customer);
            }
            return values;
        }

    }
}
