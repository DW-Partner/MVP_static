!function(t){function e(n){if(a[n])return a[n].exports;var s=a[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var a={};e.m=t,e.c=a,e.d=function(t,a,n){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=193)}({193:function(t,e,a){"use strict";a(194);var n=function(){$.jsonPage({listBox:"ul.body",ajaxUrl:"/pss/getTeacherList",ajaxType:"post",ajaxData:{code:$("#school_code").val()},template:'<li>\t\t\t\t<div class="item"><p><span>{work_no}</span></p></div>\t\t\t\t<div class="item"><p><span>{name}</span></p></div>\t\t\t\t<div class="item"><p><span>{zone_name}</span></p></div>\t\t\t\t<div class="item"><p><span>科目</span></p></div>\t\t\t\t<div class="item"><p><span>{type}</span></p></div>\t\t\t\t<div class="item"><p><span>{entry_day}</span></p></div>\t\t\t\t<div class="item"><p><span>{status}</span></p></div>\t\t\t\t<div class="item"><p><span><a href="JavaScript:;"" data-href="/pss/goTeacherDetail?tid={tid}">详情</a></span></p></div>\t\t\t</li>',listKey:["data"],pageBar:!1,eachTemplateHandle:!1,noData:!1,codeKeyName:"errcode",codeSuccess:0,successRunAfter:function(t,e,a,n,s){},ajaxCodeError:function(t){$.dialogFull.Tips(t.errmsg)},ajaxError:function(t,e,a,n){$.dialogFull.Tips("网络错误，请稍后重试")}})};n(),$.mainBox.on("change",".inputFile",function(){$.dialogFull.Alert("文件上传中，请勿刷新！");var t=$(this),e=new FormData;e.append("code",$("#school_code").val()),e.append("file",t[0].files[0]),$.ajax({type:"post",cache:!1,url:"/pss/uploadTeacherList",data:e,processData:!1,contentType:!1,mimeType:"multipart/form-data",dataType:"json",success:function(e){if(0!=e.errcode)return void $.dialogFull.Tips(e.errmsg);t.after(t.clone().val("")),t.remove(),$.dialogFull.Alert({content:"操作成功！",clear:!0}),n()},error:function(){$.dialogFull.Alert({content:"网络错误，请刷新页面或稍后重试",clear:!0})}})})},194:function(t,e){}});