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
    <input type="hidden" id="sid" value="${sid}">
    <!-- 隐藏域end -->
 	<div class="page_head">
 		<h3>班级信息——班级课程表</h3>
 		<div class="run">
			<a href="JavaScript:;" data-href="/pss/goAddOrEditZone" class="btn addLessonBtn"><i>+</i>添加课时</a>
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

    <link href="/res/css/modules/ClassInfo.css" rel="stylesheet">
    <script type="text/javascript" src="/res/js/modules/ClassInfo.js"></script>
</div>
