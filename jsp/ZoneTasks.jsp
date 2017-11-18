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
    <input type="hidden" id="type" value="ZoneTasks">
    <!-- 隐藏域end -->
	<div class="type_nav">
		<div class="bg_bar">
			<h6 class="on">任务处理</h6>
			<h6><a href="javascript:;" data-href="/pss/goMsgFromSchool">机构通知</a></h6>
			<h6><a href="javascript:;" data-href="/pss/goSendList">发送列表</a></h6>
		</div>
	</div>
	<div class="pub_list" id="ZoneTaskList">
		<div class="head">
			<span>发送时间</span>
			<span>发送给</span>
			<span>发送内容</span>
			<span>信息已处理</span>
		</div>
		<ul class="body">
		</ul>
		<div class="page">
			<p>
			</p>
		</div>
	</div>
	<link href="http://pss.idrpeng.com:9090/res/css/modules/ZoneTasks.css" rel="stylesheet">
	<script type="text/javascript" src="http://pss.idrpeng.com:9090/res/js/ZoneTasks.js"></script>
</div>