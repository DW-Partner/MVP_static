!function(t){function e(s){if(a[s])return a[s].exports;var n=a[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var a={};e.m=t,e.c=a,e.d=function(t,a,s){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:s})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=144)}({10:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(t,e){return t.replace(/\{([^\{|^\}]+)\}/gi,function(t,a){if(t&&a)return e[a]||0===e[a]?e[a]:""})};e.default=s},144:function(t,e,a){"use strict";var s=a(10),n=function(t){return t&&t.__esModule?t:{default:t}}(s);a(145);var l={form_tpl:'<li><span class="wide"><i>*</i>分类课程</span>\t\t\t\t<input type="text" class="short" placeholder="请输入分类课程" value="{course_name}" name="course_name" data-validate="any" data-must="1" />\t\t\t\t<span class="wide"><i>*</i>有效课时数</span>\t\t\t\t<input type="text" class="shortest" placeholder="请输入有效课时数" value="{lesson_num}" name="lesson_num" data-validate="number" data-must="1" />\t\t\t\t<span><i>*</i>课时时长</span>\t\t\t\t<input type="text" class="shortest no_margin" placeholder="请输入课时时长" value="{standard_time}" name="standard_time" data-validate="number" data-must="1" />分钟\t\t\t</li>\t\t\t<li>\t\t\t\t<span class="wide"><i>*</i>收费方式</span>\t\t\t\t<select name="fee_model" data-validate="any">\t\t\t\t\t<option value="按课时">按课时</option>\t\t\t\t\t<option value="按期">按期</option>\t\t\t\t</select>\t\t\t</li>\t\t\t<li>\t\t\t\t<span class="wide"><i>*</i>状态</span>\t\t\t\t<select name="status" data-validate="any">\t\t\t\t\t<option value="正常">正常</option>\t\t\t\t\t<option value="推荐">推荐</option>\t\t\t\t</select>\t\t\t</li>\t\t\t<li>\t\t\t\t<span class="wide"><i>*</i>课程对象</span>\t\t\t\t<input type="text" placeholder="请输入课程对象" value="{user}" name="user" data-validate="any" data-must="1" />\t\t\t</li>\t\t\t<li>\t\t\t\t<span class="wide"><i>*</i>课程多维目标</span>\t\t\t\t<input type="text" class="long" placeholder="请输入课程多维目标" value="{target}" name="target" data-validate="any" data-must="1" />\t\t\t</li>\t\t\t<li>\t\t\t\t<span class="wide"><i>*</i>课程总体介绍</span>\t\t\t\t<textarea class="long" placeholder="请输入课程多维目标" name="outline" data-validate="any" data-must="1">{outline}</textarea>\t\t\t\t<i>*</i>\t\t\t</li>',item:'<li>\t\t\t\t<div class="item"><p><span>{lesson_id}</span></p></div>\t\t\t\t<div class="item"><p><span>{theme}</span></p></div>\t\t\t\t<div class="item"><p><span>{status}</span></p></div>\t\t\t\t<div class="item"><p><span>{outline}</span></p></div>\t\t\t\t<div class="item"><p><span><a href="JavaScript:;" class="del">删除</a></span></p></div>\t\t\t</li>',addLessonForm:'<ul class="pub_form">\t\t\t<li>\t\t\t\t<span><i>*</i>课程主题</span>\t\t\t\t<input type="text" placeholder="请输入课程主题" name="theme" data-validate="any" data-must="1" />\t\t\t</li>\t\t\t<li>\t\t\t\t<span><i>*</i>状态</span>\t\t\t\t<select name="status" data-validate="any">\t\t\t\t\t<option value="正常">正常</option>\t\t\t\t\t<option value="推荐">推荐</option>\t\t\t\t</select>\t\t\t</li>\t\t\t<li>\t\t\t\t<span><i>*</i>教学大纲</span>\t\t\t\t<textarea placeholder="请输入教学大纲" name="outline" data-validate="any" data-must="1" />\t\t\t</li>\t\t</ul>'},i=$("#courseid").val();if(i)$.ajax({type:"post",dataType:"json",url:"/pss/getCourseDetail",data:{code:$("#school_code").val(),courseid:i},success:function(t){if(0!=t.errcode)return void $.dialogFull.Tips(t.errmsg);var e=(0,n.default)(l.form_tpl,t.data);$(".pub_form ul").html(e),$("[name=fee_model]").val(t.data.fee_model),$("[name=status]").val(t.data.status);var a=t.data.lessons,s="";a.map(function(t){s+=(0,n.default)(l.item,t)}),$("#lessons").html(s)},error:function(){$.dialogFull.Tips("网络错误，请稍后重试！")}});else{var o=(0,n.default)(l.form_tpl,{});$(".pub_form ul").html(o)}$.mainBox.on("click","#submit_course",function(){var t=$.form.get({error_text:"placeholder"});if(t){t.lesson_num=+t.lesson_num,t.standard_time=+t.standard_time;var e=[];if($("#lessons li").each(function(){var t=$(this).find("span"),a={lesson_id:t.eq(0).text(),theme:t.eq(1).text(),lessonTime:t.eq(2).text(),outline:t.eq(3).text()};e.push(a)}),!e.length)return void $.dialogFull.Tips("请添加课时！");t.lessons=e,console.log(t),$.form.submit({url:i?"/pss/editCourse":"/pss/addCourse",data:{code:$("#school_code").val(),courseid:i||"",data:JSON.stringify(t)},success:function(t){if(0!=t.errcode)return void $.dialogFull.Tips(t.errmsg);$.dialogFull.Tips("提交成功！"),$.ajaxGetHtml({url:"/pss/goCourse"})},error:function(){$.dialogFull.Tips("网络错误，请稍后重试")}})}}).on("click","#add_lesson",function(){$.dialogFull.Pop({boxClass:".dialog_add_lesson",title:"添加课时",content:l.addLessonForm,runDone:function(t,e,a){var s=$.form.get({item:".dialog_add_lesson .pub_form [data-validate]",error_text:"placeholder"});if(s){var i=(0,n.default)(l.item,s);$("#lessons").append(i),a()}}}),$('.dialog_add_lesson [name="outline"]').val($('[name="outline"]').eq(0).val())}).on("click","#lessons .del",function(){$(this).parent().parent().parent().remove()})},145:function(t,e){}});