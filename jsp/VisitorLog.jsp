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
    <input type="hidden" id="name" value="${name}">
    <!-- 隐藏域end -->
	<div class="pub_form">
		<ul>
			<li>
				<span>姓名：</span>
				<em>${name}</em>
			</li>
			<li>
				<span>跟进反馈：</span>
				<!-- <textarea placeholder="请输入"></textarea> -->
				<input type="text" placeholder="请输入">
				<a href="JavaScript:;" class="btn add"><i>+</i>添加</a>
			</li>
		</ul>
		<a href="JavaScript:;" class="btn">确定</a>
		<a href="JavaScript:;" data-href="/pss/goVisitor" class="btn_dis">取消</a>
	</div>
	<link href="http://pss.idrpeng.com:9090/res/css/modules/AddAudit.css" rel="stylesheet">
	<script type="text/javascript" src="http://pss.idrpeng.com:9090/res/js/modules/AddAudit.js"></script>
</div>