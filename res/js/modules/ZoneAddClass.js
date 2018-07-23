!function(t){function e(n){if(o[n])return o[n].exports;var i=o[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var o={};e.m=t,e.c=o,e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=264)}({181:function(t,e,o){"use strict";$.fn.DDSort=function(t){var e={down:$.noop,move:$.noop,up:$.noop,target:"li",delay:100,cloneStyle:{"background-color":"#fff"},floatStyle:{position:"fixed","background-color":"#FEFEF2","box-shadow":"10px 10px 20px 0 #eee"}},o=$(document),n=$.extend(!0,{},e,t);return this.each(function(){var t=$(this),e="height",i="width";"border-box"==t.css("box-sizing")&&(e="outerHeight",i="outerWidth"),t.on("mousedown.DDSort touchstart.DDSort",n.target,function(a){var s=(new Date).getTime();if("mousedown"!=a.type||1==a.which){var l=a.target.tagName.toLowerCase();if("input"!=l&&"textarea"!=l&&"select"!=l&&"a"!=l&&"true"!=$(a.target).prop("contenteditable")){var c=this,u=$(c),r=u.offset(),p=a.pageX,d=a.pageY,h=a.originalEvent.targetTouches;"touchstart"==a.type&&h&&(p=h[0].pageX,d=h[0].pageY);var v=p-r.left,f=d-r.top,m=u.clone().css(n.cloneStyle).css("height",u[e]()).empty(),_=1,g=u.outerHeight(),b=t.outerHeight(),y=g,k=g,x=3*g;return n.down.call(c),o.on("mousemove.DDSort touchmove.DDSort",function(e){var a=e.pageX,l=e.pageY,r=e.originalEvent.targetTouches;if("touchmove"==e.type&&r&&(a=r[0].pageX,l=r[0].pageY),!((new Date).getTime()-s<n.delay)){_&&(u.before(m).css("width",u[i]()).css(n.floatStyle).appendTo(u.parent()),_=0);var p=a-v,d=l-f,h=m.prev(),$=m.next().not(u);u.css({left:p-o.scrollLeft(),top:d-o.scrollTop()}),h.length&&d<h.offset().top+h.outerHeight()/2?m.after(h):$.length&&d+g>$.offset().top+$.outerHeight()/2&&m.before($);var S,D=t.scrollTop(),w=t.offset().top;d<w?(k=g,y=++y>x?x:y,S=D-y):d+g-w>b&&(y=g,k=++k>x?x:k,S=D+k),t.scrollTop(S),n.move.call(c,p-o.scrollLeft(),d-o.scrollTop())}}).on("mouseup.DDSort touchend.DDSort",function(){o.off("mousemove.DDSort mouseup.DDSort touchmove.DDSort touchend.DDSort"),_||(m.before(u.removeAttr("style")).remove(),n.up.call(c))}),!1}}})})}},264:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var i=o(7),a=n(i),s=o(181);n(s);o(265);var l="i"+parseInt(1e6*Math.random()).toString(),c=0,u=l+c;$(".timeList input").eq(0).attr("id",l+c++),$.laydate.render({elem:"#"+u,type:"time",min:"08:00:00",max:"22:00:00",btns:["confirm"]});var r=$.laydate.render({elem:"#start_time",type:"date",min:1,ready:function(){r.hint("开班时间必须大于当前日期")}});!function(){$.ajax({type:"post",dataType:"json",url:"/pss/getZoneTeacherList",data:{code:$("#zone_code").val(),zoneid:$("#zone_zoneid").val()},success:function(t){if(0!=t.errcode)return void $.dialogFull.Tips(t.errmsg);var e="";t.data.map(function(t){e+='<option value="'+t.tid+'">'+t.teacher_name+"</option>"}),$("[name=teacher_id]").html(e)},error:function(){$.dialogFull.Tips("网络错误，请稍后重试！")}})}();!function(){$.ajax({type:"post",dataType:"json",url:"/pss/getCourseList",data:{code:$("#zone_code").val(),zoneid:$("#zone_zoneid").val()},success:function(t){if(0!=t.errcode)return void $.dialogFull.Tips(t.errmsg);var e="";t.data.map(function(t){e+='<option value="'+t.course_id+'">'+t.course_name+"</option>"}),$("[name=course_id]").html(e),f($("[name=course_id]").val())},error:function(){$.dialogFull.Tips("网络错误，请稍后重试！")}})}();var p={},d={},h=[],v="x",f=function(t){$.ajax({type:"post",dataType:"json",url:"/pss/getCourseDetail",data:{code:$("#zone_code").val(),courseid:t},success:function(t){if(0!=t.errcode)return void $.dialogFull.Tips(t.errmsg);$(".tips").html("*本课程共有"+t.data.lesson_num+"个课时，每个课时的推荐时长为"+t.data.standard_time+"分钟"),h=t.data.lessons,v=t.data.course_id,p["course_"+v]={},d["course_"+v]&&d["course_"+v].length?$(".selected_lessons").text("挑选课时("+d["course_"+v].length+")"):$(".selected_lessons").text("挑选课时")},error:function(){$.dialogFull.Tips("网络错误，请稍后重试！")}})},m=function(){var t='<div class="head"><span>课时序号</span><span>课时主题名</span><span>当前状态</span><span>教学大纲</span><span>全选 <input type="checkbox" id="checkall"></span></div><ul class="body">';return h.forEach(function(e,o){p["course_"+v][e.lesson_id]=e,e.disabled="正常"===e.status?'class="input_item"':'disabled="disabled"',t+=(0,a.default)('<li>        <div class="item"><p><span>{snum}</span></p></div>        <div class="item"><p><span>{theme}</span></p></div>        <div class="item"><p><span>{status}</span></p></div>        <div class="item"><p><span class="line20px">{outline}</span></p></div>        <div class="item"><p><span>        <input type="checkbox" value="{lesson_id}" {disabled} />        </span></p></div>    </li>',e)}),t+="</ul>"},_=function(){$("#checkall").prop("checked")?$(".pub_list .body input.input_item").prop("checked",!0):$(".pub_list .body input.input_item").prop("checked",!1)};$(".timeList .item").length>=6&&$(".timeList .run_item_add").hide(),$(".tips").after('<a href="JavaScript:;" class="btn selected_lessons">挑选课时</a>'),$('[name="class_name"]').after('<a href="JavaScript:;" class="btn getZoneStudentList">添加学员</a>');var g=function(){$.ajax({type:"post",dataType:"json",url:"/pss/getZoneStudentList",data:{code:$("#zone_code").val(),zoneid:$("#zone_zoneid").val()},success:function(t){if(0!=t.errcode)return void $.dialogFull.Tips(t.errmsg);var e=$("<div>"),o={},n='<div class="selectBox"><select id="classSelect">';t.data.forEach(function(t,i){o[t.class_id]||(o[t.class_id]=!0,t.class_name=t.class_name||"其它",n+='<option value="'+t.class_id+'">'+t.class_name+"</option>",e.append('<p class="classItem class_'+t.class_id+'"></p>')),e.find("p:last").append('<span class="student" data-sid="'+(t.sid||t.student_id)+'">'+t.student_name+"</sapn>")}),n+="</select></div>",e.prepend(n),$(".dialogPopBox .content").html(e.html()),$(".dialogPopBox .content p").eq(0).show()},error:function(){$.dialogFull.Tips("网络错误，请稍后重试！")}})},b=[],y=function(){};$.mainBox.on("click","#submit_add",function(){console.log(d["course_"+v]);var t=$.form.get({error_text:"placeholder"});if(t){t.course_id=+t.course_id,t.teacher_id=+t.teacher_id,t.reserve_num=+t.reserve_num;$("[name=start_time]").val();t.time_regular=[],t.audit=$("#set_audit:checked").val()?"true":"false";var e=!0;if($(".timeList .item").each(function(){var o=$(this).find("input").eq(0).val();if(0==o.indexOf("00:00"))return void(e=!1);var n={};o&&(n.type=$(this).find("select").eq(0).val(),n.day=+$(this).find("select:visible").eq(-1).val()||0,n.time=o,t.time_regular.push(n))}),!e)return void $.dialogFull.Tips("请选择合理上课时间段！");d["course_"+v]&&d["course_"+v].length&&(t.selected_lessons=d["course_"+v]),b.length&&(t.students=Array.from(new Set(b)).map(function(t){return{sid:+t}}));var o={code:$("#zone_code").val(),zoneid:$("#zone_zoneid").val(),data:JSON.stringify(t)};$.form.submit({url:"/pss/addClass",data:o,success:function(t){if(0!=t.errcode)return void $.dialogFull.Tips(t.errmsg);$.dialogFull.Tips("提交成功！"),$.ajaxGetHtml({url:t.data.url})},error:function(){$.dialogFull.Tips("网络错误，请稍后重试")}})}}).on("change","[name=course_id]",function(){f($(this).val())}).on("change",".timeType",function(){var t=$(this).val();"week"==t?($(this).siblings(".week").show(),$(this).siblings(".month").hide()):"month"==t?($(this).siblings(".month").show(),$(this).siblings(".week").hide()):$(this).siblings(".week, .month").hide()}).on("click",".run_item_add",function(){var t=$('<div class="item">\t\t\t\t\t<select class="timeType">\t\t\t\t\t\t<option value="day">每日</option>\t\t\t\t\t\t<option value="week">每周</option>\t\t\t\t\t\t<option value="month">每月</option>\t\t\t\t\t</select>\t\t\t\t\t<select class="week none">\t\t\t\t\t\t<option value="2">星期一</option><option value="3">星期二</option><option value="4">星期三</option>\t\t\t\t\t\t<option value="5">星期四</option><option value="6">星期五</option><option value="7">星期六</option>\t\t\t\t\t\t<option value="1">星期日</option>\t\t\t\t\t</select>\t\t\t\t\t<select class="month none">\t\t\t\t\t\t<option value="1">1日</option><option value="2">2日</option>\t\t\t\t\t\t<option value="3">3日</option><option value="4">4日</option>\t\t\t\t\t\t<option value="5">5日</option><option value="6">6日</option>\t\t\t\t\t\t<option value="7">7日</option><option value="8">8日</option>\t\t\t\t\t\t<option value="9">9日</option><option value="10">10日</option>\t\t\t\t\t\t<option value="11">11日</option><option value="12">12日</option>\t\t\t\t\t\t<option value="13">13日</option><option value="14">14日</option>\t\t\t\t\t\t<option value="15">15日</option><option value="16">16日</option>\t\t\t\t\t\t<option value="17">17日</option><option value="18">18日</option>\t\t\t\t\t\t<option value="19">19日</option><option value="20">20日</option>\t\t\t\t\t\t<option value="21">21日</option><option value="22">22日</option>\t\t\t\t\t\t<option value="23">23日</option><option value="24">24日</option>\t\t\t\t\t\t<option value="25">25日</option><option value="26">26日</option>\t\t\t\t\t\t<option value="27">27日</option><option value="28">28日</option>\t\t\t\t\t\t<option value="29">29日</option><option value="30">30日</option>\t\t\t\t\t\t<option value="31">31日</option>\t\t\t\t\t</select>\t\t\t\t\t<input type="text" class="short" placeholder="请输入上课时段" />\t\t\t\t\t<a href="JavaScript:;" class="btn_dis run_item_del">删除</a>\t\t\t\t</div>');u=l+c,t.find("input").eq(0).attr("id",l+c++),$(".timeList").append(t),$.laydate.render({elem:"#"+u,type:"time",min:"08:00:00",max:"22:00:00",btns:["confirm"]}),$(".timeList .item").length>=6&&$(this).hide()}).on("click",".run_item_del",function(){$(this).parent().remove(),$(".timeList .run_item_add").show()}).on("click",".selected_lessons",function(){$.dialogFull.Pop({boxClass:".pub_list",width:700,height:"auto",title:"挑选课时",content:m(),showCallback:function(t,e){d["course_"+v]&&d["course_"+v].length&&(d["course_"+v].forEach(function(t,e){$("[value="+t.lesson_id+"]").attr("checked","true")}),d["course_"+v].length===$(".pub_list .body input.input_item").length&&$("#checkall").prop("checked",!0)),$(".pub_list ul").DDSort({target:"li",up:function(){}})},runDone:function(t,e,o){var n=[],i=[];$(".pub_list .body input:checkbox:checked").each(function(){n.push($(this).val())}),n.forEach(function(t,e){i.push({lesson_id:+t})}),d["course_"+v]=i,i.length&&$(".selected_lessons").text("挑选课时("+i.length+")"),o()}})}).on("click",".getZoneStudentList",function(){$.dialogFull.Pop({boxClass:".getZoneStudentList",width:700,height:"auto",cacheId:"getZoneStudentListCachId001",title:"学员列表",content:"",showCallback:function(t,e){g()},runDone:function(t,e,o){y=o,o()},runClose:function(t,e,o){y=o}})}),$(document).off("change","#checkall").on("change","#checkall",_).on("change","input.input_item",function(){$(".pub_list .body input.input_item:checked").length===$(".pub_list .body input.input_item").length?$("#checkall").prop("checked",!0):$("#checkall").prop("checked",!1)}).off("click",".student").on("click",".student",function(){var t=$(this),e=t.data("sid");t.hasClass("checked")?(b.splice(b.indexOf(e),1),t.removeClass("checked")):(b.push(e),t.addClass("checked"))}).off("change","#classSelect").on("change","#classSelect",function(){var t=$(this).val();$(".class_"+t).show().siblings("p").hide()}),$.distory=function(){y(1)}},265:function(t,e){},7:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t,e){return t.replace(/\{([^\{|^\}]+)\}/gi,function(t,o){if(t&&o)return e[o]||0===e[o]?e[o]:""})};e.default=n}});