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
		 		<h3>班级1</h3>
		 		<div class="run">
					<select>
						<option>全部</option>
					</select>
					<span>上课时间<em>周三17:00-19:00</em></span>
					<span>预招人数<em>32</em></span>
					<span>实际学员人数<em>12</em></span>
				</div>
			</div>

			<ul class="class_list">
			</ul>

			<div class="page">
				<p>
				</p>
			</div>

			<a href="JavaScript:;" data-href="/pss/goZoneClassManage" class="btn">返回上一页</a>

		    <link href="http://pss.idrpeng.com:9090/res/css/modules/ClassInfo.css" rel="stylesheet">
		    <script type="text/javascript" src="http://pss.idrpeng.com:9090/res/js/ClassInfo/zoneHome.js"></script>
		</div>