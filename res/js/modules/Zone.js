!function(e){function a(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}var n={};a.m=e,a.c=n,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},a.p="/",a(a.s=464)}({464:function(e,a,n){"use strict";n(465);var t={zoneList:'<li>                    <div class="item"><p><span>{name}</span></p></div>                    <div class="item"><p><span>{official}</span></p></div>                    <div class="item"><p><span>{mobile}</span></p></div>                    <div class="item"><p><span>{address}</span></p></div>                    <div class="item"><p><span>{type}</span></p></div>                    <div class="item"><p><span>{coreContent}</span></p></div>                    <div class="item"><p><span><a href="JavaScript:;" data-href="/pss/goZoneDetail?zoneid={id}">查看详情</a></span></p></div>                </li>'};$.jsonPage({listBox:"ul.body",ajaxUrl:"/pss/getZoneList",ajaxType:"post",ajaxData:{code:$("#school_code").val()},template:t.zoneList,listKey:["data"],pageBar:!1,eachDataHandle:function(e,a,n){var t={"00":"直营/商场","01":"直营/社区",10:"合作/商场",11:"合作/社区"};return e.type=t[e.type],e},eachTemplateHandle:!1,noData:!1,codeKeyName:"errcode",codeSuccess:0,successRunAfter:function(e,a,n,t,s){},ajaxCodeError:function(e){$.dialogFull.Tips(e.errmsg)},ajaxError:function(e,a,n,t){$.dialogFull.Tips("网络错误，请稍后重试")},eventDom:"#main_box"})},465:function(e,a){}});