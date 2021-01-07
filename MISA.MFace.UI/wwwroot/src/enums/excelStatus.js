export default {
  EXCEL_STATUS: [
    {
      VALUE: 1,
      NAME: "Hợp lệ",
      ICON: "",
    },
    {
      VALUE: 2,
      NAME: "Không hợp lệ",
      ICON: "",
    },
    {
      VALUE: 3,
      NAME: "Trùng trong file excel",
      ICON: "",
    },
    {
      VALUE: 4,
      NAME: "Trùng trong database",
      ICON: "Group 20045.png",
    },
    {
      VALUE: 5,
      NAME: "Trùng lặp trong database nhưng không thể cập nhật",
      ICON: "Group 20124.png",
    },
  ],
  EXCEL_IMPORT_STATUS: [
    {
      VALUE: 0,
      NAME: "Đọc file excel không thành công !"
    },
    {
      VALUE: 1,
      NAME: "Nhập file excel thành công !"
    },
    {
      VALUE: 2,
      NAME: "Nhập file excel thất bại !"
    },
    {
      VALUE: 3,
      NAME: "Kích thước tệp vượt quá 5MB, xin vui lòng chọn một tệp khác !"
    },
    {
      VALUE: 4,
      NAME: "Đọc file excel thành công !"
    },
    {
      VALUE: 5,
      NAME: "Định dạng file không hợp lệ, vui lòng nhập file excel !"
    }
  ],
  FILE_NAME : [
    {
      VALUE: 0,
      NAME: "Danh sách lao động có thu nhập vãng lai.xlsx",
    },
    {
      VALUE: 1,
      NAME: "DL Sai_Danh sách lao động có thu nhập vãng lai.xlsx",
    },
  ],
  DOWN_FILE_STATUS:[
    {
      VALUE: 0,
      NAME: "Tải file không thành công !",
    },
    {
      VALUE: 1,
      NAME: "Tải file thành công !",
    }
  ],
  IMPORT_FILE_SIZE:
  {
    VALUE: 5,
  },
  IndividualResident:{
    No:0,
    Yes:1
  },
  RESPONSE_STATUS:{
    SUCCESS: "Thành công",
    FAILED: "Thất bại"
  },
  EXCEL_ERROR_STATUS: [
    {
      VALUE: [1,2,3,4],
      TYPE: "WrongFormat",
    },
    {
      VALUE: [5],
      TYPE: "DuplicateInfile",
    },
    {
      VALUE: [6],
      TYPE: "DuplicateInDatabase",
    },
  ],

  findInArray(name) {
    for (var i in this.EXCEL_ERROR_STATUS) {
        if (this.EXCEL_ERROR_STATUS[i].TYPE == name) {
            return this.EXCEL_ERROR_STATUS[i].VALUE;
        }
    }
},
};
