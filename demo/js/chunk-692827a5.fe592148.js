(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-692827a5"], {
    1365: function (t, e, i) {
        /*!
 * PhotoClip - 一款手势驱动的裁图插件
 * @version v3.4.8
 * @author baijunjie
 * @license MIT
 *
 * git - https://github.com/baijunjie/PhotoClip.js.git
 */
        (function (e, n) {
            t.exports = n(i("c8b5"), i("6ef7"), i("6ca8"))
        })(0, (function (t, e, i) {
            return function (t) {
                var e = {};

                function i(n) {
                    if (e[n]) return e[n].exports;
                    var o = e[n] = {i: n, l: !1, exports: {}};
                    return t[n].call(o.exports, o, o.exports, i), o.l = !0, o.exports
                }

                return i.m = t, i.c = e, i.d = function (t, e, n) {
                    i.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n})
                }, i.r = function (t) {
                    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
                }, i.t = function (t, e) {
                    if (1 & e && (t = i(t)), 8 & e) return t;
                    if (4 & e && "object" === typeof t && t && t.__esModule) return t;
                    var n = Object.create(null);
                    if (i.r(n), Object.defineProperty(n, "default", {
                        enumerable: !0,
                        value: t
                    }), 2 & e && "string" != typeof t) for (var o in t) i.d(n, o, function (e) {
                        return t[e]
                    }.bind(null, o));
                    return n
                }, i.n = function (t) {
                    var e = t && t.__esModule ? function () {
                        return t["default"]
                    } : function () {
                        return t
                    };
                    return i.d(e, "a", e), e
                }, i.o = function (t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }, i.p = "", i(i.s = 4)
            }([function (t, e, i) {
                var n, o, r;
                (function (i, s) {
                    o = [], n = s, r = "function" === typeof n ? n.apply(e, o) : n, void 0 === r || (t.exports = r)
                })(0, (function () {
                    "use strict";
                    t.exports = function (t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    }
                }))
            }, function (t, e, i) {
                var n, o, r;
                (function (i, s) {
                    o = [], n = s, r = "function" === typeof n ? n.apply(e, o) : n, void 0 === r || (t.exports = r)
                })(0, (function () {
                    "use strict";

                    function e(t) {
                        return e = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (t) {
                            return typeof t
                        } : function (t) {
                            return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        }, e(t)
                    }

                    t.exports = function (t) {
                        return "object" === e(t)
                    }
                }))
            }, function (t, e, i) {
                var n, o, r;
                (function (i, s) {
                    o = [], n = s, r = "function" === typeof n ? n.apply(e, o) : n, void 0 === r || (t.exports = r)
                })(0, (function () {
                    "use strict";
                    t.exports = function (t) {
                        return "number" === typeof t
                    }
                }))
            }, function (t, e, i) {
                var n, o, r;
                (function (i, s) {
                    o = [], n = s, r = "function" === typeof n ? n.apply(e, o) : n, void 0 === r || (t.exports = r)
                })(0, (function () {
                    "use strict";

                    function e(t) {
                        return e = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (t) {
                            return typeof t
                        } : function (t) {
                            return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        }, e(t)
                    }

                    var i = {};
                    t.exports = function (t, n, o) {
                        "object" !== e(t) && (t = []), "undefined" === typeof t.length && (t = [t]);
                        for (var r, s = [], a = [], h = 0; r = t[h++];) while (r instanceof HTMLElement) {
                            var l = r.nodeName;
                            if (!r.getClientRects().length) {
                                s.push(r), a.push(r.style.display);
                                var c = i[l];
                                if (!c) {
                                    var u = document.createElement(l);
                                    document.body.appendChild(u), c = window.getComputedStyle(u).display, u.parentNode.removeChild(u), "none" === c && (c = "block"), i[l] = c
                                }
                                r.style.display = c
                            }
                            if ("BODY" === l) break;
                            r = r.parentNode
                        }
                        "function" === typeof n && n.call(o || this);
                        var p = s.length;
                        while (p--) s.pop().style.display = a.pop()
                    }
                }))
            }, function (t, e, i) {
                var n, o, r;
                (function (s, a) {
                    o = [e, i(5), i(6), i(7), i(8), i(9), i(10), i(2), i(0), i(14), i(15), i(16), i(3), i(17), i(18), i(19), i(20), i(22)], n = a, r = "function" === typeof n ? n.apply(e, o) : n, void 0 === r || (t.exports = r)
                })(0, (function (i, n, o, r, s, a, h, l, c, u, p, d, f, g, m, v, y, _) {
                    "use strict";

                    function w(t) {
                        if (t && t.__esModule) return t;
                        var e = {};
                        if (null != t) for (var i in t) if (Object.prototype.hasOwnProperty.call(t, i)) {
                            var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, i) : {};
                            n.get || n.set ? Object.defineProperty(e, i, n) : e[i] = t[i]
                        }
                        return e["default"] = t, e
                    }

                    function b(t) {
                        return t && t.__esModule ? t : {default: t}
                    }

                    function S(t) {
                        return S = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (t) {
                            return typeof t
                        } : function (t) {
                            return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        }, S(t)
                    }

                    function x(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }

                    function T(t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }

                    function P(t, e, i) {
                        return e && T(t.prototype, e), i && T(t, i), t
                    }

                    Object.defineProperty(i, "__esModule", {value: !0}), i["default"] = void 0, n = b(n), o = b(o), r = b(r), s = b(s), a = b(a), h = b(h), l = b(l), c = b(c), u = b(u), p = b(p), d = b(d), f = b(f), g = b(g), m = b(m), v = b(v), y = b(y), _ = w(_);
                    var E = !!navigator.userAgent.match(/mobile/i), L = !!navigator.userAgent.match(/android/i),
                        k = (0, g["default"])("transition"), z = (0, g["default"])("transform"), I = function () {
                        }, M = {
                            size: [100, 100],
                            adaptive: "",
                            outputSize: [0, 0],
                            outputType: "jpg",
                            outputQuality: .8,
                            maxZoom: 1,
                            rotateFree: !L,
                            view: "",
                            file: "",
                            ok: "",
                            img: "",
                            loadStart: I,
                            loadComplete: I,
                            loadError: I,
                            done: I,
                            fail: I,
                            lrzOption: {width: L ? 1e3 : void 0, height: L ? 1e3 : void 0, quality: .7},
                            style: {maskColor: "rgba(0,0,0,.5)", maskBorder: "2px dashed #ddd", jpgFillColor: "#fff"},
                            errorMsg: {
                                noSupport: "您的浏览器版本过于陈旧，无法支持裁图功能，请更换新的浏览器！",
                                imgError: "不支持该图片格式，请选择常规格式的图片文件！",
                                imgHandleError: "图片处理失败！请更换其它图片尝试。",
                                imgLoadError: "图片读取失败！请更换其它图片尝试。",
                                noImg: "没有可裁剪的图片！",
                                clipError: "截图失败！当前图片源文件可能存在跨域问题，请确保图片与应用同源。如果您是在本地环境下执行本程序，请更换至服务器环境。"
                            }
                        }, X = function () {
                            function t(e, i) {
                                x(this, t), e = (0, y["default"])(e), e && e.length && (this._$container = e[0], this._options = (0, h["default"])(!0, {}, M, i), void 0 === z && this._options.errorMsg.noSupport && alert(this._options.errorMsg.noSupport), this._init())
                            }

                            return P(t, [{
                                key: "_init", value: function () {
                                    var t = this, e = this._options;
                                    (0, l["default"])(e.size) ? e.size = [e.size, e.size] : (0, c["default"])(e.size) ? ((!(0, l["default"])(e.size[0]) || e.size[0] <= 0) && (e.size[0] = M.size[0]), (!(0, l["default"])(e.size[1]) || e.size[1] <= 0) && (e.size[1] = M.size[1])) : e.size = (0, h["default"])({}, M.size), (0, l["default"])(e.outputSize) ? e.outputSize = [e.outputSize, 0] : (0, c["default"])(e.outputSize) ? ((!(0, l["default"])(e.outputSize[0]) || e.outputSize[0] < 0) && (e.outputSize[0] = M.outputSize[0]), (!(0, l["default"])(e.outputSize[1]) || e.outputSize[1] < 0) && (e.outputSize[1] = M.outputSize[1])) : e.outputSize = (0, h["default"])({}, M.outputSize), "jpg" === e.outputType ? e.outputType = "image/jpeg" : e.outputType = "image/png", (0, c["default"])(e.adaptive) && (this._widthIsPercent = !(!e.adaptive[0] || !(0, u["default"])(e.adaptive[0])) && e.adaptive[0], this._heightIsPercent = !(!e.adaptive[1] || !(0, u["default"])(e.adaptive[1])) && e.adaptive[1]), this._outputWidth = e.outputSize[0], this._outputHeight = e.outputSize[1], this._canvas = document.createElement("canvas"), this._iScroll = null, this._hammerManager = null, this._clipWidth = 0, this._clipHeight = 0, this._clipSizeRatio = 1, this._$img = null, this._imgLoaded = !1, this._containerWidth = 0, this._containerHeight = 0, this._viewList = null, this._fileList = null, this._okList = null, this._$mask = null, this._$mask_left = null, this._$mask_right = null, this._$mask_right = null, this._$mask_bottom = null, this._$clip_frame = null, this._$clipLayer = null, this._$moveLayer = null, this._$rotateLayer = null, this._moveLayerWidth = 0, this._moveLayerHeight = 0, this._moveLayerPaddingLeft = 0, this._moveLayerPaddingTop = 0, this._atRotation = !1, this._rotateLayerWidth = 0, this._rotateLayerHeight = 0, this._rotateLayerX = 0, this._rotateLayerY = 0, this._rotateLayerOriginX = 0, this._rotateLayerOriginY = 0, this._curAngle = 0, (0, s["default"])(this, "_resetScroll", "_rotateCW90", "_fileOnChangeHandle", "_clipImg", "_resize", "size", "load", "clear", "rotate", "scale", "clip", "destroy"), this._initElements(), this._initScroll(), this._initRotationEvent(), this._initFile(), this._resize(), window.addEventListener("resize", this._resize), (this._okList = (0, y["default"])(e.ok)) && this._okList.forEach((function (e) {
                                        e.addEventListener("click", t._clipImg)
                                    })), this._options.img && this._lrzHandle(this._options.img)
                                }
                            }, {
                                key: "_initElements", value: function () {
                                    var t = this._$container, e = t.style, i = {};
                                    i["user-select"] = e["user-select"], i["overflow"] = e["overflow"], i["position"] = e["position"], this._containerOriginStyle = i, (0, m["default"])(t, {
                                        "user-select": "none",
                                        overflow: "hidden"
                                    }), "static" === (0, m["default"])(t, "position") && (0, m["default"])(t, "position", "relative"), this._$clipLayer = (0, p["default"])(t, "photo-clip-layer", {
                                        position: "absolute",
                                        left: "50%",
                                        top: "50%"
                                    }), this._$moveLayer = (0, p["default"])(this._$clipLayer, "photo-clip-move-layer"), this._$rotateLayer = (0, p["default"])(this._$moveLayer, "photo-clip-rotate-layer");
                                    var n = this._$mask = (0, p["default"])(t, "photo-clip-mask", {
                                        position: "absolute",
                                        left: 0,
                                        top: 0,
                                        width: "100%",
                                        height: "100%",
                                        "pointer-events": "none"
                                    }), o = this._options, r = o.style.maskColor, s = o.style.maskBorder;
                                    if (this._$mask_left = (0, p["default"])(n, "photo-clip-mask-left", {
                                        position: "absolute",
                                        left: 0,
                                        right: "50%",
                                        top: "50%",
                                        bottom: "50%",
                                        width: "auto",
                                        "background-color": r
                                    }), this._$mask_right = (0, p["default"])(n, "photo-clip-mask-right", {
                                        position: "absolute",
                                        left: "50%",
                                        right: 0,
                                        top: "50%",
                                        bottom: "50%",
                                        "background-color": r
                                    }), this._$mask_top = (0, p["default"])(n, "photo-clip-mask-top", {
                                        position: "absolute",
                                        left: 0,
                                        right: 0,
                                        top: 0,
                                        bottom: "50%",
                                        "background-color": r
                                    }), this._$mask_bottom = (0, p["default"])(n, "photo-clip-mask-bottom", {
                                        position: "absolute",
                                        left: 0,
                                        right: 0,
                                        top: "50%",
                                        bottom: 0,
                                        "background-color": r
                                    }), this._$clip_frame = (0, p["default"])(n, "photo-clip-area", {
                                        border: s,
                                        position: "absolute",
                                        left: "50%",
                                        top: "50%"
                                    }), this._viewList = (0, y["default"])(o.view), this._viewList) {
                                        var a = [];
                                        this._viewList.forEach((function (t, e) {
                                            var i = t.style, n = {};
                                            n["background-repeat"] = i["background-repeat"], n["background-position"] = i["background-position"], n["background-size"] = i["background-size"], a[e] = n, (0, m["default"])(t, {
                                                "background-repeat": "no-repeat",
                                                "background-position": "center",
                                                "background-size": "contain"
                                            })
                                        })), this._viewOriginStyleList = a
                                    }
                                }
                            }, {
                                key: "_initScroll", value: function () {
                                    var t = this;
                                    this._iScroll = new o["default"](this._$clipLayer, {
                                        zoom: !0,
                                        scrollX: !0,
                                        scrollY: !0,
                                        freeScroll: !0,
                                        mouseWheel: !0,
                                        disablePointer: !0,
                                        disableTouch: !1,
                                        disableMouse: !1,
                                        wheelAction: "zoom",
                                        bounceTime: 300
                                    }), this._iScroll.on("zoomEnd", (function () {
                                        t._calcScale(), t._resizeMoveLayer(), t._refreshScroll()
                                    }))
                                }
                            }, {
                                key: "_resetScroll", value: function () {
                                    var t = this._iScroll;
                                    this._calcScale();
                                    var e = t.scale = t.options.startZoom;
                                    this._resizeMoveLayer(), this._rotateLayerX = 0, this._rotateLayerY = 0, this._curAngle = 0, C(this._$rotateLayer, this._rotateLayerX + this._moveLayerPaddingLeft, this._rotateLayerY + this._moveLayerPaddingTop, this._curAngle), t.scrollTo(.5 * (this._clipWidth - this._moveLayerWidth * e), .5 * (this._clipHeight - this._moveLayerHeight * e)), this._refreshScroll()
                                }
                            }, {
                                key: "_refreshScroll", value: function (t) {
                                    t = t || 0;
                                    var e = this._iScroll, i = e.scale, n = e.options,
                                        o = Math.max(n.zoomMin, Math.min(n.zoomMax, i));
                                    o !== i && e.zoom(o, void 0, void 0, t), e.refresh(t)
                                }
                            }, {
                                key: "_resizeMoveLayer", value: function () {
                                    var t = this._iScroll, e = t.options,
                                        i = Math.max(e.zoomMin, Math.min(e.zoomMax, t.scale)), n = this._rotateLayerWidth,
                                        o = this._rotateLayerHeight, r = this._clipWidth / i, s = this._clipHeight / i,
                                        a = !1;
                                    if (r > n) {
                                        a = !0;
                                        var h = r - n;
                                        n += 2 * h, t.x += (this._moveLayerPaddingLeft - h) * i, this._moveLayerPaddingLeft = h
                                    } else this._moveLayerPaddingLeft = 0;
                                    if (s > o) {
                                        a = !0;
                                        var l = s - o;
                                        o += 2 * l, t.y += (this._moveLayerPaddingTop - l) * i, this._moveLayerPaddingTop = l
                                    } else this._moveLayerPaddingTop = 0;
                                    a && (C(this._$rotateLayer, this._rotateLayerX + this._moveLayerPaddingLeft, this._rotateLayerY + this._moveLayerPaddingTop, this._curAngle), t.scrollTo(t.x, t.y)), this._moveLayerWidth === n && this._moveLayerHeight === o || (this._moveLayerWidth = n, this._moveLayerHeight = o, (0, m["default"])(this._$moveLayer, {
                                        width: n,
                                        height: o
                                    }), this._$clipLayer.appendChild(this._$moveLayer))
                                }
                            }, {
                                key: "_calcScale", value: function () {
                                    var t = this._iScroll, e = t.options, i = this._rotateLayerWidth,
                                        n = this._rotateLayerHeight, o = this._options.maxZoom;
                                    i && n ? (e.zoomMin = Math.min(1, _.getScale(this._clipWidth, this._clipHeight, i, n)), e.zoomMax = o, e.startZoom = Math.min(o, _.getScale(this._containerWidth, this._containerHeight, i, n))) : (e.zoomMin = 1, e.zoomMax = 1, e.startZoom = 1)
                                }
                            }, {
                                key: "_initRotationEvent", value: function () {
                                    var t = this;
                                    if (E) {
                                        this._hammerManager = new n["default"].Manager(this._$moveLayer), this._hammerManager.add(new n["default"].Rotate);
                                        var e, i, o, r = this._options.rotateFree, s = this._iScroll.options.bounceTime;
                                        this._hammerManager.on("rotatestart", (function (n) {
                                            t._atRotation || (e = !0, r ? (i = (n.rotation - t._curAngle) % 360, t._rotateLayerRotateReady(n.center)) : i = n.rotation)
                                        })), this._hammerManager.on("rotatemove", (function (n) {
                                            e && (o = n.rotation - i, r && t._rotateLayerRotate(o))
                                        })), this._hammerManager.on("rotateend rotatecancel", (function (i) {
                                            if (e) {
                                                if (e = !1, !r) return o %= 360, o > 180 ? o -= 360 : o < -180 && (o += 360), void (o > 30 ? t._rotateBy(90, s, i.center) : o < -30 && t._rotateBy(-90, s, i.center));
                                                var n = o % 360;
                                                n < 0 && (n += 360), n < 10 ? o += -n : n > 80 && n < 100 ? o += 90 - n : n > 170 && n < 190 ? o += 180 - n : n > 260 && n < 280 ? o += 270 - n : n > 350 && (o += 360 - n), t._rotateLayerRotateFinish(o, s)
                                            }
                                        }))
                                    } else this._$moveLayer.addEventListener("dblclick", this._rotateCW90)
                                }
                            }, {
                                key: "_rotateCW90", value: function (t) {
                                    this._rotateBy(90, this._iScroll.options.bounceTime, {x: t.clientX, y: t.clientY})
                                }
                            }, {
                                key: "_rotateBy", value: function (t, e, i) {
                                    this._rotateTo(this._curAngle + t, e, i)
                                }
                            }, {
                                key: "_rotateTo", value: function (t, e, i) {
                                    this._atRotation || (this._rotateLayerRotateReady(i), this._rotateLayerRotateFinish(t, e))
                                }
                            }, {
                                key: "_rotateLayerRotateReady", value: function (t) {
                                    var e, i = this._iScroll.scale;
                                    e = t ? _.globalToLoacl(this._$moveLayer, t.x, t.y) : _.loaclToLoacl(this._$moveLayer, this._$clipLayer, .5 * this._clipWidth, .5 * this._clipHeight), e.x /= i, e.y /= i;
                                    var n = {
                                        x: e.x - (this._rotateLayerX + this._moveLayerPaddingLeft),
                                        y: e.y - (this._rotateLayerY + this._moveLayerPaddingTop)
                                    }, o = _.pointRotate(n, -this._curAngle);
                                    this._rotateLayerOriginX = o.x, this._rotateLayerOriginY = o.y;
                                    var r = this._$rotateLayer.getBoundingClientRect();
                                    Y(this._$rotateLayer, this._rotateLayerOriginX, this._rotateLayerOriginY);
                                    var s = this._$rotateLayer.getBoundingClientRect();
                                    this._rotateLayerX += (r.left - s.left) / i, this._rotateLayerY += (r.top - s.top) / i, C(this._$rotateLayer, this._rotateLayerX + this._moveLayerPaddingLeft, this._rotateLayerY + this._moveLayerPaddingTop, this._curAngle)
                                }
                            }, {
                                key: "_rotateLayerRotate", value: function (t) {
                                    C(this._$rotateLayer, this._rotateLayerX + this._moveLayerPaddingLeft, this._rotateLayerY + this._moveLayerPaddingTop, t), this._curAngle = t
                                }
                            }, {
                                key: "_rotateLayerRotateFinish", value: function (t, e) {
                                    var i = this;
                                    C(this._$rotateLayer, this._rotateLayerX + this._moveLayerPaddingLeft, this._rotateLayerY + this._moveLayerPaddingTop, t);
                                    var n = this._iScroll, o = n.scale, r = n.options,
                                        s = this._$rotateLayer.getBoundingClientRect();
                                    this._rotateLayerWidth = s.width / o, this._rotateLayerHeight = s.height / o, Y(this._$rotateLayer, 0, 0);
                                    var a = this._$rotateLayer.getBoundingClientRect();
                                    C(this._$rotateLayer, this._rotateLayerX + this._moveLayerPaddingLeft, this._rotateLayerY + this._moveLayerPaddingTop, 0);
                                    var h = this._$rotateLayer.getBoundingClientRect();
                                    this._rotateLayerX = (h.left - a.left) / o, this._rotateLayerY = (h.top - a.top) / o, this._calcScale(), this._resizeMoveLayer();
                                    var c = this._$moveLayer.getBoundingClientRect(), u = {
                                        x: s.left - this._moveLayerPaddingLeft * o - c.left,
                                        y: s.top - this._moveLayerPaddingTop * o - c.top
                                    };
                                    n.scrollTo(n.x + u.x, n.y + u.y), this._refreshScroll(n.options.bounceTime);
                                    var p = Math.max(r.zoomMin, Math.min(r.zoomMax, o));
                                    if (p !== o && (u.x = u.x / o * p, u.y = u.y / o * p), n.startX += u.x, n.startY += u.y, t !== this._curAngle && e && (0, l["default"])(e) && void 0 !== k) {
                                        u = {
                                            x: (a.left - s.left) / o,
                                            y: (a.top - s.top) / o
                                        }, Y(this._$rotateLayer, this._rotateLayerOriginX, this._rotateLayerOriginY);
                                        var d = this._rotateLayerX + this._moveLayerPaddingLeft + u.x,
                                            f = this._rotateLayerY + this._moveLayerPaddingTop + u.y;
                                        C(this._$rotateLayer, d, f, this._curAngle), this._atRotation = !0, D(this._$rotateLayer, d, f, t, e, (function () {
                                            i._atRotation = !1, i._rotateFinishUpdataElem(t)
                                        }))
                                    } else this._rotateFinishUpdataElem(t)
                                }
                            }, {
                                key: "_rotateFinishUpdataElem", value: function (t) {
                                    Y(this._$rotateLayer, this._rotateLayerOriginX = 0, this._rotateLayerOriginY = 0), C(this._$rotateLayer, this._rotateLayerX + this._moveLayerPaddingLeft, this._rotateLayerY + this._moveLayerPaddingTop, this._curAngle = t % 360)
                                }
                            }, {
                                key: "_initFile", value: function () {
                                    var t = this, e = this._options;
                                    (this._fileList = (0, y["default"])(e.file)) && this._fileList.forEach((function (e) {
                                        E || (0, v["default"])(e, "accept", "image/jpeg, image/x-png, image/png, image/gif"), e.addEventListener("change", t._fileOnChangeHandle)
                                    }))
                                }
                            }, {
                                key: "_fileOnChangeHandle", value: function (t) {
                                    var e = t.target.files;
                                    e.length && this._lrzHandle(e[0])
                                }
                            }, {
                                key: "_lrzHandle", value: function (t) {
                                    var e = this, i = this._options, n = i.errorMsg;
                                    if ("object" === S(t) && t.type && !/image\/\w+/.test(t.type)) return i.loadError.call(this, n.imgError), !1;
                                    this._imgLoaded = !1, i.loadStart.call(this, t);
                                    try {
                                        (0, r["default"])(t, i.lrzOption).then((function (t) {
                                            e._clearImg(), e._createImg(t.base64)
                                        }))["catch"]((function (t) {
                                            i.loadError.call(e, n.imgHandleError, t)
                                        }))
                                    } catch (o) {
                                        throw i.loadError.call(this, n.imgHandleError, o), o
                                    }
                                }
                            }, {
                                key: "_clearImg", value: function () {
                                    this._$img && (this._$img.onload = null, this._$img.onerror = null, (0, d["default"])(this._$img), this._$img = null, this._imgLoaded = !1)
                                }
                            }, {
                                key: "_createImg", value: function (t) {
                                    var e = this, i = this._options, n = i.errorMsg;
                                    this._$img = new Image, (0, m["default"])(this._$img, {
                                        display: "block",
                                        "user-select": "none",
                                        "pointer-events": "none"
                                    }), this._$img.onload = function (t) {
                                        var n = t.target;
                                        e._imgLoaded = !0, i.loadComplete.call(e, n), e._$rotateLayer.appendChild(n), e._rotateLayerWidth = n.naturalWidth, e._rotateLayerHeight = n.naturalHeight, (0, m["default"])(e._$rotateLayer, {
                                            width: e._rotateLayerWidth,
                                            height: e._rotateLayerHeight
                                        }), (0, f["default"])([n, e._$moveLayer], e._resetScroll)
                                    }, this._$img.onerror = function (t) {
                                        i.loadError.call(e, n.imgLoadError, t)
                                    }, (0, v["default"])(this._$img, "src", t)
                                }
                            }, {
                                key: "_clipImg", value: function () {
                                    var t = this._options, e = t.errorMsg;
                                    if (this._imgLoaded) {
                                        var i = _.loaclToLoacl(this._$moveLayer, this._$clipLayer), n = this._iScroll.scale,
                                            o = this._canvas.getContext("2d"), r = 1, s = 1;
                                        this._outputWidth || this._outputHeight ? (this._canvas.width = this._outputWidth, this._canvas.height = this._outputHeight, r = this._outputWidth / this._clipWidth * n, s = this._outputHeight / this._clipHeight * n) : (this._canvas.width = this._clipWidth / n, this._canvas.height = this._clipHeight / n), o.clearRect(0, 0, this._canvas.width, this._canvas.height), o.fillStyle = "image/png" === t.outputType ? "transparent" : t.style.jpgFillColor, o.fillRect(0, 0, this._canvas.width, this._canvas.height), o.save(), o.scale(r, s), o.translate(this._rotateLayerX + this._moveLayerPaddingLeft - i.x / n, this._rotateLayerY + this._moveLayerPaddingTop - i.y / n), o.rotate(this._curAngle * Math.PI / 180), o.drawImage(this._$img, 0, 0), o.restore();
                                        try {
                                            var a = this._canvas.toDataURL(t.outputType, t.outputQuality);
                                            return this._viewList && this._viewList.forEach((function (t) {
                                                (0, m["default"])(t, "background-image", "url(".concat(a, ")"))
                                            })), t.done.call(this, a), a
                                        } catch (h) {
                                            throw t.fail.call(this, e.clipError), h
                                        }
                                    } else t.fail.call(this, e.noImg)
                                }
                            }, {
                                key: "_resize", value: function (t, e) {
                                    (0, f["default"])(this._$container, (function () {
                                        this._containerWidth = this._$container.offsetWidth, this._containerHeight = this._$container.offsetHeight
                                    }), this);
                                    var i = this._options.size, n = this._clipWidth, o = this._clipHeight;
                                    if ((0, l["default"])(t) && (i[0] = t), (0, l["default"])(e) && (i[1] = e), this._widthIsPercent || this._heightIsPercent) {
                                        var r = i[0] / i[1];
                                        this._widthIsPercent && (this._clipWidth = this._containerWidth / 100 * parseFloat(this._widthIsPercent), this._heightIsPercent || (this._clipHeight = this._clipWidth / r)), this._heightIsPercent && (this._clipHeight = this._containerHeight / 100 * parseFloat(this._heightIsPercent), this._widthIsPercent || (this._clipWidth = this._clipHeight * r))
                                    } else this._clipWidth = i[0], this._clipHeight = i[1];
                                    var s = this._clipWidth, a = this._clipHeight;
                                    if (this._clipSizeRatio = s / a, this._outputWidth && !this._outputHeight && (this._outputHeight = this._outputWidth / this._clipSizeRatio), this._outputHeight && !this._outputWidth && (this._outputWidth = this._outputHeight * this._clipSizeRatio), (0, m["default"])(this._$clipLayer, {
                                        width: s,
                                        height: a,
                                        "margin-left": -s / 2,
                                        "margin-top": -a / 2
                                    }), (0, m["default"])(this._$mask_left, {
                                        "margin-right": s / 2,
                                        "margin-top": -a / 2,
                                        "margin-bottom": -a / 2
                                    }), (0, m["default"])(this._$mask_right, {
                                        "margin-left": s / 2,
                                        "margin-top": -a / 2,
                                        "margin-bottom": -a / 2
                                    }), (0, m["default"])(this._$mask_top, {"margin-bottom": a / 2}), (0, m["default"])(this._$mask_bottom, {"margin-top": a / 2}), (0, m["default"])(this._$clip_frame, {
                                        width: s,
                                        height: a
                                    }), (0, m["default"])(this._$clip_frame, z + "transform", "translate(-50%, -50%)"), s !== n || a !== o) {
                                        this._calcScale(), this._resizeMoveLayer(), this._refreshScroll();
                                        var h = this._iScroll, c = h.scale, u = .5 * (s - n) * c, p = .5 * (a - o) * c;
                                        h.scrollBy(u, p)
                                    }
                                }
                            }, {
                                key: "size", value: function (t, e) {
                                    return this._resize(t, e), this
                                }
                            }, {
                                key: "load", value: function (t) {
                                    return this._lrzHandle(t), this
                                }
                            }, {
                                key: "clear", value: function () {
                                    return this._clearImg(), this._resetScroll(), this._fileList && this._fileList.forEach((function (t) {
                                        t.value = ""
                                    })), this
                                }
                            }, {
                                key: "rotate", value: function (t, e) {
                                    return void 0 === t ? this._curAngle : (this._rotateTo(t, e), this)
                                }
                            }, {
                                key: "scale", value: function (t, e) {
                                    return void 0 === t ? this._iScroll.scale : (this._iScroll.zoom(t, void 0, void 0, e), this)
                                }
                            }, {
                                key: "clip", value: function () {
                                    return this._clipImg()
                                }
                            }, {
                                key: "destroy", value: function () {
                                    var t = this;
                                    window.removeEventListener("resize", this._resize), this._$container.removeChild(this._$clipLayer), this._$container.removeChild(this._$mask), (0, m["default"])(this._$container, this._containerOriginStyle), this._iScroll && this._iScroll.destroy(), this._hammerManager ? (this._hammerManager.off("rotatemove"), this._hammerManager.off("rotateend"), this._hammerManager.destroy()) : this._$moveLayer.removeEventListener("dblclick", this._rotateCW90), this._$img && (this._$img.onload = null, this._$img.onerror = null), this._viewList && this._viewList.forEach((function (e, i) {
                                        (0, m["default"])(e, t._viewOriginStyleList[i])
                                    })), this._fileList && this._fileList.forEach((function (e) {
                                        e.removeEventListener("change", t._fileOnChangeHandle), e.value = null
                                    })), this._okList && this._okList.forEach((function (e) {
                                        e.removeEventListener("click", t._clipImg)
                                    })), (0, a["default"])(this)
                                }
                            }]), t
                        }();

                    function Y(t, e, i) {
                        e = (e || 0).toFixed(2), i = (i || 0).toFixed(2), (0, m["default"])(t, z + "transform-origin", e + "px " + i + "px")
                    }

                    function C(t, e, i, n) {
                        e = e.toFixed(2), i = i.toFixed(2), n = n.toFixed(2), (0, m["default"])(t, z + "transform", "translateZ(0) translate(" + e + "px," + i + "px) rotate(" + n + "deg)")
                    }

                    function D(t, e, i, n, o, r) {
                        (0, m["default"])(t, z + "transform"), (0, m["default"])(t, z + "transition", z + "transform " + o + "ms cubic-bezier(0.1, 0.57, 0.1, 1)"), C(t, e, i, n), setTimeout((function () {
                            (0, m["default"])(t, z + "transition", ""), r()
                        }), o)
                    }

                    i["default"] = X, t.exports = e.default
                }))
            }, function (e, i) {
                e.exports = t
            }, function (t, i) {
                t.exports = e
            }, function (t, e) {
                t.exports = i
            }, function (t, e, i) {
                var n, o, r;
                (function (i, s) {
                    o = [], n = s, r = "function" === typeof n ? n.apply(e, o) : n, void 0 === r || (t.exports = r)
                })(0, (function () {
                    "use strict";
                    t.exports = function (t) {
                        for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
                        i.forEach((function (e) {
                            t[e] = t[e].bind(t)
                        }))
                    }
                }))
            }, function (t, e, i) {
                var n, o, r;
                (function (i, s) {
                    o = [], n = s, r = "function" === typeof n ? n.apply(e, o) : n, void 0 === r || (t.exports = r)
                })(0, (function () {
                    "use strict";
                    t.exports = function (t) {
                        Object.getOwnPropertyNames(t).forEach((function (e) {
                            delete t[e]
                        })), t.__proto__ = Object.prototype
                    }
                }))
            }, function (t, e, i) {
                var n, o, r;
                (function (i, s) {
                    o = [], n = s, r = "function" === typeof n ? n.apply(e, o) : n, void 0 === r || (t.exports = r)
                })(0, (function () {
                    "use strict";
                    var e = i(0), n = i(1), o = i(11), r = i(12), s = i(13);
                    t.exports = function t() {
                        var i, a, h, l, c, u = arguments[0] || {}, p = (Object.prototype.toString, 1),
                            d = arguments.length, f = !1;
                        for (o(u) && (f = u, u = arguments[p] || {}, p++), n(u) || r(u) || (u = {}), p === d && (u = this, p--); p < d; p++) if (null != (i = arguments[p])) for (a in i) h = u[a], l = i[a], u !== l && (f && l && ((c = e(l)) || s(l)) ? (c ? (c = !1, h = h && e(h) ? h : []) : h = h && s(h) ? h : {}, u[a] = t(f, h, l)) : void 0 !== l && (u[a] = l));
                        return u
                    }
                }))
            }, function (t, e, i) {
                var n, o, r;
                (function (i, s) {
                    o = [], n = s, r = "function" === typeof n ? n.apply(e, o) : n, void 0 === r || (t.exports = r)
                })(0, (function () {
                    "use strict";
                    t.exports = function (t) {
                        return "boolean" === typeof t
                    }
                }))
            }, function (t, e, i) {
                var n, o, r;
                (function (i, s) {
                    o = [], n = s, r = "function" === typeof n ? n.apply(e, o) : n, void 0 === r || (t.exports = r)
                })(0, (function () {
                    "use strict";
                    t.exports = function (t) {
                        return "function" === typeof t
                    }
                }))
            }, function (t, e, i) {
                var n, o, r;
                (function (i, s) {
                    o = [], n = s, r = "function" === typeof n ? n.apply(e, o) : n, void 0 === r || (t.exports = r)
                })(0, (function () {
                    "use strict";
                    t.exports = function (t) {
                        return "[object Object]" === Object.prototype.toString.call(t)
                    }
                }))
            }, function (t, e, i) {
                var n, o, r;
                (function (i, s) {
                    o = [], n = s, r = "function" === typeof n ? n.apply(e, o) : n, void 0 === r || (t.exports = r)
                })(0, (function () {
                    "use strict";
                    t.exports = function (t) {
                        return /%$/.test(t + "")
                    }
                }))
            }, function (t, e, i) {
                var n, o, r;
                (function (i, s) {
                    o = [], n = s, r = "function" === typeof n ? n.apply(e, o) : n, void 0 === r || (t.exports = r)
                })(0, (function () {
                    "use strict";

                    function e(t) {
                        return e = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (t) {
                            return typeof t
                        } : function (t) {
                            return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        }, e(t)
                    }

                    t.exports = function (t, i, n, o) {
                        var r = document.createElement("DIV");
                        if ("object" === e(i) && (o = i, i = null), "object" === e(n) && (o = n, n = null), "object" === e(o)) for (var s in o) r.style[s] = o[s];
                        return i && (r.className = i), n && (r.id = n), t.appendChild(r), r
                    }
                }))
            }, function (t, e, i) {
                var n, o, r;
                (function (i, s) {
                    o = [], n = s, r = "function" === typeof n ? n.apply(e, o) : n, void 0 === r || (t.exports = r)
                })(0, (function () {
                    "use strict";
                    t.exports = function (t) {
                        t.parentNode && t.parentNode.removeChild(t)
                    }
                }))
            }, function (t, e, i) {
                var n, o, r;
                (function (i, s) {
                    o = [], n = s, r = "function" === typeof n ? n.apply(e, o) : n, void 0 === r || (t.exports = r)
                })(0, (function () {
                    "use strict";
                    t.exports = function (t, e) {
                        var i = e ? t : "", n = document.documentElement;
                        if (t in n.style) return i;
                        for (var o, r = t.charAt(0).toUpperCase() + t.substr(1), s = ["Webkit", "Moz", "ms", "O"], a = 0; o = s[a++];) if (o + r in n.style) return "-" + o.toLowerCase() + "-" + i;
                        return i
                    }
                }))
            }, function (t, e, i) {
                var n, o, r;
                (function (i, s) {
                    o = [], n = s, r = "function" === typeof n ? n.apply(e, o) : n, void 0 === r || (t.exports = r)
                })(0, (function () {
                    "use strict";
                    var e = i(1), n = i(2), o = {
                        animationIterationCount: !0,
                        columnCount: !0,
                        fillOpacity: !0,
                        flexGrow: !0,
                        flexShrink: !0,
                        fontWeight: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0
                    };
                    t.exports = function (t, i, r) {
                        if (e(i)) {
                            for (var s in i) r = i[s], n(r) && !o[i] && (r += "px"), t.style[s] = r;
                            return t
                        }
                        return void 0 === r ? window.getComputedStyle(t)[i] : (n(r) && !o[i] && (r += "px"), t.style[i] = r, t)
                    }
                }))
            }, function (t, e, i) {
                var n, o, r;
                (function (i, s) {
                    o = [], n = s, r = "function" === typeof n ? n.apply(e, o) : n, void 0 === r || (t.exports = r)
                })(0, (function () {
                    "use strict";

                    function e(t) {
                        return e = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (t) {
                            return typeof t
                        } : function (t) {
                            return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        }, e(t)
                    }

                    t.exports = function (t, i, n) {
                        if ("object" === e(i)) {
                            for (var o in i) t[o] = i[o];
                            return t
                        }
                        return void 0 === n ? t[i] : (t[i] = n, t)
                    }
                }))
            }, function (t, e, i) {
                var n, o, r;
                (function (i, s) {
                    o = [], n = s, r = "function" === typeof n ? n.apply(e, o) : n, void 0 === r || (t.exports = r)
                })(0, (function () {
                    "use strict";

                    function e(t) {
                        return e = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (t) {
                            return typeof t
                        } : function (t) {
                            return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        }, e(t)
                    }

                    var n = i(21);
                    t.exports = function (t, i) {
                        return t instanceof HTMLElement ? [t] : "object" === e(t) && t.length ? n(t) : t && "string" === typeof t ? ("string" === typeof i && (i = document.querySelector(i)), i instanceof HTMLElement || (i = document), n(i.querySelectorAll(t))) : []
                    }
                }))
            }, function (t, e, i) {
                var n, o, r;
                (function (i, s) {
                    o = [], n = s, r = "function" === typeof n ? n.apply(e, o) : n, void 0 === r || (t.exports = r)
                })(0, (function () {
                    "use strict";
                    t.exports = function (t) {
                        return Array.prototype.map.call(t, (function (t) {
                            return t
                        }))
                    }
                }))
            }, function (t, e, i) {
                var n, o, r;
                (function (s, a) {
                    o = [e, i(3)], n = a, r = "function" === typeof n ? n.apply(e, o) : n, void 0 === r || (t.exports = r)
                })(0, (function (t, e) {
                    "use strict";

                    function i(t) {
                        return t && t.__esModule ? t : {default: t}
                    }

                    function n(t, e, i, n) {
                        var o = t / i, r = e / n;
                        return o > r ? o : r
                    }

                    function o(t, e) {
                        var i = r(e), n = Math.sin(i), o = Math.cos(i);
                        return {x: o * t.x - n * t.y, y: o * t.y + n * t.x}
                    }

                    function r(t) {
                        return t / 180 * Math.PI
                    }

                    function s(t, i, n, o) {
                        var r, s;
                        return n = n || 0, o = o || 0, (0, e["default"])([t, i], (function () {
                            r = t.getBoundingClientRect(), s = i.getBoundingClientRect()
                        })), {x: s.left - r.left + n, y: s.top - r.top + o}
                    }

                    function a(t, i, n) {
                        var o;
                        return i = i || 0, n = n || 0, (0, e["default"])(t, (function () {
                            o = t.getBoundingClientRect()
                        })), {x: i - o.left, y: n - o.top}
                    }

                    Object.defineProperty(t, "__esModule", {value: !0}), t.getScale = n, t.pointRotate = o, t.angleToRadian = r, t.loaclToLoacl = s, t.globalToLoacl = a, e = i(e)
                }))
            }])
        }))
    }, "6ca8": function (t, e, i) {
        !function (e, i) {
            t.exports = i()
        }(0, (function () {
            return function (t) {
                function e(n) {
                    if (i[n]) return i[n].exports;
                    var o = i[n] = {exports: {}, id: n, loaded: !1};
                    return t[n].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
                }

                var i = {};
                return e.m = t, e.c = i, e.p = "", e(0)
            }([function (t, e, i) {
                i(6), i(7), t.exports = i(8)
            }, function (t, e, i) {
                (function (e) {
                    !function (i) {
                        function n(t, e) {
                            return function () {
                                t.apply(e, arguments)
                            }
                        }

                        function o(t) {
                            if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
                            if ("function" != typeof t) throw new TypeError("not a function");
                            this._state = null, this._value = null, this._deferreds = [], c(t, n(s, this), n(a, this))
                        }

                        function r(t) {
                            var e = this;
                            return null === this._state ? void this._deferreds.push(t) : void u((function () {
                                var i = e._state ? t.onFulfilled : t.onRejected;
                                if (null !== i) {
                                    var n;
                                    try {
                                        n = i(e._value)
                                    } catch (o) {
                                        return void t.reject(o)
                                    }
                                    t.resolve(n)
                                } else (e._state ? t.resolve : t.reject)(e._value)
                            }))
                        }

                        function s(t) {
                            try {
                                if (t === this) throw new TypeError("A promise cannot be resolved with itself.");
                                if (t && ("object" == typeof t || "function" == typeof t)) {
                                    var e = t.then;
                                    if ("function" == typeof e) return void c(n(e, t), n(s, this), n(a, this))
                                }
                                this._state = !0, this._value = t, h.call(this)
                            } catch (i) {
                                a.call(this, i)
                            }
                        }

                        function a(t) {
                            this._state = !1, this._value = t, h.call(this)
                        }

                        function h() {
                            for (var t = 0, e = this._deferreds.length; e > t; t++) r.call(this, this._deferreds[t]);
                            this._deferreds = null
                        }

                        function l(t, e, i, n) {
                            this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.resolve = i, this.reject = n
                        }

                        function c(t, e, i) {
                            var n = !1;
                            try {
                                t((function (t) {
                                    n || (n = !0, e(t))
                                }), (function (t) {
                                    n || (n = !0, i(t))
                                }))
                            } catch (o) {
                                if (n) return;
                                n = !0, i(o)
                            }
                        }

                        var u = "function" == typeof e && e || function (t) {
                            setTimeout(t, 1)
                        }, p = Array.isArray || function (t) {
                            return "[object Array]" === Object.prototype.toString.call(t)
                        };
                        o.prototype["catch"] = function (t) {
                            return this.then(null, t)
                        }, o.prototype.then = function (t, e) {
                            var i = this;
                            return new o((function (n, o) {
                                r.call(i, new l(t, e, n, o))
                            }))
                        }, o.all = function () {
                            var t = Array.prototype.slice.call(1 === arguments.length && p(arguments[0]) ? arguments[0] : arguments);
                            return new o((function (e, i) {
                                function n(r, s) {
                                    try {
                                        if (s && ("object" == typeof s || "function" == typeof s)) {
                                            var a = s.then;
                                            if ("function" == typeof a) return void a.call(s, (function (t) {
                                                n(r, t)
                                            }), i)
                                        }
                                        t[r] = s, 0 === --o && e(t)
                                    } catch (h) {
                                        i(h)
                                    }
                                }

                                if (0 === t.length) return e([]);
                                for (var o = t.length, r = 0; r < t.length; r++) n(r, t[r])
                            }))
                        }, o.resolve = function (t) {
                            return t && "object" == typeof t && t.constructor === o ? t : new o((function (e) {
                                e(t)
                            }))
                        }, o.reject = function (t) {
                            return new o((function (e, i) {
                                i(t)
                            }))
                        }, o.race = function (t) {
                            return new o((function (e, i) {
                                for (var n = 0, o = t.length; o > n; n++) t[n].then(e, i)
                            }))
                        }, o._setImmediateFn = function (t) {
                            u = t
                        }, o.prototype.always = function (t) {
                            var e = this.constructor;
                            return this.then((function (i) {
                                return e.resolve(t()).then((function () {
                                    return i
                                }))
                            }), (function (i) {
                                return e.resolve(t()).then((function () {
                                    throw i
                                }))
                            }))
                        }, "undefined" != typeof t && t.exports ? t.exports = o : i.Promise || (i.Promise = o)
                    }(this)
                }).call(e, i(2).setImmediate)
            }, function (t, e, i) {
                (function (t, n) {
                    function o(t, e) {
                        this._id = t, this._clearFn = e
                    }

                    var r = i(3).nextTick, s = Function.prototype.apply, a = Array.prototype.slice, h = {}, l = 0;
                    e.setTimeout = function () {
                        return new o(s.call(setTimeout, window, arguments), clearTimeout)
                    }, e.setInterval = function () {
                        return new o(s.call(setInterval, window, arguments), clearInterval)
                    }, e.clearTimeout = e.clearInterval = function (t) {
                        t.close()
                    }, o.prototype.unref = o.prototype.ref = function () {
                    }, o.prototype.close = function () {
                        this._clearFn.call(window, this._id)
                    }, e.enroll = function (t, e) {
                        clearTimeout(t._idleTimeoutId), t._idleTimeout = e
                    }, e.unenroll = function (t) {
                        clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
                    }, e._unrefActive = e.active = function (t) {
                        clearTimeout(t._idleTimeoutId);
                        var e = t._idleTimeout;
                        e >= 0 && (t._idleTimeoutId = setTimeout((function () {
                            t._onTimeout && t._onTimeout()
                        }), e))
                    }, e.setImmediate = "function" == typeof t ? t : function (t) {
                        var i = l++, n = !(arguments.length < 2) && a.call(arguments, 1);
                        return h[i] = !0, r((function () {
                            h[i] && (n ? t.apply(null, n) : t.call(null), e.clearImmediate(i))
                        })), i
                    }, e.clearImmediate = "function" == typeof n ? n : function (t) {
                        delete h[t]
                    }
                }).call(e, i(2).setImmediate, i(2).clearImmediate)
            }, function (t, e) {
                function i() {
                    l = !1, s.length ? h = s.concat(h) : c = -1, h.length && n()
                }

                function n() {
                    if (!l) {
                        var t = setTimeout(i);
                        l = !0;
                        for (var e = h.length; e;) {
                            for (s = h, h = []; ++c < e;) s && s[c].run();
                            c = -1, e = h.length
                        }
                        s = null, l = !1, clearTimeout(t)
                    }
                }

                function o(t, e) {
                    this.fun = t, this.array = e
                }

                function r() {
                }

                var s, a = t.exports = {}, h = [], l = !1, c = -1;
                a.nextTick = function (t) {
                    var e = new Array(arguments.length - 1);
                    if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
                    h.push(new o(t, e)), 1 !== h.length || l || setTimeout(n, 0)
                }, o.prototype.run = function () {
                    this.fun.apply(null, this.array)
                }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = r, a.addListener = r, a.once = r, a.off = r, a.removeListener = r, a.removeAllListeners = r, a.emit = r, a.binding = function (t) {
                    throw new Error("process.binding is not supported")
                }, a.cwd = function () {
                    return "/"
                }, a.chdir = function (t) {
                    throw new Error("process.chdir is not supported")
                }, a.umask = function () {
                    return 0
                }
            }, function (t, e) {
                function i() {
                    var t = ~navigator.userAgent.indexOf("Android") && ~navigator.vendor.indexOf("Google") && !~navigator.userAgent.indexOf("Chrome");
                    return t && navigator.userAgent.match(/AppleWebKit\/(\d+)/).pop() <= 534 || /MQQBrowser/g.test(navigator.userAgent)
                }

                var n = function () {
                    try {
                        return new Blob, !0
                    } catch (t) {
                        return !1
                    }
                }() ? window.Blob : function (t, e) {
                    var i = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MSBlobBuilder || window.MozBlobBuilder);
                    return t.forEach((function (t) {
                        i.append(t)
                    })), i.getBlob(e ? e.type : void 0)
                }, o = function () {
                    function t() {
                        var t = this, i = [],
                            o = Array(21).join("-") + (+new Date * (1e16 * Math.random())).toString(36),
                            r = XMLHttpRequest.prototype.send;
                        this.getParts = function () {
                            return i.toString()
                        }, this.append = function (t, e, n) {
                            i.push("--" + o + '\r\nContent-Disposition: form-data; name="' + t + '"'), e instanceof Blob ? (i.push('; filename="' + (n || "blob") + '"\r\nContent-Type: ' + e.type + "\r\n\r\n"), i.push(e)) : i.push("\r\n\r\n" + e), i.push("\r\n")
                        }, e++, XMLHttpRequest.prototype.send = function (s) {
                            var a, h, l = this;
                            s === t ? (i.push("--" + o + "--\r\n"), h = new n(i), a = new FileReader, a.onload = function () {
                                r.call(l, a.result)
                            }, a.onerror = function (t) {
                                throw t
                            }, a.readAsArrayBuffer(h), this.setRequestHeader("Content-Type", "multipart/form-data; boundary=" + o), e--, 0 == e && (XMLHttpRequest.prototype.send = r)) : r.call(this, s)
                        }
                    }

                    var e = 0;
                    return t.prototype = Object.create(FormData.prototype), t
                }();
                t.exports = {Blob: n, FormData: i() ? o : FormData}
            }, function (t, e, i) {
                var n, o;
                (function () {
                    function i(t) {
                        return !!t.exifdata
                    }

                    function r(t, e) {
                        e = e || t.match(/^data\:([^\;]+)\;base64,/im)[1] || "", t = t.replace(/^data\:([^\;]+)\;base64,/gim, "");
                        for (var i = atob(t), n = i.length, o = new ArrayBuffer(n), r = new Uint8Array(o), s = 0; n > s; s++) r[s] = i.charCodeAt(s);
                        return o
                    }

                    function s(t, e) {
                        var i = new XMLHttpRequest;
                        i.open("GET", t, !0), i.responseType = "blob", i.onload = function (t) {
                            (200 == this.status || 0 === this.status) && e(this.response)
                        }, i.send()
                    }

                    function a(t, e) {
                        function i(i) {
                            var n = h(i), o = l(i);
                            t.exifdata = n || {}, t.iptcdata = o || {}, e && e.call(t)
                        }

                        if (t.src) if (/^data\:/i.test(t.src)) {
                            var n = r(t.src);
                            i(n)
                        } else if (/^blob\:/i.test(t.src)) {
                            var o = new FileReader;
                            o.onload = function (t) {
                                i(t.target.result)
                            }, s(t.src, (function (t) {
                                o.readAsArrayBuffer(t)
                            }))
                        } else {
                            var a = new XMLHttpRequest;
                            a.onload = function () {
                                200 == this.status || 0 === this.status ? i(a.response) : e(new Error("Could not load image")), a = null
                            }, a.open("GET", t.src, !0), a.responseType = "arraybuffer", a.send(null)
                        } else if (window.FileReader && (t instanceof window.Blob || t instanceof window.File)) {
                            o = new FileReader;
                            o.onload = function (t) {
                                g && console.log("Got file of length " + t.target.result.byteLength), i(t.target.result)
                            }, o.readAsArrayBuffer(t)
                        }
                    }

                    function h(t) {
                        var e = new DataView(t);
                        if (g && console.log("Got file of length " + t.byteLength), 255 != e.getUint8(0) || 216 != e.getUint8(1)) return g && console.log("Not a valid JPEG"), !1;
                        for (var i, n = 2, o = t.byteLength; o > n;) {
                            if (255 != e.getUint8(n)) return g && console.log("Not a valid marker at offset " + n + ", found: " + e.getUint8(n)), !1;
                            if (i = e.getUint8(n + 1), g && console.log(i), 225 == i) return g && console.log("Found 0xFFE1 marker"), f(e, n + 4, e.getUint16(n + 2) - 2);
                            n += 2 + e.getUint16(n + 2)
                        }
                    }

                    function l(t) {
                        var e = new DataView(t);
                        if (g && console.log("Got file of length " + t.byteLength), 255 != e.getUint8(0) || 216 != e.getUint8(1)) return g && console.log("Not a valid JPEG"), !1;
                        for (var i = 2, n = t.byteLength, o = function (t, e) {
                            return 56 === t.getUint8(e) && 66 === t.getUint8(e + 1) && 73 === t.getUint8(e + 2) && 77 === t.getUint8(e + 3) && 4 === t.getUint8(e + 4) && 4 === t.getUint8(e + 5)
                        }; n > i;) {
                            if (o(e, i)) {
                                var r = e.getUint8(i + 7);
                                r % 2 !== 0 && (r += 1), 0 === r && (r = 4);
                                var s = i + 8 + r, a = e.getUint16(i + 6 + r);
                                return c(t, s, a)
                            }
                            i++
                        }
                    }

                    function c(t, e, i) {
                        for (var n, o, r, s, a = new DataView(t), h = {}, l = e; e + i > l;) 28 === a.getUint8(l) && 2 === a.getUint8(l + 1) && (s = a.getUint8(l + 2), s in b && (r = a.getInt16(l + 3), r + 5, o = b[s], n = d(a, l + 5, r), h.hasOwnProperty(o) ? h[o] instanceof Array ? h[o].push(n) : h[o] = [h[o], n] : h[o] = n)), l++;
                        return h
                    }

                    function u(t, e, i, n, o) {
                        var r, s, a, h = t.getUint16(i, !o), l = {};
                        for (a = 0; h > a; a++) r = i + 12 * a + 2, s = n[t.getUint16(r, !o)], !s && g && console.log("Unknown tag: " + t.getUint16(r, !o)), l[s] = p(t, r, e, i, o);
                        return l
                    }

                    function p(t, e, i, n, o) {
                        var r, s, a, h, l, c, u = t.getUint16(e + 2, !o), p = t.getUint32(e + 4, !o),
                            f = t.getUint32(e + 8, !o) + i;
                        switch (u) {
                            case 1:
                            case 7:
                                if (1 == p) return t.getUint8(e + 8, !o);
                                for (r = p > 4 ? f : e + 8, s = [], h = 0; p > h; h++) s[h] = t.getUint8(r + h);
                                return s;
                            case 2:
                                return r = p > 4 ? f : e + 8, d(t, r, p - 1);
                            case 3:
                                if (1 == p) return t.getUint16(e + 8, !o);
                                for (r = p > 2 ? f : e + 8, s = [], h = 0; p > h; h++) s[h] = t.getUint16(r + 2 * h, !o);
                                return s;
                            case 4:
                                if (1 == p) return t.getUint32(e + 8, !o);
                                for (s = [], h = 0; p > h; h++) s[h] = t.getUint32(f + 4 * h, !o);
                                return s;
                            case 5:
                                if (1 == p) return l = t.getUint32(f, !o), c = t.getUint32(f + 4, !o), a = new Number(l / c), a.numerator = l, a.denominator = c, a;
                                for (s = [], h = 0; p > h; h++) l = t.getUint32(f + 8 * h, !o), c = t.getUint32(f + 4 + 8 * h, !o), s[h] = new Number(l / c), s[h].numerator = l, s[h].denominator = c;
                                return s;
                            case 9:
                                if (1 == p) return t.getInt32(e + 8, !o);
                                for (s = [], h = 0; p > h; h++) s[h] = t.getInt32(f + 4 * h, !o);
                                return s;
                            case 10:
                                if (1 == p) return t.getInt32(f, !o) / t.getInt32(f + 4, !o);
                                for (s = [], h = 0; p > h; h++) s[h] = t.getInt32(f + 8 * h, !o) / t.getInt32(f + 4 + 8 * h, !o);
                                return s
                        }
                    }

                    function d(t, e, i) {
                        var n, o = "";
                        for (n = e; e + i > n; n++) o += String.fromCharCode(t.getUint8(n));
                        return o
                    }

                    function f(t, e) {
                        if ("Exif" != d(t, e, 4)) return g && console.log("Not valid EXIF data! " + d(t, e, 4)), !1;
                        var i, n, o, r, s, a = e + 6;
                        if (18761 == t.getUint16(a)) i = !1; else {
                            if (19789 != t.getUint16(a)) return g && console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"), !1;
                            i = !0
                        }
                        if (42 != t.getUint16(a + 2, !i)) return g && console.log("Not valid TIFF data! (no 0x002A)"), !1;
                        var h = t.getUint32(a + 4, !i);
                        if (8 > h) return g && console.log("Not valid TIFF data! (First offset less than 8)", t.getUint32(a + 4, !i)), !1;
                        if (n = u(t, a, a + h, y, i), n.ExifIFDPointer) for (o in r = u(t, a, a + n.ExifIFDPointer, v, i), r) {
                            switch (o) {
                                case"LightSource":
                                case"Flash":
                                case"MeteringMode":
                                case"ExposureProgram":
                                case"SensingMethod":
                                case"SceneCaptureType":
                                case"SceneType":
                                case"CustomRendered":
                                case"WhiteBalance":
                                case"GainControl":
                                case"Contrast":
                                case"Saturation":
                                case"Sharpness":
                                case"SubjectDistanceRange":
                                case"FileSource":
                                    r[o] = w[o][r[o]];
                                    break;
                                case"ExifVersion":
                                case"FlashpixVersion":
                                    r[o] = String.fromCharCode(r[o][0], r[o][1], r[o][2], r[o][3]);
                                    break;
                                case"ComponentsConfiguration":
                                    r[o] = w.Components[r[o][0]] + w.Components[r[o][1]] + w.Components[r[o][2]] + w.Components[r[o][3]]
                            }
                            n[o] = r[o]
                        }
                        if (n.GPSInfoIFDPointer) for (o in s = u(t, a, a + n.GPSInfoIFDPointer, _, i), s) {
                            switch (o) {
                                case"GPSVersionID":
                                    s[o] = s[o][0] + "." + s[o][1] + "." + s[o][2] + "." + s[o][3]
                            }
                            n[o] = s[o]
                        }
                        return n
                    }

                    var g = !1, m = function (t) {
                        return t instanceof m ? t : this instanceof m ? void (this.EXIFwrapped = t) : new m(t)
                    };
                    "undefined" != typeof t && t.exports && (e = t.exports = m), e.EXIF = m;
                    var v = m.Tags = {
                        36864: "ExifVersion",
                        40960: "FlashpixVersion",
                        40961: "ColorSpace",
                        40962: "PixelXDimension",
                        40963: "PixelYDimension",
                        37121: "ComponentsConfiguration",
                        37122: "CompressedBitsPerPixel",
                        37500: "MakerNote",
                        37510: "UserComment",
                        40964: "RelatedSoundFile",
                        36867: "DateTimeOriginal",
                        36868: "DateTimeDigitized",
                        37520: "SubsecTime",
                        37521: "SubsecTimeOriginal",
                        37522: "SubsecTimeDigitized",
                        33434: "ExposureTime",
                        33437: "FNumber",
                        34850: "ExposureProgram",
                        34852: "SpectralSensitivity",
                        34855: "ISOSpeedRatings",
                        34856: "OECF",
                        37377: "ShutterSpeedValue",
                        37378: "ApertureValue",
                        37379: "BrightnessValue",
                        37380: "ExposureBias",
                        37381: "MaxApertureValue",
                        37382: "SubjectDistance",
                        37383: "MeteringMode",
                        37384: "LightSource",
                        37385: "Flash",
                        37396: "SubjectArea",
                        37386: "FocalLength",
                        41483: "FlashEnergy",
                        41484: "SpatialFrequencyResponse",
                        41486: "FocalPlaneXResolution",
                        41487: "FocalPlaneYResolution",
                        41488: "FocalPlaneResolutionUnit",
                        41492: "SubjectLocation",
                        41493: "ExposureIndex",
                        41495: "SensingMethod",
                        41728: "FileSource",
                        41729: "SceneType",
                        41730: "CFAPattern",
                        41985: "CustomRendered",
                        41986: "ExposureMode",
                        41987: "WhiteBalance",
                        41988: "DigitalZoomRation",
                        41989: "FocalLengthIn35mmFilm",
                        41990: "SceneCaptureType",
                        41991: "GainControl",
                        41992: "Contrast",
                        41993: "Saturation",
                        41994: "Sharpness",
                        41995: "DeviceSettingDescription",
                        41996: "SubjectDistanceRange",
                        40965: "InteroperabilityIFDPointer",
                        42016: "ImageUniqueID"
                    }, y = m.TiffTags = {
                        256: "ImageWidth",
                        257: "ImageHeight",
                        34665: "ExifIFDPointer",
                        34853: "GPSInfoIFDPointer",
                        40965: "InteroperabilityIFDPointer",
                        258: "BitsPerSample",
                        259: "Compression",
                        262: "PhotometricInterpretation",
                        274: "Orientation",
                        277: "SamplesPerPixel",
                        284: "PlanarConfiguration",
                        530: "YCbCrSubSampling",
                        531: "YCbCrPositioning",
                        282: "XResolution",
                        283: "YResolution",
                        296: "ResolutionUnit",
                        273: "StripOffsets",
                        278: "RowsPerStrip",
                        279: "StripByteCounts",
                        513: "JPEGInterchangeFormat",
                        514: "JPEGInterchangeFormatLength",
                        301: "TransferFunction",
                        318: "WhitePoint",
                        319: "PrimaryChromaticities",
                        529: "YCbCrCoefficients",
                        532: "ReferenceBlackWhite",
                        306: "DateTime",
                        270: "ImageDescription",
                        271: "Make",
                        272: "Model",
                        305: "Software",
                        315: "Artist",
                        33432: "Copyright"
                    }, _ = m.GPSTags = {
                        0: "GPSVersionID",
                        1: "GPSLatitudeRef",
                        2: "GPSLatitude",
                        3: "GPSLongitudeRef",
                        4: "GPSLongitude",
                        5: "GPSAltitudeRef",
                        6: "GPSAltitude",
                        7: "GPSTimeStamp",
                        8: "GPSSatellites",
                        9: "GPSStatus",
                        10: "GPSMeasureMode",
                        11: "GPSDOP",
                        12: "GPSSpeedRef",
                        13: "GPSSpeed",
                        14: "GPSTrackRef",
                        15: "GPSTrack",
                        16: "GPSImgDirectionRef",
                        17: "GPSImgDirection",
                        18: "GPSMapDatum",
                        19: "GPSDestLatitudeRef",
                        20: "GPSDestLatitude",
                        21: "GPSDestLongitudeRef",
                        22: "GPSDestLongitude",
                        23: "GPSDestBearingRef",
                        24: "GPSDestBearing",
                        25: "GPSDestDistanceRef",
                        26: "GPSDestDistance",
                        27: "GPSProcessingMethod",
                        28: "GPSAreaInformation",
                        29: "GPSDateStamp",
                        30: "GPSDifferential"
                    }, w = m.StringValues = {
                        ExposureProgram: {
                            0: "Not defined",
                            1: "Manual",
                            2: "Normal program",
                            3: "Aperture priority",
                            4: "Shutter priority",
                            5: "Creative program",
                            6: "Action program",
                            7: "Portrait mode",
                            8: "Landscape mode"
                        },
                        MeteringMode: {
                            0: "Unknown",
                            1: "Average",
                            2: "CenterWeightedAverage",
                            3: "Spot",
                            4: "MultiSpot",
                            5: "Pattern",
                            6: "Partial",
                            255: "Other"
                        },
                        LightSource: {
                            0: "Unknown",
                            1: "Daylight",
                            2: "Fluorescent",
                            3: "Tungsten (incandescent light)",
                            4: "Flash",
                            9: "Fine weather",
                            10: "Cloudy weather",
                            11: "Shade",
                            12: "Daylight fluorescent (D 5700 - 7100K)",
                            13: "Day white fluorescent (N 4600 - 5400K)",
                            14: "Cool white fluorescent (W 3900 - 4500K)",
                            15: "White fluorescent (WW 3200 - 3700K)",
                            17: "Standard light A",
                            18: "Standard light B",
                            19: "Standard light C",
                            20: "D55",
                            21: "D65",
                            22: "D75",
                            23: "D50",
                            24: "ISO studio tungsten",
                            255: "Other"
                        },
                        Flash: {
                            0: "Flash did not fire",
                            1: "Flash fired",
                            5: "Strobe return light not detected",
                            7: "Strobe return light detected",
                            9: "Flash fired, compulsory flash mode",
                            13: "Flash fired, compulsory flash mode, return light not detected",
                            15: "Flash fired, compulsory flash mode, return light detected",
                            16: "Flash did not fire, compulsory flash mode",
                            24: "Flash did not fire, auto mode",
                            25: "Flash fired, auto mode",
                            29: "Flash fired, auto mode, return light not detected",
                            31: "Flash fired, auto mode, return light detected",
                            32: "No flash function",
                            65: "Flash fired, red-eye reduction mode",
                            69: "Flash fired, red-eye reduction mode, return light not detected",
                            71: "Flash fired, red-eye reduction mode, return light detected",
                            73: "Flash fired, compulsory flash mode, red-eye reduction mode",
                            77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
                            79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
                            89: "Flash fired, auto mode, red-eye reduction mode",
                            93: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
                            95: "Flash fired, auto mode, return light detected, red-eye reduction mode"
                        },
                        SensingMethod: {
                            1: "Not defined",
                            2: "One-chip color area sensor",
                            3: "Two-chip color area sensor",
                            4: "Three-chip color area sensor",
                            5: "Color sequential area sensor",
                            7: "Trilinear sensor",
                            8: "Color sequential linear sensor"
                        },
                        SceneCaptureType: {0: "Standard", 1: "Landscape", 2: "Portrait", 3: "Night scene"},
                        SceneType: {1: "Directly photographed"},
                        CustomRendered: {0: "Normal process", 1: "Custom process"},
                        WhiteBalance: {0: "Auto white balance", 1: "Manual white balance"},
                        GainControl: {
                            0: "None",
                            1: "Low gain up",
                            2: "High gain up",
                            3: "Low gain down",
                            4: "High gain down"
                        },
                        Contrast: {0: "Normal", 1: "Soft", 2: "Hard"},
                        Saturation: {0: "Normal", 1: "Low saturation", 2: "High saturation"},
                        Sharpness: {0: "Normal", 1: "Soft", 2: "Hard"},
                        SubjectDistanceRange: {0: "Unknown", 1: "Macro", 2: "Close view", 3: "Distant view"},
                        FileSource: {3: "DSC"},
                        Components: {0: "", 1: "Y", 2: "Cb", 3: "Cr", 4: "R", 5: "G", 6: "B"}
                    }, b = {
                        120: "caption",
                        110: "credit",
                        25: "keywords",
                        55: "dateCreated",
                        80: "byline",
                        85: "bylineTitle",
                        122: "captionWriter",
                        105: "headline",
                        116: "copyright",
                        15: "category"
                    };
                    m.getData = function (t, e) {
                        return !((t instanceof Image || t instanceof HTMLImageElement) && !t.complete) && (i(t) ? e && e.call(t) : a(t, e), !0)
                    }, m.getTag = function (t, e) {
                        return i(t) ? t.exifdata[e] : void 0
                    }, m.getAllTags = function (t) {
                        if (!i(t)) return {};
                        var e, n = t.exifdata, o = {};
                        for (e in n) n.hasOwnProperty(e) && (o[e] = n[e]);
                        return o
                    }, m.pretty = function (t) {
                        if (!i(t)) return "";
                        var e, n = t.exifdata, o = "";
                        for (e in n) n.hasOwnProperty(e) && (o += "object" == typeof n[e] ? n[e] instanceof Number ? e + " : " + n[e] + " [" + n[e].numerator + "/" + n[e].denominator + "]\r\n" : e + " : [" + n[e].length + " values]\r\n" : e + " : " + n[e] + "\r\n");
                        return o
                    }, m.readFromBinaryFile = function (t) {
                        return h(t)
                    }, n = [], o = function () {
                        return m
                    }.apply(e, n), void 0 === o || (t.exports = o)
                }).call(this)
            }, function (t, e, i) {
                var n, o;
                !function () {
                    function i(t) {
                        var e = t.naturalWidth, i = t.naturalHeight;
                        if (e * i > 1048576) {
                            var n = document.createElement("canvas");
                            n.width = n.height = 1;
                            var o = n.getContext("2d");
                            return o.drawImage(t, 1 - e, 0), 0 === o.getImageData(0, 0, 1, 1).data[3]
                        }
                        return !1
                    }

                    function r(t, e, i) {
                        var n = document.createElement("canvas");
                        n.width = 1, n.height = i;
                        var o = n.getContext("2d");
                        o.drawImage(t, 0, 0);
                        for (var r = o.getImageData(0, 0, 1, i).data, s = 0, a = i, h = i; h > s;) {
                            var l = r[4 * (h - 1) + 3];
                            0 === l ? a = h : s = h, h = a + s >> 1
                        }
                        var c = h / i;
                        return 0 === c ? 1 : c
                    }

                    function s(t, e, i) {
                        var n = document.createElement("canvas");
                        return a(t, n, e, i), n.toDataURL("image/jpeg", e.quality || .8)
                    }

                    function a(t, e, n, o) {
                        var s = t.naturalWidth, a = t.naturalHeight, l = n.width, c = n.height, u = e.getContext("2d");
                        u.save(), h(e, u, l, c, n.orientation);
                        var p = i(t);
                        p && (s /= 2, a /= 2);
                        var d = 1024, f = document.createElement("canvas");
                        f.width = f.height = d;
                        for (var g = f.getContext("2d"), m = o ? r(t, s, a) : 1, v = Math.ceil(d * l / s), y = Math.ceil(d * c / a / m), _ = 0, w = 0; a > _;) {
                            for (var b = 0, S = 0; s > b;) g.clearRect(0, 0, d, d), g.drawImage(t, -b, -_), u.drawImage(f, 0, 0, d, d, S, w, v, y), b += d, S += v;
                            _ += d, w += y
                        }
                        u.restore(), f = g = null
                    }

                    function h(t, e, i, n, o) {
                        switch (o) {
                            case 5:
                            case 6:
                            case 7:
                            case 8:
                                t.width = n, t.height = i;
                                break;
                            default:
                                t.width = i, t.height = n
                        }
                        switch (o) {
                            case 2:
                                e.translate(i, 0), e.scale(-1, 1);
                                break;
                            case 3:
                                e.translate(i, n), e.rotate(Math.PI);
                                break;
                            case 4:
                                e.translate(0, n), e.scale(1, -1);
                                break;
                            case 5:
                                e.rotate(.5 * Math.PI), e.scale(1, -1);
                                break;
                            case 6:
                                e.rotate(.5 * Math.PI), e.translate(0, -n);
                                break;
                            case 7:
                                e.rotate(.5 * Math.PI), e.translate(i, -n), e.scale(-1, 1);
                                break;
                            case 8:
                                e.rotate(-.5 * Math.PI), e.translate(-i, 0)
                        }
                    }

                    function l(t) {
                        if (window.Blob && t instanceof Blob) {
                            var e = new Image,
                                i = window.URL && window.URL.createObjectURL ? window.URL : window.webkitURL && window.webkitURL.createObjectURL ? window.webkitURL : null;
                            if (!i) throw Error("No createObjectURL function found to create blob url");
                            e.src = i.createObjectURL(t), this.blob = t, t = e
                        }
                        if (!t.naturalWidth && !t.naturalHeight) {
                            var n = this;
                            t.onload = function () {
                                var t = n.imageLoadListeners;
                                if (t) {
                                    n.imageLoadListeners = null;
                                    for (var e = 0, i = t.length; i > e; e++) t[e]()
                                }
                            }, this.imageLoadListeners = []
                        }
                        this.srcImage = t
                    }

                    l.prototype.render = function (t, e, i) {
                        if (this.imageLoadListeners) {
                            var n = this;
                            this.imageLoadListeners.push((function () {
                                n.render(t, e, i)
                            }))
                        } else {
                            e = e || {};
                            var o = this.srcImage, r = o.src, h = r.length, l = o.naturalWidth, c = o.naturalHeight,
                                u = e.width, p = e.height, d = e.maxWidth, f = e.maxHeight,
                                g = this.blob && "image/jpeg" === this.blob.type || 0 === r.indexOf("data:image/jpeg") || r.indexOf(".jpg") === h - 4 || r.indexOf(".jpeg") === h - 5;
                            u && !p ? p = c * u / l << 0 : p && !u ? u = l * p / c << 0 : (u = l, p = c), d && u > d && (u = d, p = c * u / l << 0), f && p > f && (p = f, u = l * p / c << 0);
                            var m = {width: u, height: p};
                            for (var v in e) m[v] = e[v];
                            var y = t.tagName.toLowerCase();
                            "img" === y ? t.src = s(this.srcImage, m, g) : "canvas" === y && a(this.srcImage, t, m, g), "function" == typeof this.onrender && this.onrender(t), i && i()
                        }
                    }, n = [], o = function () {
                        return l
                    }.apply(e, n), void 0 === o || (t.exports = o)
                }()
            }, function (t, e) {
                function i(t) {
                    function e(t) {
                        for (var e = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], i = 0; 64 > i; i++) {
                            var n = T((e[i] * t + 50) / 100);
                            1 > n ? n = 1 : n > 255 && (n = 255), P[W[i]] = n
                        }
                        for (var o = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], r = 0; 64 > r; r++) {
                            var s = T((o[r] * t + 50) / 100);
                            1 > s ? s = 1 : s > 255 && (s = 255), E[W[r]] = s
                        }
                        for (var a = [1, 1.387039845, 1.306562965, 1.175875602, 1, .785694958, .5411961, .275899379], h = 0, l = 0; 8 > l; l++) for (var c = 0; 8 > c; c++) L[h] = 1 / (P[W[h]] * a[l] * a[c] * 8), k[h] = 1 / (E[W[h]] * a[l] * a[c] * 8), h++
                    }

                    function i(t, e) {
                        for (var i = 0, n = 0, o = new Array, r = 1; 16 >= r; r++) {
                            for (var s = 1; s <= t[r]; s++) o[e[n]] = [], o[e[n]][0] = i, o[e[n]][1] = r, n++, i++;
                            i *= 2
                        }
                        return o
                    }

                    function n() {
                        _ = i(B, U), w = i(N, G), b = i(j, $), S = i(q, V)
                    }

                    function o() {
                        for (var t = 1, e = 2, i = 1; 15 >= i; i++) {
                            for (var n = t; e > n; n++) I[32767 + n] = i, z[32767 + n] = [], z[32767 + n][1] = i, z[32767 + n][0] = n;
                            for (var o = -(e - 1); -t >= o; o++) I[32767 + o] = i, z[32767 + o] = [], z[32767 + o][1] = i, z[32767 + o][0] = e - 1 + o;
                            t <<= 1, e <<= 1
                        }
                    }

                    function r() {
                        for (var t = 0; 256 > t; t++) H[t] = 19595 * t, H[t + 256 >> 0] = 38470 * t, H[t + 512 >> 0] = 7471 * t + 32768, H[t + 768 >> 0] = -11059 * t, H[t + 1024 >> 0] = -21709 * t, H[t + 1280 >> 0] = 32768 * t + 8421375, H[t + 1536 >> 0] = -27439 * t, H[t + 1792 >> 0] = -5329 * t
                    }

                    function s(t) {
                        for (var e = t[0], i = t[1] - 1; i >= 0;) e & 1 << i && (C |= 1 << D), i--, D--, 0 > D && (255 == C ? (a(255), a(0)) : a(C), D = 7, C = 0)
                    }

                    function a(t) {
                        Y.push(F[t])
                    }

                    function h(t) {
                        a(t >> 8 & 255), a(255 & t)
                    }

                    function l(t, e) {
                        var i, n, o, r, s, a, h, l, c, u = 0;
                        const p = 8, d = 64;
                        for (c = 0; p > c; ++c) {
                            i = t[u], n = t[u + 1], o = t[u + 2], r = t[u + 3], s = t[u + 4], a = t[u + 5], h = t[u + 6], l = t[u + 7];
                            var f = i + l, g = i - l, m = n + h, v = n - h, y = o + a, _ = o - a, w = r + s, b = r - s,
                                S = f + w, x = f - w, T = m + y, P = m - y;
                            t[u] = S + T, t[u + 4] = S - T;
                            var E = .707106781 * (P + x);
                            t[u + 2] = x + E, t[u + 6] = x - E, S = b + _, T = _ + v, P = v + g;
                            var L = .382683433 * (S - P), k = .5411961 * S + L, z = 1.306562965 * P + L,
                                I = .707106781 * T, X = g + I, Y = g - I;
                            t[u + 5] = Y + k, t[u + 3] = Y - k, t[u + 1] = X + z, t[u + 7] = X - z, u += 8
                        }
                        for (u = 0, c = 0; p > c; ++c) {
                            i = t[u], n = t[u + 8], o = t[u + 16], r = t[u + 24], s = t[u + 32], a = t[u + 40], h = t[u + 48], l = t[u + 56];
                            var C = i + l, D = i - l, A = n + h, R = n - h, O = o + a, F = o - a, H = r + s, W = r - s,
                                B = C + H, U = C - H, j = A + O, $ = A - O;
                            t[u] = B + j, t[u + 32] = B - j;
                            var N = .707106781 * ($ + U);
                            t[u + 16] = U + N, t[u + 48] = U - N, B = W + F, j = F + R, $ = R + D;
                            var G = .382683433 * (B - $), q = .5411961 * B + G, V = 1.306562965 * $ + G,
                                Z = .707106781 * j, K = D + Z, J = D - Z;
                            t[u + 40] = J + q, t[u + 24] = J - q, t[u + 8] = K + V, t[u + 56] = K - V, u++
                        }
                        var Q;
                        for (c = 0; d > c; ++c) Q = t[c] * e[c], M[c] = Q > 0 ? Q + .5 | 0 : Q - .5 | 0;
                        return M
                    }

                    function c() {
                        h(65504), h(16), a(74), a(70), a(73), a(70), a(0), a(1), a(1), a(0), h(1), h(1), a(0), a(0)
                    }

                    function u(t, e) {
                        h(65472), h(17), a(8), h(e), h(t), a(3), a(1), a(17), a(0), a(2), a(17), a(1), a(3), a(17), a(1)
                    }

                    function p() {
                        h(65499), h(132), a(0);
                        for (var t = 0; 64 > t; t++) a(P[t]);
                        a(1);
                        for (var e = 0; 64 > e; e++) a(E[e])
                    }

                    function d() {
                        h(65476), h(418), a(0);
                        for (var t = 0; 16 > t; t++) a(B[t + 1]);
                        for (var e = 0; 11 >= e; e++) a(U[e]);
                        a(16);
                        for (var i = 0; 16 > i; i++) a(j[i + 1]);
                        for (var n = 0; 161 >= n; n++) a($[n]);
                        a(1);
                        for (var o = 0; 16 > o; o++) a(N[o + 1]);
                        for (var r = 0; 11 >= r; r++) a(G[r]);
                        a(17);
                        for (var s = 0; 16 > s; s++) a(q[s + 1]);
                        for (var l = 0; 161 >= l; l++) a(V[l])
                    }

                    function f() {
                        h(65498), h(12), a(3), a(1), a(0), a(2), a(17), a(3), a(17), a(0), a(63), a(0)
                    }

                    function g(t, e, i, n, o) {
                        var r, a = o[0], h = o[240];
                        const c = 16, u = 63, p = 64;
                        for (var d = l(t, e), f = 0; p > f; ++f) X[W[f]] = d[f];
                        var g = X[0] - i;
                        i = X[0], 0 == g ? s(n[0]) : (r = 32767 + g, s(n[I[r]]), s(z[r]));
                        for (var m = 63; m > 0 && 0 == X[m]; m--) ;
                        if (0 == m) return s(a), i;
                        for (var v, y = 1; m >= y;) {
                            for (var _ = y; 0 == X[y] && m >= y; ++y) ;
                            var w = y - _;
                            if (w >= c) {
                                v = w >> 4;
                                for (var b = 1; v >= b; ++b) s(h);
                                w &= 15
                            }
                            r = 32767 + X[y], s(o[(w << 4) + I[r]]), s(z[r]), y++
                        }
                        return m != u && s(a), i
                    }

                    function m() {
                        for (var t = String.fromCharCode, e = 0; 256 > e; e++) F[e] = t(e)
                    }

                    function v(t) {
                        if (0 >= t && (t = 1), t > 100 && (t = 100), x != t) {
                            var i = 0;
                            i = 50 > t ? Math.floor(5e3 / t) : Math.floor(200 - 2 * t), e(i), x = t
                        }
                    }

                    function y() {
                        (new Date).getTime();
                        t || (t = 50), m(), n(), o(), r(), v(t), (new Date).getTime()
                    }

                    var _, w, b, S, x, T = (Math.round, Math.floor), P = new Array(64), E = new Array(64),
                        L = new Array(64), k = new Array(64), z = new Array(65535), I = new Array(65535),
                        M = new Array(64), X = new Array(64), Y = [], C = 0, D = 7, A = new Array(64),
                        R = new Array(64), O = new Array(64), F = new Array(256), H = new Array(2048),
                        W = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63],
                        B = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                        U = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                        j = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125],
                        $ = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250],
                        N = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
                        G = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                        q = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119],
                        V = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];
                    this.encode = function (t, e, i) {
                        (new Date).getTime();
                        e && v(e), Y = new Array, C = 0, D = 7, h(65496), c(), p(), u(t.width, t.height), d(), f();
                        var n = 0, o = 0, r = 0;
                        C = 0, D = 7, this.encode.displayName = "_encode_";
                        for (var a, l, m, y, x, T, P, E, z, I = t.data, M = t.width, X = t.height, F = 4 * M, W = 0; X > W;) {
                            for (a = 0; F > a;) {
                                for (x = F * W + a, T = x, P = -1, E = 0, z = 0; 64 > z; z++) E = z >> 3, P = 4 * (7 & z), T = x + E * F + P, W + E >= X && (T -= F * (W + 1 + E - X)), a + P >= F && (T -= a + P - F + 4), l = I[T++], m = I[T++], y = I[T++], A[z] = (H[l] + H[m + 256 >> 0] + H[y + 512 >> 0] >> 16) - 128, R[z] = (H[l + 768 >> 0] + H[m + 1024 >> 0] + H[y + 1280 >> 0] >> 16) - 128, O[z] = (H[l + 1280 >> 0] + H[m + 1536 >> 0] + H[y + 1792 >> 0] >> 16) - 128;
                                n = g(A, L, n, _, b), o = g(R, k, o, w, S), r = g(O, k, r, w, S), a += 32
                            }
                            W += 8
                        }
                        if (D >= 0) {
                            var B = [];
                            B[1] = D + 1, B[0] = (1 << D + 1) - 1, s(B)
                        }
                        if (h(65497), i) {
                            for (var U = Y.length, j = new Uint8Array(U), $ = 0; U > $; $++) j[$] = Y[$].charCodeAt();
                            return Y = [], (new Date).getTime(), j
                        }
                        var N = "data:image/jpeg;base64," + btoa(Y.join(""));
                        return Y = [], (new Date).getTime(), N
                    }, y()
                }

                t.exports = i
            }, function (t, e, i) {
                function n(t, e) {
                    var i = this;
                    if (!t) throw new Error("没有收到图片，可能的解决方案：https://github.com/think2011/localResizeIMG/issues/7");
                    for (var n in e = e || {}, i.defaults = {
                        width: null,
                        height: null,
                        fieldName: "file",
                        quality: .7
                    }, i.file = t, e) e.hasOwnProperty(n) && (i.defaults[n] = e[n]);
                    return this.init()
                }

                function o(t) {
                    var e = null;
                    return e = t ? [].filter.call(document.scripts, (function (e) {
                        return -1 !== e.src.indexOf(t)
                    }))[0] : document.scripts[document.scripts.length - 1], e ? e.src.substr(0, e.src.lastIndexOf("/")) : null
                }

                function r(t) {
                    var e;
                    e = t.split(",")[0].indexOf("base64") >= 0 ? atob(t.split(",")[1]) : unescape(t.split(",")[1]);
                    for (var i = t.split(",")[0].split(":")[1].split(";")[0], n = new Uint8Array(e.length), o = 0; o < e.length; o++) n[o] = e.charCodeAt(o);
                    return new a.Blob([n.buffer], {type: i})
                }

                i.p = o("lrz") + "/", window.URL = window.URL || window.webkitURL;
                var s = i(1), a = i(4), h = i(5), l = function (t) {
                    var e = /OS (\d)_.* like Mac OS X/g.exec(t),
                        i = /Android (\d.*?);/g.exec(t) || /Android\/(\d.*?) /g.exec(t);
                    return {
                        oldIOS: !!e && +e.pop() < 8,
                        oldAndroid: !!i && +i.pop().substr(0, 3) < 4.5,
                        iOS: /\(i[^;]+;( U;)? CPU.+Mac OS X/.test(t),
                        android: /Android/g.test(t),
                        mQQBrowser: /MQQBrowser/g.test(t)
                    }
                }(navigator.userAgent);
                n.prototype.init = function () {
                    var t = this, e = t.file, i = "string" == typeof e, n = /^data:/.test(e), o = new Image,
                        h = document.createElement("canvas"), l = i ? e : URL.createObjectURL(e);
                    if (t.img = o, t.blob = l, t.canvas = h, t.fileName = i ? n ? "base64.jpg" : e.split("/").pop() : e.name, !document.createElement("canvas").getContext) throw new Error("浏览器不支持canvas");
                    return new s((function (i, s) {
                        o.onerror = function () {
                            var t = new Error("加载图片文件失败");
                            throw s(t), t
                        }, o.onload = function () {
                            t._getBase64().then((function (t) {
                                if (t.length < 10) {
                                    var e = new Error("生成base64失败");
                                    throw s(e), e
                                }
                                return t
                            })).then((function (n) {
                                var o = null;
                                for (var s in "object" == typeof t.file && n.length > t.file.size ? (o = new FormData, e = t.file) : (o = new a.FormData, e = r(n)), o.append(t.defaults.fieldName, e, t.fileName.replace(/\..+/g, ".jpg")), i({
                                    formData: o,
                                    fileLen: +e.size,
                                    base64: n,
                                    base64Len: n.length,
                                    origin: t.file,
                                    file: e
                                }), t) t.hasOwnProperty(s) && (t[s] = null);
                                URL.revokeObjectURL(t.blob)
                            }))
                        }, !n && (o.crossOrigin = "*"), o.src = l
                    }))
                }, n.prototype._getBase64 = function () {
                    var t = this, e = t.img, i = t.file, n = t.canvas;
                    return new s((function (o) {
                        try {
                            h.getData("object" == typeof i ? i : e, (function () {
                                t.orientation = h.getTag(this, "Orientation"), t.resize = t._getResize(), t.ctx = n.getContext("2d"), n.width = t.resize.width, n.height = t.resize.height, t.ctx.fillStyle = "#fff", t.ctx.fillRect(0, 0, n.width, n.height), l.oldIOS ? t._createBase64ForOldIOS().then(o) : t._createBase64().then(o)
                            }))
                        } catch (r) {
                            throw new Error(r)
                        }
                    }))
                }, n.prototype._createBase64ForOldIOS = function () {
                    var t = this, e = t.img, n = t.canvas, o = t.defaults, r = t.orientation;
                    return new s((function (t) {
                        !function () {
                            var s = [i(6)];
                            (function (i) {
                                var s = new i(e);
                                "5678".indexOf(r) > -1 ? s.render(n, {
                                    width: n.height,
                                    height: n.width,
                                    orientation: r
                                }) : s.render(n, {
                                    width: n.width,
                                    height: n.height,
                                    orientation: r
                                }), t(n.toDataURL("image/jpeg", o.quality))
                            }).apply(null, s)
                        }()
                    }))
                }, n.prototype._createBase64 = function () {
                    var t = this, e = t.resize, n = t.img, o = t.canvas, r = t.ctx, a = t.defaults, h = t.orientation;
                    switch (h) {
                        case 3:
                            r.rotate(180 * Math.PI / 180), r.drawImage(n, -e.width, -e.height, e.width, e.height);
                            break;
                        case 6:
                            r.rotate(90 * Math.PI / 180), r.drawImage(n, 0, -e.width, e.height, e.width);
                            break;
                        case 8:
                            r.rotate(270 * Math.PI / 180), r.drawImage(n, -e.height, 0, e.height, e.width);
                            break;
                        case 2:
                            r.translate(e.width, 0), r.scale(-1, 1), r.drawImage(n, 0, 0, e.width, e.height);
                            break;
                        case 4:
                            r.translate(e.width, 0), r.scale(-1, 1), r.rotate(180 * Math.PI / 180), r.drawImage(n, -e.width, -e.height, e.width, e.height);
                            break;
                        case 5:
                            r.translate(e.width, 0), r.scale(-1, 1), r.rotate(90 * Math.PI / 180), r.drawImage(n, 0, -e.width, e.height, e.width);
                            break;
                        case 7:
                            r.translate(e.width, 0), r.scale(-1, 1), r.rotate(270 * Math.PI / 180), r.drawImage(n, -e.height, 0, e.height, e.width);
                            break;
                        default:
                            r.drawImage(n, 0, 0, e.width, e.height)
                    }
                    return new s((function (t) {
                        l.oldAndroid || l.mQQBrowser || !navigator.userAgent ? function () {
                            var e = [i(7)];
                            (function (e) {
                                var i = new e, n = r.getImageData(0, 0, o.width, o.height);
                                t(i.encode(n, 100 * a.quality))
                            }).apply(null, e)
                        }() : t(o.toDataURL("image/jpeg", a.quality))
                    }))
                }, n.prototype._getResize = function () {
                    var t = this, e = t.img, i = t.defaults, n = i.width, o = i.height, r = t.orientation,
                        s = {width: e.width, height: e.height};
                    if ("5678".indexOf(r) > -1 && (s.width = e.height, s.height = e.width), s.width < n || s.height < o) return s;
                    var a = s.width / s.height;
                    for (n && o ? a >= n / o ? s.width > n && (s.width = n, s.height = Math.ceil(n / a)) : s.height > o && (s.height = o, s.width = Math.ceil(o * a)) : n ? n < s.width && (s.width = n, s.height = Math.ceil(n / a)) : o && o < s.height && (s.width = Math.ceil(o * a), s.height = o); s.width >= 3264 || s.height >= 2448;) s.width *= .8, s.height *= .8;
                    return s
                }, window.lrz = function (t, e) {
                    return new n(t, e)
                }, window.lrz.version = "4.9.40", t.exports = window.lrz
            }])
        }))
    }, "6ef7": function (t, e, i) {
        var n;/*! iScroll v5.2.0-snapshot ~ (c) 2008-2019 Matteo Spinelli ~ http://cubiq.org/license */
        (function (o, r, s) {
            var a = o.requestAnimationFrame || o.webkitRequestAnimationFrame || o.mozRequestAnimationFrame || o.oRequestAnimationFrame || o.msRequestAnimationFrame || function (t) {
                o.setTimeout(t, 1e3 / 60)
            }, h = function () {
                var t = {}, e = r.createElement("div").style, i = function () {
                    for (var t, i = ["t", "webkitT", "MozT", "msT", "OT"], n = 0, o = i.length; n < o; n++) if (t = i[n] + "ransform", t in e) return i[n].substr(0, i[n].length - 1);
                    return !1
                }();

                function n(t) {
                    return !1 !== i && ("" === i ? t : i + t.charAt(0).toUpperCase() + t.substr(1))
                }

                t.getTime = Date.now || function () {
                    return (new Date).getTime()
                }, t.extend = function (t, e) {
                    for (var i in e) t[i] = e[i]
                }, t.addEvent = function (t, e, i, n) {
                    t.addEventListener(e, i, !!n)
                }, t.removeEvent = function (t, e, i, n) {
                    t.removeEventListener(e, i, !!n)
                }, t.prefixPointerEvent = function (t) {
                    return o.MSPointerEvent ? "MSPointer" + t.charAt(7).toUpperCase() + t.substr(8) : t
                }, t.momentum = function (t, e, i, n, o, r) {
                    var a, h, l = t - e, c = s.abs(l) / i;
                    return r = void 0 === r ? 6e-4 : r, a = t + c * c / (2 * r) * (l < 0 ? -1 : 1), h = c / r, a < n ? (a = o ? n - o / 2.5 * (c / 8) : n, l = s.abs(a - t), h = l / c) : a > 0 && (a = o ? o / 2.5 * (c / 8) : 0, l = s.abs(t) + a, h = l / c), {
                        destination: s.round(a),
                        duration: h
                    }
                };
                var a = n("transform");
                return t.extend(t, {
                    hasTransform: !1 !== a,
                    hasPerspective: n("perspective") in e,
                    hasTouch: "ontouchstart" in o,
                    hasPointer: !(!o.PointerEvent && !o.MSPointerEvent),
                    hasTransition: n("transition") in e
                }), t.isBadAndroid = function () {
                    var t = o.navigator.appVersion;
                    if (/Android/.test(t) && !/Chrome\/\d/.test(t)) {
                        var e = t.match(/Safari\/(\d+.\d)/);
                        return !(e && "object" === typeof e && e.length >= 2) || parseFloat(e[1]) < 535.19
                    }
                    return !1
                }(), t.extend(t.style = {}, {
                    transform: a,
                    transitionTimingFunction: n("transitionTimingFunction"),
                    transitionDuration: n("transitionDuration"),
                    transitionDelay: n("transitionDelay"),
                    transformOrigin: n("transformOrigin"),
                    touchAction: n("touchAction")
                }), t.hasClass = function (t, e) {
                    var i = new RegExp("(^|\\s)" + e + "(\\s|$)");
                    return i.test(t.className)
                }, t.addClass = function (e, i) {
                    if (!t.hasClass(e, i)) {
                        var n = e.className.split(" ");
                        n.push(i), e.className = n.join(" ")
                    }
                }, t.removeClass = function (e, i) {
                    if (t.hasClass(e, i)) {
                        var n = new RegExp("(^|\\s)" + i + "(\\s|$)", "g");
                        e.className = e.className.replace(n, " ")
                    }
                }, t.offset = function (t) {
                    var e = -t.offsetLeft, i = -t.offsetTop;
                    while (t = t.offsetParent) e -= t.offsetLeft, i -= t.offsetTop;
                    return {left: e, top: i}
                }, t.preventDefaultException = function (t, e) {
                    for (var i in e) if (e[i].test(t[i])) return !0;
                    return !1
                }, t.extend(t.eventType = {}, {
                    touchstart: 1,
                    touchmove: 1,
                    touchend: 1,
                    mousedown: 2,
                    mousemove: 2,
                    mouseup: 2,
                    pointerdown: 3,
                    pointermove: 3,
                    pointerup: 3,
                    MSPointerDown: 3,
                    MSPointerMove: 3,
                    MSPointerUp: 3
                }), t.extend(t.ease = {}, {
                    quadratic: {
                        style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", fn: function (t) {
                            return t * (2 - t)
                        }
                    }, circular: {
                        style: "cubic-bezier(0.1, 0.57, 0.1, 1)", fn: function (t) {
                            return s.sqrt(1 - --t * t)
                        }
                    }, back: {
                        style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)", fn: function (t) {
                            var e = 4;
                            return (t -= 1) * t * ((e + 1) * t + e) + 1
                        }
                    }, bounce: {
                        style: "", fn: function (t) {
                            return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                        }
                    }, elastic: {
                        style: "", fn: function (t) {
                            var e = .22, i = .4;
                            return 0 === t ? 0 : 1 == t ? 1 : i * s.pow(2, -10 * t) * s.sin((t - e / 4) * (2 * s.PI) / e) + 1
                        }
                    }
                }), t.tap = function (t, e) {
                    var i = r.createEvent("Event");
                    i.initEvent(e, !0, !0), i.pageX = t.pageX, i.pageY = t.pageY, t.target.dispatchEvent(i)
                }, t.click = function (t) {
                    var e, i = t.target;
                    /(SELECT|INPUT|TEXTAREA)/i.test(i.tagName) || (e = r.createEvent(o.MouseEvent ? "MouseEvents" : "Event"), e.initEvent("click", !0, !0), e.view = t.view || o, e.detail = 1, e.screenX = i.screenX || 0, e.screenY = i.screenY || 0, e.clientX = i.clientX || 0, e.clientY = i.clientY || 0, e.ctrlKey = !!t.ctrlKey, e.altKey = !!t.altKey, e.shiftKey = !!t.shiftKey, e.metaKey = !!t.metaKey, e.button = 0, e.relatedTarget = null, e._constructed = !0, i.dispatchEvent(e))
                }, t.getTouchAction = function (t, e) {
                    var i = "none";
                    return "vertical" === t ? i = "pan-y" : "horizontal" === t && (i = "pan-x"), e && "none" != i && (i += " pinch-zoom"), i
                }, t.getRect = function (t) {
                    if ("undefined" !== typeof SVGElement && t instanceof SVGElement) {
                        var e = t.getBoundingClientRect();
                        return {top: e.top, left: e.left, width: e.width, height: e.height}
                    }
                    return {top: t.offsetTop, left: t.offsetLeft, width: t.offsetWidth, height: t.offsetHeight}
                }, t
            }();

            function l(t, e) {
                for (var i in this.wrapper = "string" == typeof t ? r.querySelector(t) : t, this.scroller = this.wrapper.children[0], this.scrollerStyle = this.scroller.style, this.options = {
                    zoomMin: 1,
                    zoomMax: 4,
                    startZoom: 1,
                    resizeScrollbars: !0,
                    mouseWheelSpeed: 20,
                    snapThreshold: .334,
                    disablePointer: !h.hasPointer,
                    disableTouch: h.hasPointer || !h.hasTouch,
                    disableMouse: h.hasPointer || h.hasTouch,
                    startX: 0,
                    startY: 0,
                    scrollY: !0,
                    directionLockThreshold: 5,
                    momentum: !0,
                    bounce: !0,
                    bounceTime: 600,
                    bounceEasing: "",
                    preventDefault: !0,
                    preventDefaultException: {tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/},
                    HWCompositing: !0,
                    useTransition: !0,
                    useTransform: !0,
                    bindToWrapper: "undefined" === typeof o.onmousedown
                }, e) this.options[i] = e[i];
                this.translateZ = this.options.HWCompositing && h.hasPerspective ? " translateZ(0)" : "", this.options.useTransition = h.hasTransition && this.options.useTransition, this.options.useTransform = h.hasTransform && this.options.useTransform, this.options.eventPassthrough = !0 === this.options.eventPassthrough ? "vertical" : this.options.eventPassthrough, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollY = "vertical" != this.options.eventPassthrough && this.options.scrollY, this.options.scrollX = "horizontal" != this.options.eventPassthrough && this.options.scrollX, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? h.ease[this.options.bounceEasing] || h.ease.circular : this.options.bounceEasing, this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling, !0 === this.options.tap && (this.options.tap = "tap"), this.options.useTransition || this.options.useTransform || /relative|absolute/i.test(this.scrollerStyle.position) || (this.scrollerStyle.position = "relative"), "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1), this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1, this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this._events = {}, this.scale = s.min(s.max(this.options.startZoom, this.options.zoomMin), this.options.zoomMax), this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable()
            }

            function c(t, e, i) {
                var n = r.createElement("div"), o = r.createElement("div");
                return !0 === i && (n.style.cssText = "position:absolute;z-index:9999", o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"), o.className = "iScrollIndicator", "h" == t ? (!0 === i && (n.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", o.style.height = "100%"), n.className = "iScrollHorizontalScrollbar") : (!0 === i && (n.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", o.style.width = "100%"), n.className = "iScrollVerticalScrollbar"), n.style.cssText += ";overflow:hidden", e || (n.style.pointerEvents = "none"), n.appendChild(o), n
            }

            function u(t, e) {
                for (var i in this.wrapper = "string" == typeof e.el ? r.querySelector(e.el) : e.el, this.wrapperStyle = this.wrapper.style, this.indicator = this.wrapper.children[0], this.indicatorStyle = this.indicator.style, this.scroller = t, this.options = {
                    listenX: !0,
                    listenY: !0,
                    interactive: !1,
                    resize: !0,
                    defaultScrollbars: !1,
                    shrink: !1,
                    fade: !1,
                    speedRatioX: 0,
                    speedRatioY: 0
                }, e) this.options[i] = e[i];
                if (this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.options.interactive && (this.options.disableTouch || (h.addEvent(this.indicator, "touchstart", this), h.addEvent(o, "touchend", this)), this.options.disablePointer || (h.addEvent(this.indicator, h.prefixPointerEvent("pointerdown"), this), h.addEvent(o, h.prefixPointerEvent("pointerup"), this)), this.options.disableMouse || (h.addEvent(this.indicator, "mousedown", this), h.addEvent(o, "mouseup", this))), this.options.fade) {
                    this.wrapperStyle[h.style.transform] = this.scroller.translateZ;
                    var n = h.style.transitionDuration;
                    if (!n) return;
                    this.wrapperStyle[n] = h.isBadAndroid ? "0.0001ms" : "0ms";
                    var s = this;
                    h.isBadAndroid && a((function () {
                        "0.0001ms" === s.wrapperStyle[n] && (s.wrapperStyle[n] = "0s")
                    })), this.wrapperStyle.opacity = "0"
                }
            }

            l.prototype = {
                version: "5.2.0-snapshot", _init: function () {
                    this._initEvents(), this.options.zoom && this._initZoom(), (this.options.scrollbars || this.options.indicators) && this._initIndicators(), this.options.mouseWheel && this._initWheel(), this.options.snap && this._initSnap(), this.options.keyBindings && this._initKeys()
                }, destroy: function () {
                    this._initEvents(!0), clearTimeout(this.resizeTimeout), this.resizeTimeout = null, this._execEvent("destroy")
                }, _transitionEnd: function (t) {
                    t.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd")))
                }, _start: function (t) {
                    var e;
                    if (1 != h.eventType[t.type] && (e = t.which ? t.button : t.button < 2 ? 0 : 4 == t.button ? 1 : 2, 0 !== e)) return;
                    if (this.enabled && (!this.initiated || h.eventType[t.type] === this.initiated)) {
                        !this.options.preventDefault || h.isBadAndroid || h.preventDefaultException(t.target, this.options.preventDefaultException) || t.preventDefault();
                        var i, n = t.touches ? t.touches[0] : t;
                        this.initiated = h.eventType[t.type], this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.directionLocked = 0, this.startTime = h.getTime(), this.options.useTransition && this.isInTransition ? (this._transitionTime(), this.isInTransition = !1, i = this.getComputedPosition(), this._translate(s.round(i.x), s.round(i.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")), this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = n.pageX, this.pointY = n.pageY, this._execEvent("beforeScrollStart")
                    }
                }, _move: function (t) {
                    if (this.enabled && h.eventType[t.type] === this.initiated) {
                        this.options.preventDefault && t.preventDefault();
                        var e, i, n, o, r = t.touches ? t.touches[0] : t, a = r.pageX - this.pointX,
                            l = r.pageY - this.pointY, c = h.getTime();
                        if (this.pointX = r.pageX, this.pointY = r.pageY, this.distX += a, this.distY += l, n = s.abs(this.distX), o = s.abs(this.distY), !(c - this.endTime > 300 && n < 10 && o < 10)) {
                            if (this.directionLocked || this.options.freeScroll || (n > o + this.options.directionLockThreshold ? this.directionLocked = "h" : o >= n + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"), "h" == this.directionLocked) {
                                if ("vertical" == this.options.eventPassthrough) t.preventDefault(); else if ("horizontal" == this.options.eventPassthrough) return void (this.initiated = !1);
                                l = 0
                            } else if ("v" == this.directionLocked) {
                                if ("horizontal" == this.options.eventPassthrough) t.preventDefault(); else if ("vertical" == this.options.eventPassthrough) return void (this.initiated = !1);
                                a = 0
                            }
                            this.options.scrollX || (a = this.hasHorizontalScroll ? a : 0), this.options.scrollY || (l = this.hasVerticalScroll ? l : 0), e = this.x + a, i = this.y + l, (e > 0 || e < this.maxScrollX) && (e = this.options.bounce ? this.x + a / 3 : e > 0 ? 0 : this.maxScrollX), (i > 0 || i < this.maxScrollY) && (i = this.options.bounce ? this.y + l / 3 : i > 0 ? 0 : this.maxScrollY), this.directionX = a > 0 ? -1 : a < 0 ? 1 : 0, this.directionY = l > 0 ? -1 : l < 0 ? 1 : 0, this.moved || this._execEvent("scrollStart"), this.moved = !0, this._translate(e, i), c - this.startTime > 300 && (this.startTime = c, this.startX = this.x, this.startY = this.y)
                        }
                    }
                }, _end: function (t) {
                    if (this.enabled && h.eventType[t.type] === this.initiated) {
                        this.options.preventDefault && !h.preventDefaultException(t.target, this.options.preventDefaultException) && t.preventDefault();
                        t.changedTouches && t.changedTouches[0];
                        var e, i, n = h.getTime() - this.startTime, o = s.round(this.x), r = s.round(this.y),
                            a = s.abs(o - this.startX), l = s.abs(r - this.startY), c = 0, u = "";
                        if (this.isInTransition = 0, this.initiated = 0, this.endTime = h.getTime(), !this.resetPosition(this.options.bounceTime)) {
                            if (this.scrollTo(o, r), !this.moved) return this.options.tap && h.tap(t, this.options.tap), this.options.click && h.click(t), void this._execEvent("scrollCancel");
                            if (this._events.flick && n < 200 && a < 100 && l < 100) this._execEvent("flick"); else {
                                if (this.options.momentum && n < 300 && (e = this.hasHorizontalScroll ? h.momentum(this.x, this.startX, n, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                                    destination: o,
                                    duration: 0
                                }, i = this.hasVerticalScroll ? h.momentum(this.y, this.startY, n, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                                    destination: r,
                                    duration: 0
                                }, o = e.destination, r = i.destination, c = s.max(e.duration, i.duration), this.isInTransition = 1), this.options.snap) {
                                    var p = this._nearestSnap(o, r);
                                    this.currentPage = p, c = this.options.snapSpeed || s.max(s.max(s.min(s.abs(o - p.x), 1e3), s.min(s.abs(r - p.y), 1e3)), 300), o = p.x, r = p.y, this.directionX = 0, this.directionY = 0, u = this.options.bounceEasing
                                }
                                if (o != this.x || r != this.y) return (o > 0 || o < this.maxScrollX || r > 0 || r < this.maxScrollY) && (u = h.ease.quadratic), void this.scrollTo(o, r, c, u);
                                this._execEvent("scrollEnd")
                            }
                        }
                    }
                }, _resize: function () {
                    var t = this;
                    clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout((function () {
                        t.refresh()
                    }), this.options.resizePolling)
                }, resetPosition: function (t) {
                    var e = this.x, i = this.y;
                    return t = t || 0, !this.hasHorizontalScroll || this.x > 0 ? e = 0 : this.x < this.maxScrollX && (e = this.maxScrollX), !this.hasVerticalScroll || this.y > 0 ? i = 0 : this.y < this.maxScrollY && (i = this.maxScrollY), (e != this.x || i != this.y) && (this.scrollTo(e, i, t, this.options.bounceEasing), !0)
                }, disable: function () {
                    this.enabled = !1
                }, enable: function () {
                    this.enabled = !0
                }, refresh: function (t) {
                    h.getRect(this.wrapper), this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight;
                    var e = h.getRect(this.scroller);
                    this.scrollerWidth = s.round(e.width * this.scale), this.scrollerHeight = s.round(e.height * this.scale), this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight, this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0, this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, h.hasPointer && !this.options.disablePointer && (this.wrapper.style[h.style.touchAction] = h.getTouchAction(this.options.eventPassthrough, !0), this.wrapper.style[h.style.touchAction] || (this.wrapper.style[h.style.touchAction] = h.getTouchAction(this.options.eventPassthrough, !1))), this.wrapperOffset = h.offset(this.wrapper), this._execEvent("refresh"), this.resetPosition(t)
                }, on: function (t, e) {
                    this._events[t] || (this._events[t] = []), this._events[t].push(e)
                }, off: function (t, e) {
                    if (this._events[t]) {
                        var i = this._events[t].indexOf(e);
                        i > -1 && this._events[t].splice(i, 1)
                    }
                }, _execEvent: function (t) {
                    if (this._events[t]) {
                        var e = 0, i = this._events[t].length;
                        if (i) for (; e < i; e++) this._events[t][e].apply(this, [].slice.call(arguments, 1))
                    }
                }, scrollBy: function (t, e, i, n) {
                    t = this.x + t, e = this.y + e, i = i || 0, this.scrollTo(t, e, i, n)
                }, scrollTo: function (t, e, i, n) {
                    n = n || h.ease.circular, this.isInTransition = this.options.useTransition && i > 0;
                    var o = this.options.useTransition && n.style;
                    !i || o ? (o && (this._transitionTimingFunction(n.style), this._transitionTime(i)), this._translate(t, e)) : this._animate(t, e, i, n.fn)
                }, scrollToElement: function (t, e, i, n, o) {
                    if (t = t.nodeType ? t : this.scroller.querySelector(t), t) {
                        var r = h.offset(t);
                        r.left -= this.wrapperOffset.left, r.top -= this.wrapperOffset.top;
                        var a = h.getRect(t), l = h.getRect(this.wrapper);
                        !0 === i && (i = s.round(a.width / 2 - l.width / 2)), !0 === n && (n = s.round(a.height / 2 - l.height / 2)), r.left -= i || 0, r.top -= n || 0, r.left = r.left > 0 ? 0 : r.left < this.maxScrollX ? this.maxScrollX : r.left, r.top = r.top > 0 ? 0 : r.top < this.maxScrollY ? this.maxScrollY : r.top, e = void 0 === e || null === e || "auto" === e ? s.max(s.abs(this.x - r.left), s.abs(this.y - r.top)) : e, this.scrollTo(r.left, r.top, e, o)
                    }
                }, _transitionTime: function (t) {
                    if (this.options.useTransition) {
                        t = t || 0;
                        var e = h.style.transitionDuration;
                        if (e) {
                            if (this.scrollerStyle[e] = t + "ms", !t && h.isBadAndroid) {
                                this.scrollerStyle[e] = "0.0001ms";
                                var i = this;
                                a((function () {
                                    "0.0001ms" === i.scrollerStyle[e] && (i.scrollerStyle[e] = "0s")
                                }))
                            }
                            if (this.indicators) for (var n = this.indicators.length; n--;) this.indicators[n].transitionTime(t)
                        }
                    }
                }, _transitionTimingFunction: function (t) {
                    if (this.scrollerStyle[h.style.transitionTimingFunction] = t, this.indicators) for (var e = this.indicators.length; e--;) this.indicators[e].transitionTimingFunction(t)
                }, _translate: function (t, e) {
                    if (this.options.useTransform ? this.scrollerStyle[h.style.transform] = "translate(" + t + "px," + e + "px) scale(" + this.scale + ") " + this.translateZ : (t = s.round(t), e = s.round(e), this.scrollerStyle.left = t + "px", this.scrollerStyle.top = e + "px"), this.x = t, this.y = e, this.indicators) for (var i = this.indicators.length; i--;) this.indicators[i].updatePosition()
                }, _initEvents: function (t) {
                    var e = t ? h.removeEvent : h.addEvent, i = this.options.bindToWrapper ? this.wrapper : o;
                    e(o, "orientationchange", this), e(o, "resize", this), this.options.click && e(this.wrapper, "click", this, !0), this.options.disableMouse || (e(this.wrapper, "mousedown", this), e(i, "mousemove", this), e(i, "mousecancel", this), e(i, "mouseup", this)), h.hasPointer && !this.options.disablePointer && (e(this.wrapper, h.prefixPointerEvent("pointerdown"), this), e(i, h.prefixPointerEvent("pointermove"), this), e(i, h.prefixPointerEvent("pointercancel"), this), e(i, h.prefixPointerEvent("pointerup"), this)), h.hasTouch && !this.options.disableTouch && (e(this.wrapper, "touchstart", this), e(i, "touchmove", this), e(i, "touchcancel", this), e(i, "touchend", this)), e(this.scroller, "transitionend", this), e(this.scroller, "webkitTransitionEnd", this), e(this.scroller, "oTransitionEnd", this), e(this.scroller, "MSTransitionEnd", this)
                }, getComputedPosition: function () {
                    var t, e, i = o.getComputedStyle(this.scroller, null);
                    return this.options.useTransform ? (i = i[h.style.transform].split(")")[0].split(", "), t = +(i[12] || i[4]), e = +(i[13] || i[5])) : (t = +i.left.replace(/[^-\d.]/g, ""), e = +i.top.replace(/[^-\d.]/g, "")), {
                        x: t,
                        y: e
                    }
                }, _initIndicators: function () {
                    var t, e = this.options.interactiveScrollbars, i = "string" != typeof this.options.scrollbars,
                        n = [], o = this;
                    this.indicators = [], this.options.scrollbars && (this.options.scrollY && (t = {
                        el: c("v", e, this.options.scrollbars),
                        interactive: e,
                        defaultScrollbars: !0,
                        customStyle: i,
                        resize: this.options.resizeScrollbars,
                        shrink: this.options.shrinkScrollbars,
                        fade: this.options.fadeScrollbars,
                        listenX: !1
                    }, this.wrapper.appendChild(t.el), n.push(t)), this.options.scrollX && (t = {
                        el: c("h", e, this.options.scrollbars),
                        interactive: e,
                        defaultScrollbars: !0,
                        customStyle: i,
                        resize: this.options.resizeScrollbars,
                        shrink: this.options.shrinkScrollbars,
                        fade: this.options.fadeScrollbars,
                        listenY: !1
                    }, this.wrapper.appendChild(t.el), n.push(t))), this.options.indicators && (n = n.concat(this.options.indicators));
                    for (var r = n.length; r--;) this.indicators.push(new u(this, n[r]));

                    function s(t) {
                        if (o.indicators) for (var e = o.indicators.length; e--;) t.call(o.indicators[e])
                    }

                    this.options.fadeScrollbars && (this.on("scrollEnd", (function () {
                        s((function () {
                            this.fade()
                        }))
                    })), this.on("scrollCancel", (function () {
                        s((function () {
                            this.fade()
                        }))
                    })), this.on("scrollStart", (function () {
                        s((function () {
                            this.fade(1)
                        }))
                    })), this.on("beforeScrollStart", (function () {
                        s((function () {
                            this.fade(1, !0)
                        }))
                    }))), this.on("refresh", (function () {
                        s((function () {
                            this.refresh()
                        }))
                    })), this.on("destroy", (function () {
                        s((function () {
                            this.destroy()
                        })), delete this.indicators
                    }))
                }, _initZoom: function () {
                    this.scrollerStyle[h.style.transformOrigin] = "0 0"
                }, _zoomStart: function (t) {
                    var e = s.abs(t.touches[0].pageX - t.touches[1].pageX),
                        i = s.abs(t.touches[0].pageY - t.touches[1].pageY);
                    this.touchesDistanceStart = s.sqrt(e * e + i * i), this.startScale = this.scale, this.originX = s.abs(t.touches[0].pageX + t.touches[1].pageX) / 2 + this.wrapperOffset.left - this.x, this.originY = s.abs(t.touches[0].pageY + t.touches[1].pageY) / 2 + this.wrapperOffset.top - this.y, this._execEvent("zoomStart")
                }, _zoom: function (t) {
                    if (this.enabled && h.eventType[t.type] === this.initiated) {
                        this.options.preventDefault && t.preventDefault();
                        var e, i, n, o = s.abs(t.touches[0].pageX - t.touches[1].pageX),
                            r = s.abs(t.touches[0].pageY - t.touches[1].pageY), a = s.sqrt(o * o + r * r),
                            l = 1 / this.touchesDistanceStart * a * this.startScale;
                        this.scaled = !0, l < this.options.zoomMin ? l = .5 * this.options.zoomMin * s.pow(2, l / this.options.zoomMin) : l > this.options.zoomMax && (l = 2 * this.options.zoomMax * s.pow(.5, this.options.zoomMax / l)), e = l / this.startScale, i = this.originX - this.originX * e + this.startX, n = this.originY - this.originY * e + this.startY, this.scale = l, this.scrollTo(i, n, 0)
                    }
                }, _zoomEnd: function (t) {
                    var e, i, n;
                    this.enabled && h.eventType[t.type] === this.initiated && (this.options.preventDefault && t.preventDefault(), this.isInTransition = 0, this.initiated = 0, this.scale > this.options.zoomMax ? this.scale = this.options.zoomMax : this.scale < this.options.zoomMin && (this.scale = this.options.zoomMin), this.refresh(), n = this.scale / this.startScale, e = this.originX - this.originX * n + this.startX, i = this.originY - this.originY * n + this.startY, e > 0 ? e = 0 : e < this.maxScrollX && (e = this.maxScrollX), i > 0 ? i = 0 : i < this.maxScrollY && (i = this.maxScrollY), this.scrollTo(e, i, this.options.bounceTime), this.scaled = !1, this._execEvent("zoomEnd"))
                }, zoom: function (t, e, i, n) {
                    if (t < this.options.zoomMin ? t = this.options.zoomMin : t > this.options.zoomMax && (t = this.options.zoomMax), t != this.scale) {
                        var o = t / this.scale;
                        e = void 0 === e ? this.wrapperWidth / 2 - this.wrapperOffset.left : e, i = void 0 === i ? this.wrapperHeight / 2 - this.wrapperOffset.top : i, n = void 0 === n ? 300 : n, e = e + this.wrapperOffset.left - this.x, i = i + this.wrapperOffset.top - this.y, e = e - e * o + this.x, i = i - i * o + this.y, this.scale = t, this.refresh(), e > 0 ? e = 0 : e < this.maxScrollX && (e = this.maxScrollX), i > 0 ? i = 0 : i < this.maxScrollY && (i = this.maxScrollY), this.scrollTo(e, i, n)
                    }
                }, _wheelZoom: function (t) {
                    var e, i, n = this;
                    if (clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout((function () {
                        n._execEvent("zoomEnd")
                    }), 400), "deltaY" in t) e = -t.deltaY / s.abs(t.deltaY); else if ("wheelDeltaY" in t) e = t.wheelDeltaY / s.abs(t.wheelDeltaY); else if ("wheelDelta" in t) e = t.wheelDelta / s.abs(t.wheelDelta); else {
                        if (!("detail" in t)) return;
                        e = -t.detail / s.abs(t.detail)
                    }
                    isNaN(e) && (e = 0), i = this.scale + .01 * e, this.zoom(i, t.pageX, t.pageY, 0), t.preventDefault(), t.stopPropagation()
                }, _initWheel: function () {
                    h.addEvent(this.wrapper, "wheel", this), h.addEvent(this.wrapper, "mousewheel", this), h.addEvent(this.wrapper, "DOMMouseScroll", this), this.on("destroy", (function () {
                        clearTimeout(this.wheelTimeout), this.wheelTimeout = null, h.removeEvent(this.wrapper, "wheel", this), h.removeEvent(this.wrapper, "mousewheel", this), h.removeEvent(this.wrapper, "DOMMouseScroll", this)
                    }))
                }, _wheel: function (t) {
                    if (this.enabled) {
                        t.preventDefault();
                        var e, i, n, o, r = this;
                        if (void 0 === this.wheelTimeout && r._execEvent("scrollStart"), clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout((function () {
                            r.options.snap || r._execEvent("scrollEnd"), r.wheelTimeout = void 0
                        }), 400), "deltaX" in t) 1 === t.deltaMode ? (e = -t.deltaX * this.options.mouseWheelSpeed, i = -t.deltaY * this.options.mouseWheelSpeed) : (e = -t.deltaX, i = -t.deltaY); else if ("wheelDeltaX" in t) e = t.wheelDeltaX / 120 * this.options.mouseWheelSpeed, i = t.wheelDeltaY / 120 * this.options.mouseWheelSpeed; else if ("wheelDelta" in t) e = i = t.wheelDelta / 120 * this.options.mouseWheelSpeed; else {
                            if (!("detail" in t)) return;
                            e = i = -t.detail / 3 * this.options.mouseWheelSpeed
                        }
                        if (e *= this.options.invertWheelDirection, i *= this.options.invertWheelDirection, this.hasVerticalScroll || (e = i, i = 0), this.options.snap) return n = this.currentPage.pageX, o = this.currentPage.pageY, e > 0 ? n-- : e < 0 && n++, i > 0 ? o-- : i < 0 && o++, void this.goToPage(n, o);
                        n = this.x + s.round(this.hasHorizontalScroll ? e : 0), o = this.y + s.round(this.hasVerticalScroll ? i : 0), this.directionX = e > 0 ? -1 : e < 0 ? 1 : 0, this.directionY = i > 0 ? -1 : i < 0 ? 1 : 0, n > 0 ? n = 0 : n < this.maxScrollX && (n = this.maxScrollX), o > 0 ? o = 0 : o < this.maxScrollY && (o = this.maxScrollY), this.scrollTo(n, o, 0)
                    }
                }, _initSnap: function () {
                    this.currentPage = {}, "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)), this.on("refresh", (function () {
                        var t, e, i, n, o, r, a, l = 0, c = 0, u = 0, p = this.options.snapStepX || this.wrapperWidth,
                            d = this.options.snapStepY || this.wrapperHeight;
                        if (this.pages = [], this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
                            if (!0 === this.options.snap) {
                                i = s.round(p / 2), n = s.round(d / 2);
                                while (u > -this.scrollerWidth) {
                                    this.pages[l] = [], t = 0, o = 0;
                                    while (o > -this.scrollerHeight) this.pages[l][t] = {
                                        x: s.max(u, this.maxScrollX),
                                        y: s.max(o, this.maxScrollY),
                                        width: p,
                                        height: d,
                                        cx: u - i,
                                        cy: o - n
                                    }, o -= d, t++;
                                    u -= p, l++
                                }
                            } else for (r = this.options.snap, t = r.length, e = -1; l < t; l++) a = h.getRect(r[l]), (0 === l || a.left <= h.getRect(r[l - 1]).left) && (c = 0, e++), this.pages[c] || (this.pages[c] = []), u = s.max(-a.left, this.maxScrollX), o = s.max(-a.top, this.maxScrollY), i = u - s.round(a.width / 2), n = o - s.round(a.height / 2), this.pages[c][e] = {
                                x: u,
                                y: o,
                                width: a.width,
                                height: a.height,
                                cx: i,
                                cy: n
                            }, u > this.maxScrollX && c++;
                            this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0), this.options.snapThreshold % 1 === 0 ? (this.snapThresholdX = this.options.snapThreshold, this.snapThresholdY = this.options.snapThreshold) : (this.snapThresholdX = s.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = s.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
                        }
                    })), this.on("flick", (function () {
                        var t = this.options.snapSpeed || s.max(s.max(s.min(s.abs(this.x - this.startX), 1e3), s.min(s.abs(this.y - this.startY), 1e3)), 300);
                        this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, t)
                    }))
                }, _nearestSnap: function (t, e) {
                    if (!this.pages.length) return {x: 0, y: 0, pageX: 0, pageY: 0};
                    var i = 0, n = this.pages.length, o = 0;
                    if (s.abs(t - this.absStartX) < this.snapThresholdX && s.abs(e - this.absStartY) < this.snapThresholdY) return this.currentPage;
                    for (t > 0 ? t = 0 : t < this.maxScrollX && (t = this.maxScrollX), e > 0 ? e = 0 : e < this.maxScrollY && (e = this.maxScrollY); i < n; i++) if (t >= this.pages[i][0].cx) {
                        t = this.pages[i][0].x;
                        break
                    }
                    for (n = this.pages[i].length; o < n; o++) if (e >= this.pages[0][o].cy) {
                        e = this.pages[0][o].y;
                        break
                    }
                    return i == this.currentPage.pageX && (i += this.directionX, i < 0 ? i = 0 : i >= this.pages.length && (i = this.pages.length - 1), t = this.pages[i][0].x), o == this.currentPage.pageY && (o += this.directionY, o < 0 ? o = 0 : o >= this.pages[0].length && (o = this.pages[0].length - 1), e = this.pages[0][o].y), {
                        x: t,
                        y: e,
                        pageX: i,
                        pageY: o
                    }
                }, goToPage: function (t, e, i, n) {
                    n = n || this.options.bounceEasing, t >= this.pages.length ? t = this.pages.length - 1 : t < 0 && (t = 0), e >= this.pages[t].length ? e = this.pages[t].length - 1 : e < 0 && (e = 0);
                    var o = this.pages[t][e].x, r = this.pages[t][e].y;
                    i = void 0 === i ? this.options.snapSpeed || s.max(s.max(s.min(s.abs(o - this.x), 1e3), s.min(s.abs(r - this.y), 1e3)), 300) : i, this.currentPage = {
                        x: o,
                        y: r,
                        pageX: t,
                        pageY: e
                    }, this.scrollTo(o, r, i, n)
                }, next: function (t, e) {
                    var i = this.currentPage.pageX, n = this.currentPage.pageY;
                    i++, i >= this.pages.length && this.hasVerticalScroll && (i = 0, n++), this.goToPage(i, n, t, e)
                }, prev: function (t, e) {
                    var i = this.currentPage.pageX, n = this.currentPage.pageY;
                    i--, i < 0 && this.hasVerticalScroll && (i = 0, n--), this.goToPage(i, n, t, e)
                }, _initKeys: function (t) {
                    var e, i = {pageUp: 33, pageDown: 34, end: 35, home: 36, left: 37, up: 38, right: 39, down: 40};
                    if ("object" == typeof this.options.keyBindings) for (e in this.options.keyBindings) "string" == typeof this.options.keyBindings[e] && (this.options.keyBindings[e] = this.options.keyBindings[e].toUpperCase().charCodeAt(0)); else this.options.keyBindings = {};
                    for (e in i) this.options.keyBindings[e] = this.options.keyBindings[e] || i[e];
                    h.addEvent(o, "keydown", this), this.on("destroy", (function () {
                        h.removeEvent(o, "keydown", this)
                    }))
                }, _key: function (t) {
                    if (this.enabled) {
                        var e, i = this.options.snap, n = i ? this.currentPage.pageX : this.x,
                            o = i ? this.currentPage.pageY : this.y, r = h.getTime(), a = this.keyTime || 0, l = .25;
                        switch (this.options.useTransition && this.isInTransition && (e = this.getComputedPosition(), this._translate(s.round(e.x), s.round(e.y)), this.isInTransition = !1), this.keyAcceleration = r - a < 200 ? s.min(this.keyAcceleration + l, 50) : 0, t.keyCode) {
                            case this.options.keyBindings.pageUp:
                                this.hasHorizontalScroll && !this.hasVerticalScroll ? n += i ? 1 : this.wrapperWidth : o += i ? 1 : this.wrapperHeight;
                                break;
                            case this.options.keyBindings.pageDown:
                                this.hasHorizontalScroll && !this.hasVerticalScroll ? n -= i ? 1 : this.wrapperWidth : o -= i ? 1 : this.wrapperHeight;
                                break;
                            case this.options.keyBindings.end:
                                n = i ? this.pages.length - 1 : this.maxScrollX, o = i ? this.pages[0].length - 1 : this.maxScrollY;
                                break;
                            case this.options.keyBindings.home:
                                n = 0, o = 0;
                                break;
                            case this.options.keyBindings.left:
                                n += i ? -1 : 5 + this.keyAcceleration >> 0;
                                break;
                            case this.options.keyBindings.up:
                                o += i ? 1 : 5 + this.keyAcceleration >> 0;
                                break;
                            case this.options.keyBindings.right:
                                n -= i ? -1 : 5 + this.keyAcceleration >> 0;
                                break;
                            case this.options.keyBindings.down:
                                o -= i ? 1 : 5 + this.keyAcceleration >> 0;
                                break;
                            default:
                                return
                        }
                        i ? this.goToPage(n, o) : (n > 0 ? (n = 0, this.keyAcceleration = 0) : n < this.maxScrollX && (n = this.maxScrollX, this.keyAcceleration = 0), o > 0 ? (o = 0, this.keyAcceleration = 0) : o < this.maxScrollY && (o = this.maxScrollY, this.keyAcceleration = 0), this.scrollTo(n, o, 0), this.keyTime = r)
                    }
                }, _animate: function (t, e, i, n) {
                    var o = this, r = this.x, s = this.y, l = h.getTime(), c = l + i;

                    function u() {
                        var p, d, f, g = h.getTime();
                        if (g >= c) return o.isAnimating = !1, o._translate(t, e), void (o.resetPosition(o.options.bounceTime) || o._execEvent("scrollEnd"));
                        g = (g - l) / i, f = n(g), p = (t - r) * f + r, d = (e - s) * f + s, o._translate(p, d), o.isAnimating && a(u)
                    }

                    this.isAnimating = !0, u()
                }, handleEvent: function (t) {
                    switch (t.type) {
                        case"touchstart":
                        case"pointerdown":
                        case"MSPointerDown":
                        case"mousedown":
                            this._start(t), this.options.zoom && t.touches && t.touches.length > 1 && this._zoomStart(t);
                            break;
                        case"touchmove":
                        case"pointermove":
                        case"MSPointerMove":
                        case"mousemove":
                            if (this.options.zoom && t.touches && t.touches[1]) return void this._zoom(t);
                            this._move(t);
                            break;
                        case"touchend":
                        case"pointerup":
                        case"MSPointerUp":
                        case"mouseup":
                        case"touchcancel":
                        case"pointercancel":
                        case"MSPointerCancel":
                        case"mousecancel":
                            if (this.scaled) return void this._zoomEnd(t);
                            this._end(t);
                            break;
                        case"orientationchange":
                        case"resize":
                            this._resize();
                            break;
                        case"transitionend":
                        case"webkitTransitionEnd":
                        case"oTransitionEnd":
                        case"MSTransitionEnd":
                            this._transitionEnd(t);
                            break;
                        case"wheel":
                        case"DOMMouseScroll":
                        case"mousewheel":
                            if ("zoom" == this.options.wheelAction) return void this._wheelZoom(t);
                            this._wheel(t);
                            break;
                        case"keydown":
                            this._key(t);
                            break
                    }
                }
            }, u.prototype = {
                handleEvent: function (t) {
                    switch (t.type) {
                        case"touchstart":
                        case"pointerdown":
                        case"MSPointerDown":
                        case"mousedown":
                            this._start(t);
                            break;
                        case"touchmove":
                        case"pointermove":
                        case"MSPointerMove":
                        case"mousemove":
                            this._move(t);
                            break;
                        case"touchend":
                        case"pointerup":
                        case"MSPointerUp":
                        case"mouseup":
                        case"touchcancel":
                        case"pointercancel":
                        case"MSPointerCancel":
                        case"mousecancel":
                            this._end(t);
                            break
                    }
                }, destroy: function () {
                    this.options.fadeScrollbars && (clearTimeout(this.fadeTimeout), this.fadeTimeout = null), this.options.interactive && (h.removeEvent(this.indicator, "touchstart", this), h.removeEvent(this.indicator, h.prefixPointerEvent("pointerdown"), this), h.removeEvent(this.indicator, "mousedown", this), h.removeEvent(o, "touchmove", this), h.removeEvent(o, h.prefixPointerEvent("pointermove"), this), h.removeEvent(o, "mousemove", this), h.removeEvent(o, "touchend", this), h.removeEvent(o, h.prefixPointerEvent("pointerup"), this), h.removeEvent(o, "mouseup", this)), this.options.defaultScrollbars && this.wrapper.parentNode && this.wrapper.parentNode.removeChild(this.wrapper)
                }, _start: function (t) {
                    var e = t.touches ? t.touches[0] : t;
                    t.preventDefault(), t.stopPropagation(), this.transitionTime(), this.initiated = !0, this.moved = !1, this.lastPointX = e.pageX, this.lastPointY = e.pageY, this.startTime = h.getTime(), this.options.disableTouch || h.addEvent(o, "touchmove", this), this.options.disablePointer || h.addEvent(o, h.prefixPointerEvent("pointermove"), this), this.options.disableMouse || h.addEvent(o, "mousemove", this), this.scroller._execEvent("beforeScrollStart")
                }, _move: function (t) {
                    var e, i, n, o, r = t.touches ? t.touches[0] : t;
                    h.getTime();
                    this.moved || this.scroller._execEvent("scrollStart"), this.moved = !0, e = r.pageX - this.lastPointX, this.lastPointX = r.pageX, i = r.pageY - this.lastPointY, this.lastPointY = r.pageY, n = this.x + e, o = this.y + i, this._pos(n, o), t.preventDefault(), t.stopPropagation()
                }, _end: function (t) {
                    if (this.initiated) {
                        if (this.initiated = !1, t.preventDefault(), t.stopPropagation(), h.removeEvent(o, "touchmove", this), h.removeEvent(o, h.prefixPointerEvent("pointermove"), this), h.removeEvent(o, "mousemove", this), this.scroller.options.snap) {
                            var e = this.scroller._nearestSnap(this.scroller.x, this.scroller.y),
                                i = this.options.snapSpeed || s.max(s.max(s.min(s.abs(this.scroller.x - e.x), 1e3), s.min(s.abs(this.scroller.y - e.y), 1e3)), 300);
                            this.scroller.x == e.x && this.scroller.y == e.y || (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = e, this.scroller.scrollTo(e.x, e.y, i, this.scroller.options.bounceEasing))
                        }
                        this.moved && this.scroller._execEvent("scrollEnd")
                    }
                }, transitionTime: function (t) {
                    t = t || 0;
                    var e = h.style.transitionDuration;
                    if (e && (this.indicatorStyle[e] = t + "ms", !t && h.isBadAndroid)) {
                        this.indicatorStyle[e] = "0.0001ms";
                        var i = this;
                        a((function () {
                            "0.0001ms" === i.indicatorStyle[e] && (i.indicatorStyle[e] = "0s")
                        }))
                    }
                }, transitionTimingFunction: function (t) {
                    this.indicatorStyle[h.style.transitionTimingFunction] = t
                }, refresh: function () {
                    this.transitionTime(), this.options.listenX && !this.options.listenY ? this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none" : this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none", this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (h.addClass(this.wrapper, "iScrollBothScrollbars"), h.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (h.removeClass(this.wrapper, "iScrollBothScrollbars"), h.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px")), h.getRect(this.wrapper), this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = s.max(s.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, "clip" == this.options.shrink ? (this.minBoundaryX = 8 - this.indicatorWidth, this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX), this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = s.max(s.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, "clip" == this.options.shrink ? (this.minBoundaryY = 8 - this.indicatorHeight, this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY), this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY), this.updatePosition()
                }, updatePosition: function () {
                    var t = this.options.listenX && s.round(this.sizeRatioX * this.scroller.x) || 0,
                        e = this.options.listenY && s.round(this.sizeRatioY * this.scroller.y) || 0;
                    this.options.ignoreBoundaries || (t < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = s.max(this.indicatorWidth + t, 8), this.indicatorStyle.width = this.width + "px"), t = this.minBoundaryX) : t > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = s.max(this.indicatorWidth - (t - this.maxPosX), 8), this.indicatorStyle.width = this.width + "px", t = this.maxPosX + this.indicatorWidth - this.width) : t = this.maxBoundaryX : "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + "px"), e < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = s.max(this.indicatorHeight + 3 * e, 8), this.indicatorStyle.height = this.height + "px"), e = this.minBoundaryY) : e > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = s.max(this.indicatorHeight - 3 * (e - this.maxPosY), 8), this.indicatorStyle.height = this.height + "px", e = this.maxPosY + this.indicatorHeight - this.height) : e = this.maxBoundaryY : "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + "px")), this.x = t, this.y = e, this.scroller.options.useTransform ? this.indicatorStyle[h.style.transform] = "translate(" + t + "px," + e + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = t + "px", this.indicatorStyle.top = e + "px")
                }, _pos: function (t, e) {
                    t < 0 ? t = 0 : t > this.maxPosX && (t = this.maxPosX), e < 0 ? e = 0 : e > this.maxPosY && (e = this.maxPosY), t = this.options.listenX ? s.round(t / this.sizeRatioX) : this.scroller.x, e = this.options.listenY ? s.round(e / this.sizeRatioY) : this.scroller.y, this.scroller.scrollTo(t, e)
                }, fade: function (t, e) {
                    if (!e || this.visible) {
                        clearTimeout(this.fadeTimeout), this.fadeTimeout = null;
                        var i = t ? 250 : 500, n = t ? 0 : 300;
                        t = t ? "1" : "0", this.wrapperStyle[h.style.transitionDuration] = i + "ms", this.fadeTimeout = setTimeout(function (t) {
                            this.wrapperStyle.opacity = t, this.visible = +t
                        }.bind(this, t), n)
                    }
                }
            }, l.utils = h, t.exports ? t.exports = l : (n = function () {
                return l
            }.call(e, i, e, t), void 0 === n || (t.exports = n))
        })(window, document, Math)
    }, ba9f: function (t, e, i) {
        t.exports = i("c229")
    }, c229: function (t, e, i) {
        !function (e, i) {
            t.exports = i()
        }(0, (function () {
            return function (t) {
                var e = {};

                function i(n) {
                    if (e[n]) return e[n].exports;
                    var o = e[n] = {i: n, l: !1, exports: {}};
                    return t[n].call(o.exports, o, o.exports, i), o.l = !0, o.exports
                }

                return i.m = t, i.c = e, i.d = function (t, e, n) {
                    i.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n})
                }, i.r = function (t) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
                }, i.t = function (t, e) {
                    if (1 & e && (t = i(t)), 8 & e) return t;
                    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                    var n = Object.create(null);
                    if (i.r(n), Object.defineProperty(n, "default", {
                        enumerable: !0,
                        value: t
                    }), 2 & e && "string" != typeof t) for (var o in t) i.d(n, o, function (e) {
                        return t[e]
                    }.bind(null, o));
                    return n
                }, i.n = function (t) {
                    var e = t && t.__esModule ? function () {
                        return t.default
                    } : function () {
                        return t
                    };
                    return i.d(e, "a", e), e
                }, i.o = function (t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }, i.p = "", i(i.s = 0)
            }([function (t, e, i) {
                "use strict";
                var n;

                function o(t) {
                    return ["image/png", "image/jpeg", "image/gif"].some(e => e === t)
                }

                i.r(e), i.d(e, "canvastoDataURL", (function () {
                    return s
                })), i.d(e, "canvastoFile", (function () {
                    return a
                })), i.d(e, "dataURLtoFile", (function () {
                    return l
                })), i.d(e, "dataURLtoImage", (function () {
                    return c
                })), i.d(e, "downloadFile", (function () {
                    return u
                })), i.d(e, "filetoDataURL", (function () {
                    return p
                })), i.d(e, "imagetoCanvas", (function () {
                    return f
                })), i.d(e, "urltoBlob", (function () {
                    return g
                })), i.d(e, "urltoImage", (function () {
                    return m
                })), i.d(e, "compress", (function () {
                    return y
                })), i.d(e, "compressAccurately", (function () {
                    return _
                })), i.d(e, "EImageType", (function () {
                    return n
                })), function (t) {
                    t.PNG = "image/png", t.JPEG = "image/jpeg", t.GIF = "image/gif"
                }(n || (n = {}));
                var r = function (t, e, i, n) {
                    return new (i || (i = Promise))((function (o, r) {
                        function s(t) {
                            try {
                                h(n.next(t))
                            } catch (t) {
                                r(t)
                            }
                        }

                        function a(t) {
                            try {
                                h(n.throw(t))
                            } catch (t) {
                                r(t)
                            }
                        }

                        function h(t) {
                            var e;
                            t.done ? o(t.value) : (e = t.value, e instanceof i ? e : new i((function (t) {
                                t(e)
                            }))).then(s, a)
                        }

                        h((n = n.apply(t, e || [])).next())
                    }))
                };

                function s(t, e = .92, i = n.JPEG) {
                    return r(this, void 0, void 0, (function* () {
                        return o(i) || (i = n.JPEG), t.toDataURL(i, e)
                    }))
                }

                function a(t, e = .92, i = n.JPEG) {
                    return new Promise(n => t.toBlob(t => n(t), i, e))
                }

                var h = function (t, e, i, n) {
                    return new (i || (i = Promise))((function (o, r) {
                        function s(t) {
                            try {
                                h(n.next(t))
                            } catch (t) {
                                r(t)
                            }
                        }

                        function a(t) {
                            try {
                                h(n.throw(t))
                            } catch (t) {
                                r(t)
                            }
                        }

                        function h(t) {
                            var e;
                            t.done ? o(t.value) : (e = t.value, e instanceof i ? e : new i((function (t) {
                                t(e)
                            }))).then(s, a)
                        }

                        h((n = n.apply(t, e || [])).next())
                    }))
                };

                function l(t, e) {
                    return h(this, void 0, void 0, (function* () {
                        const i = t.split(",");
                        let n = i[0].match(/:(.*?);/)[1];
                        const r = atob(i[1]);
                        let s = r.length;
                        const a = new Uint8Array(s);
                        for (; s--;) a[s] = r.charCodeAt(s);
                        return o(e) && (n = e), new Blob([a], {type: n})
                    }))
                }

                function c(t) {
                    return new Promise((e, i) => {
                        const n = new Image;
                        n.onload = () => e(n), n.onerror = () => i(new Error("dataURLtoImage(): dataURL is illegal")), n.src = t
                    })
                }

                function u(t, e) {
                    const i = document.createElement("a");
                    i.href = window.URL.createObjectURL(t), i.download = e || Date.now().toString(36), document.body.appendChild(i);
                    const n = document.createEvent("MouseEvents");
                    n.initEvent("click", !1, !1), i.dispatchEvent(n), document.body.removeChild(i)
                }

                function p(t) {
                    return new Promise(e => {
                        const i = new FileReader;
                        i.onloadend = t => e(t.target.result), i.readAsDataURL(t)
                    })
                }

                var d = function (t, e, i, n) {
                    return new (i || (i = Promise))((function (o, r) {
                        function s(t) {
                            try {
                                h(n.next(t))
                            } catch (t) {
                                r(t)
                            }
                        }

                        function a(t) {
                            try {
                                h(n.throw(t))
                            } catch (t) {
                                r(t)
                            }
                        }

                        function h(t) {
                            var e;
                            t.done ? o(t.value) : (e = t.value, e instanceof i ? e : new i((function (t) {
                                t(e)
                            }))).then(s, a)
                        }

                        h((n = n.apply(t, e || [])).next())
                    }))
                };

                function f(t, e = {}) {
                    return d(this, void 0, void 0, (function* () {
                        const i = Object.assign({}, e), n = document.createElement("canvas"), o = n.getContext("2d");
                        let r, s;
                        for (const t in i) Object.prototype.hasOwnProperty.call(i, t) && (i[t] = Number(i[t]));
                        if (i.scale) {
                            const e = i.scale > 0 && i.scale < 10 ? i.scale : 1;
                            s = t.width * e, r = t.height * e
                        } else s = i.width || i.height * t.width / t.height || t.width, r = i.height || i.width * t.height / t.width || t.height;
                        switch ([5, 6, 7, 8].some(t => t === i.orientation) ? (n.height = s, n.width = r) : (n.height = r, n.width = s), i.orientation) {
                            case 3:
                                o.rotate(180 * Math.PI / 180), o.drawImage(t, -n.width, -n.height, n.width, n.height);
                                break;
                            case 6:
                                o.rotate(90 * Math.PI / 180), o.drawImage(t, 0, -n.width, n.height, n.width);
                                break;
                            case 8:
                                o.rotate(270 * Math.PI / 180), o.drawImage(t, -n.height, 0, n.height, n.width);
                                break;
                            case 2:
                                o.translate(n.width, 0), o.scale(-1, 1), o.drawImage(t, 0, 0, n.width, n.height);
                                break;
                            case 4:
                                o.translate(n.width, 0), o.scale(-1, 1), o.rotate(180 * Math.PI / 180), o.drawImage(t, -n.width, -n.height, n.width, n.height);
                                break;
                            case 5:
                                o.translate(n.width, 0), o.scale(-1, 1), o.rotate(90 * Math.PI / 180), o.drawImage(t, 0, -n.width, n.height, n.width);
                                break;
                            case 7:
                                o.translate(n.width, 0), o.scale(-1, 1), o.rotate(270 * Math.PI / 180), o.drawImage(t, -n.height, 0, n.height, n.width);
                                break;
                            default:
                                o.drawImage(t, 0, 0, n.width, n.height)
                        }
                        return n
                    }))
                }

                function g(t) {
                    return fetch(t).then(t => t.blob())
                }

                function m(t) {
                    return new Promise((e, i) => {
                        const n = new Image;
                        n.onload = () => e(n), n.onerror = () => i(new Error("urltoImage(): Image failed to load, please check the image URL")), n.src = t
                    })
                }

                var v = function (t, e, i, n) {
                    return new (i || (i = Promise))((function (o, r) {
                        function s(t) {
                            try {
                                h(n.next(t))
                            } catch (t) {
                                r(t)
                            }
                        }

                        function a(t) {
                            try {
                                h(n.throw(t))
                            } catch (t) {
                                r(t)
                            }
                        }

                        function h(t) {
                            var e;
                            t.done ? o(t.value) : (e = t.value, e instanceof i ? e : new i((function (t) {
                                t(e)
                            }))).then(s, a)
                        }

                        h((n = n.apply(t, e || [])).next())
                    }))
                };

                function y(t, e = {}) {
                    return v(this, void 0, void 0, (function* () {
                        if (!(t instanceof Blob)) throw new Error("compress(): First arg must be a Blob object or a File object.");
                        if ("object" != typeof e && (e = Object.assign({quality: e})), e.quality = Number(e.quality), Number.isNaN(e.quality)) return t;
                        const i = yield p(t);
                        let r = i.split(",")[0].match(/:(.*?);/)[1], a = n.JPEG;
                        o(e.type) && (a = e.type, r = e.type);
                        const h = yield c(i), u = yield f(h, Object.assign({}, e)), d = yield s(u, e.quality, a),
                            g = yield l(d, r);
                        return g.size > t.size ? t : g
                    }))
                }

                function _(t, e = {}) {
                    return v(this, void 0, void 0, (function* () {
                        if (!(t instanceof Blob)) throw new Error("compressAccurately(): First arg must be a Blob object or a File object.");
                        if ("object" != typeof e && (e = Object.assign({size: e})), e.size = Number(e.size), Number.isNaN(e.size)) return t;
                        if (1024 * e.size > t.size) return t;
                        e.accuracy = Number(e.accuracy), (!e.accuracy || e.accuracy < .8 || e.accuracy > .99) && (e.accuracy = .95);
                        const i = e.size * (2 - e.accuracy) * 1024, r = 1024 * e.size, a = e.size * e.accuracy * 1024,
                            h = yield p(t);
                        let u = h.split(",")[0].match(/:(.*?);/)[1], d = n.JPEG;
                        o(e.type) && (d = e.type, u = e.type);
                        const g = yield c(h), m = yield f(g, Object.assign({}, e));
                        let v, y = .5;
                        const _ = [null, null];
                        for (let t = 1; t <= 7; t++) {
                            v = yield s(m, y, d);
                            const e = .75 * v.length;
                            if (7 === t) {
                                (i < e || a > e) && (v = [v, ..._].filter(t => t).sort((t, e) => Math.abs(.75 * t.length - r) - Math.abs(.75 * e.length - r))[0]);
                                break
                            }
                            if (i < e) _[1] = v, y -= Math.pow(.5, t + 1); else {
                                if (!(a > e)) break;
                                _[0] = v, y += Math.pow(.5, t + 1)
                            }
                        }
                        const w = yield l(v, u);
                        return w.size > t.size ? t : w
                    }))
                }
            }])
        }))
    }, c8b5: function (t, e, i) {
        var n;
        /*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
        (function (o, r, s, a) {
            "use strict";
            var h, l = ["", "webkit", "Moz", "MS", "ms", "o"], c = r.createElement("div"), u = "function",
                p = Math.round, d = Math.abs, f = Date.now;

            function g(t, e, i) {
                return setTimeout(S(t, i), e)
            }

            function m(t, e, i) {
                return !!Array.isArray(t) && (v(t, i[e], i), !0)
            }

            function v(t, e, i) {
                var n;
                if (t) if (t.forEach) t.forEach(e, i); else if (t.length !== a) {
                    n = 0;
                    while (n < t.length) e.call(i, t[n], n, t), n++
                } else for (n in t) t.hasOwnProperty(n) && e.call(i, t[n], n, t)
            }

            function y(t, e, i) {
                var n = "DEPRECATED METHOD: " + e + "\n" + i + " AT \n";
                return function () {
                    var e = new Error("get-stack-trace"),
                        i = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                        r = o.console && (o.console.warn || o.console.log);
                    return r && r.call(o.console, n, i), t.apply(this, arguments)
                }
            }

            h = "function" !== typeof Object.assign ? function (t) {
                if (t === a || null === t) throw new TypeError("Cannot convert undefined or null to object");
                for (var e = Object(t), i = 1; i < arguments.length; i++) {
                    var n = arguments[i];
                    if (n !== a && null !== n) for (var o in n) n.hasOwnProperty(o) && (e[o] = n[o])
                }
                return e
            } : Object.assign;
            var _ = y((function (t, e, i) {
                var n = Object.keys(e), o = 0;
                while (o < n.length) (!i || i && t[n[o]] === a) && (t[n[o]] = e[n[o]]), o++;
                return t
            }), "extend", "Use `assign`."), w = y((function (t, e) {
                return _(t, e, !0)
            }), "merge", "Use `assign`.");

            function b(t, e, i) {
                var n, o = e.prototype;
                n = t.prototype = Object.create(o), n.constructor = t, n._super = o, i && h(n, i)
            }

            function S(t, e) {
                return function () {
                    return t.apply(e, arguments)
                }
            }

            function x(t, e) {
                return typeof t == u ? t.apply(e && e[0] || a, e) : t
            }

            function T(t, e) {
                return t === a ? e : t
            }

            function P(t, e, i) {
                v(z(e), (function (e) {
                    t.addEventListener(e, i, !1)
                }))
            }

            function E(t, e, i) {
                v(z(e), (function (e) {
                    t.removeEventListener(e, i, !1)
                }))
            }

            function L(t, e) {
                while (t) {
                    if (t == e) return !0;
                    t = t.parentNode
                }
                return !1
            }

            function k(t, e) {
                return t.indexOf(e) > -1
            }

            function z(t) {
                return t.trim().split(/\s+/g)
            }

            function I(t, e, i) {
                if (t.indexOf && !i) return t.indexOf(e);
                var n = 0;
                while (n < t.length) {
                    if (i && t[n][i] == e || !i && t[n] === e) return n;
                    n++
                }
                return -1
            }

            function M(t) {
                return Array.prototype.slice.call(t, 0)
            }

            function X(t, e, i) {
                var n = [], o = [], r = 0;
                while (r < t.length) {
                    var s = e ? t[r][e] : t[r];
                    I(o, s) < 0 && n.push(t[r]), o[r] = s, r++
                }
                return i && (n = e ? n.sort((function (t, i) {
                    return t[e] > i[e]
                })) : n.sort()), n
            }

            function Y(t, e) {
                var i, n, o = e[0].toUpperCase() + e.slice(1), r = 0;
                while (r < l.length) {
                    if (i = l[r], n = i ? i + o : e, n in t) return n;
                    r++
                }
                return a
            }

            var C = 1;

            function D() {
                return C++
            }

            function A(t) {
                var e = t.ownerDocument || t;
                return e.defaultView || e.parentWindow || o
            }

            var R = /mobile|tablet|ip(ad|hone|od)|android/i, O = "ontouchstart" in o, F = Y(o, "PointerEvent") !== a,
                H = O && R.test(navigator.userAgent), W = "touch", B = "pen", U = "mouse", j = "kinect", $ = 25, N = 1,
                G = 2, q = 4, V = 8, Z = 1, K = 2, J = 4, Q = 8, tt = 16, et = K | J, it = Q | tt, nt = et | it,
                ot = ["x", "y"], rt = ["clientX", "clientY"];

            function st(t, e) {
                var i = this;
                this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function (e) {
                    x(t.options.enable, [t]) && i.handler(e)
                }, this.init()
            }

            function at(t) {
                var e, i = t.options.inputClass;
                return e = i || (F ? kt : H ? At : O ? Ht : xt), new e(t, ht)
            }

            function ht(t, e, i) {
                var n = i.pointers.length, o = i.changedPointers.length, r = e & N && n - o === 0,
                    s = e & (q | V) && n - o === 0;
                i.isFirst = !!r, i.isFinal = !!s, r && (t.session = {}), i.eventType = e, lt(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i
            }

            function lt(t, e) {
                var i = t.session, n = e.pointers, o = n.length;
                i.firstInput || (i.firstInput = pt(e)), o > 1 && !i.firstMultiple ? i.firstMultiple = pt(e) : 1 === o && (i.firstMultiple = !1);
                var r = i.firstInput, s = i.firstMultiple, a = s ? s.center : r.center, h = e.center = dt(n);
                e.timeStamp = f(), e.deltaTime = e.timeStamp - r.timeStamp, e.angle = vt(a, h), e.distance = mt(a, h), ct(i, e), e.offsetDirection = gt(e.deltaX, e.deltaY);
                var l = ft(e.deltaTime, e.deltaX, e.deltaY);
                e.overallVelocityX = l.x, e.overallVelocityY = l.y, e.overallVelocity = d(l.x) > d(l.y) ? l.x : l.y, e.scale = s ? _t(s.pointers, n) : 1, e.rotation = s ? yt(s.pointers, n) : 0, e.maxPointers = i.prevInput ? e.pointers.length > i.prevInput.maxPointers ? e.pointers.length : i.prevInput.maxPointers : e.pointers.length, ut(i, e);
                var c = t.element;
                L(e.srcEvent.target, c) && (c = e.srcEvent.target), e.target = c
            }

            function ct(t, e) {
                var i = e.center, n = t.offsetDelta || {}, o = t.prevDelta || {}, r = t.prevInput || {};
                e.eventType !== N && r.eventType !== q || (o = t.prevDelta = {
                    x: r.deltaX || 0,
                    y: r.deltaY || 0
                }, n = t.offsetDelta = {x: i.x, y: i.y}), e.deltaX = o.x + (i.x - n.x), e.deltaY = o.y + (i.y - n.y)
            }

            function ut(t, e) {
                var i, n, o, r, s = t.lastInterval || e, h = e.timeStamp - s.timeStamp;
                if (e.eventType != V && (h > $ || s.velocity === a)) {
                    var l = e.deltaX - s.deltaX, c = e.deltaY - s.deltaY, u = ft(h, l, c);
                    n = u.x, o = u.y, i = d(u.x) > d(u.y) ? u.x : u.y, r = gt(l, c), t.lastInterval = e
                } else i = s.velocity, n = s.velocityX, o = s.velocityY, r = s.direction;
                e.velocity = i, e.velocityX = n, e.velocityY = o, e.direction = r
            }

            function pt(t) {
                var e = [], i = 0;
                while (i < t.pointers.length) e[i] = {
                    clientX: p(t.pointers[i].clientX),
                    clientY: p(t.pointers[i].clientY)
                }, i++;
                return {timeStamp: f(), pointers: e, center: dt(e), deltaX: t.deltaX, deltaY: t.deltaY}
            }

            function dt(t) {
                var e = t.length;
                if (1 === e) return {x: p(t[0].clientX), y: p(t[0].clientY)};
                var i = 0, n = 0, o = 0;
                while (o < e) i += t[o].clientX, n += t[o].clientY, o++;
                return {x: p(i / e), y: p(n / e)}
            }

            function ft(t, e, i) {
                return {x: e / t || 0, y: i / t || 0}
            }

            function gt(t, e) {
                return t === e ? Z : d(t) >= d(e) ? t < 0 ? K : J : e < 0 ? Q : tt
            }

            function mt(t, e, i) {
                i || (i = ot);
                var n = e[i[0]] - t[i[0]], o = e[i[1]] - t[i[1]];
                return Math.sqrt(n * n + o * o)
            }

            function vt(t, e, i) {
                i || (i = ot);
                var n = e[i[0]] - t[i[0]], o = e[i[1]] - t[i[1]];
                return 180 * Math.atan2(o, n) / Math.PI
            }

            function yt(t, e) {
                return vt(e[1], e[0], rt) + vt(t[1], t[0], rt)
            }

            function _t(t, e) {
                return mt(e[0], e[1], rt) / mt(t[0], t[1], rt)
            }

            st.prototype = {
                handler: function () {
                }, init: function () {
                    this.evEl && P(this.element, this.evEl, this.domHandler), this.evTarget && P(this.target, this.evTarget, this.domHandler), this.evWin && P(A(this.element), this.evWin, this.domHandler)
                }, destroy: function () {
                    this.evEl && E(this.element, this.evEl, this.domHandler), this.evTarget && E(this.target, this.evTarget, this.domHandler), this.evWin && E(A(this.element), this.evWin, this.domHandler)
                }
            };
            var wt = {mousedown: N, mousemove: G, mouseup: q}, bt = "mousedown", St = "mousemove mouseup";

            function xt() {
                this.evEl = bt, this.evWin = St, this.pressed = !1, st.apply(this, arguments)
            }

            b(xt, st, {
                handler: function (t) {
                    var e = wt[t.type];
                    e & N && 0 === t.button && (this.pressed = !0), e & G && 1 !== t.which && (e = q), this.pressed && (e & q && (this.pressed = !1), this.callback(this.manager, e, {
                        pointers: [t],
                        changedPointers: [t],
                        pointerType: U,
                        srcEvent: t
                    }))
                }
            });
            var Tt = {pointerdown: N, pointermove: G, pointerup: q, pointercancel: V, pointerout: V},
                Pt = {2: W, 3: B, 4: U, 5: j}, Et = "pointerdown", Lt = "pointermove pointerup pointercancel";

            function kt() {
                this.evEl = Et, this.evWin = Lt, st.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
            }

            o.MSPointerEvent && !o.PointerEvent && (Et = "MSPointerDown", Lt = "MSPointerMove MSPointerUp MSPointerCancel"), b(kt, st, {
                handler: function (t) {
                    var e = this.store, i = !1, n = t.type.toLowerCase().replace("ms", ""), o = Tt[n],
                        r = Pt[t.pointerType] || t.pointerType, s = r == W, a = I(e, t.pointerId, "pointerId");
                    o & N && (0 === t.button || s) ? a < 0 && (e.push(t), a = e.length - 1) : o & (q | V) && (i = !0), a < 0 || (e[a] = t, this.callback(this.manager, o, {
                        pointers: e,
                        changedPointers: [t],
                        pointerType: r,
                        srcEvent: t
                    }), i && e.splice(a, 1))
                }
            });
            var zt = {touchstart: N, touchmove: G, touchend: q, touchcancel: V}, It = "touchstart",
                Mt = "touchstart touchmove touchend touchcancel";

            function Xt() {
                this.evTarget = It, this.evWin = Mt, this.started = !1, st.apply(this, arguments)
            }

            function Yt(t, e) {
                var i = M(t.touches), n = M(t.changedTouches);
                return e & (q | V) && (i = X(i.concat(n), "identifier", !0)), [i, n]
            }

            b(Xt, st, {
                handler: function (t) {
                    var e = zt[t.type];
                    if (e === N && (this.started = !0), this.started) {
                        var i = Yt.call(this, t, e);
                        e & (q | V) && i[0].length - i[1].length === 0 && (this.started = !1), this.callback(this.manager, e, {
                            pointers: i[0],
                            changedPointers: i[1],
                            pointerType: W,
                            srcEvent: t
                        })
                    }
                }
            });
            var Ct = {touchstart: N, touchmove: G, touchend: q, touchcancel: V},
                Dt = "touchstart touchmove touchend touchcancel";

            function At() {
                this.evTarget = Dt, this.targetIds = {}, st.apply(this, arguments)
            }

            function Rt(t, e) {
                var i = M(t.touches), n = this.targetIds;
                if (e & (N | G) && 1 === i.length) return n[i[0].identifier] = !0, [i, i];
                var o, r, s = M(t.changedTouches), a = [], h = this.target;
                if (r = i.filter((function (t) {
                    return L(t.target, h)
                })), e === N) {
                    o = 0;
                    while (o < r.length) n[r[o].identifier] = !0, o++
                }
                o = 0;
                while (o < s.length) n[s[o].identifier] && a.push(s[o]), e & (q | V) && delete n[s[o].identifier], o++;
                return a.length ? [X(r.concat(a), "identifier", !0), a] : void 0
            }

            b(At, st, {
                handler: function (t) {
                    var e = Ct[t.type], i = Rt.call(this, t, e);
                    i && this.callback(this.manager, e, {
                        pointers: i[0],
                        changedPointers: i[1],
                        pointerType: W,
                        srcEvent: t
                    })
                }
            });
            var Ot = 2500, Ft = 25;

            function Ht() {
                st.apply(this, arguments);
                var t = S(this.handler, this);
                this.touch = new At(this.manager, t), this.mouse = new xt(this.manager, t), this.primaryTouch = null, this.lastTouches = []
            }

            function Wt(t, e) {
                t & N ? (this.primaryTouch = e.changedPointers[0].identifier, Bt.call(this, e)) : t & (q | V) && Bt.call(this, e)
            }

            function Bt(t) {
                var e = t.changedPointers[0];
                if (e.identifier === this.primaryTouch) {
                    var i = {x: e.clientX, y: e.clientY};
                    this.lastTouches.push(i);
                    var n = this.lastTouches, o = function () {
                        var t = n.indexOf(i);
                        t > -1 && n.splice(t, 1)
                    };
                    setTimeout(o, Ot)
                }
            }

            function Ut(t) {
                for (var e = t.srcEvent.clientX, i = t.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
                    var o = this.lastTouches[n], r = Math.abs(e - o.x), s = Math.abs(i - o.y);
                    if (r <= Ft && s <= Ft) return !0
                }
                return !1
            }

            b(Ht, st, {
                handler: function (t, e, i) {
                    var n = i.pointerType == W, o = i.pointerType == U;
                    if (!(o && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
                        if (n) Wt.call(this, e, i); else if (o && Ut.call(this, i)) return;
                        this.callback(t, e, i)
                    }
                }, destroy: function () {
                    this.touch.destroy(), this.mouse.destroy()
                }
            });
            var jt = Y(c.style, "touchAction"), $t = jt !== a, Nt = "compute", Gt = "auto", qt = "manipulation",
                Vt = "none", Zt = "pan-x", Kt = "pan-y", Jt = ee();

            function Qt(t, e) {
                this.manager = t, this.set(e)
            }

            function te(t) {
                if (k(t, Vt)) return Vt;
                var e = k(t, Zt), i = k(t, Kt);
                return e && i ? Vt : e || i ? e ? Zt : Kt : k(t, qt) ? qt : Gt
            }

            function ee() {
                if (!$t) return !1;
                var t = {}, e = o.CSS && o.CSS.supports;
                return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach((function (i) {
                    t[i] = !e || o.CSS.supports("touch-action", i)
                })), t
            }

            Qt.prototype = {
                set: function (t) {
                    t == Nt && (t = this.compute()), $t && this.manager.element.style && Jt[t] && (this.manager.element.style[jt] = t), this.actions = t.toLowerCase().trim()
                }, update: function () {
                    this.set(this.manager.options.touchAction)
                }, compute: function () {
                    var t = [];
                    return v(this.manager.recognizers, (function (e) {
                        x(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
                    })), te(t.join(" "))
                }, preventDefaults: function (t) {
                    var e = t.srcEvent, i = t.offsetDirection;
                    if (this.manager.session.prevented) e.preventDefault(); else {
                        var n = this.actions, o = k(n, Vt) && !Jt[Vt], r = k(n, Kt) && !Jt[Kt], s = k(n, Zt) && !Jt[Zt];
                        if (o) {
                            var a = 1 === t.pointers.length, h = t.distance < 2, l = t.deltaTime < 250;
                            if (a && h && l) return
                        }
                        if (!s || !r) return o || r && i & et || s && i & it ? this.preventSrc(e) : void 0
                    }
                }, preventSrc: function (t) {
                    this.manager.session.prevented = !0, t.preventDefault()
                }
            };
            var ie = 1, ne = 2, oe = 4, re = 8, se = re, ae = 16, he = 32;

            function le(t) {
                this.options = h({}, this.defaults, t || {}), this.id = D(), this.manager = null, this.options.enable = T(this.options.enable, !0), this.state = ie, this.simultaneous = {}, this.requireFail = []
            }

            function ce(t) {
                return t & ae ? "cancel" : t & re ? "end" : t & oe ? "move" : t & ne ? "start" : ""
            }

            function ue(t) {
                return t == tt ? "down" : t == Q ? "up" : t == K ? "left" : t == J ? "right" : ""
            }

            function pe(t, e) {
                var i = e.manager;
                return i ? i.get(t) : t
            }

            function de() {
                le.apply(this, arguments)
            }

            function fe() {
                de.apply(this, arguments), this.pX = null, this.pY = null
            }

            function ge() {
                de.apply(this, arguments)
            }

            function me() {
                le.apply(this, arguments), this._timer = null, this._input = null
            }

            function ve() {
                de.apply(this, arguments)
            }

            function ye() {
                de.apply(this, arguments)
            }

            function _e() {
                le.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
            }

            function we(t, e) {
                return e = e || {}, e.recognizers = T(e.recognizers, we.defaults.preset), new xe(t, e)
            }

            le.prototype = {
                defaults: {}, set: function (t) {
                    return h(this.options, t), this.manager && this.manager.touchAction.update(), this
                }, recognizeWith: function (t) {
                    if (m(t, "recognizeWith", this)) return this;
                    var e = this.simultaneous;
                    return t = pe(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this
                }, dropRecognizeWith: function (t) {
                    return m(t, "dropRecognizeWith", this) || (t = pe(t, this), delete this.simultaneous[t.id]), this
                }, requireFailure: function (t) {
                    if (m(t, "requireFailure", this)) return this;
                    var e = this.requireFail;
                    return t = pe(t, this), -1 === I(e, t) && (e.push(t), t.requireFailure(this)), this
                }, dropRequireFailure: function (t) {
                    if (m(t, "dropRequireFailure", this)) return this;
                    t = pe(t, this);
                    var e = I(this.requireFail, t);
                    return e > -1 && this.requireFail.splice(e, 1), this
                }, hasRequireFailures: function () {
                    return this.requireFail.length > 0
                }, canRecognizeWith: function (t) {
                    return !!this.simultaneous[t.id]
                }, emit: function (t) {
                    var e = this, i = this.state;

                    function n(i) {
                        e.manager.emit(i, t)
                    }

                    i < re && n(e.options.event + ce(i)), n(e.options.event), t.additionalEvent && n(t.additionalEvent), i >= re && n(e.options.event + ce(i))
                }, tryEmit: function (t) {
                    if (this.canEmit()) return this.emit(t);
                    this.state = he
                }, canEmit: function () {
                    var t = 0;
                    while (t < this.requireFail.length) {
                        if (!(this.requireFail[t].state & (he | ie))) return !1;
                        t++
                    }
                    return !0
                }, recognize: function (t) {
                    var e = h({}, t);
                    if (!x(this.options.enable, [this, e])) return this.reset(), void (this.state = he);
                    this.state & (se | ae | he) && (this.state = ie), this.state = this.process(e), this.state & (ne | oe | re | ae) && this.tryEmit(e)
                }, process: function (t) {
                }, getTouchAction: function () {
                }, reset: function () {
                }
            }, b(de, le, {
                defaults: {pointers: 1}, attrTest: function (t) {
                    var e = this.options.pointers;
                    return 0 === e || t.pointers.length === e
                }, process: function (t) {
                    var e = this.state, i = t.eventType, n = e & (ne | oe), o = this.attrTest(t);
                    return n && (i & V || !o) ? e | ae : n || o ? i & q ? e | re : e & ne ? e | oe : ne : he
                }
            }), b(fe, de, {
                defaults: {event: "pan", threshold: 10, pointers: 1, direction: nt},
                getTouchAction: function () {
                    var t = this.options.direction, e = [];
                    return t & et && e.push(Kt), t & it && e.push(Zt), e
                },
                directionTest: function (t) {
                    var e = this.options, i = !0, n = t.distance, o = t.direction, r = t.deltaX, s = t.deltaY;
                    return o & e.direction || (e.direction & et ? (o = 0 === r ? Z : r < 0 ? K : J, i = r != this.pX, n = Math.abs(t.deltaX)) : (o = 0 === s ? Z : s < 0 ? Q : tt, i = s != this.pY, n = Math.abs(t.deltaY))), t.direction = o, i && n > e.threshold && o & e.direction
                },
                attrTest: function (t) {
                    return de.prototype.attrTest.call(this, t) && (this.state & ne || !(this.state & ne) && this.directionTest(t))
                },
                emit: function (t) {
                    this.pX = t.deltaX, this.pY = t.deltaY;
                    var e = ue(t.direction);
                    e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
                }
            }), b(ge, de, {
                defaults: {event: "pinch", threshold: 0, pointers: 2}, getTouchAction: function () {
                    return [Vt]
                }, attrTest: function (t) {
                    return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & ne)
                }, emit: function (t) {
                    if (1 !== t.scale) {
                        var e = t.scale < 1 ? "in" : "out";
                        t.additionalEvent = this.options.event + e
                    }
                    this._super.emit.call(this, t)
                }
            }), b(me, le, {
                defaults: {event: "press", pointers: 1, time: 251, threshold: 9},
                getTouchAction: function () {
                    return [Gt]
                },
                process: function (t) {
                    var e = this.options, i = t.pointers.length === e.pointers, n = t.distance < e.threshold,
                        o = t.deltaTime > e.time;
                    if (this._input = t, !n || !i || t.eventType & (q | V) && !o) this.reset(); else if (t.eventType & N) this.reset(), this._timer = g((function () {
                        this.state = se, this.tryEmit()
                    }), e.time, this); else if (t.eventType & q) return se;
                    return he
                },
                reset: function () {
                    clearTimeout(this._timer)
                },
                emit: function (t) {
                    this.state === se && (t && t.eventType & q ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = f(), this.manager.emit(this.options.event, this._input)))
                }
            }), b(ve, de, {
                defaults: {event: "rotate", threshold: 0, pointers: 2}, getTouchAction: function () {
                    return [Vt]
                }, attrTest: function (t) {
                    return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & ne)
                }
            }), b(ye, de, {
                defaults: {event: "swipe", threshold: 10, velocity: .3, direction: et | it, pointers: 1},
                getTouchAction: function () {
                    return fe.prototype.getTouchAction.call(this)
                },
                attrTest: function (t) {
                    var e, i = this.options.direction;
                    return i & (et | it) ? e = t.overallVelocity : i & et ? e = t.overallVelocityX : i & it && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && i & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && d(e) > this.options.velocity && t.eventType & q
                },
                emit: function (t) {
                    var e = ue(t.offsetDirection);
                    e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
                }
            }), b(_e, le, {
                defaults: {
                    event: "tap",
                    pointers: 1,
                    taps: 1,
                    interval: 300,
                    time: 250,
                    threshold: 9,
                    posThreshold: 10
                }, getTouchAction: function () {
                    return [qt]
                }, process: function (t) {
                    var e = this.options, i = t.pointers.length === e.pointers, n = t.distance < e.threshold,
                        o = t.deltaTime < e.time;
                    if (this.reset(), t.eventType & N && 0 === this.count) return this.failTimeout();
                    if (n && o && i) {
                        if (t.eventType != q) return this.failTimeout();
                        var r = !this.pTime || t.timeStamp - this.pTime < e.interval,
                            s = !this.pCenter || mt(this.pCenter, t.center) < e.posThreshold;
                        this.pTime = t.timeStamp, this.pCenter = t.center, s && r ? this.count += 1 : this.count = 1, this._input = t;
                        var a = this.count % e.taps;
                        if (0 === a) return this.hasRequireFailures() ? (this._timer = g((function () {
                            this.state = se, this.tryEmit()
                        }), e.interval, this), ne) : se
                    }
                    return he
                }, failTimeout: function () {
                    return this._timer = g((function () {
                        this.state = he
                    }), this.options.interval, this), he
                }, reset: function () {
                    clearTimeout(this._timer)
                }, emit: function () {
                    this.state == se && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
                }
            }), we.VERSION = "2.0.7", we.defaults = {
                domEvents: !1,
                touchAction: Nt,
                enable: !0,
                inputTarget: null,
                inputClass: null,
                preset: [[ve, {enable: !1}], [ge, {enable: !1}, ["rotate"]], [ye, {direction: et}], [fe, {direction: et}, ["swipe"]], [_e], [_e, {
                    event: "doubletap",
                    taps: 2
                }, ["tap"]], [me]],
                cssProps: {
                    userSelect: "none",
                    touchSelect: "none",
                    touchCallout: "none",
                    contentZooming: "none",
                    userDrag: "none",
                    tapHighlightColor: "rgba(0,0,0,0)"
                }
            };
            var be = 1, Se = 2;

            function xe(t, e) {
                this.options = h({}, we.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = at(this), this.touchAction = new Qt(this, this.options.touchAction), Te(this, !0), v(this.options.recognizers, (function (t) {
                    var e = this.add(new t[0](t[1]));
                    t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
                }), this)
            }

            function Te(t, e) {
                var i, n = t.element;
                n.style && (v(t.options.cssProps, (function (o, r) {
                    i = Y(n.style, r), e ? (t.oldCssProps[i] = n.style[i], n.style[i] = o) : n.style[i] = t.oldCssProps[i] || ""
                })), e || (t.oldCssProps = {}))
            }

            function Pe(t, e) {
                var i = r.createEvent("Event");
                i.initEvent(t, !0, !0), i.gesture = e, e.target.dispatchEvent(i)
            }

            xe.prototype = {
                set: function (t) {
                    return h(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
                }, stop: function (t) {
                    this.session.stopped = t ? Se : be
                }, recognize: function (t) {
                    var e = this.session;
                    if (!e.stopped) {
                        var i;
                        this.touchAction.preventDefaults(t);
                        var n = this.recognizers, o = e.curRecognizer;
                        (!o || o && o.state & se) && (o = e.curRecognizer = null);
                        var r = 0;
                        while (r < n.length) i = n[r], e.stopped === Se || o && i != o && !i.canRecognizeWith(o) ? i.reset() : i.recognize(t), !o && i.state & (ne | oe | re) && (o = e.curRecognizer = i), r++
                    }
                }, get: function (t) {
                    if (t instanceof le) return t;
                    for (var e = this.recognizers, i = 0; i < e.length; i++) if (e[i].options.event == t) return e[i];
                    return null
                }, add: function (t) {
                    if (m(t, "add", this)) return this;
                    var e = this.get(t.options.event);
                    return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
                }, remove: function (t) {
                    if (m(t, "remove", this)) return this;
                    if (t = this.get(t), t) {
                        var e = this.recognizers, i = I(e, t);
                        -1 !== i && (e.splice(i, 1), this.touchAction.update())
                    }
                    return this
                }, on: function (t, e) {
                    if (t !== a && e !== a) {
                        var i = this.handlers;
                        return v(z(t), (function (t) {
                            i[t] = i[t] || [], i[t].push(e)
                        })), this
                    }
                }, off: function (t, e) {
                    if (t !== a) {
                        var i = this.handlers;
                        return v(z(t), (function (t) {
                            e ? i[t] && i[t].splice(I(i[t], e), 1) : delete i[t]
                        })), this
                    }
                }, emit: function (t, e) {
                    this.options.domEvents && Pe(t, e);
                    var i = this.handlers[t] && this.handlers[t].slice();
                    if (i && i.length) {
                        e.type = t, e.preventDefault = function () {
                            e.srcEvent.preventDefault()
                        };
                        var n = 0;
                        while (n < i.length) i[n](e), n++
                    }
                }, destroy: function () {
                    this.element && Te(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
                }
            }, h(we, {
                INPUT_START: N,
                INPUT_MOVE: G,
                INPUT_END: q,
                INPUT_CANCEL: V,
                STATE_POSSIBLE: ie,
                STATE_BEGAN: ne,
                STATE_CHANGED: oe,
                STATE_ENDED: re,
                STATE_RECOGNIZED: se,
                STATE_CANCELLED: ae,
                STATE_FAILED: he,
                DIRECTION_NONE: Z,
                DIRECTION_LEFT: K,
                DIRECTION_RIGHT: J,
                DIRECTION_UP: Q,
                DIRECTION_DOWN: tt,
                DIRECTION_HORIZONTAL: et,
                DIRECTION_VERTICAL: it,
                DIRECTION_ALL: nt,
                Manager: xe,
                Input: st,
                TouchAction: Qt,
                TouchInput: At,
                MouseInput: xt,
                PointerEventInput: kt,
                TouchMouseInput: Ht,
                SingleTouchInput: Xt,
                Recognizer: le,
                AttrRecognizer: de,
                Tap: _e,
                Pan: fe,
                Swipe: ye,
                Pinch: ge,
                Rotate: ve,
                Press: me,
                on: P,
                off: E,
                each: v,
                merge: w,
                extend: _,
                assign: h,
                inherit: b,
                bindFn: S,
                prefixed: Y
            });
            var Ee = "undefined" !== typeof o ? o : "undefined" !== typeof self ? self : {};
            Ee.Hammer = we, n = function () {
                return we
            }.call(e, i, e, t), n === a || (t.exports = n)
        })(window, document)
    }, d585: function (t, e, i) {
        t.exports = i.p + "img/eye.b4b68a91.jpg"
    }
}]);
//# sourceMappingURL=chunk-692827a5.fe592148.js.map