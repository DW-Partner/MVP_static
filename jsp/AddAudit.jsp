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
				<em></em>
			</li>
			<li>
				<span>选择试听：</span>
				<select name="class_id" data-validate="any" data-must="1" class="short">
				</select>
				<select name="lesson_id" data-validate="any" data-must="1" class="wider">
				</select>
			</li>
		</ul>
		<a href="JavaScript:;" class="btn" id="submit">提交</a>
		<a href="JavaScript:;" data-href="/pss/goVisitor?page=${page}" class="btn_dis">取消</a>
	</div>

	<div class="page_head">
		<h3>试听列表</h3>
	</div>

	<div class="pub_list">
		<div class="head">
			<span>校区</span>
			<span>班级</span>
			<span>课程</span>
			<span>课时主题</span>
			<span>试听时间</span>
			<span>试听结果</span>
		</div>
		<ul class="body">
		</ul>
		<div class="page">
		</div>
	</div>

	<link href="/res/css/modules/AddAudit.css" rel="stylesheet">
	<script type="text/javascript" src="/res/js/modules/AddAudit.js"></script>
</div>
