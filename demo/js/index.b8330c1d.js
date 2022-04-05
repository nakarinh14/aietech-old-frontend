(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"], {
    "1e4b": function (t, e, a) {
        "use strict";
        a.r(e);
        var n = function () {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return a("div", {staticClass: "index"}, [a("router-view", {staticClass: "router-view"})], 1)
        }, i = [], c = (a("ac6a"), a("f3e2"), {
            name: "index", created: function () {
                var t = this;
                this.$http.get("http://aimomics.org/api/property/all").then((function (e) {
                    0 == e.data.code && e.data.data.forEach((function (e) {
                        "CLOSE_TIP" === e.property && e.is_active && "/closeTip" !== t.$route.path && t.$router.push("/closeTip")
                    }))
                }))
            }
        }), r = c, o = (a("c072"), a("2877")), s = Object(o["a"])(r, n, i, !1, null, null, null);
        e["default"] = s.exports
    }, be0a: function (t, e, a) {
    }, c072: function (t, e, a) {
        "use strict";
        var n = a("be0a"), i = a.n(n);
        i.a
    }
}]);
//# sourceMappingURL=index.b8330c1d.js.map