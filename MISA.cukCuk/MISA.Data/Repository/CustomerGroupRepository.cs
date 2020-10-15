﻿using MISA.Data.DataAccess;
using MISA.Data.Interfaces;
using MISA.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace MISA.Data.Repository
{
    public class CustomerGroupRepository:BaseRepository<CustomerGroup>,ICustomerGroupRepository
    {
        public CustomerGroupRepository(IDataContext<CustomerGroup> dataContext):base(dataContext)
        {
        }
    }
}
