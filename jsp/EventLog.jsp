
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
	

%>
		<div class="main">
			<h3 class="page_title">系统日志</h3>
			<div class="pub_list">
				<div class="head">
					<span>时间</span>
					<span>账号</span>
					<span class="flex_3">操作</span>
				</div>
				<ul class="body">
				</ul>
				<div class="page">
					<p>
					</p>
				</div>
			</div>
			<link href="http://pss.idrpeng.com:9090/res/css/modules/EventLog.css" rel="stylesheet">
			<script type="text/javascript" src="http://pss.idrpeng.com:9090/res/js/modules/EventLog.js"></script>
		</div>