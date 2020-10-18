using MISA.Data.Interfaces;
using MISA.Model;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;

namespace MISA.Data.DataAccess
{
    public class DataContext<T>:IDisposable,IDataContext<T>
    {
        #region connectionstring
        readonly String _connectionString = "server=35.194.166.58;port=3306;user=nvmanh;password=12345678@Abc;database=MISACukCuk_F09_DVQuan";
        MySqlConnection _mySqlConnection;
        MySqlCommand _mySqlCommand;
        #endregion

        #region constructor
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
        #endregion

        #region method
        public IEnumerable<T> GetAllData()
        {
            //lấy tên class
            var className = typeof(T).Name;
            //khỏi tạo danh sách đối tượng cần trả về
            var values = new List<T>();
            //khai bao cau truy van
            _mySqlCommand.CommandText = $"Proc_Get{className}";

            //thực thi công việc tới database
            MySqlDataReader mySqlDataReader = _mySqlCommand.ExecuteReader();
            //xử lý dữ liệu trả về
            while (mySqlDataReader.Read())
            {
                var model = Activator.CreateInstance<T>();
                for (int i = 0; i < mySqlDataReader.FieldCount; i++)
                {
                    //lấy tên cột dữ liệu đang đọc
                    var colName = mySqlDataReader.GetName(i);

                    //lấy giá trị cell đang đọc
                    var value = mySqlDataReader.GetValue(i);

                    //lấy property giống với tên cột được khai báo ở trên
                    var property = model.GetType().GetProperty(colName);

                    //nếu có property tương ứng với tên cột thì gán dữ liệu tương ứng
                    if (property != null && value != DBNull.Value)
                    {
                        property.SetValue(model, value);
                    }
                }
                //thêm khách hàng vừa build được vào list
                values.Add(model);
            }
            //trả về danh sách dối tượng đó
            return values;
        }
        public T GetAllData(string storeName, Object value)
        {
            //lấy name của class
            var className = typeof(T).Name;
            //khai báo câu truy vấn
            _mySqlCommand.CommandText = storeName;
            var parameter = _mySqlCommand.Parameters;
            MySqlCommandBuilder.DeriveParameters(_mySqlCommand); //giống như tham chiếu
            var properties = typeof(T).GetProperties();
            foreach (var property in properties)
            {
                //lấy ra tên của property
                var propertyName = property.Name;
                //lấy ra giá trị của property
                var propertyValue = property.GetValue(value);
                //gán giá trị đầu vào cho các tham số trong store
                _mySqlCommand.Parameters.AddWithValue($"@{propertyName}", propertyValue);
            }
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
                    var valueRead = mySqlDataReader.GetValue(i);

                    //lấy property giống với tên cột được khai báo ở trên
                    var property = entity.GetType().GetProperty(colName);

                    //nếu có property tương ứng với tên cột thì gán dữ liệu tương ứng
                    if (property != null && valueRead != DBNull.Value)
                    {
                        property.SetValue(entity, valueRead);
                    }
                }
                return entity;
            }
            return default;
        }
        public IEnumerable<T> Get(int page, int size)
        {
            //khỏi tạo danh sách đối tượng cần trả về
            var values = new List<T>();

            //lấy tên của class
            var className = typeof(T).Name;

            //khai bao cau truy van
            _mySqlCommand.CommandText = $"Proc_Get{className}ByPage";

            //gán giá trị đầu vào cho các các store
            _mySqlCommand.Parameters.AddWithValue("Page", page);
            _mySqlCommand.Parameters.AddWithValue("Size", size);

            //thực thi công việc tới database
            MySqlDataReader mySqlDataReader = _mySqlCommand.ExecuteReader();

            //xử lý dữ liệu trả về
            while (mySqlDataReader.Read())
            {
                //khởi tạo dối tượng
                var model = Activator.CreateInstance<T>();

                for (int i = 0; i < mySqlDataReader.FieldCount; i++)
                {
                    //lấy tên cột dữ liệu đang đọc
                    var colName = mySqlDataReader.GetName(i);

                    //lấy giá trị cell đang đọc
                    var value = mySqlDataReader.GetValue(i);

                    //lấy property giống với tên cột được khai báo ở trên
                    var property = model.GetType().GetProperty(colName);

                    //nếu có property tương ứng với tên cột thì gán dữ liệu tương ứng
                    if (property != null && value != DBNull.Value)
                    {
                        property.SetValue(model, value);
                    }
                }
                //thêm khách hàng vừa build được vào list
                values.Add(model);
            }
            // trả về một list danh sách
            return values;
        }

        public T GetByID(Object id)
        {
            //lấy name của class
            var className = typeof(T).Name;
            //khai báo câu truy vấn
            _mySqlCommand.CommandText = $"Proc_Get{className}ById";
            //lấy ra các parameter bên trong store
            var parameters = _mySqlCommand.Parameters;
            MySqlCommandBuilder.DeriveParameters(_mySqlCommand); //giống như tham chiếu
            var properties = typeof(T).GetProperties();
            foreach (MySqlParameter param in parameters)
            {
                var paramName = param.ParameterName.Replace("@", string.Empty);
                    param.Value = id;
            }
            /*//gán giá trị đầu vào cho các tham số trong store
            _mySqlCommand.Parameters.AddWithValue("CustomerId", id);
            //đọc dữ liệu*/
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

        public bool Insert(T value)
        {
            //lấy tên của class
            var className = typeof(T).Name;
            //khai báo câu truy vấn
            _mySqlCommand.CommandText = $"Proc_Add{className}";
            //lấy ra các parameter bên trong store
            var parameters = _mySqlCommand.Parameters;
            MySqlCommandBuilder.DeriveParameters(_mySqlCommand); //giống như tham chiếu
            var properties = typeof(T).GetProperties();
            foreach (MySqlParameter param in parameters)
            {
                var paramName = param.ParameterName.Replace("@", string.Empty);
                var property = value.GetType().GetProperty(paramName, BindingFlags.IgnoreCase | BindingFlags.Public | BindingFlags.Instance);
                if (property != null)
                    param.Value = property.GetValue(value);
            }
            //thực thi công việc
            var result = _mySqlCommand.ExecuteNonQuery();
            //thành công thì trả về true
            if (result > 0)
            {
                return true;
            }
            //không thành công trả về fale
            return false;
        }

        public bool Update(T value)
        {
            //lấy tên của class
            var className = typeof(T).Name;
            //khai báo câu truy vấn
            _mySqlCommand.CommandText = $"Proc_Update{className}";
            //lấy ra các parameter bên trong store
            var parameters = _mySqlCommand.Parameters;
            MySqlCommandBuilder.DeriveParameters(_mySqlCommand); //giống như tham chiếu
            var properties = typeof(T).GetProperties();
            foreach (MySqlParameter param in parameters)
            {
                var paramName = param.ParameterName.Replace("@", string.Empty);
                var property = value.GetType().GetProperty(paramName, BindingFlags.IgnoreCase | BindingFlags.Public | BindingFlags.Instance);
                if (property != null)
                    param.Value = property.GetValue(value);
            }
            //thực thi công việc
            var result = _mySqlCommand.ExecuteNonQuery();
            //thành công thì trả về true
            if (result > 0)
            {
                return true;
            }
            //không thành công trả về fale
            return false;
        }

        public bool Delete(T value)
        {
            var className = typeof(T).Name;
            //khai báo câu truy vấn
            _mySqlCommand.CommandText = $"Proc_Delete{className}";
            //lấy ra các parameter bên trong store
            var parameters = _mySqlCommand.Parameters;
            MySqlCommandBuilder.DeriveParameters(_mySqlCommand); //giống như tham chiếu
            foreach (MySqlParameter param in parameters)
            {
                var paramName = param.ParameterName.Replace("@Employee_", string.Empty);
                var property = value.GetType().GetProperty(paramName, BindingFlags.IgnoreCase | BindingFlags.Public | BindingFlags.Instance);
                if (property != null)
                    param.Value = property.GetValue(value);
            }
            var result = _mySqlCommand.ExecuteNonQuery();
            //thực thi công việc
            _mySqlConnection.Close();
            if (result > 0)
            {
                return true;
            }

            return false;
        }

        public int GetCountData()
        {
            var className = typeof(T).Name;
            //khai báo câu truy vấn 
            _mySqlCommand.CommandText = $"Proc_GetCount{className}";
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

        /// <summary>
        /// đóng kết nối
        /// </summary>
        /// CreateBy: DVQuan(14/10/2020)
        public void Dispose()
        {
            _mySqlConnection.Close();
        }

       
        #endregion
    }
}
