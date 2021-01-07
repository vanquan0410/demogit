export default{
    MESSAGE_ERROR: [
        {
            code: 0,
            content: "Ký thành công"
        },
        {
            code: -1,
            content: "Không hỗ trợ ký file định dạng này."
        },
        {
            code: 1,
            content: "Bạn chưa chọn chứng thư số. Vui lòng kiểm tra lại."
        },
        {
            code: 2,
            content: "Lỗi trong quá trình ký."
        },
        {
            code: 3,
            content: "Tệp nguồn không tồn tại."
        },
        {
            code: 4,
            content: "Người mua đã ký."
        },
        {
            code: 5,
            content: "Không tìm thấy chứng thư số."
        },
        {
            code: 7,
            content: "Lấy thông tin chữ ký số USB Token không thành công. Vui lòng kiểm tra lại kết nối với USB Token."
        },
        {
            code: 8,
            content: "Mã số thuế của chứng thư số không khớp với mã số thuế đã đăng ký sử dụng dịch vụ thuế điện tử MISA MTax."
        },
        {
            code: 9,
            content: "Chứng thư số thời hạn không hợp lệ."
        },
        {
            code: 11,
            content: "Tờ khai chưa được ký số"
        },
        {
            code: 1000,
            content: "Hệ thống đang xảy ra lỗi. Vui lòng thử lại sau."
        },
        {
            code: 400,
            content: "Đầu vào không hợp lệ. Vui lòng thử lại."
        },
        {
            code: 401,
            content: "Chữ ký số của đơn vị không trùng với chữ ký số đăng ký sử dụng dịch vụ thuế điện tử MISA MTax. Vui lòng thử lại."
        },
        {
            code: 402,
            content: "Tờ khai không trùng với tờ khai đã đăng ký trên MTax. Vui lòng thử lại.",
        },
        {
            code: 403,
            content: "Đơn vị chưa đăng ký sử dụng dịch vụ TVan thành công trên trang web MISA MTax. Vui lòng kiểm tra lại",
        },
        {
            code: 404,
            content: "Thuê bao sử dụng dịch vụ thuế điện tử MISA MTax đã hết hạn. Vui lòng gia hạn để tiếp tục sử dụng.",
        },
        {
            code: 200,
            content: "<Tạm thời> Đã nộp thành công",
        },

        {
            code :420,
            content: "Không có tờ khai nào hợp lệ. Vui lòng kiểm tra lại"
        },
        {
            code: 421,
            content: "Tờ khai không hợp lệ. Vui lòng kiểm tra lại"
        },

        
    ],
    findMessage(index){
        return this.MESSAGE_ERROR.find(element => element.code == index).content
    },
    showMessageSigning(name){
        return "Đang thực hiện ký "+name+".<br/> Vui lòng đợi"
    },
    showMessageErrorSign(name){
        return name + " đã xảy ra lỗi. Bạn có muốn bỏ qua và tiếp tục ký nộp không?"
    }
}