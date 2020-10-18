using System;
using System.Collections.Generic;
using System.Text;

namespace MISA.Service.Service
{
    public interface IBaseService<T>
    {
        /// <summary>
        /// lấy danh sách của bản ghi theo phân trang
        /// </summary>
        /// <param name="page"></param>
        /// <param name="size"></param>
        /// <returns></returns>
        IEnumerable<T> Get(int page,int size);

        /// <summary>
        /// lấy all danh sách 
        /// </summary>
        /// <returns></returns>
        /// CreateddBy: DVQuan(15/10/2020)
        IEnumerable<T> GetAllData();

        /// <summary>
        /// lấy danh sách theo id
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        /// CreateddBy: DVQuan(15/10/2020)
        T GetById(object Id);

        /// <summary>
        /// thêm mới 1 bản ghi mới
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        /// CreateddBy: DVQuan(15/10/2020)
        bool Insert(T value);

        /// <summary>
        /// sử một bản ghi
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        /// CreateddBy: DVQuan(15/10/2020)
        bool Update(T value);

        /// <summary>
        /// delete một bản ghi ra khỏi danh sách
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        /// CreateddBy: DVQuan(15/10/2020)
        bool Delete(T value);

        /// <summary>
        /// lấy số lượng
        /// </summary>
        /// <returns></returns>
        /// CreateddBy: DVQuan(15/10/2020)
        int GetCountData();

    }
}
