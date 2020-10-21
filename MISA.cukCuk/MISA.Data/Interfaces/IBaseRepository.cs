using System;
using System.Collections.Generic;
using System.Text;

namespace MISA.Data.Interfaces
{
    public interface IBaseRepository<T>
    {

        /// <summary>
        /// lấy data theo phân trang
        /// </summary>
        /// <returns></returns> list nhân viên
        /// CreatedBy: DVQuan(14/10/2020)
        IEnumerable<T> Get(int page, int size);

        /// <summary>
        /// lấy all data 
        /// </summary>
        /// <returns></returns> list nhân viên
        /// CreatedBy: DVQuan(14/10/2020)
        IEnumerable<T> GetAllData();


        /// <summary>
        /// lấy data theo ID
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        ///  CreatedBy: DVQuan(14/10/2020)
        T GetByID(Object Id);


        /// <summary>
        /// thêm mới
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        /// CreatedBy: DVQuan(14/10/2020)
        int Insert(T value);


        /// <summary>
        /// sửa 
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        ///  CreatedBy: DVQuan(14/10/2020)
        bool Update(T value);


        /// <summary>
        /// xóa
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        ///  CreatedBy: DVQuan(14/10/2020)
        bool Delete(T value);


        /// <summary>
        /// lấy số lượng danh sách các bản ghi
        /// </summary>
        /// <returns></returns>
        /// CreatedBy: DVQuan
        int GetCountData();

        /// <summary>
        /// lấy Code của item lớn nhất
        /// </summary>
        /// <returns></returns>
        String GetMaxItemCode();
    }

}
