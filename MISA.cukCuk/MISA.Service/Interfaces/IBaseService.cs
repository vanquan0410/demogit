using System;
using System.Collections.Generic;
using System.Text;

namespace MISA.Service.Service
{
    public interface IBaseService<T>
    {
        IEnumerable<T> Get(int page,int size);
        T GetById(Guid Id);
        bool Insert(T value);
        bool Update(T value);
        bool Delete(T value);
        int GetCountData();

    }
}
