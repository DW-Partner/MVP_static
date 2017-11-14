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
    <input type="hidden" id="tid" value="${tid}">
    <!-- 隐藏域end -->
	<div class="TeacherDetail">
		<div class="content_top fix">
			<div class="title">
				<span><!-- 上次更新信息 2017.10.05 22:59 --></span>
				<a href="javascript:;" data-href="/pss/goAddOrEditTeacher?tid=${tid}"><i class="icon"></i>编辑基本信息</a>
			</div>
			<div class="center">
			</div>
			<div class="bottom fix">
				<a href="javascript:;" id="action"><i class="icon"></i><span></span></a>
			</div>
		</div>
		<div class="content_middle">
			<h5>教学信息</h5>
		</div>
		<div class="content_bottom">
			<h5>教师身份二维码</h5>
			<div class="codeImg">
				<div class="img_box" id="img_box">
				</div>
				<span>此二维码三小时内有效</span>
			</div>
			<a href="javascript:;" class="btn" id="t_qrcode">重新生成二维码</a>
		</div>
	</div>
	<link href="http://pss.idrpeng.com:9090/res/css/modules/TeacherDetail.css" rel="stylesheet">
	<script type="text/javascript" src="http://pss.idrpeng.com:9090/res/js/modules/TeacherDetail.js"></script>
</div>