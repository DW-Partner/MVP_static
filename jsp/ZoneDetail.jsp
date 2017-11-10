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
			<a href="JavaScript:;" data-href="/pss/goZoneDetail?zoneid=${zoneid}" class="btn" id="editZone">修改校区信息</a>
		</div>
		<h3 class="page_title">校区列表</h3>
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
	</div>
</div>