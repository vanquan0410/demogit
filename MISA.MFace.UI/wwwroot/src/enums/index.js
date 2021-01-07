const MTAX_CODE = {
    SUCCESS: 200,
    VALIDATE:406,
    EXCEPTION:500,
    NOT_FOUND:404,
    CALL_FAILED:999,
    DECLARATION_NOT_REGISTER:606,
}

const TVAN_STATUS = {
    REGISTER: 1,
    NOT_REGISTER: 0,
}

const IMPORT_VALID_ERROR = {
    NULL: 1,
    TOO_LONG: 2,
    WRONG_TYPE:3,
    WRONG_FORMAT:4,
    DUPLICATE_IN_FILE:5,
    DUPLICATE_IN_DATABASE: 6,
    DUPLICATE_IN_FILE_AND_NOT_UPDATE: 7,
    DUPLICATE_IN_DB_AND_NOT_UPDATE: 8,


}
const IMPORT_STATE ={
    /**
     * Hợp lệ
     */
    VALID: 1, 
    /**
     * Không hợp lệ
     */
    INVALID:2,
    /**
     * trùng trong file
     */
    DUPLICATE_IN_FILE: 3,
    /**
     * Trùng trong database
     */
    DUPLICATE_IN_DATABASE: 4,
    /**
     * Trùng trong database nhưng k thể cập nhật
     */
    DUPLICATE_IN_DB_AND_NOT_UPDATE: 5,
}

const GET_TEXT_FROM_IMPORT_VALID_ERROR = function(val){
    switch(val){
        case IMPORT_VALID_ERROR.NULL:
          return "Thiếu thông tin"
        case IMPORT_VALID_ERROR.TOO_LONG:
            return "Thông tin quá dài"
    }
}
const GENDER={
    /**
     * Nam
     */
    MALE: 0,
    /**
     * Nữ
     */
    FEMALE: 1
}

const EMPLOYEE_STATUS = {
    ACTIVE:1,
    NOT_ACTIVE:0,
}
export { MTAX_CODE, TVAN_STATUS,IMPORT_VALID_ERROR,GET_TEXT_FROM_IMPORT_VALID_ERROR, IMPORT_STATE,GENDER,EMPLOYEE_STATUS}
