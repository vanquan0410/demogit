using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

/// <summary>
/// Các object cho người phụ thuộc
/// </summary>
namespace MISA.MintaxUI.Models
{
    /// <summary>
    /// Thông tin người phụ thuộc
    /// </summary>
    public class Dependent
    {
        public int DependentID { get; set; }
        public string DependentCode { get; set; }
        public string DependentName { get; set; }
        public int EmployeeID { get; set; }

        public string DependentTaxID { get; set; }
        public string DependentPeopleID { get; set; }
        public string  DependentNationality { get; set; }
        public int RelationID { get; set; }
        public string RelationName { get; set; }

        public string BirthCeritficateBook { get; set; }

        public string BirthCertificateNumber  { get; set; }
        public string BirthCertificateCountry { get; set; }
        public string BirthCertificateProvince { get; set; }
        public string BirthCertificateDistrict { get; set; }
        public string BirthCertificateWard { get; set; }

        public int  DependentStartMonth { get; set; }
        public int DependentFinishMonth { get; set; }







    }
    /// <summary>
    /// Thông tin thêm mới lao động
    /// </summary>
    public class NewDependent
    {
        public string DependentName { get; set; }
        public int EmployeeID { get; set; }

        public string DependentTaxID { get; set; }
        public string DependentPeopleID { get; set; }
        public string DependentNationality { get; set; }
        public int RelationID { get; set; }
        public string RelationName { get; set; }

        public string BirthCertificateBook { get; set; }

        public string BirthCertificateNumber { get; set; }
        public string BirthCertificateCountry { get; set; }
        public string BirthCertificateProvince { get; set; }
        public string BirthCertificateDistrict { get; set; }
        public string BirthCertificateWard { get; set; }

        public int DependentStartMonth { get; set; }
        public int DependentFinishMonth { get; set; }

        public string CreatedBy { get; set; }
    }
}
