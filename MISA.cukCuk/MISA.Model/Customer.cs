using System;
using System.Collections.Generic;
using System.Text;

namespace MISA.Model
{
    /// <summary>
    /// danh muc khách hàng
    /// CreatedBy: DVQuan(01/10/2020)
    /// </summary>
    public class Customer
    {
        /// <summary>
        /// id khách hàng
        /// </summary>
        public Guid? CustomerId { get; set; }

        /// <summary>
        /// mã khách hàng
        /// </summary>
        public String CustomerCode { get; set; }

        /// <summary>
        /// tên khách hàng
        /// </summary>
        public String CustomerName { get; set; }

        /// <summary>
        /// email khách hàng
        /// </summary>
        public String Email { get; set; }

        /// <summary>
        /// tên công ty
        /// </summary>
        public String CompanyName { get; set; }

        /// <summary>
        /// id nhóm khách hàng
        /// </summary>
        public Guid? CustomerGroupId { get; set; }

        /// <summary>
        /// sô tiền nợ của khách hàng
        /// </summary>
        public double DebitMoney { get; set; }

        /// <summary>
        /// dịa chỉ khách hàng
        /// </summary>
        public string Address { get; set; }

        /// <summary>
        /// số diện thoại khách hàng
        /// </summary>
        public String PhoneNumber { get; set; }

        /// <summary>
        /// ngày sinh khách hàng
        /// </summary>
        public DateTime DateOfBirth { get; set; }
    }

}
