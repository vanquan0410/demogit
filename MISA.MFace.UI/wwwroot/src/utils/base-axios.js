import axios from "axios";
import Cookie from "js-cookie";
// import store from "@/store";
export const api = function(baseURL) {
  return axios.create({
    baseURL,
    validateStatus: function(status) {
      return status >= 100 && status <= 500;
    },
    headers: {
      OrganizationID: Cookie.get("OrganizationID")
        ? Cookie.get("OrganizationID")
        : "",
    },
  });
};
