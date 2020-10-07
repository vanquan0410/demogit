var commonjs = {
    /**
     * hàm định dạng tiền tệ
     * @param {number} money 
     * author: DVQuan(24/9/2020)
     */
    formatMoney(money) {
        if (money || money == 0) {
            return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        }
        return null;
    },
    /**
     * hàm định dạng ngày tháng
     * @param {date} date input ngày tháng
     * author: DVQuan(24/9/2020)
     */
    formatDate(date) {
        var d = new Date(date);
        if (d && !isNaN(d.getDate())) {
            var day = d.getDate();
            var month = d.getMonth() + 1;
            var year = d.getFullYear();
            month = (month < 10) ? "0" + month : month;
            day = (day < 10) ? "0" + day : day;
            return day + "/" + month + "/" + year;
        }
        return null;
    },

    /**
    * hàm convert ngay thang yyyy/MM/dd
    * @param {date} date input ngày tháng
    * author: DVQuan(24/9/2020)
    */
    convertDate(date) {
        var d = new Date(date);
        if (d && !isNaN(d.getDate())) {
            var day = d.getDate();
            var month = d.getMonth() + 1;
            var year = d.getFullYear();
            month = (month < 10) ? "0" + month : month;
            day = (day < 10) ? "0" + day : day;
            return year + "-" + month + "-" + day;
        }
        return null;
    },

    /**
     * convert number 
     * @param {any} input
     */
    reformatText(input) {
            var x = input.value;
            x = x.replace(/,/g, ""); // Strip out all commas
            x = x.split("").reverse().join("")
            x = x.toString();
            x = x.replace(/.../g, function (e) {
                return e + ",";
            }); // Insert new commas
            x = x.split("").reverse().join("")
            x = x.toString();
            x = x.replace(/^,/, ""); // Remove leading comma
            input.value = x;
    }

}