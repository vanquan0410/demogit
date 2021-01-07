export default{
    ORGANIZATIONUNIT:[
        {
            label: "Văn phòng ABC",
            value: 1,
          },
          {
            label: "Văn phòng BCD",
            value: 2,
          },
          {
            label: "Văn phòng EFG",
            value: 3,
          }
    ],
    findInArray(value){
        for (var i in this.ORGANIZATIONUNIT) {
            if (this.ORGANIZATIONUNIT[i].value == value) return this.ORGANIZATIONUNIT[i].label;
          }
    }
}