using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
/// <summary>
/// Đối tượng cho mối quan hệ với người lao động
/// Author: Nguyễn Văn Bình (02/05/2020)
/// </summary>
namespace MISA.MintaxUI.Models
{
    public class Relation
    {
        // ID quan hệ
        public int RelationID { get; set; }
        // Mã quan hệ
        public string RelationCode { get; set; }
        // Tên quan hệ
        public string RelationName { get; set; }
        // Ngày tạo
        public DateTime CreatedDate { get; set; }
        // Người tạo
        public string CreatedBy { get; set; }
        // Ngày chỉnh sửa gần nhất
        public DateTime ModifiedDate { get; set; }
        // Người chỉnh sửa gần nhất
        public string ModifiedBy { get; set; }

    }
    public class NewRelation
    {
        public string RelationName { get; set; }
        public string CreatedBy { get; set; }
    }
}
