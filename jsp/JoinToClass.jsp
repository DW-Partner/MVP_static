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
    <input type="hidden" id="classid" value="${classid}">
    <!-- 隐藏域end -->
	<div class="pub_form">
		<ul>
			<li>
				<em>请为该学员选择班级</em>
			</li>
			<li>
				<div class="classList">
<!-- 					<p><label><input type="radio" name="class">班级一</label></p>
					<p><label><input type="radio" name="class">班级二</label></p>
					<p><label><input type="radio" name="class">班级三</label></p>
					<p><label><input type="radio" name="class">班级四</label></p> -->
				</div>
				
			</li>
		</ul>
		<a href="JavaScript:;" class="btn" id="submit">确定</a>
		<a href="JavaScript:;" data-href="/pss/goStudentManage?page=${page}" class="btn_dis">取消</a>
	</div>
	<link href="http://pss.idrpeng.com:9090/res/css/modules/JoinToClass.css" rel="stylesheet">
	<script type="text/javascript" src="http://pss.idrpeng.com:9090/res/js/modules/JoinToClass.js"></script>
</div>