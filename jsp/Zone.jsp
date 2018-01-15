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
		<h3>校区列表</h3>
		<a href="JavaScript:;" data-href="/pss/goAddOrEditZone" class="btn"><i>+</i>添加新校区</a>
	</div>
	<div class="pub_list">
		<div class="head">
			<span>校区名称</span>
			<span>负责人</span>
			<span>电话</span>
			<span>校址</span>
			<span>校区类型</span>
			<span>主营项目</span>
			<span>操作</span>
		</div>
		<ul class="body">
		</ul>
		<div class="page">
			<p>
			</p>
		</div>
	</div>
    <link href="/res/css/modules/Zone.css" rel="stylesheet">
    <script type="text/javascript" src="/res/js/modules/Zone.js"></script>
</div>