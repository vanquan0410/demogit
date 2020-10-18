using MISA.Data.Interfaces;
using MISA.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace MISA.Data.Repository
{
    public class PossitionRepository:BaseRepository<Possition>,IPossitionRepository
    {
        #region constructor
        public PossitionRepository(IDataContext<Possition> dataContext) : base(dataContext)
        {
        }
        #endregion
    }
}
