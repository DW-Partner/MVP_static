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

	<div class="page_head">
		<h3>顾问详情</h3>
		<a href="javascript:;" data-href="/pss/goAddOrEditSales?salesid=${salesid}" class="btn"><i class="icon"></i>编辑基本信息</a>
	</div>

	<div class="TeacherDetail">
		<div class="content_top fix">
			<!-- <div class="title">
				<span>上次更新信息 2017.10.05 22:59</span>
			</div> -->
			<div class="center">
			</div>
		</div>

		<div class="content_bottom">
			<h5>顾问身份二维码</h5>
			<div class="codeImg">
				<div class="img_box" id="img_box">
				</div>
				<span>此二维码三小时内有效</span>
			</div>
			<a href="javascript:;" class="btn" id="t_qrcode">重新生成二维码</a>
		</div>
	</div>
	<link href="/res/css/modules/SalesDetail.css" rel="stylesheet">
	<script type="text/javascript" src="/res/js/modules/SalesDetail.js"></script>
</div>
