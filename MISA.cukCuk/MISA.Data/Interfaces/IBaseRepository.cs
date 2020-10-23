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
        /// <returns></returns> list T
        /// CreatedBy: DVQuan(14/10/2020)
        IEnumerable<T> Get(int page, int size);

        /// <summary>
        /// lấy all data 
        /// </summary>
        /// <returns></returns> list T
        /// CreatedBy: DVQuan(14/10/2020)
        IEnumerable<T> GetAllData();


        /// <summary>
        /// lấy data theo ID
        /// </summary>
        /// <param name="Id"></param> id của đối tượng
        /// <returns></returns> list<T]>
        ///  CreatedBy: DVQuan(14/10/2020)
        T GetByID(Object Id);


        /// <summary>
        /// thêm mới
        /// </summary>
        /// <param name="value"></param> t value
        /// <returns></returns> số bản ghi đã thay đổi
        /// CreatedBy: DVQuan(14/10/2020)
        int Insert(T value);


        /// <summary>
        /// sửa 
        /// </summary>
        /// <param name="value"></param> T value
        /// <returns></returns> true or false
        ///  CreatedBy: DVQuan(14/10/2020)
        bool Update(T value);


        /// <summary>
        /// xóa
        /// </summary>
        /// <param name="value"></param> T value
        /// <returns></returns> true or flase
        ///  CreatedBy: DVQuan(14/10/2020)
        bool Delete(T value);


        /// <summary>
        /// lấy số lượng danh sách các bản ghi
        /// </summary>
        /// <returns></returns> tổng số bản ghi
        /// CreatedBy: DVQuan
        int GetCountData();

        /// <summary>
        /// lấy Code của item lớn nhất
        /// </summary>
        /// <returns></returns> Item code
        String GetMaxItemCode();
    }

}
