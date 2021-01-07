import Cookie from "js-cookie"
const OrganizationCookie = "OrganizationID"
const OrganizationName = "OrganizationName"
export default {
    /**
     * Thêm mới organization vào cookie
     * @param {*} value 
     */
    setOrganizationCookie(value) {
        Cookie.set(OrganizationCookie, value);
    },
    /**
     * Lấy organization cookie
     */
    getOrganizationCookie() {
        return Cookie.get(OrganizationCookie);
    },

    /**
     * Thêm tên đơn vị vào cookie
     * @param {any} value
     */
    setOganizationNameCookie(value) {
        Cookie.set(OrganizationName, value);
    },
    /**
     * Lấy tên đon vị trong cookie*/
    getOganizationNameCookie() {
        return Cookie.get(OrganizationName);
    }
}

