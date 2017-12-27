!function(t){function e(n){if(a[n])return a[n].exports;var s=a[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var a={};e.m=t,e.c=a,e.d=function(t,a,n){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=153)}({1:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t,e){return t.replace(/\{([^\{|^\}]+)\}/gi,function(t,a){if(t&&a)return e[a]||0===e[a]?e[a]:""})};e.default=n},153:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var s=a(1),i=n(s),l=a(154),o=n(l);a(155);var d={form_tpl:'<li><span class="wide"><i>*</i>分类课程</span>\t\t\t\t<input type="text" class="short" placeholder="请输入分类课程" value="{course_name}" name="course_name" data-validate="any" data-must="1" />\t\t\t\t<span class="wide"><i>*</i>有效课时数</span>\t\t\t\t<input type="text" class="shortest" placeholder="请输入有效课时数" disabled="disabled" value="{lesson_num}" name="lesson_num" data-validate="number" data-must="1" />\t\t\t\t<span><i>*</i>课时时长</span>\t\t\t\t<input type="text" class="shortest no_margin" placeholder="请输入课时时长" value="{standard_time}" name="standard_time" data-validate="number" data-must="1" />分钟\t\t\t</li>\t\t\t<li>\t\t\t\t<span class="wide"><i>*</i>收费方式</span>\t\t\t\t<select name="fee_model" data-validate="any">\t\t\t\t\t<option value="按课时">按课时</option>\t\t\t\t</select>\t\t\t</li>\t\t\t<li>\t\t\t\t<span class="wide"><i>*</i>课程对象</span>\t\t\t\t<input type="text" placeholder="请输入课程对象" value="{user}" name="user" data-validate="any" data-must="1" />\t\t\t</li>\t\t\t<li id="target">\t\t\t\t<div><span class="wide"><i>*</i>班级多维目标</span>\t\t\t\t<input type="text" class="long target_item" placeholder="请输入课程多维目标" /></div>\t\t\t\t<div><span class="wide"></span>\t\t\t\t<input type="text" class="long target_item" placeholder="请输入班级多维目标" /></div>\t\t\t\t<div><span class="wide"></span>\t\t\t\t<input type="text" class="long target_item" placeholder="请输入班级多维目标" /></div>\t\t\t</li>\t\t\t<li>\t\t\t\t<span class="wide"><i>*</i>课程总体介绍</span>\t\t\t\t<textarea class="long" placeholder="请输入课程总体介绍" name="outline" data-validate="any" data-must="1">{outline}</textarea>\t\t\t</li>\t\t\t<li>\t\t\t\t<span class="wide"><i>*</i>下一阶段课程</span>\t\t\t\t<select name="next_courseid" data-validate="any">\t\t\t\t\t<option value="0">无</option>\t\t\t\t</select>\t\t\t</li>',item:'<li>\t\t\t\t<div class="item"><p><span data-lessonid="{lesson_id}"></span></p></div>\t\t\t\t<div class="item"><p><span>{theme}</span></p></div>\t\t\t\t<div class="item"><p><span>{status}</span></p></div>\t\t\t\t<div class="item"><p><span>{outline}</span></p></div>\t\t\t\t<div class="item"><p><span>\t\t\t\t<a href="JavaScript:;" class="edit">编辑</a>\t\t\t\t<a href="JavaScript:;" class="del none{show}">删除</a></span></p></div>\t\t\t</li>',addLessonForm:'<ul class="pub_form">\t\t\t<li>\t\t\t\t<span><i>*</i>课时主题</span>\t\t\t\t<input type="text" placeholder="请输入课时主题名" name="theme" data-validate="any" data-must="1" />\t\t\t</li>\t\t\t<li>\t\t\t\t<span><i>*</i>状态</span>\t\t\t\t<select name="status" data-validate="any">\t\t\t\t\t<option value="正常">正常</option>\t\t\t\t\t<option value="研发中">研发中</option>\t\t\t\t\t<option value="停止">停止</option>\t\t\t\t</select>\t\t\t</li>\t\t\t<li>\t\t\t\t<span><i>*</i>教学大纲</span>\t\t\t\t<textarea placeholder="请输入教学大纲" name="outline" data-validate="any" data-must="1" />\t\t\t</li>\t\t</ul>'},r=function(){$("#lessons li").each(function(t){$(this).find("span").eq(0).html(t+1)})},u=$("#courseid").val(),p=0,c=function(){$.ajax({type:"post",dataType:"json",url:"/pss/getCourses",data:{code:$("#school_code").val()},success:function(t){if(0!=t.errcode)return void $.dialogFull.Tips(t.errmsg);var e="";t.data.map(function(t){e+='<option value="'+t.id+'">'+t.name+"</option>"}),$("[name=next_courseid]").prepend(e),$("[name=next_courseid]").val(p)},error:function(){$.dialogFull.Tips("网络错误，请稍后重试！")}})};if(u)$.ajax({type:"post",dataType:"json",url:"/pss/getCourseDetail",data:{code:$("#school_code").val(),courseid:u},success:function(t){if(0!=t.errcode)return void $.dialogFull.Tips(t.errmsg);var e=(0,i.default)(d.form_tpl,t.data);$(".pub_form ul").html(e),t.data.target.split("\n").map(function(t,e){$(".target_item").eq(e).val(t)}),$("[name=fee_model]").val(t.data.fee_model);var a=t.data.lessons,n="";a.map(function(t){n+=(0,i.default)(d.item,t)}),$("#lessons").html(n),p=t.data.next_courseid,c(),r()},error:function(){$.dialogFull.Tips("网络错误，请稍后重试！")}});else{var m=(0,i.default)(d.form_tpl,{});$(".pub_form ul").html(m),$("[name=lesson_num]").val(0),c()}$.mainBox.on("click","#submit_course",function(){var t=$.form.get({error_text:"placeholder"});if(t){t.lesson_num=+t.lesson_num,t.standard_time=+t.standard_time;var e=[];if($("#lessons li").each(function(){var t=$(this).find("span"),a={lesson_id:t.eq(0).data("lessonid"),theme:t.eq(1).text(),status:t.eq(2).text(),outline:t.eq(3).text()};e.push(a)}),t.target="",$(".target_item").each(function(){var e=$(this).val();t.target+=e?e+"\n":""}),!t.target)return void $.dialogFull.Tips("请输入课程多维目标");if(!e.length)return void $.dialogFull.Tips("请添加课时！");t.lessons=e,t.next_courseid=+t.next_courseid,console.log(t),$.form.submit({url:u?"/pss/editCourse":"/pss/addCourse",data:{code:$("#school_code").val(),courseid:u||"",data:JSON.stringify(t)},success:function(t){if(0!=t.errcode)return void $.dialogFull.Tips(t.errmsg);$.dialogFull.Tips("提交成功！"),$.ajaxGetHtml({url:"/pss/goCourse"})},error:function(){$.dialogFull.Tips("网络错误，请稍后重试")}})}}).on("click","#add_lesson",function(){$.dialogFull.Pop({boxClass:".dialog_add_lesson",title:"添加课时",content:d.addLessonForm,runDone:function(t,e,a){var n=$.form.get({item:".dialog_add_lesson .pub_form [data-validate]",error_text:"placeholder"});if(n){n.show=1;var s=(0,i.default)(d.item,n);$("#lessons").append(s),a(),$("[name=lesson_num]").val($("#lessons li").length),r()}}}),$('.dialog_add_lesson [name="outline"]').val($('[name="outline"]').eq(0).val())}).on("click","#lessons .edit",function(){var t=$(this).parent().parent().parent().parent(),e=t.find("span").eq(1).text(),a=t.find("span").eq(2).text(),n=t.find("span").eq(3).text();$.dialogFull.Pop({boxClass:".dialog_add_lesson",title:"编辑课时",content:d.addLessonForm,showCallback:function(t,s){t.find("input").val(e),t.find("select").val(a),t.find("textarea").val(n)},runDone:function(e,a,n){var s=$.form.get({item:".dialog_add_lesson .pub_form [data-validate]",error_text:"placeholder"});s&&(t.find("span").eq(1).text(s.theme),t.find("span").eq(2).text(s.status),t.find("span").eq(3).text(s.outline),n())}})}).on("click","#lessons .del",function(){$(this).parent().parent().parent().parent().remove(),$("[name=lesson_num]").val($("#lessons li").length),r()}).on("change",".inputFile",function(){(0,o.default)({input:this,keys:["theme","status","outline"],handle:function(t){var e="";t.map(function(t,a){t.show=1,e+=(0,i.default)(d.item,t)}),$("#lessons").append(e),$("[name=lesson_num]").val($("#lessons li").length),r()}})}).on("blur",'[name="course_name"]',function(){if(!u){$('[value="-1"]').remove();var t=$(this).val();$('[name="next_courseid"]').append('<option value="-1">'+t+"</option>")}})},154:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){var e={input:".inputFile",lineStart:1,keys:[],handle:function(){},callback:function(){}};e=$.extend(e,t);var a=[],n=function(t){a.push(t+1)},s=$(e.input),i=s[0].files;if("undefined"==typeof FileReader)return void $.dialogFull.Alert("IE9及以下浏览器不支持，请使用Chrome或Firefox浏览器");var l=new FileReader;l.readAsText(i[0]),l.onload=function(t){var i=t.target.result;console.log(i);var l=i.split("\n"),o=(i.split("\n").length,[]);if(l.map(function(t,a){if(a>=e.lineStart){var s=t.split(","),i={};e.keys.map(function(t,e){i[t]=s[e]||n(a)}),o.push(i)}}),a.length)return void $.dialogFull.Alert("第"+a.join("、")+"行数据有误，请编辑后重新操作");console.log(o),e.handle(o),$.dialogFull.Tips("操作成功！"),s.after(s.clone().val("")),s.remove()}};e.default=n},155:function(t,e){}});
