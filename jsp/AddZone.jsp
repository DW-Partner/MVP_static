<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
	

%>
<div class="main">
	<div class="pub_form">
			<ul>
			</ul>
			<a href="JavaScript:;" class="btn" id="submit_AddOrEditZone">提交</a>
			<a href="JavaScript:;" data-href="/pss/goZone" class="btn_dis">取消</a>
	</div>
	<link href="/res/css/modules/AddOrEditZone.css" rel="stylesheet">
	<script type="text/javascript" src="/res/js/modules/AddOrEditZone.js"></script>
</div>