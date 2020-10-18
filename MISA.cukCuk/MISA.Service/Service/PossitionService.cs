using MISA.Data.Interfaces;
using MISA.Model;
using MISA.Service.Interfaces;
using Renci.SshNet.Security.Cryptography.Ciphers.Modes;
using System;
using System.Collections.Generic;
using System.Text;

namespace MISA.Service.Service
{
    class PossitionService:BaseService<Possition>,IPossitionService
    {
        #region constructor
        public PossitionService(IPossitionRepository possitionRepository):base(possitionRepository)
        {

        }
        #endregion
    }
}
