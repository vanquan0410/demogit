export default {
  INCOME_TYPE: [
    {
      Content: "Tiền lương, tiền công",
      Label: "Tiền lương, tiền công",
      Value: 1,
    },
    {
      Content: "Hoa hồng đại lý xổ số",
      Label: "Hoa hồng đại lý XS",
      Value: 2,
    },
    {
      Content: "Hoa hồng đại lý bảo hiểm",
      Label: "Hoa hồng đại lý BH",
      Value: 3,
    },
    {
      Content: "Hoa hồng đại lý bán hàng đa cấp",
      Label: "Hoa hồng đại lý BHĐC",
      Value: 4,
    },
    {
      Content: "Phí tích lũy bảo hiểm nhân thọ, bảo hiểm không bắt buộc khác",
      Label: "Phí tích lũy BHNT, BH không bắt buộc khác",
      Value: 5,
    },
    {
      Content: "Tiền phí mua bảo hiểm nhân thọ, bảo hiểm không bắt buộc khác của doanh nghiệp bảo hiểm không thành lập tại Việt Nam",
      Label: "Tiền phí mua BHNT, BH không bắt buộc khác của DNBH không thành lập tại VN",
      Value: 6,
    },
  ],

  /**
   * Hàm thự hiện tìm label qua value
   * @param {giá trị enum} value 
   * created by vdthang 16.12.2020
   */
  findLabelByValue(value) {
    for (var i in this.INCOME_TYPE) {
      if (this.INCOME_TYPE[i].Value == value) {
        return this.INCOME_TYPE[i].Label;
      }
    }
  },
};
