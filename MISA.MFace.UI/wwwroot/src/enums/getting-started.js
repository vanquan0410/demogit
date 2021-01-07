export default {
    ORGANIZATION_LEVEL: [{
            NAME: "Công ty con",
            VALUE: 0,
        },
        {
            NAME: "Chi nhánh",
            VALUE: 1,
        },
    ],
    /**
     * Hàm thự hiện tìm name qua value
     * @param {value} value 
     */
  findInArray(value){
    for(var i in this.ORGANIZATION_LEVEL){
      if(this.ORGANIZATION_LEVEL[i].VALUE == value){
        return this.ORGANIZATION_LEVEL[i].NAME;
      }
    }
  },
}