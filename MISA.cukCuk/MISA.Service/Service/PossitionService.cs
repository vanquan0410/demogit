using MISA.Data.Interfaces;
using MISA.Model;

using Renci.SshNet.Security.Cryptography.Ciphers.Modes;
using System;
using System.Collections.Generic;
using System.Text;

namespace MISA.Service.Service
{
    public class PossitionService:BaseService<Possition>,IPossitionService
    {
        #region constructor
        public PossitionService(IPossitionRepository possitionRepository):base(possitionRepository)
        {

        }
        #endregion
    }
}
