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
	<div class="qrcode_box">
		<!-- <img src="./images/code_img.png" /> -->
		<div class="img_box" id="img_box">
		</div>
		<p>此二维码30分钟内有效</p>
		<!-- <a href="JavaScript:;" class="btn">复制二维码</a> -->
		<a href="JavaScript:;" data-href="/pss/goStudentManage?page=${page}" class="btn_dis">返回</a>
	</div>
	<link href="http://pss.idrpeng.com:9090/res/css/modules/StudentQrcode.css" rel="stylesheet">
	<script type="text/javascript" src="http://pss.idrpeng.com:9090/res/js/modules/StudentQrcode.js"></script>
</div>