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
    <input type="hidden" id="classname" value="${classname}">
    <input type="hidden" id="sid" value="${sid}">
    <input type="hidden" id="sname" value="${sname}">
    <input type="hidden" id="page" value="${page}">

    <!-- 隐藏域end -->
 	<div class="page_head">
 		<h3></h3>
		<a href="JavaScript:;" data-href="/pss/goStudentManage?page=${page}" class="btn">返回上一页</a>
	</div>

	<ul class="class_list">
	</ul>

	<ul class="report">
	</ul>

    <link href="/res/css/modules/StudentArchive.css" rel="stylesheet">
    <script type="text/javascript" src="/res/js/modules/StudentArchive.js"></script>
</div>
