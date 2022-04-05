(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2d0de01c"], {
    "848b": function (e, t, o) {
        "use strict";
        o.r(t);
        var s = function () {
            var e = this, t = e.$createElement, o = e._self._c || t;
            return o("div", {staticClass: "covid-page forget-page"}, [o("header", {staticClass: "page-header"}, [o("span", {
                staticClass: "header-back",
                on: {
                    click: function (t) {
                        return e.$router.go(-1)
                    }
                }
            }, [o("svg-icon", {attrs: {"icon-class": "gray-btn"}})], 1), o("div", {staticClass: "header-content"}, [e._v(e._s(e.$t("forget.title")))])]), o("van-form", {
                attrs: {"validate-first": ""},
                on: {submit: e.handleSubmit}
            }, [o("van-field", {
                attrs: {
                    type: "tel",
                    clearable: "",
                    placeholder: e.$t("register.input_phone"),
                    rules: [{required: !0, message: e.$t("register.input_phone")}, {
                        validator: e.validatorPhone,
                        message: e.$t("register.input_phone_error")
                    }]
                }, model: {
                    value: e.forgetPasswordForm.phone, callback: function (t) {
                        e.$set(e.forgetPasswordForm, "phone", t)
                    }, expression: "forgetPasswordForm.phone"
                }
            }), o("van-field", {
                attrs: {
                    "label-width": "150",
                    clearable: "",
                    placeholder: e.$t("register.input_code"),
                    rules: [{required: !0, message: e.$t("register.input_code")}, {
                        validator: e.validatorPhoneCode,
                        message: e.$t("register.input_code_error")
                    }]
                }, model: {
                    value: e.forgetPasswordForm.verifyCode, callback: function (t) {
                        e.$set(e.forgetPasswordForm, "verifyCode", t)
                    }, expression: "forgetPasswordForm.verifyCode"
                }
            }, [o("van-button", {
                attrs: {
                    slot: "button",
                    plain: "",
                    size: "small",
                    type: "info",
                    disabled: e.codeNum > 0,
                    loading: e.codeLoading,
                    "loading-text": e.$t("register.code_sending")
                }, on: {click: e.handleGetVerifyCode}, slot: "button"
            }, [e._v("\n        " + e._s(e.codeNum > 0 ? e.codeNum + e.$t("register.code_waiting") : e.$t("register.code_send")) + "\n      ")])], 1), o("van-field", {
                attrs: {
                    type: "password",
                    clearable: "",
                    placeholder: e.$t("register.input_password"),
                    rules: [{required: !0, message: e.$t("register.input_password")}, {
                        validator: e.validatorPassword,
                        message: e.$t("register.password_placehold")
                    }]
                }, model: {
                    value: e.forgetPasswordForm.password, callback: function (t) {
                        e.$set(e.forgetPasswordForm, "password", t)
                    }, expression: "forgetPasswordForm.password"
                }
            }), o("div", {staticClass: "covid-btns"}, [o("van-button", {
                staticClass: "covid-btn",
                attrs: {type: "info", loading: e.submitLoading, "loading-text": e.$t("forget.submiting")}
            }, [e._v("\n        " + e._s(e.$t("forget.submit")) + "\n      ")])], 1)], 1)], 1)
        }, a = [], r = {
            name: "forgetPassword", data: function () {
                return {
                    forgetPasswordForm: {phone: null, verifyCode: null, password: null},
                    codeInterval: null,
                    codeNum: 0,
                    codeLoading: !1,
                    submitLoading: !1
                }
            }, created: function () {
            }, methods: {
                validatorPhone: function (e) {
                    return /^1\d{10}$/.test(e)
                }, validatorPhoneCode: function (e) {
                    return /^\d{4}$/.test(e)
                }, validatorPassword: function (e) {
                    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/.test(e)
                }, handleSubmit: function () {
                    var e = this;
                    this.submitLoading || (this.submitLoading = !0, this.$http.post("/api/user/resetPassword", this.forgetPasswordForm).then((function (t) {
                        0 === t.data.code ? (e.$toast({
                            mask: !1,
                            message: t.data.msg
                        }), e.submitLoading = !1, e.$router.push("/login")) : e.submitLoading = !1
                    })).catch((function (t) {
                        e.submitLoading = !1
                    })))
                }, handleGetVerifyCode: function () {
                    var e = this;
                    this.forgetPasswordForm.phone ? this.codeLoading || (this.codeLoading = !0, this.$http.post("/api/aliyun/send_msg", {phone: this.forgetPasswordForm.phone}).then((function (t) {
                        0 == t.data.code ? (e.codeNum = 60, e.codeInterval = setInterval((function () {
                            e.codeNum > 0 ? e.codeNum-- : (clearInterval(e.codeInterval), e.codeNum = 0)
                        }), 1e3), e.$toast({
                            mask: !1,
                            message: e.$t("register.send_success")
                        }), e.codeLoading = !1) : e.codeLoading = !1
                    })).catch((function (t) {
                        e.codeLoading = !1
                    }))) : this.$toast({mask: !1, message: this.$t("register.phone_empty")})
                }
            }, destroyed: function () {
                clearInterval(this.codeInterval)
            }
        }, n = r, i = o("2877"), d = Object(i["a"])(n, s, a, !1, null, "cd5d8a74", null);
        t["default"] = d.exports
    }
}]);
//# sourceMappingURL=chunk-2d0de01c.5710c70b.js.map