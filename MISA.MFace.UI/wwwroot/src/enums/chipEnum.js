export default {
  DECLARATION: [{
    value: 1,
    name: "Chưa nộp",
    type: "info",
  },
  {
    value: 2,
    name: "Đã nộp",
    type: "warning",
  },
  {
    value: 3,
    name: "Đã tiếp nhận",
    type: "",
  },
  {
    value: 4,
    name: "Chấp nhận",
    type: "success",
  },
  {
    value: 5,
    name: "Không chấp nhận",
    type: "danger",
  },
  ],

  EMPLOYEE_STATUS: [
    {
      value: 1,
      name: "Đang làm việc",
      type: ""
    },
    {
      value: 0,
      name: "Đã nghỉ",
      type: ""
    }
  ],

  TAX_REGISTER: [
    {
      value: 1,
      name: "Chưa gửi",
      type: "info",
    },
    {
      value: 2,
      name: "Gửi MISA thành công",
      type: "",
    },
    {
      value: 3,
      name: "Gửi MISA thất bại",
      type: "danger",
    },
    {
      value: 10,
      name: "Gửi TCT",
      type: "warning",
    },
    {
      value: 11,
      name: "TCT không duyệt",
      type: "danger",
    },
    {
      value: 12,
      name: "TCT đã duyệt",
      type: "success",
    },
  ],

  DEPENDENT_TYPE: [
    {
      value: 0,
      name: "Báo tăng",
      type: "",
    },
    {
      value: 1,
      name: "Giảm trừ",
      type: "info",
    },
  ],
  DEPENDENT_STATUS: [
    {
      value: 0,
      name: "Chưa đăng ký",
      type: "info",
    },
    {
      value: 1,
      name: "Đã đăng ký",
      type: "",
    }
  ],

  GENDER: [
    {
      value: 0,
      name: "Nữ",
      type: "info",
    },
    {
      value: 1,
      name: "Nam",
      type: "",
    }
  ],
  findInArray(value) {
    for (var i in this.TAX_REGISTER) {
      if (this.TAX_REGISTER[i].value == value) {
        return this.TAX_REGISTER[i].name;
      }
    }
  },
};
