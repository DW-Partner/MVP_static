alert(Math.random());
console.log(1021);

!function(e){function a(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,a),n.l=!0,n.exports}var t={};a.m=e,a.c=t,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:s})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},a.p="/",a(a.s=257)}({257:function(e,a,t){"use strict";var s=t(9);!function(e){e&&e.__esModule}(s);t(258);var n=$("#type").val(),o={ZoneTasks:'<li>\t<div class="item"><p><span>{time}</span></p></div>\t<div class="item"><p><span>{from}</span></p></div>\t<div class="item"><p><span>{content}</span></p></div>\t<div class="item"><p><span><input type="checkbox" name="id_{task_id}" {checked} {status} data-taskid={task_id}></span></p></div>\t</li>',MsgFromSchool:'<li>\t<div class="item"><p><span>{time}</span></p></div>\t<div class="item"><p><span>{from}</span></p></div>\t<div class="item"><p><span>{content}</span></p></div>\t<div class="item"><p><span><input type="checkbox" name="id_{msg_id}" {checked} {status} data-msgid={msg_id}></span></p></div>\t</li>',SendList:'<li>\t<div class="item"><p><span>{time}</span></p></div>\t<div class="item"><p><span>{to}</span></p></div>\t<div class="item"><p><span>{content}</span></p></div>\t</li>'};

console.log(1022);
console.log(n);

"ZoneTasks"==n?function(){


console.log(1023);
console.log($.jsonPage);

$.jsonPage({listBox:"ul.body",ajaxUrl:"/pss/getZoneTaskList",ajaxType:"post",ajaxData:{code:$("#zone_code").val(),zoneid:$("#zone_zoneid").val()},template:o.ZoneTasks,listKey:["data","list"],eachDataHandle:function(e,a,t){return e.checked="已处理"==e.status?"checked":"",e.status="已处理"==e.status?"disabled":"",e},eachTemplateHandle:!1,noData:!1,codeKeyName:"errcode",codeSuccess:0,successRunAfter:function(e,a,t,s,n){},ajaxCodeError:function(e){$.dialogFull.Tips(e.errmsg)},ajaxError:function(e,a,t,s){$.dialogFull.Tips("网络错误，请稍后重试")}})}():"MsgFromSchool"==n?function(){



console.log(1024);
console.log($.jsonPage);


$.jsonPage({listBox:"ul.body",ajaxUrl:"/pss/getMsgFromSchool",ajaxType:"post",ajaxData:{code:$("#zone_code").val(),zoneid:$("#zone_zoneid").val(),page:0},template:o.MsgFromSchool,listKey:["data","list"],eachDataHandle:function(e,a,t){return e.checked="已处理"==e.status?"checked":"",e.status="已处理"==e.status?"disabled":"",e.content.indexOf("填写当日流水")>-1&&(e.status="disabled"),e.checked?e.content=e.content.replace(/填写当日流水/g,'<a href="javascript:;" class="disabled">填写当日流水</a>'):e.content=e.content.replace(/填写当日流水/g,'<a href="javascript:;" data-href="/pss/goInAndOutCome?date='+e.time.split(" ")[0]+"&page="+e._page+"&msgid="+e.msg_id+'">填写当日流水</a>'),e},eachTemplateHandle:!1,noData:!1,codeKeyName:"errcode",codeSuccess:0,successRunAfter:function(e,a,t,s,n){},ajaxCodeError:function(e){$.dialogFull.Tips(e.errmsg)},ajaxError:function(e,a,t,s){$.dialogFull.Tips("网络错误，请稍后重试")},gotoIndex:+$("#page").val()})}():"SendList"==n&&function(){



console.log(1025);
console.log($.jsonPage);

$.jsonPage({listBox:"ul.body",ajaxUrl:"/pss/getSendList",ajaxType:"post",ajaxData:{code:$("#zone_code").val(),zoneid:$("#zone_zoneid").val(),page:0},template:o.SendList,listKey:["data","list"],eachTemplateHandle:!1,noData:!1,codeKeyName:"errcode",codeSuccess:0,successRunAfter:function(e,a,t,s,n){},ajaxCodeError:function(e){$.dialogFull.Tips(e.errmsg)},ajaxError:function(e,a,t,s){$.dialogFull.Tips("网络错误，请稍后重试")}})}(),$.mainBox.on("change","#ZoneTaskList input",function(){var e=this;$(this).attr("disabled","disabled");var a=$(this).data("taskid");$.ajax({type:"post",dataType:"json",url:"/pss/submitZoneTask",data:{code:$("#zone_code").val(),zoneid:$("#zone_zoneid").val(),taskid:a},success:function(a){if(0!=a.errcode)return $.dialogFull.Tips(a.errmsg),void $(e).removeAttr("disabled")},error:function(){$(e).removeAttr("disabled"),$.dialogFull.Tips("网络错误，请稍后重试！")}})}).on("change","#MsgFromSchool input",function(){var e=this;$(this).attr("disabled","disabled");var a=$(this).data("msgid");$.ajax({type:"post",dataType:"json",url:"/pss/submitMsgFromSchool",data:{code:$("#zone_code").val(),zoneid:$("#zone_zoneid").val(),msgid:a},success:function(a){if(0!=a.errcode)return $.dialogFull.Tips(a.errmsg),void $(e).removeAttr("disabled")},error:function(){$(e).removeAttr("disabled"),$.dialogFull.Tips("网络错误，请稍后重试！")}})})},258:function(e,a){},9:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=function(e,a){return e.replace(/\{([^\{|^\}]+)\}/gi,function(e,t){if(e&&t)return a[t]||0===a[t]?a[t]:""})};a.default=s}});
