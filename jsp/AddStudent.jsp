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
		<a href="JavaScript:;" class="btn" id="submit_add">确定</a>
		<a href="JavaScript:;" data-href="/pss/goStudentManage?page=${page}" class="btn_dis">取消</a>
	</div>
	<link href="http://pss.idrpeng.com:9090/res/css/modules/AddStudent.css" rel="stylesheet">
	<script type="text/javascript" src="http://pss.idrpeng.com:9090/res/js/modules/AddStudent.js"></script>
</div>