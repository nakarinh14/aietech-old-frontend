(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-16f4f808"], {
    "5a9b": function (e, t, n) {
    }, "9a54": function (e, t, n) {
        e.exports = n.p + "img/logo.5c86a4f2.png"
    }, acfd: function (e, t, n) {
        "use strict";
        var o = n("5a9b"), r = n.n(o);
        r.a
    }, d5c2: function (e, t, n) {
        "use strict";
        n.r(t);
        var o = function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {staticClass: "covid-page register-page"}, [n("header", {staticClass: "page-header"}, [n("span", {
                    staticClass: "header-back",
                    on: {
                        click: function (t) {
                            return e.$router.go(-1)
                        }
                    }
                }, [n("svg-icon", {attrs: {"icon-class": "gray-btn"}})], 1), n("router-link", {
                    staticClass: "header-link",
                    attrs: {to: "/login", tag: "span"}
                }, [e._v(e._s(e.$t("common.login")))])], 1), e._m(0), n("van-form", {
                    attrs: {"validate-first": ""},
                    on: {submit: e.handleSubmit}
                }, [n("van-field", {
                    attrs: {
                        type: "tel",
                        clearable: "",
                        placeholder: e.$t("register.input_phone"),
                        rules: [{required: !0, message: e.$t("register.input_phone")}, {
                            validator: e.validatorPhone,
                            message: e.$t("register.input_phone_error")
                        }]
                    }, model: {
                        value: e.phoneRegisterForm.phone, callback: function (t) {
                            e.$set(e.phoneRegisterForm, "phone", t)
                        }, expression: "phoneRegisterForm.phone"
                    }
                }), n("van-field", {
                    attrs: {
                        "label-width": "150",
                        clearable: "",
                        placeholder: e.$t("register.input_code"),
                        rules: [{required: !0, message: e.$t("register.input_code")}, {
                            validator: e.validatorPhoneCode,
                            message: e.$t("register.input_code_error")
                        }]
                    }, model: {
                        value: e.phoneRegisterForm.verifyCode, callback: function (t) {
                            e.$set(e.phoneRegisterForm, "verifyCode", t)
                        }, expression: "phoneRegisterForm.verifyCode"
                    }
                }, [n("van-button", {
                    attrs: {
                        slot: "button",
                        plain: "",
                        size: "small",
                        type: "info",
                        disabled: e.codeNum > 0,
                        loading: e.codeLoading,
                        "loading-text": e.$t("register.code_sending")
                    }, on: {click: e.handleGetVerifyCode}, slot: "button"
                }, [e._v("\n        " + e._s(e.codeNum > 0 ? e.codeNum + e.$t("register.code_waiting") : e.$t("register.code_send")) + "\n      ")])], 1), n("van-field", {
                    attrs: {
                        type: "password",
                        clearable: "",
                        placeholder: e.$t("register.input_password"),
                        rules: [{required: !0, message: e.$t("register.input_password")}, {
                            validator: e.validatorPassword,
                            message: e.$t("register.password_placehold")
                        }]
                    }, model: {
                        value: e.phoneRegisterForm.password, callback: function (t) {
                            e.$set(e.phoneRegisterForm, "password", t)
                        }, expression: "phoneRegisterForm.password"
                    }
                }), n("van-field", {
                    attrs: {
                        placeholder: e.$t("register.input_invite"),
                        clearable: "",
                        rules: [{required: !0, message: e.$t("register.input_invite")}]
                    }, model: {
                        value: e.phoneRegisterForm.code, callback: function (t) {
                            e.$set(e.phoneRegisterForm, "code", t)
                        }, expression: "phoneRegisterForm.code"
                    }
                }), n("div", {staticClass: "register-agreement"}, [n("van-checkbox", {
                    attrs: {shape: "square"},
                    model: {
                        value: e.agreementChecked, callback: function (t) {
                            e.agreementChecked = t
                        }, expression: "agreementChecked"
                    }
                }), n("span", {
                    on: {
                        click: function (t) {
                            e.showAgreement = !0
                        }
                    }
                }, [e._v(e._s(e.$t("register.agree")))])], 1), n("div", {staticClass: "login-register-btns"}, [n("van-button", {
                    staticClass: "login-btn",
                    attrs: {type: "info", loading: e.submitLoading, "loading-text": e.$t("register.registering")}
                }, [e._v("\n        " + e._s(e.$t("common.register")) + "\n      ")])], 1)], 1), n("van-dialog", {
                    attrs: {
                        showCancelButton: !1,
                        title: e.$t("register.agreement")
                    }, model: {
                        value: e.showAgreement, callback: function (t) {
                            e.showAgreement = t
                        }, expression: "showAgreement"
                    }
                }, ["zh" === e.language ? n("div", {
                    staticClass: "agreement-content",
                    domProps: {innerHTML: e._s(e.AGREEMENT_zh)}
                }) : e._e(), "hk" === e.language ? n("div", {
                    staticClass: "agreement-content",
                    domProps: {innerHTML: e._s(e.AGREEMENT_hk)}
                }) : e._e(), "en" === e.language ? n("div", {
                    staticClass: "agreement-content",
                    domProps: {innerHTML: e._s(e.AGREEMENT_en)}
                }) : e._e()])], 1)
            }, r = [function () {
                var e = this, t = e.$createElement, o = e._self._c || t;
                return o("div", {staticClass: "page-logo"}, [o("img", {attrs: {src: n("9a54")}})])
            }],
            i = '\nCaution! \n<br/>\nThe COVID-19 screening method is conducted by BL Project Co., Ltd (Hereinafter referred to as BL). It is only used in Thailand only, and strictly prohibited used out of Thailand. The evaluated results cannot replace the doctor\'s face-to-face consultation and any medical tool laboratory. The COVID-19 screening method is referred to as "AIETECH" below.\n<br/><br/>\n1. Terms of Use\n<br/><br/>\n(1) When you agree to the terms of this method on this subject, it constitutes a legally binding agreement between you and the BL, which also stipulates your rights and obligations and our rights and obligations. Accessing or using "AIETECH" means that you have read, understood and agreed to be bound by the "terms of use" and agree to abide by all applicable laws and regulations. If you do not agree to these terms, please do not use "AIETECH".\n<br/><br/>\n(2) The services provided by "AIETECH" are not suitable and should not be regarded as any form of diagnosis and treatment services. We do not provide any emergency medical services or face-to-face diagnosis or treatment. This service is intended to be supplement rather than replace the services provided by doctors, hospitals or other medical service providers. You cannot rely on the information provided by "AIETECH" for disease treatment. If you refer to the information provided by "AIETECH" and have any problems in your own treatment, "AIETECH" and BL will not bear any responsibility for this.\n<br/><br/>\n(3) "AIETECH" has the right to unilaterally modify the service agreement and any other information contained in the "disease assessment" when necessary without separate notice. The revised service agreement will replace the old version of the service agreement as soon as it is released, and the legal effect between you and "AIETECH" will be updated correspondingly.\n<br/><br/>\n(4) "Terms of Use" also contains ownership/copyright declarations and privacy terms. "AIETECH" will not collect any of your private information, including personal medical records and personal information. In addition to complying with the "Terms of Use", you must also obey the ownership/copyright Declaration and privacy policy. For ownership/copyright declaration and privacy terms, please click this link to view the full terms.\n<br/><br/>\n(5) On the premise that you agree to abide by the "Terms of Use" and relevant laws and regulations, BL grants you a non-exclusive, non-transferable limited license, allowing you to access and use “AIETECH" as a user. This license does not allow your malicious use of "AIETECH" or the use of "AIETECH" for any infringing purposes. In addition to the limited permission described in the previous paragraph, BL has not granted you any explicit or implied patents, Trademark, copyright or other exclusive rights, intellectual property rights or licenses. You may not use or copy any content of "this method" on another website or mobile application or any other medium. If you fail to comply with the "Terms of Use", any rights granted to you will be automatically terminated without prior notice, and you must immediately stop using "this method" and destroy all the ""this method" you hold, keep or control.\n<br/><br/>\n2. Disclaimer\n<br/><br/>\n(1) All risks of using "AIETECH" are borne by you. "AIETECH" is not a medical institution. The result it gives is based on the limited data provided by you and the medical artificial intelligence model algorithm. Any feedback result does not mean that "AIETECH" agrees with its statement, and there is no guarantee for the results. “AIETECH” takes no responsibility for any feedback results or the consequences caused by them. Warranty or statement, including but not limited to guarantees about timeliness, suitability for a specific purpose, non-infringement of ownership and intellectual property rights. There are no restrictions, "AIETECH" does not guarantee continuous operation, timely, safe or error-free.\n<br/><br/>\n(2) To the maximum extent permitted by applicable laws, in any case, "AIETECH" is not responsible for the results caused by "AIETECH" or related to "AIETECH". Including the direct, indirect, incidental, special, punitive or other consequences caused by any site or resource that you visit, use, or download.\n<br/>\n',
            s = "\n注意！\n<br/>\n本软件为AIETECH EYE TEST PROGRAM的COVID-19 EYE TEST非商业目免费的风险筛查测试版本，以下简称为「本工具」，并仅限于中国境内用户使用，并不对中国境外进行任何公开测试，且所使用和评估内容不能代替医生面诊和任何医疗工具所检测的结果。\n<br/><br/>\n一、ข้อตกลงการใช้งาน\n<br/><br/>\n1. 当您同意本免费demo的使用条款，即构成您和AIMOMICS之间具有法律约束力的协议，它还规定了您的权利与义务与我们的权利与义务。访问或者使用「本工具」，即表示您已经阅读、理解并同意接受该「使用条款」的约束，同意遵守所有适用的法律和法规。如果您不同意这些条款，请勿使用「本工具」。\n<br/><br/>\n2.「本工具」所提供的服务不适合也不应当被视为任何形式的诊疗服务。我们不提供任何紧急医疗服务或面对面的诊断或治疗。该服务旨在补充而不是取代医生、医院或其他医疗服务提供者为您提供的服务，您不能凭借或依据「本工具」提供的信息进行疾病治疗。如果您参考「本工具」提供的信息，在自行治疗中出现任何问题，「本工具」及其所属科研团队不会因此承担任何责任。\n<br/><br/>\n3.「本工具」有权在必要时单方修改服务协议以及「疾病测评」中包含的任何其他信息，不再另行单独通知。修改后的服务协议一经发布即代替旧版本服务协议，自动更新为您与「本工具」之间具有法律效应。\n<br/><br/>\n4.「使用条款」还包含所有权/版权申明和隐私条款，「本工具」不会收集您的任何隐私信息，包括个人病历及个人信息，您除了必须遵守「使用条款」，还必须服从所有权/版权申明以及隐私条款。所有权/版权申明和隐私条款，请点击本链接查看完整条款。\n<br/><br/>\n5. 在您同意遵守「使用条款」、相关法律规定的前提下，「本工具」与AIMOMICS团队授予您一份非专属的、不可转让的有限许可，允许您作为用户访问和使用「本工具」。此项许可不包括您恶意使用「本工具」，或为了任何侵权的目的使用「本工具」除了上一段所述的有限许可权，AIMOMICS并未授予您任何明示的或默示的专利、商标、版权或其他专有权、知识产权的权利或许可。您不得在另一个网站或者移动端应用或任何其他介质中使用或复制「本工具」的任何内容。如果您未能遵守「使用条款」，将会导致授予您的任何权利被自动终止，而无需事先通知，并且您必须立刻停止使用「本工具」并销毁持有、保管或控制的所有「「本工具」资料。\n<br/><br/>\n二、免责声明\n<br/><br/>\n1. 使用「本工具」的所有风险由您自行承担。「本工具」并非医疗机构，其给出的结果列表系基于您提供的有限数据以及医疗人工智能模型算法，任何反馈结果不但不代表「本工具」同意其说法，且「本工具」对任何反馈结果不做任何保证，对任何反馈结果和建议或由其造成的后果亦不承担任何责任。保或陈述，包括但不限于有关时效性、适用于某种特定用途、不侵犯所有权和知识产权的保证。不存在任何限制，「本工具」不保证将连续运行、及时、安全或无错误。\n<br/><br/>\n2. 在适用法律允许的最大范围内，在任何情况下，对于与「本工具」有关的、由「本工具」引起的或者使用「本工具」、使用通过「本工具」链接到的、引用的或访问的任何站点或资源，或者使用、下载或访问任何上述站点的资料、信息、产品或服务而造成的任何直接的、间接的、附带的、特别的、惩罚性的或其他后果性的损害，「本工具」均不对任何一方负责。\n<br/>\n",
            a = "\n注意！\n<br/>\n本軟件為AIETECH EYE TEST PROGRAM的COVID-19 EYE TEST非商業目免費的風險篩查測試版本，以下簡稱為「本工具」，並僅限於中國境內用戶使用，並不對中國境外進行任何公開測試，且所使用和評估內容不能代替醫生面診和任何醫療工具所檢測的結果。\n<br/><br/>\n一、使用條款\n<br/><br/>\n1.當您同意本免費demo的使用條款，即構成您和AIMOMICS之間具有法律約束力的協定，它還規定了您的權利與義務與我們的權利與義務。 訪問或者使用「本工具」，即表示您已經閱讀、理解並同意接受該「使用條款」的約束，同意遵守所有適用的法律和法規。 如果您不同意這些條款，請勿使用「本工具」。\n<br/><br/>\n2.「本工具」所提供的服務不適合也不應當被視為任何形式的診療服務。 我們不提供任何緊急醫療服務或面對面的診斷或治療。 該服務旨在補充而不是取代醫生、醫院或其他醫療服務提供者為您提供的服務，您不能憑藉或依據「本工具」提供的資訊進行疾病治療。 如果您參攷「本工具」提供的資訊，在自行治療中出現任何問題，「本工具」及其所屬科研團隊不會囙此承擔任何責任。\n<br/><br/>\n3.「本工具」有權在必要時單方修改服務協定以及「疾病測評」中包含的任何其他資訊，不再另行單獨通知。 修改後的服務協定一經發佈即代替舊版本服務協定，自動更新為您與「本工具」之間具有法律效應。\n<br/><br/>\n4.「使用條款」還包含所有權/版權申明和隱私條款，「本工具」不會收集您的任何隱私資訊，包括個人病歷及個人資訊，您除了必須遵守「使用條款」，還必須服從所有權/版權申明以及隱私條款。 所有權/版權申明和隱私條款，請點擊本連結查看完整條款。\n<br/><br/>\n5.在您同意遵守「使用條款」、相關法律規定的前提下，「本工具」與AIMOMICS團隊授予您一份非專屬的、不可轉讓的有限許可，允許您作為用戶訪問和使用「本工具」。 此項許可不包括您惡意使用「本工具」，或為了任何侵權的目的使用「本工具」除了上一段所述的有限許可權，AIMOMICS並未授予您任何明示的或默示的專利、商標、版權或其他專有權、知識產權的權利或許可。 您不得在另一個網站或者移動端應用或任何其他介質中使用或複製「本工具」的任何內容。 如果您未能遵守「使用條款」，將會導致授予您的任何權利被自動終止，而無需事先通知，並且您必須立刻停止使用「本工具」並銷毀持有、保管或控制的所有「「本工具」資料。\n<br/><br/>\n二、免責聲明\n<br/><br/>\n1.使用「本工具」的所有風險由您自行承擔。 「本工具」並非醫療機構，其給出的結果清單系基於您提供的有限數據以及醫療人工智慧模型算灋，任何迴響結果不但不代表「本工具」同意其說法，且「本工具」對任何迴響結果不做任何保證，對任何迴響結果和建議或由其造成的後果亦不承擔任何責任。 保或陳述，包括但不限於有關時效性、適用於某種特定用途、不侵犯所有權和知識產權的保證。 不存在任何限制，「本工具」不保證將連續運行、及時、安全或無錯誤。\n<br/><br/>\n2.在適用法律允許的最大範圍內，在任何情况下，對於與「本工具」有關的、由「本工具」引起的或者使用「本工具」、使用通過「本工具」連結到的、引用的或訪問的任何網站或資源，或者使用、下載或訪問任何上述網站的資料、資訊、產品或服務而造成的任何直接的、間接的、附帶的、特別的、 懲罰性的或其他後果性的損害，「本工具」均不對任何一方負責。\n<br/>\n",
            d = n("12cb"), l = {
                name: "register", data: function () {
                    return {
                        phoneRegisterForm: {phone: null, verifyCode: null, password: null, code: null},
                        codeInterval: null,
                        codeNum: 0,
                        codeLoading: !1,
                        submitLoading: !1,
                        showAgreement: !1,
                        agreementChecked: !1,
                        AGREEMENT_zh: s,
                        AGREEMENT_en: i,
                        AGREEMENT_hk: a,
                        language: Object(d["b"])()
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
                        this.agreementChecked ? this.submitLoading || (this.submitLoading = !0, this.$http.post("/api/user/phone/register", this.phoneRegisterForm).then((function (t) {
                            0 === t.data.code ? (localStorage.setItem("user", JSON.stringify(t.data.data)), e.submitLoading = !1, e.$toast({
                                mask: !1,
                                message: e.$t("register.success")
                            }), e.$router.push("/mine")) : e.submitLoading = !1
                        })).catch((function (t) {
                            e.submitLoading = !1
                        }))) : this.$toast({mask: !1, message: this.$t("register.agreement_checked")})
                    }, handleGetVerifyCode: function () {
                        var e = this;
                        this.phoneRegisterForm.phone ? this.codeLoading || (this.codeLoading = !0, this.$http.post("/api/aliyun/send_msg", {phone: this.phoneRegisterForm.phone}).then((function (t) {
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
            }, c = l, h = (n("acfd"), n("2877")), u = Object(h["a"])(c, o, r, !1, null, "1cb898c2", null);
        t["default"] = u.exports
    }
}]);
//# sourceMappingURL=chunk-16f4f808.fc66b3a6.js.map
