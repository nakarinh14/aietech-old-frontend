(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0aa9f6"], {
    1298: function (s, a, t) {
        "use strict";
        t.r(a);
        var e = function () {
            var s = this, a = s.$createElement, t = s._self._c || a;
            return t("div", {staticClass: "covid-page change-page"}, [t("header", {staticClass: "page-header"}, [t("span", {
                staticClass: "header-back",
                on: {
                    click: function (a) {
                        return s.$router.go(-1)
                    }
                }
            }, [t("svg-icon", {attrs: {"icon-class": "gray-btn"}})], 1), t("div", {staticClass: "header-content"}, [s._v(s._s(s.$t("password.title")))])]), t("van-form", {
                attrs: {"validate-first": ""},
                on: {submit: s.handleSubmit}
            }, [t("van-field", {
                attrs: {
                    type: "password",
                    clearable: "",
                    placeholder: s.$t("password.input_origin"),
                    rules: [{required: !0, message: s.$t("password.input_origin")}]
                }, model: {
                    value: s.changePasswordForm.old_password, callback: function (a) {
                        s.$set(s.changePasswordForm, "old_password", a)
                    }, expression: "changePasswordForm.old_password"
                }
            }), t("van-field", {
                attrs: {
                    type: "password",
                    clearable: "",
                    placeholder: s.$t("password.input_new"),
                    rules: [{required: !0, message: s.$t("password.input_new")}, {
                        validator: s.validatorPassword,
                        message: s.$t("register.password_placehold")
                    }]
                }, model: {
                    value: s.changePasswordForm.new_password, callback: function (a) {
                        s.$set(s.changePasswordForm, "new_password", a)
                    }, expression: "changePasswordForm.new_password"
                }
            }), t("div", {staticClass: "covid-btns"}, [t("van-button", {
                staticClass: "covid-btn",
                attrs: {type: "info", loading: s.submitLoading, "loading-text": s.$t("password.saving")}
            }, [s._v("\n        " + s._s(s.$t("password.save")) + "\n      ")])], 1)], 1)], 1)
        }, o = [], n = {
            name: "changePassword", data: function () {
                return {changePasswordForm: {old_password: null, new_password: null}, submitLoading: !1}
            }, created: function () {
            }, methods: {
                validatorPassword: function (s) {
                    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/.test(s)
                }, handleSubmit: function () {
                    var s = this;
                    this.submitLoading || (this.submitLoading = !0, this.$http.post("/api/user/changePassword", this.changePasswordForm).then((function (a) {
                        0 === a.data.code ? (s.$toast({
                            mask: !1,
                            message: a.data.msg
                        }), s.$router.push("/mine")) : s.submitLoading = !1
                    })).catch((function (a) {
                        s.submitLoading = !1
                    })))
                }
            }
        }, r = n, d = t("2877"), i = Object(d["a"])(r, e, o, !1, null, "c7e59ec8", null);
        a["default"] = i.exports
    }
}]);
//# sourceMappingURL=chunk-2d0aa9f6.4c20e701.js.map