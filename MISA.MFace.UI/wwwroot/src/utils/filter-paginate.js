/**
 * Hàm xây dựng phương thức skip, limit array dùng cho phân trang
 * Created By : NQKHAI(3/11/2020)
 */
const filterData = () => {
  function limit(c) {
    return this.filter((x, i) => {
      if (i <= c - 1) {
        return true;
      }
    });
  }

  function skip(c) {
    return this.filter((x, i) => {
      if (i > c - 1) {
        return true;
      }
    });
  }
  Array.prototype.skip = skip;
  Array.prototype.limit = limit;
}

export  {filterData};