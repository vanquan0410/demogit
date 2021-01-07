export default {
    RELATION:[
        {
            label: "Con",
            value: 1,
          },
          {
            label: "Vợ/Chồng",
            value: 2,
          },
          {
            label: "Cha/Mẹ",
            value: 3,
          },
          {
            label: "Khác",
            value: 4,
          }
    ],
    /**
     * Tìm giá trị relation thông qua mã value
     * @param {mã relation} value 
     */
    findInArray(value) {
        for (var i in this.RELATION) {
          if (this.RELATION[i].value == value) return this.RELATION[i].label;
        }
      },
}