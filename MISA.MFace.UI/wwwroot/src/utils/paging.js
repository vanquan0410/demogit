
/**
 * Hàm sinh bộ phân trang
 * @param {Bộ lọc} filter 
 * @param {Bộ lọc có sử dụng Organization hay không} isOrganization 
 */
const paging = function(filterBar, isOrganization) {
  var panigation = {
    Filters: [],
    PageIndex: 0,
    PageSize: 0,
    IsOrganization:isOrganization,
  };
  var filter = JSON.parse(JSON.stringify(filterBar));
  var listOb = Object.getOwnPropertyNames(filter);
  var havepageIndex = false;
  var havepageSize = false;
  for (var i of listOb) {
    if (!havepageIndex ) {
      if (i.toLowerCase() == "pageindex") {
        panigation.PageIndex = filter[i];
        havepageIndex = true;
        continue;
      }
    }
    if(!havepageSize){
      if (i.toLowerCase() == "pagesize") {
        panigation.PageSize = filter[i];
        havepageSize = true;
        continue;
      }
    }
    var listFilter = {
        FilterName: '',
        FilterValue: null,
      };
      listFilter.FilterName = i;
      listFilter.FilterValue = filter[i];
      panigation.Filters.push(listFilter);
    }
  
  return panigation;
};
/**
 * encode objec thành chuỗi
 * @param {*} object 
 * created by nvbinh2 21.11.2020
 */
const EncodeToString = function(object){
    var result = JSON.stringify(object);
    return result;

}
/**
 * chuyen string sang dang base 64
 * @param {*} stringToEndcode 
 * created by nvbinh2 21.11.2020
 */
const EncodeToBase64 = function(stringToEndcode){
    var result = btoa(stringToEndcode);
    return result;
}
/**
 * Hàm set giá trị truyền phân trang
 * @param {*} filter 
 * @param {*} isOrganization 
 * created by nvbinh2 21.11.2020
 */
const setParamPaging = function(filter, isOrganization){
    var objectParam = paging(filter,isOrganization);
    var stringParam = EncodeToString(objectParam);
    var base64string = EncodeToBase64(stringParam);
    return base64string;
}

export {setParamPaging}