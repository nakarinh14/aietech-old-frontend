(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-bf7f5fa8"], {
    5395: function (t, e, n) {
        "use strict";
        n.r(e);
        var s = function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            var agreement_en = '\nCaution! \n<br/>\nThe COVID-19 screening method is conducted by BL Project Co., Ltd (Hereinafter referred to as BL). It is only used in Thailand only, and strictly prohibited used out of Thailand. The evaluated results cannot replace the doctor\'s face-to-face consultation and any medical tool laboratory. The COVID-19 screening method is referred to as "AIETECH" below.\n<br/><br/>\n1. Terms of Use\n<br/><br/>\n(1) When you agree to the terms of this method on this subject, it constitutes a legally binding agreement between you and the BL, which also stipulates your rights and obligations and our rights and obligations. Accessing or using "AIETECH" means that you have read, understood and agreed to be bound by the "terms of use" and agree to abide by all applicable laws and regulations. If you do not agree to these terms, please do not use "AIETECH".\n<br/><br/>\n(2) The services provided by "AIETECH" are not suitable and should not be regarded as any form of diagnosis and treatment services. We do not provide any emergency medical services or face-to-face diagnosis or treatment. This service is intended to be supplement rather than replace the services provided by doctors, hospitals or other medical service providers. You cannot rely on the information provided by "AIETECH" for disease treatment. If you refer to the information provided by "AIETECH" and have any problems in your own treatment, "AIETECH" and BL will not bear any responsibility for this.\n<br/><br/>\n(3) "AIETECH" has the right to unilaterally modify the service agreement and any other information contained in the "disease assessment" when necessary without separate notice. The revised service agreement will replace the old version of the service agreement as soon as it is released, and the legal effect between you and "AIETECH" will be updated correspondingly.\n<br/><br/>\n(4) "Terms of Use" also contains ownership/copyright declarations and privacy terms. "AIETECH" will not collect any of your private information, including personal medical records and personal information. In addition to complying with the "Terms of Use", you must also obey the ownership/copyright Declaration and privacy policy. For ownership/copyright declaration and privacy terms, please click this link to view the full terms.\n<br/><br/>\n(5) On the premise that you agree to abide by the "Terms of Use" and relevant laws and regulations, BL grants you a non-exclusive, non-transferable limited license, allowing you to access and use “AIETECH" as a user. This license does not allow your malicious use of "AIETECH" or the use of "AIETECH" for any infringing purposes. In addition to the limited permission described in the previous paragraph, BL has not granted you any explicit or implied patents, Trademark, copyright or other exclusive rights, intellectual property rights or licenses. You may not use or copy any content of "this method" on another website or mobile application or any other medium. If you fail to comply with the "Terms of Use", any rights granted to you will be automatically terminated without prior notice, and you must immediately stop using "this method" and destroy all the ""this method" you hold, keep or control.\n<br/><br/>\n2. Disclaimer\n<br/><br/>\n(1) All risks of using "AIETECH" are borne by you. "AIETECH" is not a medical institution. The result it gives is based on the limited data provided by you and the medical artificial intelligence model algorithm. Any feedback result does not mean that "AIETECH" agrees with its statement, and there is no guarantee for the results. “AIETECH” takes no responsibility for any feedback results or the consequences caused by them. Warranty or statement, including but not limited to guarantees about timeliness, suitability for a specific purpose, non-infringement of ownership and intellectual property rights. There are no restrictions, "AIETECH" does not guarantee continuous operation, timely, safe or error-free.\n<br/><br/>\n(2) To the maximum extent permitted by applicable laws, in any case, "AIETECH" is not responsible for the results caused by "AIETECH" or related to "AIETECH". Including the direct, indirect, incidental, special, punitive or other consequences caused by any site or resource that you visit, use, or download.\n<br/>\n';
            return n("div", {staticClass: "covid-page setting-page"}, [n("header", {staticClass: "page-header"}, [n("span", {
                staticClass: "header-back",
                on: {
                    click: function (e) {
                        return t.$router.go(-1)
                    }
                }
            }, [n("svg-icon", {attrs: {"icon-class": "gray-btn"}})], 1), n("div", {staticClass: "header-content"}, [t._v(t._s(t.$t("setting.title")))])]), n("section", {staticClass: "setting-content"}, [n("ul", {staticClass: "setting-list"}, [t.isLogin ? n("li", {staticClass: "setting-item"}, [n("span", {staticClass: "setting-msg"}, [t._v(t._s(t.$t("setting.message")))]), n("van-switch", {
                attrs: {
                    "active-color": "#D8182D",
                    size: "20px"
                }, model: {
                    value: t.checked, callback: function (e) {
                        t.checked = e
                    }, expression: "checked"
                }
            })], 1) : t._e(), t.isLogin ? n("router-link", {
                staticClass: "setting-item",
                attrs: {to: "/mine/changePassword", tag: "li"}
            }, [n("span", {staticClass: "setting-msg"}, [t._v(t._s(t.$t("password.title")))]), n("van-icon", {
                staticClass: "icon",
                attrs: {name: "arrow"}
            })], 1) : t._e(), n("router-link", {
                staticClass: "setting-item",
                attrs: {tag: "li", to: "/setting/faq"}
            }, [n("span", {staticClass: "setting-msg"}, [t._v(t._s(t.$t("setting.faq")))]), n("van-icon", {
                staticClass: "icon",
                attrs: {name: "arrow"}
            })], 1), n("li", {
                staticClass: "setting-item", on: {
                    click: function (e) {
                        t.showAgreement = !0
                    }
                }
            }, [n("span", {staticClass: "setting-msg"}, [t._v(t._s(t.$t("setting.agreement")))]), n("van-icon", {
                staticClass: "icon",
                attrs: {name: "arrow"}
            })], 1), n("router-link", {
                staticClass: "setting-item",
                attrs: {tag: "li", to: "/setting/language"}
            }, [n("span", {staticClass: "setting-msg"}, [t._v(t._s(t.$t("setting.language")))]), n("van-icon", {
                staticClass: "icon",
                attrs: {name: "arrow"}
            })], 1), n("router-link", {
                staticClass: "setting-item",
                attrs: {tag: "li", to: "/setting/aboutAs"}
            }, [n("span", {staticClass: "setting-msg"}, [t._v(t._s(t.$t("about.title")))]), n("van-icon", {
                staticClass: "icon",
                attrs: {name: "arrow"}
            })], 1)], 1)]), t.isLogin ? n("div", {staticClass: "covid-btns"}, [n("van-button", {
                staticClass: "covid-btn",
                attrs: {type: "info"},
                on: {click: t.logout}
            }, [t._v("\n      " + t._s(t.$t("setting.logout")) + "\n    ")])], 1) : t._e(), null != t.remoteAgreement && t.remoteAgreement.is_active ? n("van-dialog", {
                attrs: {
                    showCancelButton: !1,
                    title: "zh" === t.language ? t.remoteAgreement.title_en : "en" === t.language ? t.remoteAgreement.title_en : t.remoteAgreement.title_hk
                }, model: {
                    value: t.showAgreement, callback: function (e) {
                        t.showAgreement = e
                    }, expression: "showAgreement"
                }
            }, ["zh" === t.language ? n("div", {
                staticClass: "agreement-content",
                domProps: {innerHTML: t._s(agreement_en)}
            }) : t._e(), "en" === t.language ? n("div", {
                staticClass: "agreement-content",
                domProps: {innerHTML: t._s(agreement_en)}
            }) : t._e(), "hk" === t.language ? n("div", {
                staticClass: "agreement-content",
                domProps: {innerHTML: t._s(t.remoteAgreement.content_hk)}
            }) : t._e()]) : t._e()], 1)
        }, a = [], i = (n("ac6a"), n("f3e2"), n("ca00")), o = n("12cb"), c = {
            name: "Setting", data: function () {
                return {
                    checked: !1,
                    isLogin: Object(i["a"])(),
                    language: Object(o["b"])(),
                    showAgreement: !1,
                    remoteAgreement: null
                }
            }, methods: {
                logout: function () {
                    localStorage.removeItem("user"), this.$router.push("/login")
                }, checkProperty: function () {
                    var t = this;
                    this.$http.get("http://aimomics.org/api/property/all").then((function (e) {
                        0 == e.data.code && e.data.data.forEach((function (e) {
                            "AGREEMENT" === e.property && ("" !== e.title_en && null != e.title_en || (e.title_en = e.title), "" !== e.title_hk && null != e.title_hk || (e.title_hk = e.title), "" !== e.content_en && null != e.content_en || (e.content_en = e.content), "" !== e.content_hk && null != e.content_hk || (e.content_hk = e.content), t.remoteAgreement = e)
                        }))
                    }))
                }
            }, created: function () {
                this.checkProperty()
            }
        }, r = c, l = (n("fdeb"), n("2877")), g = Object(l["a"])(r, s, a, !1, null, "202650fc", null);
        e["default"] = g.exports
    }, f17d: function (t, e, n) {
    }, fdeb: function (t, e, n) {
        "use strict";
        var s = n("f17d"), a = n.n(s);
        a.a
    }
}]);
//# sourceMappingURL=chunk-bf7f5fa8.105e9ce1.js.map
