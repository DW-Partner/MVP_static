
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
    <!-- 隐藏域end -->
	<div class="page_head">
		<h3>教学教研</h3>
		<div class="run">
			<input type="text" placeholder="请输入课时主题" />
			<a href="JavaScript:;" class="btn">搜索</a>
		</div>
	</div>
	<div class="pub_list">
		<div class="head">
			<span>课时编号</span>
			<span>课时主题</span>
			<span>提交人</span>
			<span>时间</span>
			<span>地点</span>
			<span>操作</span>
		</div>
		<ul class="body">
		</ul>
		<div class="page">
			<p>
			</p>
		</div>
	</div>
	<link href="http://pss.idrpeng.com:9090/res/css/modules/Plan.css" rel="stylesheet">
	<script type="text/javascript" src="http://pss.idrpeng.com:9090/res/js/modules/Plan.js"></script>
</div>