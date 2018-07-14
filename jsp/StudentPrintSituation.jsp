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
 		<!-- <a href="JavaScript:;" data-href="/pss/goStudentLessonReport?sid={sid}&page={page}&data={data}" class="btn">教师反馈</a> -->
	</div>
	<h3 class="page_title">印记摘要</h3>
	<div id="summary" class="summary">
	</div>
	<h3 class="page_title">班级列表</h3>
	<div id="classList" class="classList">
	</div>

	<div class="pub_list">
		<div class="head">
			<span>课时主题</span>
			<span>时间</span>
			<span>班级名称</span>
			<span>状态</span>
			<span>教师名称</span>
			<span>操作</span>
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