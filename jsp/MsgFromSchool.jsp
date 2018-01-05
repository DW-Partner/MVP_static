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
    <input type="hidden" id="type" value="MsgFromSchool">
    <!-- 隐藏域end -->
	<div class="type_nav">
		<div class="bg_bar">
			<h6><a href="javascript:;" data-href="/pss/goZoneTasks">任务处理</a></h6>
			<h6 class="on">机构通知</h6>
			<h6><a href="javascript:;" data-href="/pss/goSendList">发送列表</a></h6>
		</div>
	</div>
	<div class="pub_list" id="MsgFromSchool">
		<div class="head">
			<span>发送时间</span>
			<span>发送者</span>
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
	<script type="text/javascript" src="http://pss.idrpeng.com:9090/res/js/modules/ZoneTasks.js"></script>
</div>
