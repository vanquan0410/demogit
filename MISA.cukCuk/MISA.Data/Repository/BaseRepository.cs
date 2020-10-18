using MISA.Data.Interfaces;
using MISA.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace MISA.Data.Repository
{
    public class BaseRepository<T> : IBaseRepository<T>
    {
        #region khởi tạo
        protected IDataContext<T> _dataContext;
        public BaseRepository(IDataContext<T> dataContext)
        {
            _dataContext = dataContext;
        }
        #endregion

        #region method
        public bool Delete(T value)
        {
            return _dataContext.Delete(value);
        }

        public IEnumerable<T> Get(int page, int size)
        {
            return _dataContext.Get(page, size);
        }

        public IEnumerable<T> GetAllData()
        {
            return _dataContext.GetAllData();
        }

        public T GetByID(object Id)
        {
            return _dataContext.GetByID(Id);
        }

        public int GetCountData()
        {
            return _dataContext.GetCountData();
        }

        public bool Insert(T value)
        {
            return _dataContext.Insert(value);
        }

        public bool Update(T value)
        {
            return _dataContext.Update(value);
        }
        #endregion
    }
}
