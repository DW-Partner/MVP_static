
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
		<h3>招生顾问</h3>
		<a href="JavaScript:;" data-href="/pss/goAddOrEditSales" class="btn"><i>+</i>添加顾问</a>
	</div>
	<div class="pub_list">
		<div class="head">
			<span>姓名</span>
			<span>手机号</span>
			<span>入职时间</span>
			<span>操作</span>
		</div>
		<ul class="body">
		</ul>
		<div class="page">
			<p>
			</p>
		</div>
	</div>
	<link href="/res/css/modules/Sales.css" rel="stylesheet">
	<script type="text/javascript" src="/res/js/modules/Sales.js"></script>
</div>
