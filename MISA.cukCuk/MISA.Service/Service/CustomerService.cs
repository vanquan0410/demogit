using MISA.Data.Interfaces;
using MISA.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace MISA.Service.Service
{
    public class CustomerService : ICustomerService
    {
        IDataAccess<Customer> _dataAccess;
        public CustomerService(IDataAccess<Customer> dataAccess)
        {
            _dataAccess = dataAccess;
        }

        public bool Delete(Customer value)
        {
            return _dataAccess.Delete(value);
        }

        public IEnumerable<Customer> Get(int page,int size)
        {
            return _dataAccess.Get(page,size);
        }

        public Customer GetById(Guid Id)
        {
            return _dataAccess.GetByID(Id);
        }

        public int GetCountData()
        {
            return _dataAccess.GetCountData();
        }

        public bool Insert(Customer value)
        {
            return _dataAccess.Insert(value);
        }

        public bool Update(Customer value)
        {
            return _dataAccess.Update(value);
        }
    }
}
