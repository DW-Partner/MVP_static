!
function(t) {
    function a(l) {
        if (e[l]) return e[l].exports;
        var n = e[l] = {
            i: l,
            l: !1,
            exports: {}
        };
        return t[l].call(n.exports, n, n.exports, a),
        n.l = !0,
        n.exports
    }
    var e = {};
    a.m = t,
    a.c = e,
    a.d = function(t, e, l) {
        a.o(t, e) || Object.defineProperty(t, e, {
            configurable: !1,
            enumerable: !0,
            get: l
        })
    },
    a.n = function(t) {
        var e = t && t.__esModule ?
        function() {
            return t.
        default
        }:
        function() {
            return t
        };
        return a.d(e, "a", e),
        e
    },
    a.o = function(t, a) {
        return Object.prototype.hasOwnProperty.call(t, a)
    },
    a.p = "/",
    a(a.s = 191)
} ({
    12 : function(t, a, e) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var l = function(t, a) {
            return t.replace(/\{([^\{|^\}]+)\}/gi,
            function(t, e) {
                if (t && e) return a[e] || 0 === a[e] ? a[e] : ""
            })
        };
        a.
    default = l
    },
    191 : function(t, a, e) {
        "use strict";
        var l = e(12),
        n = function(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        } (l);
        e(192);
        var i = '<li>\t\t\t\t\t<span><i>*</i>顾问姓名</span>\t\t\t\t\t<input type="text" class="normal" placeholder="请输入顾问姓名" value="{name}" name="name" data-validate="any" data-must="1" />\t\t\t\t\t<span><i>*</i>顾问性别</span>\t\t\t\t\t<select name="gender" data-validate="any" placeholder="请选择顾问性别" data-must="1">\t\t\t\t\t\t<option value="">请选择</option>\t\t\t\t\t\t<option value="男">男</option>\t\t\t\t\t\t<option value="女">女</option>\t\t\t\t\t</select>\t\t\t\t</li>\t\t\t\t<li>\t\t\t\t\t<span>出生年月</span>\t\t\t\t\t<input type="text" id="birthday" class="normal" placeholder="请输入出生年月" value="{birthday}" name="birthday" data-validate="any" />\t\t\t\t\t<span>籍贯</span>\t\t\t\t\t<input type="text" class="short" placeholder="请输入籍贯" value="{native_place}" name="native_place" data-validate="any" />\t\t\t\t</li>\t\t\t\t<li>\t\t\t\t\t<span>身份证号</span>\t\t\t\t\t<input type="text" class="normal" placeholder="请输入身份证号" value="{id_num}" name="id_num" data-validate="IDnumber" />\t\t\t\t</li>\t\t\t\t<li>\t\t\t\t\t<span><i>*</i>手机号</span>\t\t\t\t\t<input type="text" class="normal" placeholder="请输入手机号" value="{mobile}" name="mobile" data-validate="any" data-must="1" />\t\t\t\t</li>\t\t\t\t<li>\t\t\t\t\t<span>当前住址</span>\t\t\t\t\t<input type="text" class="long" placeholder="请输入当前住址" value="{address}" name="address" data-validate="any" />\t\t\t\t</li>\t\t\t\t<li>\t\t\t\t\t<span>入职时间</span>\t\t\t\t\t<input type="text" id="entry_day" class="normal" placeholder="请输入入职时间" value="{entry_day}" name="entry_day" data-validate="any" />\t\t\t\t</li>\t\t\t\t<li>\t\t\t\t\t<span class="wide">毕业学历信息</span>\t\t\t\t\t<input type="text" class="long" placeholder="请输入“毕业院校”、“毕业时间”、“学历”3项信息，输入格式：毕业院校/毕业时间/学历" value="{education}" name="education" data-validate="any" />\t\t\t\t</li>\t\t\t\t<li>\t\t\t\t\t<span>其他信息</span>\t\t\t\t\t<input type="text" class="long" placeholder="请输入" value="{other_info}" name="other_info" data-validate="any" />\t\t\t\t</li>',
        s = $("#salesid").val();
        if (s) !
        function() {
            $.ajax({
                type: "post",
                dataType: "json",
                url: "/pss/getSalesDetail",
                data: {
                    code: $("#zone_code").val(),
                    zoneid: $("#zone_zoneid").val(),
                    salesid: s
                },
                success: function(t) {
                    if (0 != t.errcode) return void $.dialogFull.Tips(t.errmsg);
                    var a = (0, n.
                default)(i, t.data);
                    $(".pub_form ul").html(a),
                    $('[name="gender"]').val(t.data.gender)
                },
                error: function() {
                    $.dialogFull.Tips("网络错误，请稍后重试！")
                }
            })
        } (),
        $(".btn_dis").data("href", "/pss/goSales?salesid=" + s);
        else {
            var d = (0, n.
        default)(i, {});
            $(".pub_form ul").html(d)
        }
        $.mainBox.on("click", "#submit_AddOrEdit",
        function() {
            var t = $.form.get({
                error_text: "placeholder"
            });
            if (t) {
                var a = {
                    code: $("#school_code").val() || $("#zone_code").val(),
                    zoneid: $('#school_zoneid').val() || $('#zone_zoneid').val(),
                    salesid: s,
                    data: JSON.stringify(t)
                }; ! a.salesid && delete a.salesid,
                $.form.submit({
                    url: s ? "/pss/editSales": "/pss/addSales",
                    data: a,
                    success: function(t) {
                        if (0 != t.errcode) return void $.dialogFull.Tips(t.errmsg);
                        $.dialogFull.Tips("提交成功！"),
                        $.ajaxGetHtml({
                            url: "/pss/goSales",
                            data: {
                                salesid: s || t.data.salesid
                            }
                        })
                    },
                    error: function() {
                        $.dialogFull.Tips("网络错误，请稍后重试")
                    }
                })
            }
        })
    },
    192 : function(t, a) {}
});
