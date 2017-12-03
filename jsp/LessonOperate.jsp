<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<div class="main">

	<img src="./images/pic_banner_01.jpg" class="banner">
	<div class="period_edit">
		<h5>课程调整</h5>
		<div class="pub_form">
			<ul>
				<li>
					<span>课时更改</span>
					<select>
						<option>2017年</option>
						<option>2017年</option>>
					</select>
					<select>
						<option>8月</option>
					</select>
					<select>
						<option>6月</option>
					</select>
					<select>
						<option>10点</option>
					</select>
				</li>
				<li>
					<span>教师调整</span>
					<select>
						<option>赵景云</option>
					</select>
				</li>
			</ul>
			<a href="JavaScript:;" class="btn">确定</a>
			<a href="JavaScript:;" class="btn_dis">取消</a>
		</div>

		<div class="info">
			<p>原定上课时间：2017年1月11日 14:00-19:00</p>
			<p>原任课教师：别名（刘小源）</p>
			<p>课时主题：XXXXXXXX</p>
			<p>课时教学大纲：XXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
		</div>
	</div>
    <link href="http://pss.idrpeng.com:9090/res/css/modules/LessonOperate.css" rel="stylesheet">
    <script type="text/javascript" src="http://pss.idrpeng.com:9090/res/js/modules/LessonOperate.js"></script>
</div>