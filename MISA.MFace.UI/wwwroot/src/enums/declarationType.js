export default {
    DECLARATION: [
        {
            NAME: "Chính thức",
            VALUE: 0,
        },
        {
            NAME: "Bổ sung",
            VALUE: 1,
        },
    ],
    findInArray(value) {
        for (var i in this.DECLARATION) {
            if (this.DECLARATION[i].VALUE == value) {
                return this.DECLARATION[i].NAME;
            }
        }
    },
}