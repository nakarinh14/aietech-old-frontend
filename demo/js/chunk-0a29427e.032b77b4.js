(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-0a29427e"], {
    "91f4": function (e, a, t) {
        "use strict";
        a.__esModule = !0, a.default = void 0;
        var n = {
            name: "Name",
            tel: "Phone",
            save: "Save",
            confirm: "Confirm",
            cancel: "Cancel",
            delete: "Delete",
            complete: "Complete",
            loading: "Loading...",
            telEmpty: "Please fill in the tel",
            nameEmpty: "Please fill in the name",
            nameInvalid: "Malformed name",
            confirmDelete: "Are you sure you want to delete?",
            telInvalid: "Malformed phone number",
            vanCalendar: {
                end: "End",
                start: "Start",
                title: "Calendar",
                startEnd: "Start/End",
                weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                monthTitle: function (e, a) {
                    return e + "/" + a
                },
                rangePrompt: function (e) {
                    return "Choose no more than " + e + " days"
                }
            },
            vanCascader: {select: "Select"},
            vanContactCard: {addText: "Add contact info"},
            vanContactList: {addText: "Add new contact"},
            vanPagination: {prev: "Previous", next: "Next"},
            vanPullRefresh: {pulling: "Pull to refresh...", loosing: "Loose to refresh..."},
            vanSubmitBar: {label: "Total："},
            vanCoupon: {
                unlimited: "Unlimited", discount: function (e) {
                    return 10 * e + "% off"
                }, condition: function (e) {
                    return "At least " + e
                }
            },
            vanCouponCell: {
                title: "Coupon", tips: "No coupons", count: function (e) {
                    return "You have " + e + " coupons"
                }
            },
            vanCouponList: {
                empty: "No coupons",
                exchange: "Exchange",
                close: "Close",
                enable: "Available",
                disabled: "Unavailable",
                placeholder: "Coupon code"
            },
            vanAddressEdit: {
                area: "Area",
                postal: "Postal",
                areaEmpty: "Please select a receiving area",
                addressEmpty: "Address can not be empty",
                postalEmpty: "Wrong postal code",
                defaultAddress: "Set as the default address",
                telPlaceholder: "Phone",
                namePlaceholder: "Name",
                areaPlaceholder: "Area"
            },
            vanAddressEditDetail: {label: "Address", placeholder: "Address"},
            vanAddressList: {add: "Add new address"}
        };
        a.default = n
    }, b459: function (e, a, t) {
        "use strict";
        a.__esModule = !0, a.default = void 0;
        var n = {
            name: "ชื่อจริง",
            tel: "เบอร์โทร",
            save: "บันทึก",
            confirm: "ยืนยัน",
            cancel: "ยกเลิก",
            delete: "删除",
            complete: "完成",
            loading: "加载中...",
            telEmpty: "请填写电话",
            nameEmpty: "请填写姓名",
            nameInvalid: "请输入正确的姓名",
            confirmDelete: "确定要删除吗",
            telInvalid: "请输入正确的手机号",
            vanCalendar: {
                end: "结束",
                start: "开始",
                title: "日期选择",
                confirm: "确定",
                startEnd: "开始/结束",
                weekdays: ["日", "一", "二", "三", "四", "五", "六"],
                monthTitle: function (e, a) {
                    return e + "年" + a + "月"
                },
                rangePrompt: function (e) {
                    return "选择天数不能超过 " + e + " 天"
                }
            },
            vanCascader: {select: "请选择"},
            vanContactCard: {addText: "添加联系人"},
            vanContactList: {addText: "新建联系人"},
            vanPagination: {prev: "上一页", next: "下一页"},
            vanPullRefresh: {pulling: "下拉即可刷新...", loosing: "释放即可刷新..."},
            vanSubmitBar: {label: "合计："},
            vanCoupon: {
                unlimited: "无使用门槛", discount: function (e) {
                    return e + "折"
                }, condition: function (e) {
                    return "满" + e + "元可用"
                }
            },
            vanCouponCell: {
                title: "优惠券", tips: "暂无可用", count: function (e) {
                    return e + "张可用"
                }
            },
            vanCouponList: {
                empty: "暂无优惠券",
                exchange: "兑换",
                close: "不使用优惠券",
                enable: "可用",
                disabled: "不可用",
                placeholder: "请输入优惠码"
            },
            vanAddressEdit: {
                area: "地区",
                postal: "邮政编码",
                areaEmpty: "请选择地区",
                addressEmpty: "请填写详细地址",
                postalEmpty: "邮政编码格式不正确",
                defaultAddress: "设为默认收货地址",
                telPlaceholder: "收货人手机号",
                namePlaceholder: "收货人姓名",
                areaPlaceholder: "选择省 / 市 / 区"
            },
            vanAddressEditDetail: {label: "详细地址", placeholder: "街道门牌、楼层房间号等信息"},
            vanAddressList: {add: "新增地址"}
        };
        a.default = n
    }, fb43: function (e, a, t) {
        "use strict";
        t.r(a);
        var n = function () {
            var e = this, a = e.$createElement, t = e._self._c || a;
            return t("div", {staticClass: "covid-page about-as"}, [t("header", {staticClass: "page-header"}, [t("span", {
                staticClass: "header-back",
                on: {
                    click: function (a) {
                        return e.$router.go(-1)
                    }
                }
            }, [t("svg-icon", {attrs: {"icon-class": "gray-btn"}})], 1), t("div", {staticClass: "header-content"}, [e._v(e._s(e.$t("setting.language")))])]), t("div", {staticStyle: {"margin-top": "1rem"}}, [t("van-radio-group", {
                model: {
                    value: e.radio,
                    callback: function (a) {
                        e.radio = a
                    },
                    expression: "radio"
                }
            }, [t("van-cell-group", [t("van-cell", {
                attrs: {title: e.$t("setting.chinese"), clickable: ""},
                on: {
                    click: function (a) {
                        return e.changeLang("zh")
                    }
                }
            }, [t("van-radio", {
                attrs: {slot: "right-icon", name: "zh"},
                slot: "right-icon"
            })], 1), t("van-cell", {
                attrs: {title: e.$t("setting.english"), clickable: ""}, on: {
                    click: function (a) {
                        return e.changeLang("en")
                    }
                }
            }, [t("van-radio", {
                attrs: {slot: "right-icon", name: "en"},
                slot: "right-icon"
            })], 1)], 1)], 1)], 1)])
        }, l = [], o = (t("68ef"), t("3c69")), r = t("91f4"), i = t.n(r), s = t("b459"), d = t.n(s), c = {
            name: "language", data: function () {
                return {radio: localStorage.getItem("localLang")}
            }, created: function () {
            }, methods: {
                changeLang: function (e) {
                    "zh" == e ? (this.radio = "zh", this.$i18n.locale = "zh", localStorage.setItem("localLang", "zh"), o["a"].use("zh-CN", d.a)) : "en" === e ? (this.radio = "en", this.$i18n.locale = "en", localStorage.setItem("localLang", "en"), o["a"].use("en-US", i.a)) : "hk" === e && (this.radio = "hk", this.$i18n.locale = "hk", localStorage.setItem("localLang", "hk"), o["a"].use("en-US", i.a)), this.$router.back()
                }
            }
        }, u = c, h = t("2877"), v = Object(h["a"])(u, n, l, !1, null, "8ed05554", null);
        a["default"] = v.exports
    }
}]);
//# sourceMappingURL=chunk-0a29427e.032b77b4.js.map
