using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MISA.MintaxUI.Models
{
    public class TemporaryTaxDetail
    {
        public string EmployeeCode { get; set; }
        public string FullName { get; set; }
        public string PositionName { get; set; }
        public string TaxNo { get; set; }
        public string CitizenIdentityNo { get; set; }
        public decimal TotalSalary { get; set; }
        public decimal Salary { get; set; }
        public decimal TotalTaxSalary { get; set; }
        public decimal PersonalIncomeTax { get; set; }
        public int? DependentAmount { get; set; }
        public decimal TotalDeduction { get; set; }
        public decimal Insurance { get; set; }
    }
    public class ListField
    {
        public const string empCode = "EmployeeCode";
        public const string fullName = "FullName";
        public const string positionName = "PostionName";
        public const string taxNo = "TaxNo";
        public const string EmpCode = "EmployeeCode";
        public const string identityNumber = "CitizenIdentityNo";
        public const string totalSalary = "TotalSalary";
        public const string salary = "Salary";
        public const string totalTaxSalary = "TotalTaxSalary";
        public const string personalIncomTax = "PersonalIncomeTax";
        public const string dependentAmount = "DependentAmout";
        public const string totalDeduction = "TotalDeduction";
        public const string insurance = "Insurance";
    }
}