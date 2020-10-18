using MISA.Data.DataAccess;
using MISA.Data.Interfaces;
using MISA.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace MISA.Data.Repository
{
    public class CustomerRepository:BaseRepository<Customer>,ICustomerRepository
    {
        #region constructor
        public CustomerRepository(IDataContext<Customer> dataContext):base(dataContext)
        {
        }
        #endregion
    }
}
