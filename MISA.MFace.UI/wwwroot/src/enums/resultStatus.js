const ResultStatus = {
    SUCCESS: 1,             //Thành công
    FALSE: 2,               //Thất bại
    NOT_EXIST: 3,           //Không tồn tại
    ERROR_UPDATE: 4,        //Lỗi cập nhật
    ERROR_INSERT: 5,        //Lỗi thêm mới
    EXCEPTION: 6,            //Lỗi ngoại lệ

    // Enum kết quả cho xóa dữ liệu
    SuccessNoneEffect: 0,
    SuccessEffect: 1,
    Incurred: 2,
    NotFound: 3,
    Error: 4
};

export { ResultStatus }