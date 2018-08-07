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
    <input type="hidden" id="zoneid" value="${zoneid}">
    <!-- 隐藏域end -->
	<div class="ZoneDetail">
		<div class="header fix">
			<div class="info">
			</div>
			<div class="content_middle">
			</div>
			<a href="JavaScript:;" data-href="/pss/goAddOrEditZone?zoneid=${zoneid}" class="btn" id="editZone">修改校区信息</a>
		</div>
		<h3 class="page_title">班级情况</h3>
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
			</div>
			<ul class="body">
			</ul>
			<div class="page">
				<p>
				</p>
			</div>
		</div>
	</div>
	<link href="/res/css/modules/ZoneDetail.css" rel="stylesheet">
	<script type="text/javascript" src="/res/js/modules/ZoneDetail.js"></script>
</div>