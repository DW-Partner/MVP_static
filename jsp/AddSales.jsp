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
    <input type="hidden" id="salesid" value="${salesid}">
    <!-- 隐藏域end -->
	<div class="pub_form">
		<ul>
		</ul>
		<a href="JavaScript:;" class="btn" id="submit_AddOrEdit">确定</a>
		<a href="JavaScript:;" data-href="/pss/goSales" class="btn_dis">取消</a>
	</div>
	<link href="/res/css/modules/AddOrEditSales.css" rel="stylesheet">
	<script type="text/javascript" src="/res/js/modules/AddOrEditSales.js"></script>
</div>
