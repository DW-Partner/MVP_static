!function(t){function a(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,a),i.l=!0,i.exports}var e={};a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},a.p="/",a(a.s=152)}({1:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=function(t,a){return t.replace(/\{([^\{|^\}]+)\}/gi,function(t,e){if(t&&e)return a[e]||0===a[e]?a[e]:""})};a.default=n},152:function(t,a,e){"use strict";var n=e(1),i=function(t){return t&&t.__esModule?t:{default:t}}(n);e(153);var l='<li>\t\t\t\t\t<span><i>*</i>教师姓名</span>\t\t\t\t\t<input type="text" class="normal" placeholder="请输入教师姓名" value="{name}" name="name" data-validate="any" data-must="1" />\t\t\t\t\t<span><i>*</i>教师性别</span>\t\t\t\t\t<select name="gender" data-validate="any" data-must="1">\t\t\t\t\t\t<option value="男">男</option>\t\t\t\t\t\t<option value="女">女</option>\t\t\t\t\t</select>\t\t\t\t</li>\t\t\t\t<li>\t\t\t\t\t<span>第二称谓</span>\t\t\t\t\t<input type="text" class="normal" placeholder="请输入第二称谓" value="{name_2}" name="name_2" data-validate="any" />\t\t\t\t</li>\t\t\t\t<li>\t\t\t\t\t<span><i>*</i>出生年月</span>\t\t\t\t\t<input type="date" class="normal" placeholder="请输入出生年月" value="{birthday}" name="birthday" data-validate="any" data-must="1" />\t\t\t\t\t<span><i>*</i>籍贯</span>\t\t\t\t\t<input type="text" class="short" placeholder="请输入籍贯" value="{native_place}" name="native_place" data-validate="any" data-must="1" />\t\t\t\t</li>\t\t\t\t<li>\t\t\t\t\t<span><i>*</i>身份证号</span>\t\t\t\t\t<input type="text" class="normal" placeholder="请输入身份证号" value="{id_num}" name="id_num" data-validate="IDnumber" data-must="1" />\t\t\t\t</li>\t\t\t\t<li>\t\t\t\t\t<span><i>*</i>手机号</span>\t\t\t\t\t<input type="text" class="normal" placeholder="请输入手机号" value="{mobile}" name="mobile" data-validate="any" data-must="1" />\t\t\t\t\t<span><i>*</i>所属校区</span>\t\t\t\t\t<select id="zoneList" name="zone_id" data-validate="any" data-must="1" >\t\t\t\t\t</select>\t\t\t\t</li>\t\t\t\t<li>\t\t\t\t\t<span><i>*</i>当前住址</span>\t\t\t\t\t<input type="text" class="long" placeholder="请输入当前住址" value="{address}" name="address" data-validate="any" data-must="1" />\t\t\t\t</li>\t\t\t\t<li>\t\t\t\t\t<span><i>*</i>入职时间</span>\t\t\t\t\t<input type="date" class="normal" value="{entry_day}" name="entry_day" data-validate="any" data-must="1" />\t\t\t\t\t<span><i>*</i>类别</span>\t\t\t\t\t<select name="type" data-validate="any" data-must="1" >\t\t\t\t\t<option value="主课">主课</option>\t\t\t\t\t<option value="助教">助教</option>\t\t\t\t\t</select>\t\t\t\t</li>\t\t\t\t<li>\t\t\t\t\t<span>其他信息</span>\t\t\t\t\t<input type="text" class="long" placeholder="请输入" value="{other_info}" name="other_info" data-validate="any" />\t\t\t\t</li>',o=$("#tid").val(),d=function(t){$.ajax({type:"post",dataType:"json",url:"/pss/getZoneList",data:{code:$("#school_code").val()},success:function(a){if(0!=a.errcode)return void $.dialogFull.Tips(a.errmsg);var e="";a.data.map(function(t){e+='<option value="'+t.id+'">'+t.name+"</option>"}),$("#zoneList").html(e).val(t||a.data[0].id)},error:function(){}})};d();if(o)!function(){$.ajax({type:"post",dataType:"json",url:"/pss/getTeacherDetail",data:{code:$("#school_code").val(),tid:o},success:function(t){if(0!=t.errcode)return void $.dialogFull.Tips(t.errmsg);var a=(0,i.default)(l,t.data);$(".pub_form ul").html(a),d(t.data.zone_id),$('[name="type"]').val(t.data.type)},error:function(){$.dialogFull.Tips("网络错误，请稍后重试！")}})}();else{var s=(0,i.default)(l,{});$(".pub_form ul").html(s),d()}$.mainBox.on("click","#submit_AddOrEditTeacher",function(){var t=$.form.get({error_text:"placeholder"});if(t){t.zone_id=+t.zone_id;var a={code:$("#school_code").val(),tid:o,data:JSON.stringify(t)};!a.tid&&delete a.tid,$.form.submit({url:o?"/pss/editTeacher":"/pss/addTeacher",data:a,success:function(t){if(0!=t.errcode)return void $.dialogFull.Tips(t.errmsg);$.dialogFull.Tips("提交成功！"),$.ajaxGetHtml({url:"/pss/goTeacherDetail",data:{tid:o||t.data.tid}})},error:function(){$.dialogFull.Tips("网络错误，请稍后重试")}})}})},153:function(t,a){}});