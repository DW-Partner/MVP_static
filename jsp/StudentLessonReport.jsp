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
    <input type="hidden" id="sid" value="${sid}">
    <input type="hidden" id="sname" value="${sname}">
    <input type="hidden" id="page" value="${page}">
    <input type="hidden" id="data" value="${data}">
    <input type="hidden" id="classid" value="${classid}">
    <input type="hidden" id="lessonid" value="${lessonid}">
    <!-- 隐藏域end -->
 	<div class="page_head">
 		<h3>教师反馈详情</h3>
		<a href="JavaScript:;" data-href="/pss/goStudentPrintSituation?sid={sid}&page={page}&data={data}" class="btn">返回上一页</a>
	</div>
	<ul class="report">
	</ul>

    <link href="/res/css/modules/StudentLessonReport.css" rel="stylesheet">
    <script type="text/javascript" src="/res/js/modules/StudentLessonReport.js"></script>
</div>