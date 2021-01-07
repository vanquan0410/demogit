import jwtDecode from "jwt-decode";
const mtToken = "mt-token";

/**
 * Xóa token khỏi localStorage
 */
const clearToken = function () {
  localStorage.removeItem(mtToken);
};
/**
 * Lấy ra Beaer Token lưu trong Localstorage
 * Created by nvbinh 26.08.2020
 */
const getToken = function () {
  return localStorage.getItem(mtToken);
};

/**
 * Lưu token vào LocalStorage
 * @param {String} value // Giá trị token
 * Created by nvkhai 26.08.2020
 */
const setToken = function (value) {
  localStorage.setItem(mtToken, value);
};

/**
 * Hàm phân giải Bearer token để lấy ra thông tin
 * @param {*} bearerToken
 * Created by nvbinh2 26.08.2020
 */
const decodeToken = function (bearerToken) {
  if (bearerToken) {
    const regex = /Bearer/i;
    var token = bearerToken
      .toString()
      .replace(regex, "")
      .trim();
    // Return về Object được lưu trong token
    return jwtDecode(token);
  }
};
/**
 * Lấy về thông tin Claim
 * Claim Type được định nghĩa Enum ở file @/enums/claimType.js
 * @param {Enum} claim
 * Created by nvbinh  26.8.2020
 */
const getTokenClaim = function (claim) {
  var claimValue = decodeToken(getToken());
  if (claimValue && typeof claimValue != "undefined") {
    return claimValue[claim];
  }
  return null;
};

const getTokenClaimFromToken = function (claim, token) {
  var claimValue = decodeToken(token);
  if (claimValue && typeof claimValue != "undefined") {
    return claimValue[claim];
  }
  return null;
};
export {
  getToken,
  setToken,
  getTokenClaim,
  decodeToken,
  clearToken,
  getTokenClaimFromToken,
};
