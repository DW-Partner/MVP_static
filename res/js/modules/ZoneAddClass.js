!function(t){function e(i){if(o[i])return o[i].exports;var n=o[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var o={};e.m=t,e.c=o,e.d=function(t,o,i){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=258)}({10:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t,e){return t.replace(/\{([^\{|^\}]+)\}/gi,function(t,o){if(t&&o)return e[o]||0===e[o]?e[o]:""})};e.default=i},258:function(t,e,o){"use strict";var i=o(10),n=function(t){return t&&t.__esModule?t:{default:t}}(i);o(259);var a="i"+parseInt(1e6*Math.random()).toString(),s=0,l=a+s;$(".timeList input").eq(0).attr("id",a+s++),$.laydate.render({elem:"#"+l,type:"time",min:"08:00:00",max:"22:00:00",btns:["confirm"]});var u=$.laydate.render({elem:"#start_time",type:"date",min:1,ready:function(){u.hint("开班时间必须大于当前日期")}});!function(){$.ajax({type:"post",dataType:"json",url:"/pss/getZoneTeacherList",data:{code:$("#zone_code").val(),zoneid:$("#zone_zoneid").val()},success:function(t){if(0!=t.errcode)return void $.dialogFull.Tips(t.errmsg);var e="";t.data.map(function(t){e+='<option value="'+t.tid+'">'+t.teacher_name+"</option>"}),$("[name=teacher_id]").html(e)},error:function(){$.dialogFull.Tips("网络错误，请稍后重试！")}})}();!function(){$.ajax({type:"post",dataType:"json",url:"/pss/getCourseList",data:{code:$("#zone_code").val(),zoneid:$("#zone_zoneid").val()},success:function(t){if(0!=t.errcode)return void $.dialogFull.Tips(t.errmsg);var e="";t.data.map(function(t){e+='<option value="'+t.course_id+'">'+t.course_name+"</option>"}),$("[name=course_id]").html(e),v($("[name=course_id]").val())},error:function(){$.dialogFull.Tips("网络错误，请稍后重试！")}})}();var r={},p={},c=[],d="x",v=function(t){$.ajax({type:"post",dataType:"json",url:"/pss/getCourseDetail",data:{code:$("#zone_code").val(),courseid:t},success:function(t){if(0!=t.errcode)return void $.dialogFull.Tips(t.errmsg);$(".tips").html("*本课程共有"+t.data.lesson_num+"个课时，每个课时的推荐时长为"+t.data.standard_time+"分钟"),c=t.data.lessons,d=t.data.course_id,r["course_"+d]={},p["course_"+d]&&p["course_"+d].length?$(".selected_lessons").text("挑选课时("+p["course_"+d].length+")"):$(".selected_lessons").text("挑选课时")},error:function(){$.dialogFull.Tips("网络错误，请稍后重试！")}})},m=function(){var t='<ul class="body">';return c.forEach(function(e,o){r["course_"+d][e.lesson_id]=e,e.disabled="正常"===e.status?"":'disabled="disabled"',t+=(0,n.default)('<li>        <div class="item"><p><span data-lessonid="{lesson_id}">{lesson_id}</span></p></div>        <div class="item"><p><span>{theme}</span></p></div>        <div class="item"><p><span>{status}</span></p></div>        <div class="item"><p><span class="line20px">{outline}</span></p></div>        <div class="item"><p><span>        <input type="checkbox" value="{lesson_id}" {disabled} />        </span></p></div>    </li>',e)}),t+="</ul>"};$(".timeList .item").length>=6&&$(".timeList .run_item_add").hide(),$(".tips").after('<a href="JavaScript:;" class="btn selected_lessons">挑选课时</a>'),$.mainBox.on("click","#submit_add",function(){console.log(p["course_"+d]);var t=$.form.get({error_text:"placeholder"});if(t){t.course_id=+t.course_id,t.teacher_id=+t.teacher_id,t.reserve_num=+t.reserve_num;$("[name=start_time]").val();t.time_regular=[],t.audit=$("#set_audit:checked").val()?"true":"false";var e=!0;if($(".timeList .item").each(function(){var o=$(this).find("input").eq(0).val();if(0==o.indexOf("00:00"))return void(e=!1);var i={};o&&(i.type=$(this).find("select").eq(0).val(),i.day=+$(this).find("select:visible").eq(-1).val()||0,i.time=o,t.time_regular.push(i))}),!e)return void $.dialogFull.Tips("请选择合理上课时间段！");p["course_"+d]&&p["course_"+d].length&&(t.selected_lessons=p["course_"+d]);var o={code:$("#zone_code").val(),zoneid:$("#zone_zoneid").val(),data:JSON.stringify(t)};$.form.submit({url:"/pss/addClass",data:o,success:function(t){if(0!=t.errcode)return void $.dialogFull.Tips(t.errmsg);$.dialogFull.Tips("提交成功！"),$.ajaxGetHtml({url:t.data.url})},error:function(){$.dialogFull.Tips("网络错误，请稍后重试")}})}}).on("change","[name=course_id]",function(){v($(this).val())}).on("change",".timeType",function(){var t=$(this).val();"week"==t?($(this).siblings(".week").show(),$(this).siblings(".month").hide()):"month"==t?($(this).siblings(".month").show(),$(this).siblings(".week").hide()):$(this).siblings(".week, .month").hide()}).on("click",".run_item_add",function(){var t=$('<div class="item">\t\t\t\t\t<select class="timeType">\t\t\t\t\t\t<option value="day">每日</option>\t\t\t\t\t\t<option value="week">每周</option>\t\t\t\t\t\t<option value="month">每月</option>\t\t\t\t\t</select>\t\t\t\t\t<select class="week none">\t\t\t\t\t\t<option value="2">星期一</option><option value="3">星期二</option><option value="4">星期三</option>\t\t\t\t\t\t<option value="5">星期四</option><option value="6">星期五</option><option value="7">星期六</option>\t\t\t\t\t\t<option value="1">星期日</option>\t\t\t\t\t</select>\t\t\t\t\t<select class="month none">\t\t\t\t\t\t<option value="1">1日</option><option value="2">2日</option>\t\t\t\t\t\t<option value="3">3日</option><option value="4">4日</option>\t\t\t\t\t\t<option value="5">5日</option><option value="6">6日</option>\t\t\t\t\t\t<option value="7">7日</option><option value="8">8日</option>\t\t\t\t\t\t<option value="9">9日</option><option value="10">10日</option>\t\t\t\t\t\t<option value="11">11日</option><option value="12">12日</option>\t\t\t\t\t\t<option value="13">13日</option><option value="14">14日</option>\t\t\t\t\t\t<option value="15">15日</option><option value="16">16日</option>\t\t\t\t\t\t<option value="17">17日</option><option value="18">18日</option>\t\t\t\t\t\t<option value="19">19日</option><option value="20">20日</option>\t\t\t\t\t\t<option value="21">21日</option><option value="22">22日</option>\t\t\t\t\t\t<option value="23">23日</option><option value="24">24日</option>\t\t\t\t\t\t<option value="25">25日</option><option value="26">26日</option>\t\t\t\t\t\t<option value="27">27日</option><option value="28">28日</option>\t\t\t\t\t\t<option value="29">29日</option><option value="30">30日</option>\t\t\t\t\t\t<option value="31">31日</option>\t\t\t\t\t</select>\t\t\t\t\t<input type="text" class="short" placeholder="请输入上课时段" />\t\t\t\t\t<a href="JavaScript:;" class="btn_dis run_item_del">删除</a>\t\t\t\t</div>');l=a+s,t.find("input").eq(0).attr("id",a+s++),$(".timeList").append(t),$.laydate.render({elem:"#"+l,type:"time",min:"08:00:00",max:"22:00:00",btns:["confirm"]}),$(".timeList .item").length>=6&&$(this).hide()}).on("click",".run_item_del",function(){$(this).parent().remove(),$(".timeList .run_item_add").show()}).on("click",".selected_lessons",function(){$.dialogFull.Pop({boxClass:".pub_list",width:700,height:"auto",title:"挑选课时",content:m(),showCallback:function(t,e){p["course_"+d]&&p["course_"+d].length&&p["course_"+d].forEach(function(t,e){$("[value="+t.lesson_id+"]").attr("checked","true")})},runDone:function(t,e,o){var i=[],n=[];$(".pub_list input:checkbox:checked").each(function(){i.push($(this).val())}),i.forEach(function(t,e){n.push(r["course_"+d][t])}),console.log(n),p["course_"+d]=n,$(".selected_lessons").text("挑选课时("+n.length+")"),o()}})})},259:function(t,e){}});