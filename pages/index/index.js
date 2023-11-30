"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    data: {
        title: "",
        username: "leelean",
    },
    onInit: function () {
        this.title = this.$t("strings.world");
    },
    handleClick: function () {
        var _a;
        console.log(123123);
        this.username === "leeleanlean" ? (this.username = "leelean") : (this.username = "leeleanlean");
        var a = {};
        console.log((_a = a === null || a === void 0 ? void 0 : a.b) === null || _a === void 0 ? void 0 : _a.c);
    },
};
