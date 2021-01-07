export default {
    Add: {
        addSuccess(val) {
            return !val ? "Thêm mới thành công" : `Thêm mới ${val} thành công`;
        },
        addFailed(val) {
            return !val ? "Thêm mới thất bại" : `Thêm mới ${val} thất bại`;
        }
    },
    Update: {
        updateSuccess(val) {
            return !val ? "Sửa thành công" : `Sửa ${val} thành công`;
        },
        updateFailed(val) {
            return !val ? "Sửa thất bại" : `Sửa ${val} thất bại`;
        }
    },
    Delete: {
        deleteSuccess(val) {
            return !val ? "Xóa thành công" : `Xóa ${val} thành công`;
        },
        deleteFailed(val) {
            return !val ? "Xóa thất bại" : `Xóa ${val} thất bại`;
        },
        messageWarningDel(val) {
            return !val ? "Bạn có chắc chắn muốn xóa không?" : `Bạn có chắc chắn muốn xóa <b>${val}</b> không ?`;
        },
        messageWarningDelMulti(val) {
            return !val ? "Bạn có chắc chắn muốn xóa không?" : `Bạn có chắc chắn muốn xóa những ${val} đã chọn không?`;
        }
    },

}