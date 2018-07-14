!function(e){function t(n){if(a[n])return a[n].exports;var o=a[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var a={};t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=188)}({181:function(e,t,a){"use strict";$.fn.DDSort=function(e){var t={down:$.noop,move:$.noop,up:$.noop,target:"li",delay:100,cloneStyle:{"background-color":"#fff"},floatStyle:{position:"fixed","background-color":"#FEFEF2","box-shadow":"10px 10px 20px 0 #eee"}},a=$(document),n=$.extend(!0,{},t,e);return this.each(function(){var e=$(this),t="height",o="width";"border-box"==e.css("box-sizing")&&(t="outerHeight",o="outerWidth"),e.on("mousedown.DDSort touchstart.DDSort",n.target,function(s){var l=(new Date).getTime();if("mousedown"!=s.type||1==s.which){var i=s.target.tagName.toLowerCase();if("input"!=i&&"textarea"!=i&&"select"!=i&&"a"!=i&&"true"!=$(s.target).prop("contenteditable")){var r=this,d=$(r),u=d.offset(),p=s.pageX,c=s.pageY,m=s.originalEvent.targetTouches;"touchstart"==s.type&&m&&(p=m[0].pageX,c=m[0].pageY);var f=p-u.left,v=c-u.top,h=d.clone().css(n.cloneStyle).css("height",d[t]()).empty(),g=1,_=d.outerHeight(),x=e.outerHeight(),y=_,b=_,D=3*_;return n.down.call(r),a.on("mousemove.DDSort touchmove.DDSort",function(t){var s=t.pageX,i=t.pageY,u=t.originalEvent.targetTouches;if("touchmove"==t.type&&u&&(s=u[0].pageX,i=u[0].pageY),!((new Date).getTime()-l<n.delay)){g&&(d.before(h).css("width",d[o]()).css(n.floatStyle).appendTo(d.parent()),g=0);var p=s-f,c=i-v,m=h.prev(),$=h.next().not(d);d.css({left:p-a.scrollLeft(),top:c-a.scrollTop()}),m.length&&c<m.offset().top+m.outerHeight()/2?h.after(m):$.length&&c+_>$.offset().top+$.outerHeight()/2&&h.before($);var w,F=e.scrollTop(),T=e.offset().top;c<T?(b=_,y=++y>D?D:y,w=F-y):c+_-T>x&&(y=_,b=++b>D?D:b,w=F+b),e.scrollTop(w),n.move.call(r,p-a.scrollLeft(),c-a.scrollTop())}}).on("mouseup.DDSort touchend.DDSort",function(){a.off("mousemove.DDSort mouseup.DDSort touchmove.DDSort touchend.DDSort"),g||(h.before(d.removeAttr("style")).remove(),n.up.call(r))}),!1}}})})}},188:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=a(181),s=(n(o),a(9)),l=n(s),i=a(189),r=n(i);a(190);var d={form_tpl:'<li><span class="wide"><i>*</i>分类课程</span>                <input type="text" class="short" placeholder="请输入分类课程" value="{course_name}" name="course_name" data-validate="any" data-must="1" />                <span class="wide"><i>*</i>有效课时数</span>                <input type="text" class="shortest" placeholder="请输入有效课时数" disabled="disabled" value="{lesson_num}" name="lesson_num" data-validate="number" data-must="1" />                <span><i>*</i>课时时长</span>                <input type="text" class="shortest no_margin" placeholder="请输入课时时长" value="{standard_time}" name="standard_time" data-validate="number" data-must="1" />分钟            </li>            <li>                <span class="wide"><i>*</i>收费方式</span>                <select name="fee_model" data-validate="any">                    <option value="按课时">按课时</option>                </select>            </li>            <li>                <span class="wide"><i>*</i>课程对象</span>                <input type="text" placeholder="请输入课程对象" value="{user}" name="user" data-validate="any" data-must="1" />            </li>            <li id="target">                <div><span class="wide"><i>*</i>班级多维目标</span>                <input type="text" class="long target_item" placeholder="请输入课程多维目标" /></div>                <div><span class="wide"></span>                <input type="text" class="long target_item" placeholder="请输入班级多维目标" /></div>                <div><span class="wide"></span>                <input type="text" class="long target_item" placeholder="请输入班级多维目标" /></div>            </li>            <li>                <span class="wide"><i>*</i>课程总体介绍</span>                <textarea class="long" placeholder="请输入课程总体介绍" name="outline" data-validate="any" data-must="1">{outline}</textarea>            </li>            <li>                <span class="wide"><i>*</i>下一阶段课程</span>                <select name="next_courseid" data-validate="any" class="next">                    <option value="0">无</option>                </select>            </li>',item:'<li>                <div class="item"><p><span data-lessonid="{lesson_id}"></span></p></div>                <div class="item"><p><span>{theme}</span></p></div>                <div class="item"><p><span>{status}</span></p></div>                <div class="item"><p><span class="line20px">{outline}</span></p></div>                <div class="item"><p><span>                <a href="JavaScript:;" class="edit">编辑</a>                <a href="JavaScript:;" class="del {showDel}" data-lessonid="{lesson_id}">删除</a></span></p></div>            </li>',addLessonForm:'<ul class="pub_form">            <li>                <span><i>*</i>课时主题</span>                <input type="text" placeholder="请输入课时主题名" name="theme" data-validate="any" data-must="1" />            </li>            <li>                <span><i>*</i>状态</span>                <select name="status" data-validate="any">                    <option value="正常">正常</option>                    <option value="研发中">研发中</option>                    <option value="停止">停止</option>                </select>            </li>            <li>                <span><i>*</i>教学目标</span>                <textarea placeholder="请输入教学目标" name="outline" data-validate="any" data-must="1" />            </li>        </ul>',addLessonBatchForm:'<ul class="pub_form">            <li>                <span class="wide"><i>*</i>主题固定前缀</span>                <input type="text" placeholder="请输入主题固定前缀" name="theme" data-validate="any" data-must="1" />            </li>            <li>                <span class="wide"><i>*</i>添加的课时数</span>                <input type="text" placeholder="请输入添加的课时数" name="number" data-validate="number" data-must="1" />            </li>            <li>                <span class="wide"><i>*</i>状态</span>                <select name="status" data-validate="any">                    <option value="正常">正常</option>                    <option value="研发中">研发中</option>                    <option value="停止">停止</option>                </select>            </li>            <li>                <span class="wide"><i>*</i>教学目标</span>                <textarea placeholder="请输入教学目标" name="outline" data-validate="any" data-must="1" />            </li>        </ul>'},u=function(){$("#lessons li").each(function(e){$(this).find("span").eq(0).html(e+1)})},p=function(e,t){var a=Object.getOwnPropertyNames(e||{}),n=Object.getOwnPropertyNames(t||{});if(a.length!=n.length)return!1;for(var o=0;o<a.length;o++){var s=a[o];if(e[s]!==t[s])return!1}return!0},c=$("#courseid").val(),m=0,f=function(){$.ajax({type:"post",dataType:"json",url:"/pss/getCourses",data:{code:$("#school_code").val()||$("#zone_code").val()},success:function(e){if(0!=e.errcode)return void $.dialogFull.Tips(e.errmsg);var t="";e.data.map(function(e){t+='<option value="'+e.id+'">'+e.name+"</option>"}),$("[name=next_courseid]").prepend(t),c?($('[name="next_courseid"] [value="'+c+'"]').remove(),$('[name="next_courseid"]').append('<option value="'+c+'">循环使用本课程</option>')):$('[name="next_courseid"]').append('<option value="-1">循环使用本课程</option>'),$("[name=next_courseid]").val(m)},error:function(){$.dialogFull.Tips("网络错误，请稍后重试！")}})},v={};if(c)$.ajax({type:"post",dataType:"json",url:"/pss/getCourseDetail",data:{code:$("#school_code").val()||$("#zone_code").val(),courseid:c},success:function(e){if(0!=e.errcode)return void $.dialogFull.Tips(e.errmsg);var t=(0,l.default)(d.form_tpl,e.data);$(".pub_form ul").html(t);var a=e.data.target.split("\n"),n="true"==e.data.isbinding;n&&$("#add_lesson").after('<span class="sort_tips">课时顺序调整不影响已经开班的班级！</span>');var o="true"==n?"none":"";a.map(function(e,t){$(".target_item").eq(t).val(e)}),$("[name=fee_model]").val(e.data.fee_model);var s=e.data.lessons,i="";s.map(function(e,t){e.showDel=o,i+=(0,l.default)(d.item,e),e.snum=t+1,delete e.showDel,delete e.lessonTime,v[e.lesson_id]=e}),$("#lessons").html(i),m=e.data.next_courseid,f(),u()},error:function(){$.dialogFull.Tips("网络错误，请稍后重试！")}});else{var h=(0,l.default)(d.form_tpl,{});$(".pub_form ul").html(h),$("[name=lesson_num]").val(0),f()}$("#lessons").DDSort({target:"li",up:function(){u()}});var g=[];$.onEdit=!0,$.mainBox.on("click","#submit_course",function(){var e=$.form.get({error_text:"placeholder"});if(e){e.lesson_num=+e.lesson_num,e.standard_time=+e.standard_time;var t=[];if($("#lessons li").each(function(){var e=$(this).find("span"),a={snum:+e.eq(0).text(),lesson_id:e.eq(0).data("lessonid"),theme:e.eq(1).text(),status:e.eq(2).text(),outline:e.eq(3).text()};p(a,v[a.lesson_id]||{})||(a.lesson_id||delete a.lesson_id,t.push(a))}),t=t.concat(g),e.target="",$(".target_item").each(function(){var t=$(this).val();e.target+=t?t+"\n":""}),!e.target)return void $.dialogFull.Tips("请输入课程多维目标");if(!t.length&&!$("#lessons li").length)return void $.dialogFull.Tips("请添加课时！");e.lessons=t,e.next_courseid=+e.next_courseid,$.form.submit({url:c?"/pss/editCourse":"/pss/addCourse",data:{code:$("#school_code").val()||$("#zone_code").val(),courseid:c||"",data:JSON.stringify(e)},success:function(e){if(0!=e.errcode)return void $.dialogFull.Tips(e.errmsg);$.dialogFull.Tips("提交成功！"),$.ajaxGetHtml({url:"/pss/goCourse"})},error:function(){$.dialogFull.Tips("网络错误，请稍后重试")}})}}).on("click","#add_lesson",function(){$.dialogFull.Pop({boxClass:".dialog_add_lesson",title:"添加课时",content:d.addLessonForm,runDone:function(e,t,a){var n=$.form.get({item:".dialog_add_lesson .pub_form [data-validate]",error_text:"placeholder"});if(n){var o=(0,l.default)(d.item,n);$("#lessons").append(o),a(),$("[name=lesson_num]").val($("#lessons li").length),u()}}})}).on("click","#add_lesson_batch",function(){$.dialogFull.Pop({boxClass:".dialog_add_lesson_batch",title:"批量添加课时",content:d.addLessonBatchForm,runDone:function(e,t,a){var n=$.form.get({item:".dialog_add_lesson_batch .pub_form [data-validate]",error_text:"placeholder"});if(n){var o=+n.number,s=void 0,i=$("<ul />");for(s=1;s<=o;s++){var r={theme:n.theme+"-"+s,status:n.status,outline:n.outline},p=(0,l.default)(d.item,r);i.append(p)}$("#lessons").append(i.html()),a(),$("[name=lesson_num]").val($("#lessons li").length),u()}}})}).on("click","#lessons .edit",function(){var e=$(this).parent().parent().parent().parent(),t=e.find("span").eq(1).text(),a=e.find("span").eq(2).text(),n=e.find("span").eq(3).text();$.dialogFull.Pop({boxClass:".dialog_add_lesson",title:"编辑课时",content:d.addLessonForm,showCallback:function(e,o){e.find("input").val(t),e.find("select").val(a),e.find("textarea").val(n)},runDone:function(t,a,n){var o=$.form.get({item:".dialog_add_lesson .pub_form [data-validate]",error_text:"placeholder"});o&&(e.find("span").eq(1).text(o.theme),e.find("span").eq(2).text(o.status),e.find("span").eq(3).text(o.outline),n())}})}).on("click","#lessons .del",function(){var e=$(this);$.dialogFull.Pop({boxClass:".dialog_add_lesson",title:"删除课时",content:"确定删除课时？",runDone:function(t,a,n){e.parent().parent().parent().parent().remove(),$("[name=lesson_num]").val($("#lessons li").length);var o=e.data("lessonid");if(o){var s=v[o];s.snum=0,g.push(s)}u(),n()}})}).on("change",".inputFile",function(){(0,r.default)({input:this,keys:["theme","status","outline"],handle:function(e){var t="";e.map(function(e,a){e.show=1,t+=(0,l.default)(d.item,e)}),$("#lessons").append(t),$("[name=lesson_num]").val($("#lessons li").length),u()}})}).on("blur",'[name="course_name111"]',function(){if(!c){$('[value="-1"]').remove();$(this).val();$('[name="next_courseid"]').append('<option value="-1">循环使用本课程</option>')}})},189:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){var t={input:".inputFile",lineStart:1,keys:[],handle:function(){},callback:function(){}};t=$.extend(t,e);var a=[],n=function(e){a.push(e+1)},o=$(t.input),s=o[0].files;if("undefined"==typeof FileReader)return void $.dialogFull.Alert("IE9及以下浏览器不支持，请使用Chrome或Firefox浏览器");var l=new FileReader;l.readAsText(s[0]),l.onload=function(e){var s=e.target.result;console.log(s);var l=s.split("\n"),i=(s.split("\n").length,[]);if(l.map(function(e,a){if(a>=t.lineStart){var o=e.split(","),s={};t.keys.map(function(e,t){s[e]=o[t]||n(a)}),i.push(s)}}),a.length)return void $.dialogFull.Alert("第"+a.join("、")+"行数据有误，请编辑后重新操作");console.log(i),t.handle(i),$.dialogFull.Tips("操作成功！"),o.after(o.clone().val("")),o.remove()}};t.default=n},190:function(e,t){},9:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){return e.replace(/\{([^\{|^\}]+)\}/gi,function(e,a){if(e&&a)return t[a]||0===t[a]?t[a]:""})};t.default=n}});