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
        /// <param name="page"></param> số trang
        /// <param name="size"></param> kích thức 1 trang
        /// <returns></returns> List<T>
        IEnumerable<T> Get(int page,int size);

        /// <summary>
        /// lấy all danh sách 
        /// </summary>
        /// <returns></returns> List<T>
        /// CreateddBy: DVQuan(15/10/2020)
        IEnumerable<T> GetAllData();

        /// <summary>
        /// lấy danh sách theo id
        /// </summary>
        /// <param name="Id"></param> Object Id
        /// <returns></returns> Object T
        /// CreateddBy: DVQuan(15/10/2020)
        T GetById(object Id);

        /// <summary>
        /// thêm mới 1 bản ghi mới
        /// </summary>
        /// <param name="value"></param> giá trị của T
        /// <returns></returns> response
        /// CreateddBy: DVQuan(15/10/2020)
        ServiceResponse Insert(T value);

        /// <summary>
        /// sử một bản ghi
        /// </summary>
        /// <param name="value"></param> T value
        /// <returns></returns> true or false
        /// CreateddBy: DVQuan(15/10/2020)
        bool Update(T value);

        /// <summary>
        /// delete một bản ghi ra khỏi danh sách
        /// </summary>
        /// <param name="value"></param>  T value
        /// <returns></returns> true or false 
        /// CreateddBy: DVQuan(15/10/2020)
        bool Delete(T value);

        /// <summary>
        /// lấy số lượng
        /// </summary>
        /// <returns></returns> số lượng
        /// CreateddBy: DVQuan(15/10/2020)
        int GetCountData();

        /// <summary>
        /// lấy Code của item lớn nhất
        /// </summary>
        /// <returns></returns> Item Code
        String GetMaxItemCode();

    }
}
