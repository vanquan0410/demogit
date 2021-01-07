export default {
    TAX_REGISTER_TYPE: [
        {
            NAME: "Đăng kí mới",
            VALUE: 21,
        },
        {
            NAME: "Chỉnh sửa thông tin",
            VALUE: 20,
        },
    ],

    /**
     * Trả về name theo value
     * @param {} array 
     * @param {*} value
     * createdby ndhuy 16.09.2020
     */
    findInArray(array,value) {
        
        for (var i in array) {
            if (array[i].VALUE == value) {
                return array[i].NAME;
            }
        }
    },
}