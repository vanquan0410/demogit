
/**
 * Chuyển danh sách các id của bộ phận phòng ban thành string id để gửi lên server
 * @param {danh sách id gửi lên} value 
 */
const convertListIDToString = function(value){
    var filterString ="/";
    value.forEach(element => {
        filterString += element + '/' ;
    });   
    return filterString;
}
export {convertListIDToString}