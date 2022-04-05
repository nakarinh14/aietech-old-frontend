(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-d42a0070"], {
    6404: function (t, e, n) {
        "use strict";
        var c = n("8a0b4"), i = n.n(c);
        i.a
    }, "8a0b4": function (t, e, n) {
    }, "8cb1": function (t, e, n) {
        "use strict";
        n.r(e);
        var c = function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "close-page"}, ["zh" === t.language ? n("div", {staticClass: "close-tip-title"}, [t._v("\n    " + t._s(t.closeTip.title) + "\n  ")]) : t._e(), "en" === t.language ? n("div", {staticClass: "close-tip-title"}, [t._v("\n    " + t._s(t.closeTip.title_en) + "\n  ")]) : t._e(), "hk" === t.language ? n("div", {staticClass: "close-tip-title"}, [t._v("\n    " + t._s(t.closeTip.title_hk) + "\n  ")]) : t._e(), "zh" === t.language ? n("div", {staticClass: "close-tip-content"}, [t._v("\n    " + t._s(t.closeTip.content) + "\n  ")]) : t._e(), "en" === t.language ? n("div", {staticClass: "close-tip-content"}, [t._v("\n    " + t._s(t.closeTip.content_en) + "\n  ")]) : t._e(), "hk" === t.language ? n("div", {staticClass: "close-tip-content"}, [t._v("\n    " + t._s(t.closeTip.content_hk) + "\n  ")]) : t._e()])
        }, i = [], l = (n("ac6a"), n("f3e2"), n("12cb")), a = {
            name: "closeTip", data: function () {
                return {closeTip: {}, language: Object(l["b"])()}
            }, created: function () {
                this.checkProperty()
            }, methods: {
                checkProperty: function () {
                    var t = this;
                    this.$http.get("http://aimomics.org/api/property/all").then((function (e) {
                        0 == e.data.code && e.data.data.forEach((function (e) {
                            "CLOSE_TIP" === e.property && ("" !== e.title_en && null != e.title_en || (e.title_en = e.title), "" !== e.title_hk && null != e.title_hk || (e.title_hk = e.title), "" !== e.content_en && null != e.content_en || (e.content_en = e.content), "" !== e.content_hk && null != e.content_hk || (e.content_hk = e.content), t.closeTip = e)
                        }))
                    }))
                }
            }
        }, s = a, o = (n("6404"), n("2877")), _ = Object(o["a"])(s, c, i, !1, null, "6097a64d", null);
        e["default"] = _.exports
    }
}]);
//# sourceMappingURL=chunk-d42a0070.4a27f23b.js.map