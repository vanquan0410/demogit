/**
 * Created by nhdoanh (7/7/2020)
 * @param {*} date Ngày muốn định dạng
 * @param {*} formatType Kiểu định dạng = {"dd/mm/yyyy", "yyyy/mm/dd", "dd-mm-yyyy", "yyyy-mm-dd"}
 * Description: Hàm format ngày theo dd/mm/yyyy | yyyy/mm/dd | dd-mm-yyyy | yyyy-mm-dd
 * Modified by nvnguyen 01/12/2020: format lại ngày tháng sử dùng hàm thư viện date time
 */
const formatDate = function(date, formatType) {
  if (date) {
    let tempDate = new Date(date);
    let day = tempDate.getDate();
    let month = tempDate.getMonth() + 1;
    if(day < 10){
      day = '0' + day;
    }
    if(month < 10){
      month = '0' + month;
    }
    let year = tempDate.getFullYear();
    if (formatType == "dd/mm/yyyy") return `${day}/${month}/${year}`;
    else if (formatType == "dd-mm-yyyy") return `${day}-${month}-${year}`;
    else if (formatType == "yyyy/mm/dd") return `${year}/${month}/${day}`;
    else if (formatType == "yyyy-mm-dd") return `${year}-${month}-${day}`;
    else if (formatType == "mm-dd-yyyy") return `${month}-${day}-${year}`;
    else if (formatType == "mm/dd/yyyy") return `${month}/${day}/${year}`;
    else if (formatType == "mm/yyyy") {
      return `${month}/${year}`;
    }
  } else {
    return "";
  }
};

/**
 * Created by nhoanh (7/7/2020)
 * @param {*} value Giá trị cần format
 * @param {*} splitType Kiểu ngăn cách = {'.', ',', ...}
 * Description: Hàm format tiền tệ theo ngăn cách 3 số
 */

const formatMoney = function(value, splitType) {
  var number = value
    .split("")
    .filter((x) => x !== ",")
    .join("");
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, splitType);
};

/**
 * Created by nhoanh (7/7/2020)
 * @param {*} money Giá trị tiền muốn chuyển
 * Description: Hàm chuyển giá trị hiển thị của tiền về dạng sô
 */
const convertMoneyToNumber = function(money) {
  var moneyStr = money.toString();
  var splitChar = moneyStr[moneyStr.search(/[^\d]/)]; // Tìm ký tự phân cách
  var splitMoney = moneyStr.split(splitChar);
  var value = "";
  for (let i = 0; i < splitMoney.length; i++) {
    value += splitMoney[i];
  }
  return parseInt(value);
};

/**
 * Created by nhdoanh (27/7/2020)
 * @param {Sting} str giá trị muốn chuẩn hóa
 * Description: Hàm chuẩn hóa giá trị Input nhập liệu họ và tên người, địa danh
 *              (Viết hoa các chữ cái đầu mỗi từ)
 */
const convertName = function(str) {
  str.toString();
  // Các ký tự có dấu trong Tiếng Việt
  let vnChar =
    "(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|ì|í|ị|ỉ|ĩ|" +
    "ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|ỳ|ý|ỵ|ỷ|ỹ|đ)";

  // Regex cho viết hoa các ký tự đầu tiên của một từ trong chuỗi cho trước
  let regex = new RegExp(`^([a-z])|^${vnChar}|\\s+([a-z])|\\s+${vnChar}`, "g");
  return str.replace(regex, function(char) {
    return char.toUpperCase();
  });
};

/**
 * method sắp xếp list theo alphabet
 * @param {Array} data list dữ liệu truyền vào
 * created by: N.T. Dũng 28.07.2020
 */
const sortData = (data) => {
  if (data) {
    data.sort((a, b) => {
      // loại bỏ phụ thuộc chữ hoa thường
      let firstName = a.LocationName.toUpperCase(),
        SecondName = b.LocationName.toUpperCase();
      return firstName.localeCompare(SecondName);
    });
  }
};

const getFromTree = function(val, array, arraySetting) {
  var result;
  for (var i = 0; i < array.length; i++) {
    if (val == array[i][arraySetting.value]) {
      result = array[i];
      return result;
    } else {
      if (array[i][arraySetting.children].length > 0)
        result = getFromTree(
          val,
          array[i][arraySetting.children],
          arraySetting
        );
      if (result) return result;
    }
  }
};

const findByName = function(stringFind, obj, propertyToFind){
    var currentFind = stringFind;
    var valueInObj = obj[propertyToFind];
    
    // cắt bỏ khoảng cách
    valueInObj = valueInObj.toString().trim();
    valueInObj = valueInObj.normalize('NFC').normalize('NFD');

    currentFind = currentFind.toString().trim().normalize('NFC').normalize('NFD');
    if(valueInObj.includes(currentFind)){
      return true;
    }else {
      return false;
    }
}

export {
  formatDate,
  formatMoney,
  convertMoneyToNumber,
  convertName,
  sortData,
  getFromTree,
  findByName
};
