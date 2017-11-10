<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
	

%>
<div class="main">
	<div class="pub_form AddOrEditCourse">
		<ul>
			<li>
				<span class="wide">课程分类名</span>
				<input type="text" class="short" placeholder="请输入课程分类名" name="name" data-validate="any" data-must="1" />
				<span>有效课时数</span>
				<input type="text" class="shortest" placeholder="请输入有效课时数" name="lesson_num" data-validate="any" data-must="1" />
				<span>课时时长</span>
				<input type="text" class="shortest no_margin" placeholder="请输入课时时长" name="num" data-validate="any" data-must="1" />分钟
			</li>
			<li>
				<span class="wide">收费方式</span>
				<select>
					<option>按课时</option>
				</select>
			</li>
			<li>
				<span class="wide">课程对象</span>
				<input type="text" placeholder="请输入课程对象" name="user" data-validate="any" data-must="1" />
			</li>
			<li>
				<span class="wide">课程多维目标</span>
				<input type="text" class="long" placeholder="请输入课程多维目标" name="target" data-validate="any" data-must="1" />
			</li>
			<li>
				<span class="wide">课程总体介绍</span>
				<textarea class="long" placeholder="请输入课程多维目标" name="content" data-validate="any" />
				</textarea>
			</li>
		</ul>
		<a href="JavaScript:;" id="submit_AddOrEditCourse" class="btn">添加课时</a>
		<a href="JavaScript:;" id="submit_del_AddOrEditCourse" class="btn_dis">删除课时</a>
	</div>
	<div class="pub_list">
		<div class="head">
			<span>课时序号</span>
			<span>课程主题</span>
			<span>当前状态</span>
			<span>教学大纲</span>
		</div>
		<ul class="body">
		</ul>
		<div class="page">
			<p>
			</p>
		</div>
	</div>
	<link href="http://pss.idrpeng.com:9090/res/css/modules/goAddOrEditCourse.css" rel="stylesheet">
	<script type="text/javascript" src="http://pss.idrpeng.com:9090/res/js/modules/goAddOrEditCourse.js"></script>
</div>