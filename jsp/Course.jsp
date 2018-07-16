<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
	

%>
<div class="main">
	<div class="page_head">
		<h3>课程资源</h3>
		<a href="JavaScript:;" data-href="/pss/goAddOrEditCourse" class="btn"><i>+</i>添加分类</a>
	</div>

	<div class="pub_list">
		<div class="head">
				<span>课程分类名</span>
				<span>有效课时数</span>
				<span>课程对象</span>
				<span>课程目标</span>
				<span class="flex_3">课程介绍</span>
				<span>收费模式</span>
				<span class="flex_2">操作</span>
		</div>
		<ul class="body">
		</ul>
		<div class="page">
			<p>
			</p>
		</div>
	</div>
	<link href="/res/css/modules/Course.css" rel="stylesheet">
	<script type="text/javascript" src="/res/js/modules/Course.js"></script>
</div>