(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2c76ed04"], {
    "0f1f": function (t, e, r) {
        "use strict";
        r.r(e);
        var a = function () {
            var t = this, e = t.$createElement, r = t._self._c || e;
            return r("div", {staticClass: "covid-page history-page"}, [r("header", {staticClass: "page-header"}, [r("span", {
                staticClass: "header-back",
                on: {
                    click: function (e) {
                        return t.$router.go(-1)
                    }
                }
            }, [r("svg-icon", {attrs: {"icon-class": "gray-btn"}})], 1), r("div", {staticClass: "header-content"}, [t._v(t._s(t.$t("mine.history")))])]), r("van-notice-bar", {
                attrs: {
                    color: "#1989fa",
                    background: "#ecf9ff",
                    "left-icon": "info-o"
                }
            }, [t._v("\n    " + t._s(t.$t("history.tip")) + "\n  ")]), r("ul", {staticClass: "history-list"}, t._l(t.historys, (function (e) {
                return r("li", {
                    key: e.id,
                    staticClass: "history-item"
                }, [r("div", {staticClass: "history-result"}, [r("span", {staticClass: "result-time"}, [r("span", [t._v(t._s(e.create_date))]), "1" == e.order_type ? r("span", [t._v(t._s(t.$t("history.single")))]) : t._e(), "2" == e.order_type ? r("span", [t._v(t._s(t.$t("history.multi")))]) : t._e()]), t.isNormalUser ? t._e() : r("van-cell", {
                    attrs: {title: "Healthy"},
                    scopedSlots: t._u([{
                        key: "default", fn: function () {
                            return [r("van-progress", {
                                staticStyle: {top: "10px"},
                                attrs: {
                                    percentage: e.healthy_percent,
                                    color: "linear-gradient(to right, #3fecff, #6149f6)"
                                }
                            })]
                        }, proxy: !0
                    }], null, !0)
                }), r("van-cell", {
                    attrs: {title: "CV19"},
                    scopedSlots: t._u([t.isNormalUser ? null : {
                        key: "default", fn: function () {
                            return [r("van-progress", {
                                staticStyle: {top: "10px"},
                                attrs: {
                                    percentage: e.covid_19_percent,
                                    color: "linear-gradient(to right, #3fecff, #6149f6)"
                                }
                            })]
                        }, proxy: !0
                    }], null, !0)
                }, [t.isNormalUser && !e.highRisk ? r("van-tag", {
                    attrs: {
                        plain: "",
                        size: "large",
                        type: "primary"
                    }
                }, [t._v(t._s(t.$t("history.low_risk")))]) : t._e(), t.isNormalUser && e.highRisk ? r("van-tag", {
                    attrs: {
                        plain: "",
                        size: "large",
                        type: "primary"
                    }
                }, [t._v(t._s(t.$t("history.high_risk")))]) : t._e()], 1), t.isNormalUser ? t._e() : r("van-cell", {
                    attrs: {title: "Pulmonary"},
                    scopedSlots: t._u([{
                        key: "default", fn: function () {
                            return [r("van-progress", {
                                staticStyle: {top: "10px"},
                                attrs: {
                                    percentage: e.pulmonary_percent,
                                    color: "linear-gradient(to right, #3fecff, #6149f6)"
                                }
                            })]
                        }, proxy: !0
                    }], null, !0)
                }), t.isNormalUser ? t._e() : r("van-cell", {
                    attrs: {title: "Ocular"},
                    scopedSlots: t._u([{
                        key: "default", fn: function () {
                            return [r("van-progress", {
                                staticStyle: {top: "10px"},
                                attrs: {
                                    percentage: e.ocular_percent,
                                    color: "linear-gradient(to right, #3fecff, #6149f6)"
                                }
                            })]
                        }, proxy: !0
                    }], null, !0)
                })], 1)])
            })), 0)], 1)
        }, s = [], i = (r("6d67"), r("ac6a"), r("f3e2"), r("ca00")), n = {
            name: "Setting", data: function () {
                return {isLogin: Object(i["a"])(), historys: [], isNormalUser: Object(i["f"])(), historyIsOpen: !1}
            }, methods: {
                checkProperty: function () {
                    var t = this;
                    this.$http.get("http://aimomics.org/api/property/all").then((function (e) {
                        0 == e.data.code && e.data.data.forEach((function (e) {
                            "HISTORY_OPEN" === e.property && (t.historyIsOpen = e.is_active, t.historyIsOpen && t.getHistory())
                        }))
                    }))
                }, getHistory: function () {
                    var t = this, e = {}, r = localStorage.getItem("uuid");
                    this.isLogin || null == r || (e.uuid = r), this.$http.post("http://aimomics.org/api/order/list", e).then((function (e) {
                        0 == e.data.code && (t.historys = e.data.data.map((function (t) {
                            return t.create_date = Object(i["b"])(t.create_date, "yyyy-MM-dd hh:mm:ss"), t.highRisk = parseFloat(t.covid_19_percent) > 30, t
                        })))
                    }))
                }
            }, mounted: function () {
                this.checkProperty()
            }
        }, o = n, c = (r("0fd1"), r("2877")), l = Object(c["a"])(o, a, s, !1, null, "020a7e35", null);
        e["default"] = l.exports
    }, "0fd1": function (t, e, r) {
        "use strict";
        var a = r("e1eb"), s = r.n(a);
        s.a
    }, e1eb: function (t, e, r) {
    }
}]);
//# sourceMappingURL=chunk-2c76ed04.cafb5bcc.js.map