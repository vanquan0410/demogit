using MISA.Data.Interfaces;
using MISA.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace MISA.Data.Repository
{
    public class PossitionRepository:BaseRepository<Possition>,IPossitionRepository
    {
        public PossitionRepository(IDataContext<Possition> dataContext) : base(dataContext)
        {
        }
    }
}
