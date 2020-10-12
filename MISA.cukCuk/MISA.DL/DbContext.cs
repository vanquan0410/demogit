using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Text;

namespace MISA.DL
{
    public class DbContext
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
    }
}
