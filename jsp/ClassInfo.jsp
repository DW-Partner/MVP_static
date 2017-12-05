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
 		<h3>课时流程</h3>
 		<div class="run">
		</div>
	</div>

	<div class="dataBox">
	</div>

	<ul class="class_list">
	</ul>

	<div class="page">
		<p>
		</p>
	</div>

	<a href="JavaScript:;" data-href="/pss/goZoneClassManage" class="btn">返回上一页</a>

    <link href="http://pss.idrpeng.com:9090/res/css/modules/ClassInfo.css" rel="stylesheet">
    <script type="text/javascript" src="http://pss.idrpeng.com:9090/res/js/modules/ClassInfo.js"></script>
</div>