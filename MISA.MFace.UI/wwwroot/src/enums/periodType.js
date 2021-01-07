export default {
  PERIOD_TAX: [
    {
      NAME: "Tháng",
      VALUE: 1,
    },
    {
      NAME: "Quý",
      VALUE: 2,
    },
  ],
  PERIOD_TAX_ASSET: [
    {
      NAME: "Năm",
      VALUE: 3,
    },
    {
      NAME: "Kỳ thanh toán",
      VALUE: 4,
    },
  ],
  
  findInArray(Array, value) {
    for (var i in this[Array]) {
      if (this[Array][i].VALUE == value) return this[Array][i].NAME;
    }
  },
};
