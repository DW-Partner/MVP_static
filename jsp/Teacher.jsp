
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
	

%>
<div class="main">
	<div class="page_head">
		<h3>教师员工</h3>
		<a href="JavaScript:;" data-href="/pss/goAddOrEditTeacher" class="btn"><i>+</i>添加教师</a>
	</div>
	<div class="pub_list">
		<div class="head">
			<span>工号</span>
			<span>姓名</span>
			<span>所属校区</span>
			<span>科目</span>
			<span>类别</span>
			<span>入职时间</span>
			<span>状态</span>
			<span>操作</span>
		</div>
		<ul class="body">
		</ul>
		<div class="page">
			<p>
			</p>
		</div>
	</div>
	<div class="run">
		<a href="JavaScript:;" class="btn">批量导入</a>
	</div>
	<link href="http://pss.idrpeng.com:9090/res/css/modules/Teacher.css" rel="stylesheet">
	<script type="text/javascript" src="http://pss.idrpeng.com:9090/res/js/modules/Teacher.js"></script>
</div>