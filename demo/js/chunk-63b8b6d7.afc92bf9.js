(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-63b8b6d7"], {
    "9a54": function (t, n, s) {
        t.exports = s.p + "img/logo.5c86a4f2.png"
    }, "9ed6": function (t, n, s) {
        "use strict";
        s.r(n);
        var o = function () {
            var t = this, n = t.$createElement, s = t._self._c || n;
            return s("div", {staticClass: "covid-page login-layout"}, [s("header", {staticClass: "page-header"}, [s("span", {
                staticClass: "header-back",
                on: {
                    click: function (n) {
                        return t.$router.go(-1)
                    }
                }
            }, [s("svg-icon", {attrs: {"icon-class": "gray-btn"}})], 1), s("router-link", {
                staticClass: "header-link",
                attrs: {to: "/register", tag: "span"}
            }, [t._v(t._s(t.$t("common.register")))])], 1), t._m(0), s("van-form", {
                attrs: {"validate-first": ""},
                on: {submit: t.handleUserLogin}
            }, [s("van-field", {
                attrs: {
                    type: "tel",
                    clearable: "",
                    placeholder: t.$t("login.input_phone"),
                    rules: [{required: !0, message: t.$t("login.input_phone")}]
                }, model: {
                    value: t.loginForm.phone, callback: function (n) {
                        t.$set(t.loginForm, "phone", n)
                    }, expression: "loginForm.phone"
                }
            }), s("van-field", {
                attrs: {
                    type: "password",
                    clearable: "",
                    placeholder: t.$t("login.input_password"),
                    rules: [{required: !0, message: t.$t("login.input_password")}]
                }, model: {
                    value: t.loginForm.password, callback: function (n) {
                        t.$set(t.loginForm, "password", n)
                    }, expression: "loginForm.password"
                }
            }), s("div", {staticClass: "login-register-btns"}, [s("van-button", {
                staticClass: "login-btn",
                attrs: {type: "info", loading: t.submitLoading, "loading-text": t.$t("login.logining")}
            }, [t._v("\n        " + t._s(t.$t("common.login")) + "\n      ")])], 1)], 1), s("router-link", {
                staticClass: "login-forget",
                attrs: {to: "/mine/forgetPassword", tag: "span"}
            }, [t._v(t._s(t.$t("login.forget")))])], 1)
        }, e = [function () {
            var t = this, n = t.$createElement, o = t._self._c || n;
            return o("div", {staticClass: "page-logo"}, [o("img", {attrs: {src: s("9a54")}})])
        }], a = {
            name: "login", data: function () {
                return {loginForm: {phone: "", password: ""}, submitLoading: !1}
            }, created: function () {
            }, methods: {
                handleUserLogin: function () {
                    var t = this;
                    this.submitLoading || (this.submitLoading = !0, this.$http.post("/api/user/phone/login", this.loginForm).then((function (n) {
                        0 == n.data.code ? (t.$toast({
                            mask: !1,
                            message: t.$t("login.success")
                        }), localStorage.setItem("user", JSON.stringify(n.data.data)), t.submitLoading = !1, t.$router.push("/mine")) : t.submitLoading = !1
                    })).catch((function (n) {
                        t.submitLoading = !1
                    })))
                }
            }
        }, i = a, r = (s("e2d7"), s("2877")), l = Object(r["a"])(i, o, e, !1, null, "74524e20", null);
        n["default"] = l.exports
    }, abbe: function (t, n, s) {
    }, e2d7: function (t, n, s) {
        "use strict";
        var o = s("abbe"), e = s.n(o);
        e.a
    }
}]);
//# sourceMappingURL=chunk-63b8b6d7.afc92bf9.js.map