export default {
  props: {
    dialogFormVisible: {
      type: Boolean,
      default: false,
    },
    dialogStatus: {
      type: String,
      default: "",
    },
  },
  watch: {
    dialogFormVisible(val) {
      this.dialog = val;
    },
    dialog(val) {
      if (val == false) {
        this.$emit("close-dialog", false);
      }
    },
  },

  data() {
    return {
      title: "",
      dialog: false,
    };
  },
  methods: {
    getClose(done) {
      this.$emit("close-dialog", done);
    },
    /**
     * Đóng dialog
     */
    closeDialog() {
      this.$emit("close-dialog", false);
    },
  },
  created() {
    this.dialog = this.dialogFormVisible;
  },
};
