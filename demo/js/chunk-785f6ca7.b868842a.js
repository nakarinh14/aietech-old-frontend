(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-785f6ca7"], {
    "00b9": function (t, e, r) {
    }, "279d": function (t, e, r) {
        "use strict";
        r.r(e);
        var s = function () {
                var t = this, e = t.$createElement, s = t._self._c || e;
                return s("div", {staticClass: "covid-page order-layout"}, [s("header", {staticClass: "page-header"}, [s("router-link", {
                    staticClass: "header-link",
                    attrs: {to: "/index", tag: "span"}
                }, [s("img", {
                    staticClass: "header-icon",
                    attrs: {src: r("a582")}
                })]), s("router-link", {
                    staticClass: "header-link",
                    attrs: {to: "/mine", tag: "span"}
                }, [s("img", {
                    staticClass: "header-icon",
                    attrs: {src: r("c651")}
                })])], 1), s("div", {staticClass: "order-title"}, [t._v("\n      " + t._s(t.$t("home.title")) + "\n    ")]), s("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "en" != t.language,
                        expression: "language != 'en'"
                    }], staticClass: "order-tip"
                }, [t._v("\n      COVID-19 EYE TEST THAILAND USE ONLY (BETA 5.1)\n    ")]), t.uploadNeedLogin && !t.isLogin ? s("div", {staticClass: "order-content"}, [s("van-button", {
                    staticClass: "order-button",
                    staticStyle: {"margin-top": "30px"},
                    attrs: {size: "normal"},
                    on: {click: t.handleLogin}
                }, [t._v(t._s(t.$t("order.step_0_login")))])], 1) : t._e(), 0 != t.step || t.uploadNeedLogin && !t.isLogin ? t._e() : s("div", {staticClass: "order-content"}, [s("van-steps", {
                    staticClass: "multi-steps",
                    attrs: {active: t.imgIndex, "active-color": "#ffffff", "inactive-color": "#bebebe"}
                }, [s("van-step", [t._v(t._s(t.$t("multi.img0")))]), s("van-step", [t._v(t._s(t.$t("multi.img1")))]), s("van-step", [t._v(t._s(t.$t("multi.img2")))]), s("van-step", [t._v(t._s(t.$t("multi.img3")))])], 1), t.noImage ? s("div", {staticClass: "order-help"}, [t._v("\n        " + t._s(t.$t("order.step_0_title")) + " (" + t._s(t.$t("multi.img" + t.imgIndex)) + ")\n      ")]) : t._e(), t.max_test_enable && t.ip_enable && t.noImage ? s("van-uploader", {
                    staticClass: "order-uploader",
                    attrs: {"after-read": t.handleInput, accept: "image/*", capture: "user"}
                }, [s("van-button", {
                    staticClass: "order-button order-button-white",
                    attrs: {size: "normal"}
                }, [t._v(t._s(t.$t("order.step_0_camera")))])], 1) : t._e(), t.max_test_enable && t.ip_enable || !t.noImage ? t._e() : s("van-button", {
                    staticClass: "order-button order-button-white",
                    staticStyle: {"margin-top": "30px"},
                    attrs: {size: "normal"},
                    on: {click: t.handleCheck}
                }, [t._v(t._s(t.$t("order.step_0_camera")))]), t.max_test_enable && t.ip_enable && t.noImage ? s("van-uploader", {
                    staticClass: "order-uploader",
                    attrs: {"after-read": t.handleInput, accept: "image/*"}
                }, [s("van-button", {
                    staticClass: "order-button",
                    attrs: {size: "normal"}
                }, [t._v(t._s(t.$t("order.step_0_choose")))])], 1) : t._e(), t.max_test_enable && t.ip_enable || !t.noImage ? t._e() : s("van-button", {
                    staticClass: "order-button",
                    staticStyle: {"margin-top": "30px"},
                    attrs: {size: "normal"},
                    on: {click: t.handleCheck}
                }, [t._v(t._s(t.$t("order.step_0_choose")))]), t.noImage ? t._e() : s("div", {staticClass: "order-reset"}, [s("van-uploader", {
                    staticClass: "order-uploader",
                    attrs: {"after-read": t.handleInput, accept: "image/*", capture: "user"}
                }, [s("van-button", {
                    staticClass: "order-button",
                    attrs: {size: "normal"}
                }, [t._v(t._s(t.$t("order.step_1_camera")))])], 1), s("van-uploader", {
                    staticClass: "order-uploader",
                    attrs: {"after-read": t.handleInput, accept: "image/*"}
                }, [s("van-button", {
                    staticClass: "order-button",
                    attrs: {size: "normal"}
                }, [t._v(t._s(t.$t("order.step_1_choose")))])], 1)], 1), t.noImage && 0 == t.imgIndex ? s("div", {
                    staticClass: "order-tip-text",
                    staticStyle: {"margin-top": "30px"}
                }, [t._v("\n        " + t._s(t.$t("home.alert"))), s("br"), t._v("\n        " + t._s(t.$t("multi.tip_0"))), s("br"), s("br"), t._v("\n        " + t._s(t.$t("multi.tip_1"))), s("br"), s("br"), t._v("\n        " + t._s(t.$t("multi.tip_2"))), s("br"), s("br"), t._v("\n        " + t._s(t.$t("multi.tip_3"))), s("br"), s("br"), t._v("\n        " + t._s(t.$t("multi.tip_4"))), s("br")]) : t._e(), t.noImage || 0 != t.imgIndex ? t._e() : s("div", {
                    staticClass: "order-clip",
                    attrs: {id: "clipArea0"}
                }), t.noImage || 1 != t.imgIndex ? t._e() : s("div", {
                    staticClass: "order-clip",
                    attrs: {id: "clipArea1"}
                }), t.noImage || 2 != t.imgIndex ? t._e() : s("div", {
                    staticClass: "order-clip",
                    attrs: {id: "clipArea2"}
                }), t.noImage || 3 != t.imgIndex ? t._e() : s("div", {
                    staticClass: "order-clip",
                    attrs: {id: "clipArea3"}
                }), t.noImage ? t._e() : s("van-button", {
                    staticClass: "order-button order-button-white",
                    attrs: {size: "normal"},
                    on: {click: t.handleNext}
                }, [t._v("\n        " + t._s(t.$t("multi.next")) + "\n      ")]), t.noImage ? t._e() : s("div", {staticClass: "order-example-text"}, [t._v("\n        " + t._s(t.$t("order.step_1_tip_0"))), s("br"), t._v("\n        " + t._s(t.$t("order.step_1_tip_1")) + "\n      ")]), t.noImage || 0 != t.imgIndex ? t._e() : s("img", {
                    staticClass: "order-example",
                    attrs: {src: r("d585")}
                }), t.noImage || 1 != t.imgIndex ? t._e() : s("img", {
                    staticClass: "order-example",
                    attrs: {src: r("f426")}
                }), t.noImage || 2 != t.imgIndex ? t._e() : s("img", {
                    staticClass: "order-example",
                    attrs: {src: r("de67")}
                }), t.noImage || 3 != t.imgIndex ? t._e() : s("img", {
                    staticClass: "order-example",
                    attrs: {src: r("6939")}
                })], 1), 1 == t.step ? s("div", {staticClass: "order-content"}, [s("div", {
                    staticClass: "order-help",
                    staticStyle: {"margin-bottom": "20px"}
                }, [t._v("\n        " + t._s(t.$t("order.step_2_title")) + "\n      ")]), t._l(t.uploadImage, (function (e, a) {
                    return s("div", {
                        key: e,
                        staticClass: "order-preview-image"
                    }, [0 == a ? s("img", {
                        staticClass: "order-exam",
                        attrs: {src: r("d585")}
                    }) : t._e(), 1 == a ? s("img", {
                        staticClass: "order-exam",
                        attrs: {src: r("f426")}
                    }) : t._e(), 2 == a ? s("img", {
                        staticClass: "order-exam",
                        attrs: {src: r("de67")}
                    }) : t._e(), 3 == a ? s("img", {
                        staticClass: "order-exam",
                        attrs: {src: r("6939")}
                    }) : t._e(), s("img", {staticClass: "order-submit", attrs: {src: e}})])
                })), s("div", {staticClass: "order-prview-text"}, [t._v("\n        " + t._s(t.$t("multi.step_2_tip_1")) + "\n        "), s("br"), s("br"), t._v("\n        " + t._s(t.$t("order.step_2_tip_2")) + "\n      ")]), s("div", {staticClass: "order-preview-buttons"}, [s("van-button", {
                    staticClass: "order-button order-button-white",
                    attrs: {size: "normal", icon: "success"},
                    on: {click: t.handleUpload}
                }, [t._v(t._s(t.$t("order.step_2_test")))]), s("van-button", {
                    staticClass: "order-button",
                    attrs: {size: "normal", icon: "cross"},
                    on: {click: t.handleReUpload}
                }, [t._v(t._s(t.$t("order.step_2_back")))])], 1)], 2) : t._e(), 2 == t.step ? s("div", {staticClass: "order-content"}, [s("div", {staticClass: "order-help"}, [t._v("\n        " + t._s(t.$t("order.step_3_title")) + "\n      ")]), s("van-circle", {
                    staticStyle: {"margin-top": "20px"},
                    attrs: {
                        rate: 99,
                        speed: 20,
                        text: t.text,
                        "stroke-width": 80,
                        "layer-color": "#eeeeee",
                        color: t.gradientColor,
                        size: "150"
                    },
                    model: {
                        value: t.currentCircle, callback: function (e) {
                            t.currentCircle = e
                        }, expression: "currentCircle"
                    }
                })], 1) : t._e(), 3 == t.step ? s("div", {staticClass: "order-content"}, [s("div", {
                    staticClass: "order-help",
                    staticStyle: {"margin-top": "40px"}
                }, [t._v("\n        " + t._s(t.$t("order.step_4_title")) + "\n      ")]), s("van-button", {
                    staticClass: "order-button",
                    staticStyle: {width: "200px", "margin-top": "20px"},
                    attrs: {size: "normal"},
                    on: {click: t.handleReUpload}
                }, [t._v(t._s(t.$t("order.step_5_rePredict")))])], 1) : t._e(), 4 == t.step && null != t.extra_order_tip ? s("div", {staticClass: "order-content"}, [s("van-form", {
                    attrs: {"validate-first": ""},
                    on: {submit: t.handleSubmitExtra}
                }, [t._l(t.extra_order_tip, (function (e, r) {
                    return s("van-cell-group", {key: e.title}, [0 === e.type ? s("van-field", {
                        attrs: {
                            label: "zh" === t.language ? e.title : "hk" === t.language ? e.title_hk : e.title_en,
                            type: "text",
                            clearable: "",
                            rules: [{required: !0, message: t.$t("order.not_empty")}]
                        }, model: {
                            value: t.extra_order_tip_form[r], callback: function (e) {
                                t.$set(t.extra_order_tip_form, r, e)
                            }, expression: "extra_order_tip_form[index]"
                        }
                    }) : t._e(), 1 === e.type ? s("van-field", {
                        attrs: {
                            readonly: "",
                            clickable: "",
                            value: t.extra_order_tip_form[r],
                            label: "zh" === t.language ? e.title : "hk" === t.language ? e.title_hk : e.title_en,
                            rules: [{required: !0, message: t.$t("order.not_empty")}]
                        }, on: {
                            click: function (e) {
                                return t.orderTipOnOpen(e, r)
                            }
                        }
                    }) : t._e()], 1)
                })), s("van-popup", {
                    attrs: {round: "", position: "bottom"},
                    model: {
                        value: t.extra_order_tip_show, callback: function (e) {
                            t.extra_order_tip_show = e
                        }, expression: "extra_order_tip_show"
                    }
                }, [s("van-picker", {
                    attrs: {"show-toolbar": "", columns: t.extra_order_tip_columns},
                    on: {
                        confirm: function (e) {
                            return t.orderTipOnConfirm(e)
                        }, cancel: function (e) {
                            t.extra_order_tip_show = !1
                        }
                    }
                })], 1), s("div", {staticClass: "covid-btns"}, [s("van-button", {
                    staticClass: "covid-btn",
                    attrs: {type: "info", loading: t.handleSubmitExtraLoading, "loading-text": t.$t("password.saving")}
                }, [t._v("\n            " + t._s(t.$t("password.save")) + "\n          ")])], 1)], 2)], 1) : t._e(), 5 == t.step ? s("div", {staticClass: "order-content"}, [s("div", {staticClass: "order-result"}, [t.isNormalUser ? t._e() : s("div", {staticClass: "result-item"}, [s("span", {staticClass: "result-label"}, [t._v(t._s(t.result_healthy.label))]), s("van-circle", {
                    attrs: {
                        rate: t.result_healthy.prob,
                        text: t.result_healthy.prob + "%",
                        speed: 40,
                        "stroke-linecap": "square",
                        "stroke-width": 100,
                        "layer-color": "#eeeeee",
                        color: t.gradientColorHealthy,
                        size: "100"
                    }, model: {
                        value: t.result_healthy.prob, callback: function (e) {
                            t.$set(t.result_healthy, "prob", e)
                        }, expression: "result_healthy.prob"
                    }
                })], 1), s("div", {staticClass: "result-item"}, [t.cv19_low_risk ? s("span", {staticClass: "result-label"}, [t._v(t._s(t.$t("order.step_5_low")))]) : t._e(), t.cv19_low_risk ? t._e() : s("span", {staticClass: "result-label result-label-high"}, [t._v(t._s(t.$t("order.step_5_high")))]), s("van-circle", {
                    attrs: {
                        rate: t.result_cv19.prob,
                        text: t.result_cv19.prob + "%",
                        speed: 40,
                        "stroke-linecap": "square",
                        "stroke-width": 100,
                        "layer-color": "#eeeeee",
                        color: t.gradientColorCV19,
                        size: "100"
                    }, model: {
                        value: t.result_cv19.prob, callback: function (e) {
                            t.$set(t.result_cv19, "prob", e)
                        }, expression: "result_cv19.prob"
                    }
                })], 1), t.isNormalUser ? t._e() : s("div", {staticClass: "result-item"}, [s("span", {staticClass: "result-label"}, [t._v(t._s(t.result_pulmonary.label))]), s("van-circle", {
                    attrs: {
                        rate: t.result_pulmonary.prob,
                        text: t.result_pulmonary.prob + "%",
                        speed: 40,
                        "stroke-linecap": "square",
                        "stroke-width": 100,
                        "layer-color": "#eeeeee",
                        color: t.gradientColorCV19,
                        size: "100"
                    }, model: {
                        value: t.result_pulmonary.prob, callback: function (e) {
                            t.$set(t.result_pulmonary, "prob", e)
                        }, expression: "result_pulmonary.prob"
                    }
                })], 1), t.isNormalUser ? t._e() : s("div", {staticClass: "result-item"}, [s("span", {staticClass: "result-label"}, [t._v(t._s(t.result_ocular.label))]), s("van-circle", {
                    attrs: {
                        rate: t.result_ocular.prob,
                        text: t.result_ocular.prob + "%",
                        speed: 40,
                        "stroke-linecap": "square",
                        "stroke-width": 100,
                        "layer-color": "#eeeeee",
                        color: t.gradientColorCV19,
                        size: "100"
                    }, model: {
                        value: t.result_ocular.prob, callback: function (e) {
                            t.$set(t.result_ocular, "prob", e)
                        }, expression: "result_ocular.prob"
                    }
                })], 1)]), s("van-button", {
                    staticClass: "order-button",
                    attrs: {size: "normal"},
                    on: {click: t.handleReUpload}
                }, [t._v(t._s(t.$t("order.step_5_rePredict")))]), t.cv19_low_risk ? t._e() : s("div", {staticClass: "order-result-tip"}, [t._v(t._s(t.$t("order.step_6_tip")))]), t.cv19_low_risk ? t._e() : s("a", {
                    staticClass: "order-result-tip-a",
                    attrs: {href: "mailto: service@b-project.com"}
                }, [t._v("service@b-project.com")])], 1) : t._e(), s("van-dialog", {
                    attrs: {
                        showCancelButton: !1,
                        showConfirmButton: !1
                    }, model: {
                        value: t.showIpDisable, callback: function (e) {
                            t.showIpDisable = e
                        }, expression: "showIpDisable"
                    }
                }, [s("div", {staticClass: "dialog-content"}, [t._v(t._s(t.$t("home.check_ip_enable")))])]), s("van-dialog", {
                    attrs: {
                        showCancelButton: !1,
                        showConfirmButton: !1
                    }, model: {
                        value: t.showMaxTestDisable, callback: function (e) {
                            t.showMaxTestDisable = e
                        }, expression: "showMaxTestDisable"
                    }
                }, [s("div", {staticClass: "dialog-content"}, [t._v(t._s(t.$t("home.check_max_test")))])]), s("van-dialog", {
                    attrs: {
                        className: "high-risk-dialog",
                        showCancelButton: !1,
                        showConfirmButton: !0,
                        confirmButtonText: t.$t("order.high_risk_tip_confirm")
                    }, model: {
                        value: t.showHighRisk, callback: function (e) {
                            t.showHighRisk = e
                        }, expression: "showHighRisk"
                    }
                }, [s("div", {staticClass: "dialog-content"}, [s("span", {
                    staticStyle: {
                        color: "red",
                        "font-weight": "bold"
                    }
                }, [t._v(t._s(t.$t("order.high_risk_tip_0")))]), t._v("\n        " + t._s(t.$t("order.high_risk_tip_1")) + "\n        "), s("a", {
                    staticClass: "order-result-tip-a",
                    attrs: {href: "mailto: service@b-project.com"}
                }, [t._v(t._s(t.$t("order.high_risk_tip_2")))]), t._v("\n        " + t._s(t.$t("order.high_risk_tip_3")) + "\n        "), s("a", {
                    staticClass: "order-result-tip-a",
                    attrs: {href: "/index.html#mobile_6"}
                }, [t._v(t._s(t.$t("order.high_risk_tip_4")))]), t._v("\n        " + t._s(t.$t("order.high_risk_tip_5")) + "\n      ")])])], 1)
            }, a = [], i = (r("6b54"), r("87b3"), r("6d67"), r("c5f6"), r("28a5"), r("ac6a"), r("f3e2"), r("ca00")),
            o = r("12cb"), l = r("ba9f"), n = r("1365"), c = r.n(n), u = {
                name: "home", data: function () {
                    return {
                        submitLoading: !1,
                        submitSuccess: !1,
                        uploadNeedLogin: !1,
                        isLogin: Object(i["a"])(),
                        language: Object(o["b"])(),
                        isNormalUser: Object(i["f"])(),
                        step: 0,
                        imgIndex: 0,
                        noImage: !0,
                        currentCircle: 0,
                        circleInterval: null,
                        photoClips: [null, null, null, null],
                        uploadImage: [null, null, null, null],
                        gradientColor: {"0%": "#3fecff", "100%": "#6149f6"},
                        gradientColorHealthy: {"0%": "#07c160", "50%": "#ff976a", "100%": "#ee0a24"},
                        gradientColorCV19: {"0%": "#07c160", "50%": "#ff976a", "100%": "#ee0a24"},
                        maxImageSize: 4194304,
                        result_healthy: {label: "Healthy", prob: "0"},
                        result_cv19: {label: "CV19", prob: "0"},
                        result_pulmonary: {label: "Pulmonary", prob: "0"},
                        result_ocular: {label: "Ocular", prob: "0"},
                        ip_enable: !0,
                        max_test_enable: !0,
                        showIpDisable: !1,
                        showMaxTestDisable: !1,
                        showHighRisk: !1,
                        extra_order_tip: null,
                        extra_order_tip_form: {},
                        extra_order_tip_show: !1,
                        extra_order_tip_columns: [],
                        handleSubmitExtraLoading: !1,
                        needSubmitForm: !1,
                        order_id: null,
                        cur_select_index: 0
                    }
                }, computed: {
                    text: function () {
                        return this.currentCircle.toFixed(0) + "%"
                    }, cv19_low_risk: function () {
                        return !(parseFloat(this.result_cv19.prob) >= 50)
                    }
                }, created: function () {
                    this.checkNeedLogin(), this.checkIpEnable(), this.checkMaxTest()
                }, methods: {
                    checkNeedLogin: function () {
                        var t = this;
                        this.$http.get("http://aimomics.org/api/property/all").then((function (e) {
                            0 == e.data.code && e.data.data.forEach((function (e) {
                                if ("UPLOAD_NEED_LOGIN" == e.property) t.uploadNeedLogin = e.is_active; else if ("ORDER_TIP" == e.property) {
                                    if ("" !== e.extra && null != e.extra) {
                                        var r = JSON.parse(e.extra);
                                        r.forEach((function (e, r) {
                                            e.options = null != e.options ? e.options.split(";") : [], e.options_hk = null != e.options_hk ? e.options_hk.split(";") : [], e.options_en = null != e.options_en ? e.options_en.split(";") : [], t.extra_order_tip_form[r] = null
                                        })), t.extra_order_tip = r
                                    }
                                    e.is_active ? t.needSubmitForm = !0 : t.needSubmitForm = !1
                                }
                            }))
                        }))
                    }, orderTipOnOpen: function (t, e) {
                        this.extra_order_tip_columns = "zh" === this.language ? this.extra_order_tip[e].options : "hk" === this.language ? this.extra_order_tip[e].options_hk : this.extra_order_tip[e].options_en, this.cur_select_index = e, this.extra_order_tip_show = !0
                    }, orderTipOnConfirm: function (t) {
                        this.extra_order_tip_form[this.cur_select_index] = t, this.extra_order_tip_columns = [], this.extra_order_tip_show = !1
                    }, checkIpEnable: function () {
                        var t = this;
                        this.$http.get("http://aimomics.org/api/order/check_ip_enable").then((function (e) {
                            0 == e.data.code && (t.ip_enable = e.data.data.enable)
                        }))
                    }, checkMaxTest: function () {
                        var t = this;
                        this.$http.get("http://aimomics.org/api/order/check_max_test").then((function (e) {
                            0 == e.data.code && (t.max_test_enable = e.data.data.enable)
                        }))
                    }, handleCheck: function (t) {
                        t.preventDefault(), this.ip_enable ? this.max_test_enable || (this.showMaxTestDisable = !0) : this.showIpDisable = !0
                    }, handleInput: function (t) {
                        var e = this;
                        this.noImage = !1, this.$forceUpdate();
                        var r = this.imgIndex;
                        setTimeout((function () {
                            null != e.photoClips[r] && (e.photoClips[r].destroy(), e.photoClips[r] = null), e.photoClips[r] = new c.a("#clipArea" + r, {
                                size: [285, 75],
                                outputSize: [950, 250],
                                maxZoom: 2,
                                rotateFree: !0,
                                outputQuality: .96,
                                lrzOption: {width: 3e3, height: 2e3, quality: 1}
                            }), e.photoClips[r].load(t.file)
                        }))
                    }, handleUpload: function () {
                        var t = this;
                        if (!this.submitLoading) {
                            for (var e = 0; e < this.uploadImage.length; e++) if (null == this.uploadImage[e]) return void this.$toast({
                                mask: !1,
                                message: this.$t("multi.uploadMissing") + "(" + this.$t("multi.img" + e) + ")"
                            });
                            this.submitLoading = !0, this.submitSuccess = !1, this.currentCircle = 0, this.step = 2;
                            var r = new FormData;
                            r.append("type", "2"), null != localStorage.getItem("uuid") && r.append("uuid", localStorage.getItem("uuid")), null != localStorage.getItem("region") && r.append("region", localStorage.getItem("region"));
                            for (var s = function (e) {
                                var s = Object(i["c"])(t.uploadImage[e], "covid" + e + ".jpg");
                                s.size > t.maxImageSize ? l["compressAccurately"](s, t.maxImageSize / 1024).then((function (t) {
                                    r.append("img" + e, t)
                                })) : r.append("img" + e, s)
                            }, a = 0; a < this.uploadImage.length; a++) s(a);
                            this.circleInterval = setInterval((function () {
                                t.currentCircle < 99 ? t.currentCircle++ : t.currentCircle >= 99 && t.submitSuccess && (t.currentCircle = 100, t.needSubmitForm ? t.step = 4 : t.step = 5, clearInterval(t.circleInterval))
                            }), 50), setTimeout((function () {
                                t.upload(r)
                            }), 1e3)
                        }
                    }, handleReUpload: function () {
                        this.step = 0, this.imgIndex = 0, this.noImage = !0, this.checkMaxTest(), this.checkIpEnable(), this.destroyClips()
                    }, destroyClips: function () {
                        this.photoClips.forEach((function (t) {
                            null != t && t.destroy()
                        })), this.photoClips = [null, null, null, null], this.uploadImage = [null, null, null, null]
                    }, upload: function (t) {
                        var e = this;
                        this.$http.post("http://aimomics.org/api/order/check", t, {timeout: 12e4}).then((function (t) {
                            if (0 == t.data.code) {
                                e.submitSuccess = !0;
                                var r = t.data.data;
                                e.result_healthy.prob = Number(r.healthy), e.result_cv19.prob = Number(r.cv19), e.result_pulmonary.prob = Number(r.pulmonary), e.result_ocular.prob = Number(r.ocular), e.order_id = r.id, null != r.uuid && localStorage.setItem("uuid", r.uuid), !e.needSubmitForm && parseFloat(e.result_cv19.prob) >= 50 && (e.showHighRisk = !0), e.$http.post("http://aimomics.org/api/record/send", {
                                    event: "multi_test",
                                    message: "高级检测成功",
                                    user_name: localStorage.getItem("uuid") || null
                                }), e.submitLoading = !1
                            } else e.$http.post("http://aimomics.org/api/record/send", {
                                event: "multi_test",
                                message: "高级检测失败",
                                user_name: localStorage.getItem("uuid") || null
                            }), clearInterval(e.circleInterval), e.currentCircle = 0, e.submitSuccess = !1, e.submitLoading = !1, e.step = 3
                        })).catch((function (t) {
                            clearInterval(e.circleInterval), e.currentCircle = 0, e.submitSuccess = !1, e.submitLoading = !1, e.step = 3
                        }))
                    }, handleSubmitExtra: function () {
                        var t = this;
                        if (!this.handleSubmitExtraLoading) {
                            var e = {order_id: this.order_id, extra: ""};
                            this.isLogin ? e.user_id = localStorage.getItem("user").uid : e.uuid = localStorage.getItem("uuid"), e.extra = JSON.stringify(this.extra_order_tip.map((function (e, r) {
                                return {
                                    key: "zh" === t.language ? e.title : "hk" === t.language ? e.title_hk : e.title_en,
                                    value: t.extra_order_tip_form[r]
                                }
                            }))), this.$http.post("http://aimomics.org/api/order/updateExtra", e).then((function (e) {
                                0 == e.data.code ? (t.step = 5, parseFloat(t.result_cv19.prob) >= 50 && (t.showHighRisk = !0)) : t.$toast({
                                    mask: !1,
                                    message: "Submit Error"
                                })
                            })).catch((function (e) {
                                t.$toast({mask: !1, message: "Submit Error"})
                            }))
                        }
                    }, handleLogin: function () {
                        this.$router.push("/login")
                    }, parseInt: function (t) {
                        function e(e) {
                            return t.apply(this, arguments)
                        }

                        return e.toString = function () {
                            return t.toString()
                        }, e
                    }((function (t) {
                        return parseInt(t)
                    })), handlePre: function () {
                        this.imgIndex > 0 && this.imgIndex--
                    }, handleNext: function () {
                        this.imgIndex < 3 ? (this.noImage = !0, this.uploadImage[this.imgIndex] = this.photoClips[this.imgIndex].clip(), this.photoClips[this.imgIndex].destroy(), this.imgIndex++) : (this.uploadImage[this.imgIndex] = this.photoClips[this.imgIndex].clip(), this.photoClips[this.imgIndex].destroy(), this.photoClips = [null, null, null, null], this.step = 1)
                    }
                }, destroyed: function () {
                    null != this.circleInterval && clearInterval(this.circleInterval), this.destroyClips()
                }
            }, d = u, _ = (r("facc"), r("723d"), r("2877")), p = Object(_["a"])(d, s, a, !1, null, null, null);
        e["default"] = p.exports
    }, 6939: function (t, e, r) {
        t.exports = r.p + "img/eye_up.c2ae5a9d.jpg"
    }, "723d": function (t, e, r) {
        "use strict";
        var s = r("00b9"), a = r.n(s);
        a.a
    }, de67: function (t, e, r) {
        t.exports = r.p + "img/eye_right.24aaf3c0.jpg"
    }, f02c: function (t, e, r) {
    }, f426: function (t, e, r) {
        t.exports = r.p + "img/eye_left.09bceed0.jpg"
    }, facc: function (t, e, r) {
        "use strict";
        var s = r("f02c"), a = r.n(s);
        a.a
    }
}]);
//# sourceMappingURL=chunk-785f6ca7.b868842a.js.map
