export default {
  data: {
    title: "",
    username: "leelean",
  },
  onInit() {
    this.title = this.$t("strings.world");
  },
  handleClick() {
    console.log(123123);
    this.username === "leeleanlean" ? (this.username = "leelean") : (this.username = "leeleanlean");
    const a = {};
    console.log(a?.b?.c);
  },
};
