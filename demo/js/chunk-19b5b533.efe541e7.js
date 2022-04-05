(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-19b5b533"], {
    "1c83": function (e, t, n) {
    }, 5841: function (e, t, n) {
    }, "7abe": function (e, t, n) {
        "use strict";
        n.r(t);
        var a = function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            var agreement_en = '\nCaution! \n<br/>\nThe COVID-19 screening method is conducted by BL Project Co., Ltd (Hereinafter referred to as BL). It is only used in Thailand only, and strictly prohibited used out of Thailand. The evaluated results cannot replace the doctor\'s face-to-face consultation and any medical tool laboratory. The COVID-19 screening method is referred to as "AIETECH" below.\n<br/><br/>\n1. Terms of Use\n<br/><br/>\n(1) When you agree to the terms of this method on this subject, it constitutes a legally binding agreement between you and the BL, which also stipulates your rights and obligations and our rights and obligations. Accessing or using "AIETECH" means that you have read, understood and agreed to be bound by the "terms of use" and agree to abide by all applicable laws and regulations. If you do not agree to these terms, please do not use "AIETECH".\n<br/><br/>\n(2) The services provided by "AIETECH" are not suitable and should not be regarded as any form of diagnosis and treatment services. We do not provide any emergency medical services or face-to-face diagnosis or treatment. This service is intended to be supplement rather than replace the services provided by doctors, hospitals or other medical service providers. You cannot rely on the information provided by "AIETECH" for disease treatment. If you refer to the information provided by "AIETECH" and have any problems in your own treatment, "AIETECH" and BL will not bear any responsibility for this.\n<br/><br/>\n(3) "AIETECH" has the right to unilaterally modify the service agreement and any other information contained in the "disease assessment" when necessary without separate notice. The revised service agreement will replace the old version of the service agreement as soon as it is released, and the legal effect between you and "AIETECH" will be updated correspondingly.\n<br/><br/>\n(4) "Terms of Use" also contains ownership/copyright declarations and privacy terms. "AIETECH" will not collect any of your private information, including personal medical records and personal information. In addition to complying with the "Terms of Use", you must also obey the ownership/copyright Declaration and privacy policy. For ownership/copyright declaration and privacy terms, please click this link to view the full terms.\n<br/><br/>\n(5) On the premise that you agree to abide by the "Terms of Use" and relevant laws and regulations, BL grants you a non-exclusive, non-transferable limited license, allowing you to access and use “AIETECH" as a user. This license does not allow your malicious use of "AIETECH" or the use of "AIETECH" for any infringing purposes. In addition to the limited permission described in the previous paragraph, BL has not granted you any explicit or implied patents, Trademark, copyright or other exclusive rights, intellectual property rights or licenses. You may not use or copy any content of "this method" on another website or mobile application or any other medium. If you fail to comply with the "Terms of Use", any rights granted to you will be automatically terminated without prior notice, and you must immediately stop using "this method" and destroy all the ""this method" you hold, keep or control.\n<br/><br/>\n2. Disclaimer\n<br/><br/>\n(1) All risks of using "AIETECH" are borne by you. "AIETECH" is not a medical institution. The result it gives is based on the limited data provided by you and the medical artificial intelligence model algorithm. Any feedback result does not mean that "AIETECH" agrees with its statement, and there is no guarantee for the results. “AIETECH” takes no responsibility for any feedback results or the consequences caused by them. Warranty or statement, including but not limited to guarantees about timeliness, suitability for a specific purpose, non-infringement of ownership and intellectual property rights. There are no restrictions, "AIETECH" does not guarantee continuous operation, timely, safe or error-free.\n<br/><br/>\n(2) To the maximum extent permitted by applicable laws, in any case, "AIETECH" is not responsible for the results caused by "AIETECH" or related to "AIETECH". Including the direct, indirect, incidental, special, punitive or other consequences caused by any site or resource that you visit, use, or download.\n<br/>\n';
            var banner_content_en = 'This for Thailand use only. The results cannot replace the doctor\'s face-to-face consultation and medical diagnosis.'
            var banner_content_th = 'ใช้สำหรับในประเทศไทยเท่านั้น ผลทดสอบไม่สามารถแทนการตรวจเช็คจากหมอหรืออุปกรณ์มาตรฐานได้'
            return a("div", {staticClass: "covid-page home-layout"}, [a("header", {staticClass: "page-header"}, [a("router-link", {
                staticClass: "header-link",
                attrs: {to: "/index", tag: "span"}
            }, [a("img", {
                staticClass: "header-icon",
                attrs: {src: n("a582")}
            })]), a("router-link", {
                staticClass: "header-link",
                attrs: {to: "/mine", tag: "span"}
            }, [a("img", {
                staticClass: "header-icon",
                attrs: {src: n("c651")}
            })])], 1), "zh" === e.language && null != e.remoteBanner ? a("van-notice-bar", {
                attrs: {
                    "left-icon": "volume-o",
                    color: "#1989fa",
                    background: "#faf9ff"
                }
            }, [e._v("\n    " + "     " + e._s(banner_content_th) + "\n  ")]) : e._e(), "en" === e.language && null != e.remoteBanner ? a("van-notice-bar", {
                attrs: {
                    "left-icon": "volume-o",
                    color: "#1989fa",
                    background: "#faf9ff"
                }
            }, [e._v("\n    " + e._s(e.remoteBanner.title_en) + ": " + e._s(banner_content_en) + "\n  ")]) : e._e(), "hk" === e.language && null != e.remoteBanner ? a("van-notice-bar", {
                attrs: {
                    "left-icon": "volume-o",
                    color: "#1989fa",
                    background: "#faf9ff"
                }
            }, [e._v("\n    " + e._s(e.remoteBanner.title_hk) + ": " + e._s(e.remoteBanner.content_hk) + "\n  ")]) : e._e(), a("div", {staticClass: "home-title"}, [e._v("\n    " + e._s(e.$t("home.title")) + "\n  ")]), "en" != e.language ? a("div", {staticClass: "home-tip"}, [e._v("\n    COVID-19 EYE TEST THAILAND USE ONLY (BETA 5.1)\n  ")]) : e._e(), a("div", {staticClass: "home-content"}, [!e.uploadNeedLogin || e.isLogin ? a("van-button", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.agreementChecked,
                    expression: "agreementChecked"
                }], staticClass: "home-button home-button-white", attrs: {size: "normal"}, on: {click: e.handleSingle}
            }, [e._v(e._s(e.$t("home.single")))]) : e._e(), !e.uploadNeedLogin || e.isLogin ? a("van-button", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.agreementChecked,
                    expression: "agreementChecked"
                }], staticClass: "home-button", attrs: {size: "normal"}, on: {click: e.handleMulti}
            }, [e._v(e._s(e.$t("home.multi")))]) : e._e(), a("van-button", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.showAgreement || !e.agreementChecked,
                    expression: "showAgreement || !agreementChecked"
                }], staticClass: "home-button", attrs: {size: "normal"}, on: {click: e.handleShowAgree}
            }, [e._v(e._s(e.$t("setting.agreement")))]), a("div", {staticClass: "home-tip-text"}, [e._v("\n      " + e._s(e.$t("home.alert"))), a("br"), e._v("\n      " + e._s(e.$t("home.alert_1"))), a("br"), a("br"), e._v("\n      " + e._s(e.$t("home.alert_2"))), a("br"), a("br"), e._v("\n      " + e._s(e.$t("home.alert_3")) + "\n    ")])], 1), a("a", {
                staticClass: "home-link",
                attrs: {href: "http://www.b-project.com"}
            }, [e._v("")]), null != e.remoteAgreement && e.remoteAgreement.is_active ? a("van-dialog", {
                attrs: {
                    showCancelButton: !0,
                    cancelButtonText: e.$t("home.cancel"),
                    confirmButtonText: e.$t("home.agree"),
                    title: "zh" === e.language ? e.remoteAgreement.title_en : "en" === e.language ? e.remoteAgreement.title_en : e.remoteAgreement.title_hk,
                    beforeClose: e.handleClose
                }, model: {
                    value: e.showAgreement, callback: function (t) {
                        e.showAgreement = t
                    }, expression: "showAgreement"
                }
            }, ["zh" === e.language ? a("div", {
                staticClass: "agreement-content",
                domProps: {innerHTML: e._s(agreement_en)}
            }) : e._e(), "en" === e.language ? a("div", {
                staticClass: "agreement-content",
                domProps: {innerHTML: e._s(agreement_en)}
            }) : e._e(), "hk" === e.language ? a("div", {
                staticClass: "agreement-content",
                domProps: {innerHTML: e._s(e.remoteAgreement.content_hk)}
            }) : e._e()]) : e._e(), a("van-dialog", {
                attrs: {showCancelButton: !1, showConfirmButton: !1},
                model: {
                    value: e.showIpDisable, callback: function (t) {
                        e.showIpDisable = t
                    }, expression: "showIpDisable"
                }
            }, [a("div", {staticClass: "dialog-content"}, [e._v(e._s(e.$t("home.check_ip_enable")))])])], 1)
        }, o = [], i = (n("ac6a"), n("f3e2"), n("ca00")), s = n("12cb"), l = {
            name: "home", data: function () {
                return {
                    isLogin: Object(i["a"])(),
                    language: Object(s["b"])(),
                    showAgreement: !Object(i["a"])(),
                    agreementChecked: Object(i["a"])(),
                    uploadNeedLogin: !1,
                    ip_enable: !0,
                    showIpDisable: !1,
                    remoteBanner: null,
                    remoteAgreement: null
                }
            }, created: function () {
                this.checkProperty(), this.checkIpEnable(), this.$http.post("http://aimomics.org/api/record/send", {
                    event: "open-demo-direct",
                    message: "进入Demo首页",
                    user_name: localStorage.getItem("uuid") || null
                });
                var e = Object(i["e"])("fromRegion");
                null != e ? localStorage.setItem("region", e) : localStorage.removeItem("region")
            }, methods: {
                checkProperty: function () {
                    var e = this;
                    this.$http.get("http://aimomics.org/api/property/all").then((function (t) {
                        0 == t.data.code && t.data.data.forEach((function (t) {
                            "UPLOAD_NEED_LOGIN" === t.property ? e.uploadNeedLogin = t.is_active : "BANNER" === t.property && t.is_active ? ("" !== t.title_en && null != t.title_en || (t.title_en = t.title), "" !== t.title_hk && null != t.title_hk || (t.title_hk = t.title), "" !== t.content_en && null != t.content_en || (t.content_en = t.content), "" !== t.content_hk && null != t.content_hk || (t.content_hk = t.content), e.remoteBanner = t) : "AGREEMENT" === t.property && ("" !== t.title_en && null != t.title_en || (t.title_en = t.title), "" !== t.title_hk && null != t.title_hk || (t.title_hk = t.title), "" !== t.content_en && null != t.content_en || (t.content_en = t.content), "" !== t.content_hk && null != t.content_hk || (t.content_hk = t.content), e.remoteAgreement = t)
                        }))
                    }))
                }, checkIpEnable: function () {
                    var e = this;
                    this.$http.get("http://aimomics.org/api/order/check_ip_enable").then((function (t) {
                        0 == t.data.code && (e.ip_enable = t.data.data.enable)
                    }))
                }, handleLogin: function () {
                    this.$router.push("/login")
                }, handleSingle: function () {
                    this.ip_enable ? this.$router.push("/single") : this.showIpDisable = !0
                }, handleMulti: function () {
                    this.ip_enable ? this.$router.push("/multi") : this.showIpDisable = !0
                }, handleShowAgree: function () {
                    this.showAgreement = !0
                }, handleClose: function (e, t) {
                    "confirm" === e && (this.agreementChecked = !0), t()
                }
            }
        }, r = l, c = (n("8582"), n("fca8"), n("2877")), h = Object(c["a"])(r, a, o, !1, null, "0828c496", null);
        t["default"] = h.exports
    }, 8582: function (e, t, n) {
        "use strict";
        var a = n("1c83"), o = n.n(a);
        o.a
    }, fca8: function (e, t, n) {
        "use strict";
        var a = n("5841"), o = n.n(a);
        o.a
    }
}]);
//# sourceMappingURL=chunk-19b5b533.efe541e7.js.map
