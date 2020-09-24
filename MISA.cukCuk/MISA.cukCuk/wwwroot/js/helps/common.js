var commonjs={
    /**
     * hàm định dạng tiền tệ
     * @param {number} money 
     * createdBy: DVQuan(24/9/2020)
     */
    formatMoney(money){
        if(money||money==0){
            return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        }
        return null;
    },
    /**
     * hàm định dạng ngày tháng
     * @param {date} date 
     * createdBy: DVQuan
     */
    formatDate(date) {
        if (date && !isNaN(date.getDate())) {
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();
            month = (month < 10) ? "0" + month : month;
            day = (day < 10) ? "0" + day : day;
            return day + "/" + month + "/" + year;
        }
        return null;
    }
}