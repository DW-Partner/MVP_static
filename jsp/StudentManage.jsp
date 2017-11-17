<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
		<div class="main">
			<div class="pub_list">
				<div class="head">
					<span class="flex_2">录入时间</span>
					<span>姓名</span>
					<span>班级</span>
					<span>年龄</span>
					<span>性别</span>
					<span class="flex_2">住址</span>
					<span class="flex_2">电话</span>
					<span>来源</span>
					<span>剩余课时</span>
				</div>
				<ul class="body">
				</ul>
				<div class="page">
					<p>
					</p>
				</div>
			</div>

			<div class="run">
				<a href="JavaScript:;" class="btn_grey">报名添加</a>
				<a href="JavaScript:;" class="btn_grey">批量导入</a>
				<a href="JavaScript:;" class="btn_grey">查询</a>
			</div>

		    <link href="http://pss.idrpeng.com:9090/res/css/modules/StudentManage.css" rel="stylesheet">
		    <script type="text/javascript" src="http://pss.idrpeng.com:9090/res/js/StudentManage/zoneHome.js"></script>
		</div>