using MISA.Data.Interfaces;
using MISA.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace MISA.Service.Service
{
    public class BaseService<T> : IBaseService<T>
    {
        #region constructor
        IBaseRepository<T> _baseRepository;
        protected List<string> validateErrorResponseMsg = new List<string>();
        public BaseService(IBaseRepository<T> baseRepository)
        {
            _baseRepository = baseRepository;
        }
        #endregion
        
        #region method
        public bool Delete(T value)
        {
           return _baseRepository.Delete(value);
        }

        public IEnumerable<T> Get(int page, int size)
        {
            return _baseRepository.Get(page, size);
        }

        public IEnumerable<T> GetAllData()
        {
            return _baseRepository.GetAllData();
        }

        public T GetById(Object Id)
        {
            return _baseRepository.GetByID(Id);
        }

        public int GetCountData()
        {
            return _baseRepository.GetCountData();
        }

        public string GetMaxItemCode()
        {
            return _baseRepository.GetMaxItemCode();
        }

        public bool Insert(T value)
        {
            return _baseRepository.Insert(value);
           
        }

        public bool Update(T value)
        {
            return _baseRepository.Update(value);
        }

       
        #endregion
    }
}
