using Renci.SshNet.Messages.Transport;
using System;
using System.Collections.Generic;
using System.Text;
using MISA.Model;

namespace MISA.Service.Service
{
    public interface IBaseService<T>
    {
        /// <summary>
        /// lấy danh sách của bản ghi theo phân trang
        /// </summary>
        /// <param name="page">số trang</param> 
        /// <param name="size">kích thức 1 trang</param> 
        /// <returns></returns> List<T>
        IEnumerable<T> Get(int page,int size);

        /// <summary>
        /// lấy all danh sách 
        /// </summary>
        /// <returns>List<T></returns> 
        /// CreateddBy: DVQuan(15/10/2020)
        IEnumerable<T> GetAllData();

        /// <summary>
        /// lấy danh sách theo id
        /// </summary>
        /// <param name="Id">Object Id</param> 
        /// <returns>Object T</returns> 
        /// CreateddBy: DVQuan(15/10/2020)
        T GetById(object Id);

        /// <summary>
        /// thêm mới 1 bản ghi mới
        /// </summary>
        /// <param name="value">giá trị của T</param> 
        /// <returns>response</returns> 
        /// CreateddBy: DVQuan(15/10/2020)
        ServiceResponse Insert(T value);

        /// <summary>
        /// sử một bản ghi
        /// </summary>
        /// <param name="value">T value</param> 
        /// <returns>true(insert thành công) or false(insert thất bại)</returns> 
        /// CreateddBy: DVQuan(15/10/2020)
        bool Update(T value);

        /// <summary>
        /// delete một bản ghi ra khỏi danh sách
        /// </summary>
        /// <param name="value">T value</param>  
        /// <returns>true(sửa thành công) or false(sửa thất bại) </returns> 
        /// CreateddBy: DVQuan(15/10/2020)
        bool Delete(T value);

        /// <summary>
        /// lấy số lượng
        /// </summary>
        /// <returns> số lượng</returns>
        /// CreateddBy: DVQuan(15/10/2020)
        int GetCountData();

        /// <summary>
        /// lấy Code của item lớn nhất
        /// </summary>
        /// <returns> Item Code</returns>
        /// CreatedBy: DVQuan()
        String GetMaxItemCode();

    }
}
