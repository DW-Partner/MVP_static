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
				<textarea placeholder="请输入通知内容" name="notice" data-validate="any" data-must="1"></textarea>
			</li>
		</ul>
		<a href="JavaScript:;" class="btn" id="submit_send">发送</a>
		<a href="JavaScript:;" data-href="/pss/goStudentManage?page=${page}" class="btn_dis">取消</a>
	</div>
	<link href="http://pss.idrpeng.com:9090/res/css/modules/SendToStudent.css" rel="stylesheet">
	<script type="text/javascript" src="http://pss.idrpeng.com:9090/res/js/modules/SendToStudent.js"></script>
</div>