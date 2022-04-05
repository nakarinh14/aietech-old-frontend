(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-77388b48"], {
    "400c": function (t, s) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACjklEQVRYR+2XTYiNYRiGr7sslI1IYiEs5GchRWQkk1AiJWSwoCxYkRhLY+mniRULZRb+QlMihWQSoZQs/GTBZEEWZKMspm49es70+eacmTlnZkzKu/nqe7/z3td7v8/zvM8Rozw0yvr8mwC2xwDHgdXp4F2gVVKP7VnABWBRyd2bQLukruL7uh2wPQ64CGwoCdwAtgOTgAfA9CrH2yWpuWEA2xOAS8CaXORIPo/m8w6wTdK3oojtFQmFpD82PWgHbE9J8VgsxmFJcQzYbgWO5fuwOCA+VyCGDGB7RoovyUX3Szpd2uU+4FS+e5oQHxKwcQdsz07xBbn4Xklnq6Wv7T3AmZx7kRBvG3bA9nzgMjAnF90lqaO/2mF7J3A+v3kDtEh6advAE0lLBxWEthfnzmfGMUeESwqYAYftlsyUiLH36cSzaj+sGoS2l+fOpwI/U7xzQOXCB7Y3JsRY4FM68bC8Rh8A26tSfCLwPcVv1yNeiP61CTEe+JoQ92oege11wBUgis2XFL/fiHgBYmVCTAZ+AFsl3arM9zpge1PuPMrsxxR/NBTxAsSyhJgG9KQT12O+CBDlM/L1XYo/Hw7xAsTChIi7orckFwGirEb9bgcOAPOAHZICqOFRuJxeFdbulvS7fNfKgki7GM3l26tekv6K0L8LkLvqY0Y1t4bdAdsngIM1juKkpEPFuZEAqGTLH51NZlCfhmMkAdoqkWw7MqitmF6F9Kt5FTcUhLYrDvwH+CsObJF0rRTV9R7BZuDq7/MuNaT9xUB0NNHZ1BpxTTdJeh0f2J4LPAbi2q01OiTtKk/WKsURuU3A7ir9ffzB6Cy3ZtmKRROyviTSDZwLwGqFatBteb13wGC//w/wC98fYjB4Cbj8AAAAAElFTkSuQmCC"
    }, "77c4": function (t, s, i) {
        "use strict";
        var a = i("99d4"), e = i.n(a);
        e.a
    }, "99d4": function (t, s, i) {
    }, b5b1: function (t, s, i) {
        "use strict";
        i.r(s);
        var a = function () {
            var t = this, s = t.$createElement, a = t._self._c || s;
            return a("div", {staticClass: "covid-page mine-layout"}, [a("header", {staticClass: "page-header"}, [a("router-link", {
                staticClass: "header-link",
                attrs: {to: "/index", tag: "span"}
            }, [a("img", {
                staticClass: "header-icon",
                attrs: {src: i("400c")}
            })])], 1), a("section", {staticClass: "mine-header"}, [a("img", {
                staticClass: "header-img",
                attrs: {src: i("f801")}
            }), t.isLogin ? t._e() : a("div", {staticClass: "login-regist"}, [a("router-link", {
                staticClass: "order-item",
                attrs: {to: "/login", tag: "span"}
            }, [t._v(t._s(t.$t("common.login")))]), a("router-link", {
                staticClass: "order-item",
                attrs: {to: "/register", tag: "span"}
            }, [t._v("/" + t._s(t.$t("common.register")))])], 1), t.isLogin ? a("ul", {staticClass: "user-info"}, [a("li", {staticClass: "user-name"}, [t._v(t._s(t.username))])]) : t._e()]), a("section", {staticClass: "mine-content"}, [a("ul", {staticClass: "options-list"}, [a("router-link", {
                staticClass: "option-item",
                attrs: {to: "/mine/history", tag: "li"}
            }, [a("div", {staticClass: "item-info"}, [a("svg-icon", {
                staticClass: "incon",
                attrs: {"icon-class": "shipping-address"}
            }), a("span", [t._v(t._s(t.$t("mine.history")))])], 1), a("van-icon", {
                attrs: {
                    name: "arrow",
                    color: "#DBDBDB"
                }
            })], 1), t.isLogin ? a("router-link", {
                staticClass: "option-item",
                attrs: {to: "/mine/messageCenter", tag: "li"}
            }, [a("div", {staticClass: "item-info"}, [a("svg-icon", {
                staticClass: "incon",
                attrs: {"icon-class": "message-center"}
            }), a("span", [t._v(t._s(t.$t("mine.message_center")))])], 1), a("van-icon", {
                attrs: {
                    color: "#DBDBDB",
                    name: "arrow"
                }
            })], 1) : t._e(), a("router-link", {
                staticClass: "option-item",
                attrs: {to: "/mine/setting", tag: "li"}
            }, [a("div", {staticClass: "item-info"}, [a("svg-icon", {
                staticClass: "incon",
                attrs: {"icon-class": "setting"}
            }), a("span", [t._v(t._s(t.$t("mine.setting")))])], 1), a("van-icon", {
                attrs: {
                    color: "#DBDBDB",
                    name: "arrow"
                }
            })], 1)], 1)])])
        }, e = [], n = i("ca00"), o = {
            name: "", data: function () {
                return {isLogin: Object(n["a"])(), username: Object(n["d"])("username")}
            }, created: function () {
            }, computed: {}, mounted: function () {
                this.$eventBus.$emit("changeTag", 3)
            }, methods: {}
        }, r = o, c = (i("77c4"), i("2877")), l = Object(c["a"])(r, a, e, !1, null, "587c0088", null);
        s["default"] = l.exports
    }, f801: function (t, s, i) {
        t.exports = i.p + "img/header.2873ba3d.png"
    }
}]);
//# sourceMappingURL=chunk-77388b48.537ea8f8.js.map