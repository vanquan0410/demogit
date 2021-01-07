export default{
    ORGANIZATIONREGEX:[
        {
            label:"",
            value: /Công ty cổ phần/gi,
        },
        {
            label:"",
            value: /Chi nhánh/gi,
        },
        {
            label:"",
            value: /Công ty TNHH/gi,
        },
    ],
    Accounting:[
        {
            label: "Độc lập",
            value: 0
        },
        {
            label: "Phụ thuộc",
            value: 1
        }
    ],
    /**
     * Hàm tìm kiếm content service trả về theo code
     * @param {} val 
     */
    findInArray(val){
        for (var i in this.Accounting) {
            if(this.Accounting[i].value === val){
                return this.Accounting[i].label;
            }
        }
    }
}