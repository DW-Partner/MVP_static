!function(a){function i(s){if(t[s])return t[s].exports;var e=t[s]={i:s,l:!1,exports:{}};return a[s].call(e.exports,e,e.exports,i),e.l=!0,e.exports}var t={};i.m=a,i.c=t,i.d=function(a,t,s){i.o(a,t)||Object.defineProperty(a,t,{configurable:!1,enumerable:!0,get:s})},i.n=function(a){var t=a&&a.__esModule?function(){return a.default}:function(){return a};return i.d(t,"a",t),t},i.o=function(a,i){return Object.prototype.hasOwnProperty.call(a,i)},i.p="/",i(i.s=177)}({177:function(a,i,t){"use strict";t(178);var s={list:'<li>\t<div class="item flex_2"><p><span>{ctime}</span></p></div\t<div class="item"><p><span>{name}</span></p></div>\t<div class="item"><p><span>{age}</span></p></div>\t<div class="item"><p><span>{gender}</span></p></div>\t<div class="item flex_2"><p><span>{address}</span></p></div\t<div class="item flex_2"><p><span>{mobile}</span></p></div>\t<div class="item"><p><span>{official}</span></p></div>\t<div class="item flex_2"><p><span>{visitorContent}</span></p></div>\t<div class="item"><p><span>{origin}</span></p></div>\t<div class="item"><p><span>--</span></p></div>\t<div class="item"><p><span>--</span></p></div>\t<div class="item"><p><span>{visitorStatus}</span></p></div>\t<div class="item flex_2"><p><span>\t<a href="JavaScript:;" data-href="/pss/goEditVisitor?sid={sid}">编辑</a>\t<a href="JavaScript:;" data-href="/pss/goEditVisitor?sid={sid}&page=0">试听</a>\t<a href="JavaScript:;" class="toBeStudent" data-sid="{sid}">转正式</a></span></p></div>\t</li>'},e=function(a){var i={code:$("#zone_code").val(),zoneid:$("#zone_zoneid").val()};a&&(i.data=JSON.stringify(a)),$.jsonPage({listBox:"ul.body",ajaxUrl:"/pss/getVisitorList",ajaxType:"post",ajaxData:i,template:s.list,listKey:["data","list"],pageBar:!1,eachTemplateHandle:!1,noData:!1,codeKeyName:"errcode",codeSuccess:0,successRunAfter:function(a,i,t,s,e){},ajaxCodeError:function(a){$.dialogFull.Tips(a.errmsg)},ajaxError:function(a,i,t,s){$.dialogFull.Tips("网络错误，请稍后重试")}})};e(),$.mainBox.on("click",".toBeStudent",function(){var a=$(this).data("sid");$.ajax({type:"post",dataType:"json",url:"/pss/toBeStudent",data:{code:$("#zone_code").val(),zoneid:$("#zone_zoneid").val(),sid:a},success:function(a){if(0!=a.errcode)return void $.dialogFull.Tips(a.errmsg);$.dialogFull.Tips("操作成功！"),e()},error:function(){$.dialogFull.Tips("网络错误，请稍后重试！")}})})},178:function(a,i){}});