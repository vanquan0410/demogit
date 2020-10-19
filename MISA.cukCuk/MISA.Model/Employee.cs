using System;
using System.Collections.Generic;
using System.Text;

namespace MISA.Model
{
    /// <summary>
    /// Danh mục nhân viên
    /// CreatedBy: DVQuan(14/10/2020)
    /// </summary>
    public class Employee
    {
        /// <summary>
        /// id của nhân viên
        /// </summary>
        public Guid? EmployeeId { get; set; }

        /// <summary>
        /// mã nhân viên
        /// </summary>
        public String EmployeeCode { get; set; }

        /// <summary>
        /// tên nhân viên
        /// </summary>
        public String EmployeeName { get; set; } 

        /// <summary>
        /// loại giới tính
        /// </summary>
        public int? Gender { get; set; }

        /// <summary>
        /// giới tính
        /// </summary>
        public String GenderName
        {
            get
            {
                switch (Gender)
                {
                    case 0:
                        return MISA.Model.Properties.Resources.Enum_Gender_Male;
                    case 1:
                        return MISA.Model.Properties.Resources.Enum_Gender_Female;
                    case 2:
                        return MISA.Model.Properties.Resources.Enum_Gender_Other;
                    default:
                        return "không xác định";

                }
            }
        }

        /// <summary>
        /// ngày sinh
        /// </summary>
        public DateTime DateOfBirth { get; set; }

        /// <summary>
        /// số điện thoại
        /// </summary>
        public String PhoneNumber { get; set; }

        /// <summary>
        /// id phòng ban
        /// </summary>
        public Guid DepartmentId { get; set; }

        /// <summary>
        /// tên phòng ban
        /// </summary>
        public String DepartmentName { get; set; }

        /// <summary>
        /// email
        /// </summary>
        public String Email { get; set; }

        /// <summary>
        /// lương
        /// </summary>
        public double Salary { get; set; }

        /// <summary>
        /// loại tình trạng công việc
        /// </summary>
        public int? WorkStatus { get; set; }

        /// <summary>
        /// tên tình trạng công việc
        /// </summary>
        public String WorkStatusName
        {
            get
            {
                if (WorkStatus == null)
                {
                    return string.Empty;
                }
                switch (WorkStatus)
                {
                    case 0:
                        return MISA.Model.Properties.Resources.Enum_WorkStatus_Stopeed;
                    case 1:
                        return MISA.Model.Properties.Resources.Enum_WorkStatus_Working;
                    default:
                        return string.Empty;
                }
            }
        }
        /// <summary>
        /// id vị trí
        /// </summary>
        public Guid? PositionId { get; set; }

        /// <summary>
        /// tên vị trí
        /// </summary>
        public string PositionName { get; set; }

        /// <summary>
        ///  mã số thuế
        /// </summary>
        public string TaxCode { get; set; }
        /// <summary>
        /// ngày gia nhập
        /// </summary>
        public DateTime? JoinDate { get; set; }

        /// <summary>
        /// số chứng minh nhân dân
        /// </summary>
        public string IdentityNumber { get; set; }

        /// <summary>
        /// ngày cấp CMND
        /// </summary>
        public DateTime? IdentityDate { get; set; }

        /// <summary>
        /// nơi cấp CMND
        /// </summary>
        public string IdentityPlace { get; set; }
    }

}
