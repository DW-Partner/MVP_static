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
    <!-- 隐藏域end -->
 	<div class="page_head">
 		<h3>学员印记</h3>
	</div>
	<div id="summary" class="summary">
	</div>
	<div class="pub_list">
		<div class="head">
			<span>时间</span>
			<span>课时主题</span>
			<span>班级</span>
			<span>出勤情况</span>
			<span>教师</span>
			<span>教师反馈</span>
		</div>
		<ul class="body">
		</ul>
		<div class="page">
			<p>
			</p>
		</div>
	</div>

    <link href="/res/css/modules/StudentPrintSituation.css" rel="stylesheet">
    <script type="text/javascript" src="/res/js/modules/StudentPrintSituation.js"></script>
</div>