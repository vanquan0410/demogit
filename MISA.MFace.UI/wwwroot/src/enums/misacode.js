const MISA_CODE = {
    //Thành công
    Success: 200,

    Created: 201,

    //Cảnh báo thay đổi thông tin
    Warning: 300,
    ErrorUpdateDeclaration: 301,

    //Cảnh báo không update được tờ khai thuế
    WarningUpdateData: 310,

    //Cảnh báo không thêm mới được tờ khai thuế
    ErrorAddDeclaration: 302,

    //Tờ khai thuế không tìm thấy
    DeclarationNotFound: 303,

    //Lỗi validate dữ liệu chung
    Validate: 400,

    // Lỗi validate dữ liệu không hợp lệ
    ValidateEntity: 401,

    // Lỗi validate dữ liệu do không đúng nghiệp vụ
    ValidateBussiness: 402,

    // Lỗi không tìm thấy
    NotFound: 404,
    
    // Lỗi đã tồn tại 
    Exist: 405,

    // Không tồn tại tổ chức
    ValidateOrganization: 450,

    // Không khả dụng
    NotActive: 451,

    // Lỗi Exception
    Exception: 500,

    // Lỗi Trùng dữ liệu
    Duplicate: 501,

    // Lỗi File không đúng định dạng
    FileFormat: 600,

    // Lỗi File import không đúng định dạng
    ImportFileFormat: 601,

    // Lỗi File Export không đúng định dạng
    ExportFileFormat: 602,

    // Lỗi thêm mới entity
    ErrorAddEntity: 603,

    // Lỗi xóa entity
    ErrorDeleteEntity: 604,

    // Lỗi cập nhật entity
    ErrorUpdateEntity: 605,

    ErrorBinding: 999,

    ConfirmUpdate: 789

}
export {MISA_CODE}