export default {
  data() {},
  methods: {
    getIcon(type, value) {
      if (type == "icon") {
        return require("@/icons/" + value);
      } else if (type == "img") {
        return require("@/assets/images/" + value);
      }
    },
  },
};
