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
    <input type="hidden" id="sid" value="${sid}">
    <input type="hidden" id="page" value="${page}">
    <!-- 隐藏域end -->
	<div class="pub_form">
		<ul>
			<li>
				<span>姓名：</span>
				<em>-</em>
			</li>
			<li>
				<span>跟进反馈：</span>
				<!-- <textarea placeholder="请输入"></textarea> -->
				<input type="text" placeholder="请输入">
				<a href="JavaScript:;" id="addItem" class="btn add"><i>+</i>添加</a>
			</li>
		</ul>
		<a href="JavaScript:;" id="submit_log" class="btn">确定</a>
		<a href="JavaScript:;" data-href="/pss/goVisitor" class="btn_dis">取消</a>
	</div>
	<link href="/res/css/modules/VisitorLog.css" rel="stylesheet">
	<script type="text/javascript" src="/res/js/modules/VisitorLog.js"></script>
</div>