$(document).ready(function () {
/*  loadData();*/
    alert("hello");
    $('#btnAdd').click(function () {
        $('.form-dialog').show();
    })

    $('#btnCancel').click(function () {
        $('.form-dialog').hide();
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
    }
}