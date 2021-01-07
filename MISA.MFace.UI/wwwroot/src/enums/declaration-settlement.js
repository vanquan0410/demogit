export default {
    DeclarationType: [
        {
            value: 1,
            name: "Lần đầu"
        },
        {
            value: 2,
            name: "Bổ sung"
        }
    ],
    DeleteResult:
    {
        FailedDeletionDeclaration: 1,
        SuccessfulDeletionDeclaration: 2,
        NotFountDeclaration: 3
    },
    ConfirmUpdate: {
        DefaultValue: 0,
        Update: 1,
        New: 2
    },
    DeclarationSettlementType: {
        Bk01: 0,
        Bk02: 1
    },
    CheckDeclarationSettlementDetail: {
        Citizen: 1,
        TaxNo: 2
    },
    FormMode:{
        Add:1,
        Edit:0
    },

    findInArray(value) {
        for (var i in this.DeclarationType) {
            if (this.DeclarationType[i].value == value) {
                return this.DeclarationType[i].name;
            }
        }
    },
};
