<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<div class="main">
    <!-- 隐藏域start school_code -->
    <input type="hidden" id="classid" value="${classid}">
    <input type="hidden" id="lessonid" value="${lessonid}">
    <input type="hidden" id="sid" value="${sid}">
    <!-- 隐藏域end -->
    <div class="page_head">
        <h3>课时调整</h3>
    </div>
	<!-- <img src="/res/images/pic_banner_01_37c4d6d1.jpg" class="banner"> -->
	<div class="period_edit">
		<div class="pub_form">
			<ul>
				<li>
					<span class="wide">课时改期</span>
					<input type="text" class="short" id="plan_time" placeholder="请输入上课时间" name="plan_time" data-validate="any" data-must="1"/>
				</li>
				<li>
					<span class="wide">教师调整</span>
					<select id="tid" name="tid" data-validate="any" data-must="1">
					</select>
				</li>
			</ul>
			<a href="JavaScript:;" class="btn" id="submit_edit">确定</a>
			<a href="JavaScript:;" data-href="/pss/goClassInfo?classid=${classid}" class="btn_dis">取消</a>
		</div>

		<div class="info">
		</div>
	</div>
    <link href="/res/css/modules/LessonOperate.css" rel="stylesheet">
    <script type="text/javascript" src="/res/js/modules/LessonOperate.js"></script>
</div>
