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
    <input type="hidden" id="courseid" value="${courseid}">
    <!-- 隐藏域end -->
	<div class="pub_form AddOrEditCourse">
		<ul>
		</ul>
		<a href="JavaScript:;" id="add_lesson" class="btn">添加课时</a>
		<a href="JavaScript:;" id="import_lesson" class="btn none">
			<input type="file" class="inputFile">
			批量导入(csv文件)</a>
		<!-- <a href="JavaScript:;" id="submit_del_AddOrEditCourse" class="btn_dis">删除课时</a> -->
	</div>
	<div class="pub_list">
		<div class="head">
			<span>课时序号</span>
			<span>课程主题名</span>
			<span>当前状态</span>
			<span>教学大纲</span>
			<span>操作</span>
		</div>
		<ul class="body" id="lessons">
		</ul>
	</div>
	<a href="JavaScript:;" id="submit_course" class="btn submit_course">保存</a>
	<a href="JavaScript:;" data-href="/pss/goCourse" class="btn_dis">取消</a>
	<link href="/res/css/modules/AddOrEditCourse.css" rel="stylesheet">
	<script type="text/javascript" src="/res/js/modules/AddOrEditCourse.js"></script>
</div>
