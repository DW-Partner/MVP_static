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
    <input type="hidden" id="type" value="SendList">
    <!-- 隐藏域end -->
	<div class="type_nav">
		<div class="bg_bar">
			<h6><a href="javascript:;" data-href="/pss/goZoneTasks">任务处理</a></h6>
			<h6><a href="javascript:;" data-href="/pss/goMsgFromSchool">机构通知</a></h6>
			<h6 class="on">发送列表</h6>
		</div>
	</div>
	<div class="pub_list">
		<div class="head">
			<span>发送时间</span>
			<span>发送者</span>
			<span>发送内容</span>
		</div>
		<ul class="body">
		</ul>
		<div class="page">
			<p>
			</p>
		</div>
	</div>
	<link href="/res/css/modules/ZoneTasks.css" rel="stylesheet">
	<script type="text/javascript" src="/res/js/modules/ZoneTasks.js"></script>
</div>
