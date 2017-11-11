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
    <input type="hidden" id="courseid" value="${courseid}">
    <input type="hidden" id="lessonid" value="${lessonid}">
    <input type="hidden" id="planid" value="${planid}">
    <!-- 隐藏域end -->

		<div class="contain">
			<div class="classLi">
			</div>
			<a href="javascript:;" data-href="/pss/goPlan?courseid=${courseid}" class="btn">返回上一页</a>
		</div>

	<link href="http://pss.idrpeng.com:9090/res/css/modules/PlanDetail.css" rel="stylesheet">
	<script type="text/javascript" src="http://pss.idrpeng.com:9090/res/js/modules/PlanDetail.js"></script>
</div>