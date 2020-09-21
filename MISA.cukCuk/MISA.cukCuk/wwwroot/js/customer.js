$(document).ready(function () {
/*  loadData();*/
    $('#btnAdd').click(function () {
        $('.form-dialog').show();
        $('.dialog-modal').show();
    })

    $('#btnCancel').click(function () {
        $('.form-dialog').hide();
        $('.dialog-modal').hide();
    })
    $('#dialog-btncancel').click(function () {
        debugger
        $('.form-dialog').hide();
        $('.dialog-modal').hide();
    })
  /*  var employee = new employeejs();*/
   

})
class customerjs {
    constructor() {
        this.initevent();
    }

    initevent() {
        debugger
        $("#btnAdd").click(this.btnAddOnClick.bind(this));
    }
    btnAddOnClick() {
        debugger
        this.showDialogDetail();
    }

    showDialogDetail() {
        $('.form-dialog').show();
        $('.dialog-modal').show();
    }
}