export default{
    POSITION:[
        {
            label: "Nhân viên",
            value: 1,
          },
          {
            label: "Trưởng dự án",
            value: 2,
          },
          {
            label: "Phó phòng",
            value: 3,
          },
          {
            label: "Trưởng phòng",
            value: 4,
          }
    ],
    findInArray(value){
        for (var i in this.POSITION) {
            if (this.POSITION[i].value == value) return this.POSITION[i].label;
          }
    }
}