export default {
// Danh sách mã Code Server trả về khi thực hiện thêm mới bảng tính thuế(Mã code = response.data.Data)
// Auth: NTNgoc
// Created date: 14/7/2020
TEMPORARY_CODE_RES: [
{
    CODE: 0,
    CONTENT: "Có thể tạo bảng tính", // Có thể tạo bảng tính
}, 
{
    CODE: 1,
    CONTENT: "Kỳ kê khai đã có trong danh sách",
},
{
    CODE: 2,
    CONTENT: "Kỳ kê khai không hợp lệ", //Kì kê khai không hợp lệ
},
{
    CODE: 3,
    CONTENT: "Kỳ tính thuế lớn hơn tháng hiện tại",
},
{
    CODE: 4,
    CONTENT: "Tháng đầu tiên của kỳ tính thuế lớn hơn tháng hiện tại",// Quý lớn hơn quý hiện tại
},
{
    CODE: 5,
    CONTENT: "Kỳ tính thuế không được lớn hơn năm hiện tại",
},
{
    CODE: 6,
    CONTENT: "Kỳ tính thuế phải cùng loại kê khai theo quý với nhóm kê khai trước đó",
},
{
    CODE: 7,
    CONTENT: "Kỳ tính thuế phải cùng loại kê khai theo tháng với nhóm kê khai trước đó",
}
],
/**
 * Hàm tìm kiếm content service trả về theo code
 * @param {} val 
 */
    findInArrayMessageCode(val){
        for (var i in this.TEMPORARY_CODE_RES) {
            if(this.TEMPORARY_CODE_RES[i].CODE === val){
                return this.TEMPORARY_CODE_RES[i].CONTENT;
            }
        }
    }
}
