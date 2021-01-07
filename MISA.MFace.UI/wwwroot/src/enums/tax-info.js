/**
 * Hàm tính toán thuế và biểu thuế áp dụng
 * @param {Tổng số thu nhập chịu thuế} totalMoney
 * @param {Mảng thông tin các loại thuế áp dụng} taxInfo
 * @param {Các điều kiện khác} other
 */
const getTaxInfo = function(totalMoney, taxInfo, other) {
  let result = {
    money: 0,
    taxPercent: "Không tính thuế",
  };
  // nếu dạng tính toán là dạng tính kê khai thuế TNCN từ tiền lương tiền công
  if (taxInfo[0].TaxType == 1)
    for (var i in taxInfo) {
      if (other.contractOffical != 0 && other.individualResident != 0 && taxInfo[i].TaxStatus == 1) {
        if (totalMoney >= taxInfo[i].StartAmount) {
          // Lớn hơn giá trị bắt đầu tính thuế
          // nếu bằng không thì trả vè không
          if (totalMoney == 0) {
            return result;
          }
          // Nếu bé hơn giá trị kết thúc hoặc giá trị kết thúc bằng  0
          if (totalMoney <= taxInfo[i].FinishAmount || taxInfo[i].FinishAmount === 0 || taxInfo[i].FinishAmount == null) {
            // Nếu gười nộp thuế là cá nhân cứ trú có hợp động trên 3 tháng
            result.money = (totalMoney * taxInfo[i].TaxPercent) / 100 - taxInfo[i].PartialAmount;
            if (taxInfo[i].TaxStatus == 1) result.taxPercent = `Lũy Tiến ${taxInfo[i].TaxPercent.toString()} %`;
            return result;
          }
          // Nếu người nộp thuế là cá nhân không cứ trú hoặc k cư trú hoặc bé hơn 3 tháng hợp đồng
        }
      } else if (taxInfo[i].TaxStatus == 4 && other.contractOffical === 0 && other.individualResident === 0) {
        result.money = (totalMoney * taxInfo[i].TaxPercent) / 100;
        result.taxPercent = `Toàn phần ${taxInfo[i].TaxPercent.toString()} %`;
        return result;
      } else if (other.contractOffical === 0 && other.individualResident === 1 && taxInfo[i].TaxStatus == 5) {
        result.money = (totalMoney * taxInfo[i].TaxPercent) / 100;
        result.taxPercent = `Toàn phần ${taxInfo[i].TaxPercent.toString()} %`;
        return result;
      }
    }
};
const getSelfReduce = function(taxInfo) {
  var result = {
    SelfReduction: 0,
    DependentReduction: 0,
  };
  for (var i in taxInfo) {
    if (taxInfo[i].TaxStatus == 2) {
      result.SelfReduction = taxInfo[i].PartialAmount;
    }
    if (taxInfo[i].TaxStatus == 3) {
      result.DependentReduction = taxInfo[i].PartialAmount;
    }
  }
  return result;
};

const TaxType = {
  THU_NHAP_VANG_LAI : 20,

}

const TaxInfo = {
  VANG_LAI_CU_TRU : 14,
  VANG_LAI_KHONG_CU_TRU: 15
}
export { getTaxInfo, getSelfReduce, TaxType, TaxInfo };
