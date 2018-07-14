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
    <!-- 隐藏域end -->
 	<div class="page_head">
 		<h3>标题</h3>
 		<a href="JavaScript:;" data-href="/pss/demo" class="addLessonBtn">按钮</a>
	</div>


    <link href="/res/css/modules/demo.css" rel="stylesheet">
    <script type="text/javascript" src="/res/js/modules/demo.js"></script>
</div>