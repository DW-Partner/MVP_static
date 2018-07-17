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
		<h3>班级管理</h3>
		<a href="JavaScript:;" data-href="/pss/goZoneAddClass" class="btn"><i>+</i>添加班级</a>
	</div>

	<div class="pub_list">
		<div class="head">
			<span>班级名称</span>
			<span>开班时间</span>
			<span>教室位置</span>
			<span>主课老师</span>
			<span>正式学员</span>
			<span>试听学员</span>
			<span>当前剩余课时</span>
			<span>状态</span>
			<span>操作</span>
		</div>
		<ul class="body">
		</ul>
		<div class="page">
			<p>
			</p>
		</div>
	</div>
	<link href="/res/css/modules/ZoneClassManage.css" rel="stylesheet">
	<script type="text/javascript" src="/res/js/modules/ZoneClassManage.js"></script>
</div>
