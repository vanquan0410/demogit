
/**
 * object cha quản lý danh mục
 */
class BaseJS {

    //#region constructor
    constructor(name) {
        try {
            this.code = '';
            this.page = 25;                         //số trang hiển thị trong 1 page
            this.startPage = 1;                     //trang bắt đầu
            this.currentPage = 1;                   //trang hiện tại
            this.countPages = 0;                    //số trang
            this.getCountPages();                   //lấy tổng số trang
            this.FormType = null;
            this.getData(this.page, this.startPage); //lấy data theo phân trang
            this.loadData();                         //load dữ liệu
            this.initEvents();                       //các sự kiện click
            this.shortKeys();                        //phím tắt
            this.addItemCode();                      // lấy code cao nhất

        } catch (e) {

        }
    }
    //#endregion

    //#region event
    /**
     * Thực hiện gán các sự kiện
     * author: DVQuan(24/9/2020)
     */
    initEvents() {
        var sel = this;
        $('#btnAdd').click(this.btnAddOnClick.bind(this));                //thực hiện showdialog add
        $('#btnEdit').click(this.btnEditOnClick.bind(this));              //thực hiện hide dialog edit
        $('#btnDelete').click(this.btnDeleteOnClick.bind(this));          // thực hiện event delete
        $('#btnDuplicate').click(this.btnDuplicate.bind(this));           //thực hiện nhân bản
        $('#btnRefresh').click(this.btnRefreshOnclick.bind(this));        //thực hiện event refresh
        $('input[required]').blur(this.checkRequired);                    //thực hiện event check require
        $('input[convertNumber]').keyup(this.formatNumber);               //convert text number
        $('#dialog-btnAdd').click(this.btnSaveOnClick.bind(this));        //thực hiện event save data
        $('#btnCancel').click(this.btnCancelOnClick.bind(this));          //thực hiện event hủy
        $('#dialog-btnCancel').click(this.btnCancelOnClick.bind(this));   //thực hiện event hủy
        $('#dialog-btnfocus').focus(this.showFocusDetail);                //thực hiện event focus
        //thực hiện event click on table
        $(document).ready(function () {                                   //chọn nhiều dòng trong table
            $("table").on("click", "tbody tr", function (event) {

                if (event.ctrlKey) {
                    sel.rowOnMultiClick(this);
                    //is ctrl + click
                } else {
                    sel.rowOnClick(this);
                }
            });
        })
        $(".page-next").click(this.nextData.bind(this));                  // thực hiện next data sang trang kế tiếp
        $(".page-prev").click(this.prevData.bind(this));                  //thực hiện prev data về trang trước
        $(".page-first").click(this.pageFirstData.bind(this));            //thực hiện về dầu trang
        $(".page-last").click(this.pageLastData.bind(this));              //thực hiện về cuối trang
        $("#btnWarning").click(this.hideMessageWarning);                  //hiển thị thông báo


    }
    //#endregion

    //#region method

    //#region phân trang
    /**
     * lấy tổng số bản ghi
     * author: DVQuan(13/10/2020)
     * */
    getCountPages() {
        var ref = this;
        debugger
        $.ajax({
            url: "/api/" + ref.getClassName() + "/countpage",    //tên của class
            method: "GET",
            data: "",
            contentType: "application/json",
        }).done(function (res) {
            debugger
            $('#numberOfPages').val(Math.ceil(res / ref.page));
            ref.countPages = res;
        }).fail(function (res) {

        })
    }

    /**
     * phân trang ->next sang trang kế tiếp
     * author: DVQuan(13/10/2020)
     * */
    nextData() {
        debugger
        if ((this.startPage + this.page) < this.countPages) {
            this.currentPage = this.currentPage + 1;     //trang hiện tại
            this.startPage = this.startPage + this.page; //bản ghi bắt đầu
            this.getData(this.page, this.startPage)      //lấy data theo phân trang
            $('#txtPageNext').val(this.currentPage);     //giá trị của trang hiện tại
        }

    }

    /**
     * phân trang -> prev về trang trước
     * author: DVQuan(13/10/2020)
     * */
    prevData() {
        if (this.currentPage > 1) {
            this.currentPage = this.currentPage - 1; //trang hiện tại
            this.startPage = this.startPage - this.page; //bản ghi bắt đầu
            this.getData(this.page, this.startPage)
            $('#txtPageNext').val(this.currentPage);
        }
    }

    /**
     * phân trang -> quay về trang đầu tiên
     * author: DVQuan(13/10/2020)
     * */
    pageFirstData() {
        debugger
        if (this.currentPage != 1) {
            this.currentPage = 1;                       //trang hiện tại
            this.startPage = 1;                         //bản ghi bắt đầu
            this.getData(this.page, this.startPage)     //lấy data theo phân trang
            $('#txtPageNext').val(this.currentPage);
        }

    }

    /**
     * cuối trang
     * author: DVQuan(13/10/2020)
     * */
    pageLastData() {
        this.currentPage = (Math.ceil(this.countPages / this.page)); //trang hiện tại
        this.startPage = this.page * (this.currentPage - 1) + 1;     //bản ghi bắt đầu
        this.getData(this.page, this.startPage)                      //lấy lại data
        $('#txtPageNext').val(this.currentPage);
    }
    //#endregion

    //#region contact to DB
    /**
     * lớp con sẽ override lại hàm này và getData của nó
     * author:DVQuan(30/9/2020)
     */
    getData(page, size) {
        this.Data = [];
    }

    /**
     * Hàm lấy dữ liệu tương ứng của 1 đối tượng
     * author: DVQuan(01/10/2020)
     * @param {any} objCode
     */
    getObjData(objCode) {
        //lớp con sẽ override lại hàm này lấy dữ liệu theo dối tượng của nó
    }

    /**
     * lớp con sẽ override lại hàm này và save lại theo ý muốn của nó
     * author:DVQuan
     * @param {any} obj một mảng của đối tượng
     * @param {any} method xác định xem là post or put
     */
    saveToDB(obj, method) {
        //lớp con sẽ override lại hàm này lưu dữ liệu theo dối tượng của nó
    }

    /**
     * lớp con sẽ override lại hàm này và delete lại theo ý muốn của nó
     * @param {any} obj
     */
    deleteToDB(obj) {
        //lớp con sẽ override lại hàm này xóa dữ liệu theo dối tượng của nó
    }

    /**
     * sự kiện load data
     * author:DVQuan(27/9/2020)
     */
    loadData() {
        $('table#tbListData tbody').empty();
        try {
            //đọc thông tin các cột dữ liệu
            var fields = $('table#tbListData thead th');
            var filedID = $('table#tbListData tr')[0];
            //lấy dữ liệu
            var data = this.Data;
            var seft = this;
            //đọc dữ liệu:
            $.each(data, function (index, obj) {
                //gán id vao attr của dòng dữ liệu tương ứng
                var id = $(filedID).attr('fieldID');
                var tr = $(`<tr fieldID=` + obj[id] + `></tr>`);
                $.each(fields, function (index, field) {
                    var fieldName = $(field).attr('fieldName');
                    var formatName = $(field).attr('format');
                    var value = obj[fieldName];
                    //nếu dữ liệu trống thì sẽ thay thế bằng ""
                    if (value == null || !value) {
                        value = "";
                        td = $(`<td fieldName=` + fieldName + `>` + value + `</td>`);
                    }
                    var td = $(`<td fieldName=` + fieldName + `>` + value + `</td>`);
                    //nếu dữ liệu là money thì định dạng theo money
                    if (formatName == "Money") {
                        var valueMoney = commonjs.formatMoney(value);
                        td = $(`<td format=` + formatName + ` fieldName=` + fieldName + `>` + valueMoney + `</td>`);
                        td.addClass("format-money");
                    }
                    else if (formatName) {
                        td.addClass("format");
                    }
                    //nếu dữ liệu là address thì định dạng theo address
                    if (formatName == "Address") {
                        td.addClass("format-address");
                        td = $(`<td format=` + formatName + ` fieldName=` + fieldName + ` title="` + value + `">` + value + `</td>`);
                    }
                    // định dạng type date
                    if (formatName == "Date") {
                        var valueDate = commonjs.formatDate(value);
                        td = $(`<td format=` + formatName + ` fieldName=` + fieldName + `>` + valueDate + `</td>`);
                        td.addClass("format");
                        //  td.setAttribute("fieldName", fieldName);
                    }
                    // định dạng type gender
                    if (formatName == "Gender") {
                        if (value == 0) {
                            var valueGender = "nam"
                            td = $(`<td value=` + value + ` format=` + formatName + ` fieldName=` + fieldName + `>` + valueGender + `</td>`);
                        } else if (value == 1) {
                            var valueGender = "nữ"
                            td = $(`<td value=` + value + ` format=` + formatName + ` fieldName=` + fieldName + `>` + valueGender + `</td>`);
                        } else {
                            var valueGender = "khác"
                            td = $(`<td value=` + value + ` format=` + formatName + ` fieldName=` + fieldName + `>` + valueGender + `</td>`);
                        }
                    }
                    //định dạng type date
                    if (formatName == "code") {
                        var td = $(`<td format=` + formatName + ` fieldName=` + fieldName + `>` + value + `</td>`);
                    }
                    $(tr).append(td);
                })
                //Biding dữ liệu lên UI
                $("#tbListData tbody").append(tr);
            })
        } catch (e) {
            console.log("error");
        }
    }

    //#endregion

    // #region even->click

    /**
     * sự kiên khi click vao button thêm mới -> show dialog
     * author: DVQuan(24/9/2020)
     */
    btnAddOnClick() {
        this.FormType = "Add";
        this.showDialogDetail();
        this.showFocusDetail();
        this.formatDialog();
        this.removeClassRequired();
        this.addItemCode();
    }

    /**
     * sự kiên khi click vao button cancel-> ẩn dialog
     * author: DVQuan(24/9/2020)
     */
    btnCancelOnClick() {
        this.hideDialogDetail();
    }

    /**
     * khi click vao button Refresh -> load lại toàn bộ dữ liệu
     * author: DVQuan(29/9/2020)
     * */
    btnRefreshOnclick() {
        this.loadData();
    }

    /**
     * sự kiện click vào table thì đổi màu dòng được chọn
     * @param {object} sender 
     * createBy: DVQuan(24/9/2020)
     */
    rowOnClick(sender) {
        $(sender).addClass("row-selected");
        $(sender).siblings().removeClass("row-selected");
    }

    /**
     * sự kiện click vào table thì đổi màu dòng được chọn
     * @param {object} sender
     * createBy: DVQuan(24/9/2020)
     */
    rowOnMultiClick(sender) {
        $(sender).addClass("row-selected");
    }

    /**
     * sự kiện click vào table thì đổi màu dòng được chọn và không xóa đi dòng trước đã chọn
     * @param {object} sender
     * createBy: DVQuan(24/9/2020)
     * */
    rowmultiOnClick() {
        $(this).addClass("row-selected");
    }

    // #endregion

    //#region event-show-hide->dialog

    /**
     * sự kiện show dialog
     * author:DVQuan(28/9/2020)
     */
    showDialogDetail() {
        $('.form-dialog').show();
        $('.dialog-modal').show();
        this.draggableForm();
    }

    /**
     * sự kiện ẩn dialog
     * createBy: DVQuan(24/9/2020)
     */
    hideDialogDetail() {
        $('.form-dialog').hide();
        $('.dialog-modal').hide();
    }

    //#endregion

    //#region event-them-sua-xoa
    /**
     * Sự kiện lưu một bản ghi mới
     * createBy: DVQuan(24/9/2020)
     */
    btnSaveOnClick() {
        try {
            var seft = this;
            var inputRequired = $("[required]");    //các trường bắt buộc phải nhập
            var inputEmail = $("[requiredEmail]");  //bắt buộc nhập dúng dạng email
            var inputNumber = $("[requiredNumber]"); //bắt buộc nhập đúng dạng number
            var isValid = true;
            //kiểm tra các trường dl ko được để trống
            $.each(inputRequired, function (index, input) {
                if (!validateData.validateEmpty(input)) {
                    debugger
                    isValid = false;
                    seft.showMessageWarning();
                    var alterName = input.getAttribute('requireName');
                    $('.message-title-warning').html(alterName + " không được trống");
                    return;
                }
            })
            // kiểm tra email đúng định dạng
            if (!validateData.validateEmail(inputEmail)) {
                var emailValue = $('#txtEmail').val();
                if (emailValue || (emailValue && emailValue.trim())) {
                    seft.showMessageWarning();
                    $('.message-title-warning').html("email không đúng định dạng");
                }
                isValid = false;
            }
            if (isValid) {
                var self = this;
                var obj = {};
                var method = "POST";
                if (self.FormType == "Edit") {
                    method = "PUT";
                    var fieldIDName = $('table thead tr').attr('fieldID');
                    //lấy id 
                    obj[fieldIDName] = $('tr.row-selected').attr('fieldID');
                }
                var fields = $('.dialog-body input,.dialog-body select,.dialog-body textarea');
                $.each(fields, function (index, field) {
                    //lấy tên trường
                    var fieldName = $(field).attr('fieldName');
                    var format = $(field).attr('format');
                    //định dạng kiểu number
                    if (format == 'number') {
                        debugger
                        if ($(field).val() == '' || $(field).val() == null || $(field).val() == undefined) {
                            obj[fieldName] = 0;
                        }
                        else {
                            obj[fieldName] = Number($(field).val().replace(',',''));
                        }
                    }
                    else {
                        //lấy giá trị của trường
                        debugger
                        obj[fieldName] = $(field).val();
                        if (format == 'date') {
                            debugger
                            if (obj[fieldName] == "") {
                                obj[fieldName] = new Date();
                            }
                        }
                    }
                })
                this.saveToDB(obj, method);
            }
        } catch (e) {
            alert('lỗi trong quá trình save');
        }
    }

    /**
     * sự kiện sửa 1 bản ghi mới
     * author: DVQuan(28/9/2020)
     * @param {any} seder
     */
    btnEditOnClick(seder) {
        try {
            var self = this;
            var rowSelected = null;
            //xác định đối tượng cần sửa
            rowSelected = $('tr.row-selected');
            if (rowSelected && rowSelected.length != 0) {
                //lấy ID của đối tượng cần sửa
                var fieldID = $('tr.row-selected').attr('fieldID');
                var formatName = $('table thead tr').attr('formatName');
                $.ajax({
                    url: "/api/" + formatName + "/" + fieldID,
                    method: "GET",
                    // data: "",
                    datatype: "json",
                    contentType: "application/json"
                }).done(function (res) {
                    //thực hiện binding dữ liệu lên form chi tiết
                    var fields = $('input[fieldName],select[fieldName]');
                    $.each(fields, function (index, field) {
                        var fieldName = $(field).attr('fieldName');
                        var format = $(field).attr('format');
                        //biding dl lên input=date
                        if (format == "date") {
                            $(field).val(commonjs.convertDate(res[fieldName]))
                        }
                        else {
                            //bidding dl lên
                            var fieldName = $(field).attr('fieldName');
                            $(field).val(res[fieldName]);
                        }
                    })
                    self.FormType = "Edit";
                }).fail(function (res) {
                })
                this.showDialogDetail();
                this.showFocusDetail();
                /* this.removeClassRequired();*/
            } else {
                this.showMessageWarning();
                $('.button-icon').css("margin-top", "16px")
                $('.message-title-warning').html("vui lòng chọn một bản ghi để thực hiện thay đổi");
            }
        } catch (e) {
            $('.message-title-warning').html("loi trong qua trinh sua");
        }
    }

    /**
     * sự kiện xóa 1 bản ghi trong trường dữ liệu
     * author:DVQuan(28/9/2020)
     */
    btnDeleteOnClick() {
        try {
            var self = this;
            debugger
            var name = this.getName();
            var dataToDelete = {}
            var rowSelected = $('tr.row-selected');
            var rowName = $('thead tr');
            //xóa nhiều bản ghi cùng lúc
            if (rowSelected && rowSelected.length > 1) {
                this.showMessage();
                $('.message-title').html("bạn chắc muốn xóa các " + name + " này không");
                $('#btnMessageOk').click(function () {
                    $.each(rowSelected, function (index, value) {
                        //lấy ID của đối tượng cần xoa
                        var fieldID = value.getAttribute('fieldid');
                        var fieldIDName = rowName.attr('fieldID');
                        dataToDelete[fieldIDName] = value.getAttribute('fieldID');
                        //thực hiện delete
                        self.deleteToDB(dataToDelete);
                        self.hideMessage();
                    })
                })

                $('#btnMessageCancel').click(function () {
                    self.hideMessage();
                })
            }  //xóa 1 bản ghi thôi
            else if (rowSelected && rowSelected.length == 1) {
                this.showMessage();
                //lấy tên của bản ghi cần xóa
                var getNameElement = $('tr.row-selected td')[1];
                $('.message-title').html("bạn chắc muốn xóa " + name + " " + getNameElement.innerText + " không");
                $('#btnMessageOk').click(function () {
                    //lấy ID của đối tượng cần xoa
                    var fieldID = $('tr.row-selected').attr('fieldID');
                    var fieldIDName = $('table thead tr').attr('fieldId');
                    dataToDelete[fieldIDName] = $('tr.row-selected').attr('fieldID');
                    //thực hiện delete
                    self.deleteToDB(dataToDelete);
                    //ẩn dialog
                    self.hideMessage();
                })
                $('#btnMessageCancel').click(function () {
                    self.hideMessage();
                })
            }
            else {
                self.showMessageWarning();
                $('.message-title-warning').html("vui lòng chọn 1 nhân viên để xóa");
                return;
            }
        } catch (e) {

        }
    }

    /**
     * nhân bản
     * author: DVQuan(21/10/2020)
     * */
    btnDuplicate() {
        //lấy dòng đực chọn
        var fields = $("tr.row-selected td");
        try {
            var self = this;
            var rowSelected = null;
            //xác định đối tượng cần sửa
            rowSelected = $('tr.row-selected');
            if (rowSelected && rowSelected.length != 0) {
                //lấy ID của đối tượng cần sửa
                var fieldID = $('tr.row-selected').attr('fieldID');
                var formatName = $('table thead tr').attr('formatName');
                $.ajax({
                    url: "/api/" + formatName + "/" + fieldID,
                    method: "GET",
                    // data: "",
                    datatype: "json",
                    contentType: "application/json"
                }).done(function (res) {
                    var obj = {};
                    //thực hiện binding dữ liệu lên form chi tiết
                    debugger
                    var fields = $('input[fieldName],select[fieldName]');
                    $.each(fields, function (index, field) {
                        var fieldName = $(field).attr('fieldName');
                        var format = $(field).attr('format');
                        //biding dl lên input=date
                        if (format == "date") {
                            obj[fieldName] = commonjs.convertDate(res[fieldName]);
                        }
                        else {
                            debugger
                            //biding dl len các truong
                            if (format == "code") {
                                var fieldName = $(field).attr('fieldName');
                                obj[fieldName] = $('#txtEmployeeCode').val();
                            } else {
                                var fieldName = $(field).attr('fieldName');
                                obj[fieldName] = res[fieldName];
                            }

                        }
                    })
                    self.FormType = "Add";
                    self.saveToDB(obj, "POST");
                }).fail(function (res) {

                })

                /* this.removeClassRequired();*/
            } else {
                this.showMessageWarning();
                $('.button-icon').css("margin-top", "16px")
                $('.message-title-warning').html("vui lòng chọn một bản ghi để thực hiện nhan ban");
            }
        } catch (e) {
            $('.message-title-warning').html("lỗi trong qua trình thêm");
        }
    }

    //#endregion

    //#region validate

    /**
    * vadilate kiểm tra trường nhập dữ liệu nhập
    * author: DVQuan(28/9/2020)
    */
    checkRequired() {
        // trường nhập liệu không được để trống
        if (validateData.validateEmpty(this)) {
            /*$(this).removeClass('required-error');
            $(this).removeAttr("title");*/
        }
        // nhập liệu đúng email
        //TODO: đang thực hiện validate email

        //nhập liêu đúng number
        //TODO: đang thực hiện number
    }

    /**
     * remove class required
     * author: DVQuan(17/10/2020)
     * */
    removeClassRequired() {
        $('input[required]').removeClass('required-error');
        $('input[required]').removeAttr("title");
    }

    //#endregion

    //#region fomat 

    /**
     * lớp con sẽ override và mặc định focus vào trường dữ liệu mà nó mọng muốn
     * author:DVQuan(30/9/2020)
     * */
    showFocusDetail() {
    }

    /**
    * lấy tên
    * author: DVQuan(21/10/2020)
    * */
    getName() {
    }

    /**
     * lấy tên class
     * author: DVQuan(201/10/2020)
     * */
    getClassName() {
    }

    /**
     * lấy code cua item
     * author: DVQuan(21/10/2020)
     * */
    itemCode() {
    }

    /**
     * di chuyển form sang chỗ khác
     * author: DVQuan(13/10/2020)
     * */
    draggableForm() {
        debugger
        $(function () {
            $(".form-dialog").draggable();
            $("#droppable").droppable({
                drop: function (event, ui) {
                    $(this)
                        .addClass("ui-state-highlight")
                        .find("p")
                        .html("Dropped!");
                }
            });
        });
    }

    /**
     * tự dộng bidding dl liên item code
     * author: DVQuan(21/10/2020)
     * */
    addItemCode() {

    }

    /**
     * dịnh dạng kiểm number
     * author: DVQuan
     * */
    formatNumber() {
        commonjs.reformatText(this);
        commonjs.fomatNumber(this);

    }

    /**
     * định dạng lại giá trị cho input ='' ->giá trị trống
     * author=DVQuan(07/10/2020)
     * */
    formatDialog() {
        var fields = $('.dialog-body input');
        $.each(fields, function (index, value) {
            $(value).val('');
        })
    }
    //#endregion

    //#region phím tắt
    /**
     * phím tắt 
     * author: DVQuan(13/10/2020)
     * */
    shortKeys() {
        //tắt form
        var self = this;
        Mousetrap.bind("esc", function () {
            self.btnCancelOnClick();
        });
        //mở form
        Mousetrap.bind("shift+n", function () {
            self.btnAddOnClick();
            self.formatDialog();

        });
        //thực hiện lưu
        Mousetrap.bind("ctrl+s", function () {
            self.btnAddOnClick();
            self.btnSaveOnClick();
        })
    }
    //#endregion

    //#region showmessage
    /**
    * show message
     * author: DVQuan(14/10/2020)
    * */
    showMessage() {
        $('.dialog-modal-messages').show();
        $('.form-message').show();
    }

    /**
    * hide message
    * author: DVQuan(14/10/2020)
    * */
    hideMessage() {
        $('.dialog-modal-messages').hide();
        $('.form-message').hide();
    }

    /**
    * show message warning
     * author: DVQuan(14/10/2020)
    * */
    showMessageWarning() {
        $('.dialog-modal-messages-warning').show();
        $('.form-message-warning').show();
    }

    /**
    * hide message warning
    * author: DVQuan(14/10/2020)
    * */
    hideMessageWarning() {
        $('.dialog-modal-messages-warning').hide();
        $('.form-message-warning').hide();
    }

    //#endregion

    //#endregion

}