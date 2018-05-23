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


	<div class="page_head">
		<h3>教师详情</h3>
		<a href="JavaScript:;" id="action" class="btn action"><i class="icon"></i><span></span></a>
		<a href="JavaScript:;" id="unBindTeacher" class="btn">解绑教师</a>
		<a href="javascript:;" data-href="/pss/goAddOrEditTeacher?tid=${tid}" class="btn"><i class="icon"></i>编辑基本信息</a>
	</div>

	<div class="TeacherDetail">
		<div class="content_top fix">
			<!-- <div class="title">
				<span>上次更新信息 2017.10.05 22:59</span>
			</div> -->
			<div class="center">
			</div>
		</div>



		<div class="tab_box">
			<div class="page_head">
				<h3 class="tab_nav">教师详情</h3>
				<h3 class="tab_nav">历史教学信息</h3>
			</div>
			<div class="content_middle tab_item">
			</div>

			<div class="content_middle tab_item" style="display: none;">
				<div class="pub_list">
					<div class="head">
						<span>时间</span>
						<span>负责班级数</span>
						<span>课时任务数</span>
						<span>课时完成数</span>
						<span>完成授课人次</span>
						<span>班内续费人数</span>
						<span>试听转正人数</span>
					</div>
					<ul class="body">
					</ul>
					<div class="page">
					</div>
				</div>
			</div>
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
	<link href="/res/css/modules/TeacherDetail.css" rel="stylesheet">
	<script type="text/javascript" src="/res/js/modules/TeacherDetail.js"></script>
</div>