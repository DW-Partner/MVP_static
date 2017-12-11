<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<div class="main">
	<div class="pub_form">

<!-- {"class_name":"newnew","course_id":15,"reserve_num":18,"teacher_id":2,"start_time":"2017-10-23 16:00:00","lessons":[{"lesson":"2017-10-23 16:00:00"},{"lesson":"2017-10-30 16:00:00"}]}
 -->

		<ul>
			<li>
				<span><i>*</i>班级名称</span>
				<input type="text" class="short" placeholder="请输入班级名称" name="class_name" data-validate="any" data-must="1" />
				<span class="wide"><i>*</i>选择分类课程</span>
				<select name="course_id" data-validate="any" data-must="1">
					<!-- <option>请选择</option> -->
				</select>
			</li>
			<li>
				<span><i>*</i>预招人数</span>
				<input type="text" class="short" placeholder="请输入预招人数" name="reserve_num" data-validate="number" data-must="1" />
				<span class="wide"><i>*</i>选择教师</span>
				<select name="teacher_id" data-validate="any" data-must="1">
					<!-- <option>请选择</option> -->
				</select>
			</li>
			<li class="tips">*本课程共有15个课时，每个课时的推荐时长为1小时</li>
			<li>
				<span class="wide"><i>*</i>选择开班时间</span>
				<input type="date" name="start_time" data-validate="any" data-must="1"/>
			</li>
			<li>
				<span><i>*</i>上课时段</span>
				<select id="timeType">
					<option value="day">每日</option>
					<option value="week">每周</option>
					<option value="month">每月</option>
				</select>

				<input type="text" class="short" id="day_times" placeholder="请输入上课时段" name="lessons" data-validate="any" data-must="1"/>

				<!-- <a href="JavaScript:;" class="btn"><i>+</i>添加新时间</a> -->
			</li>
		</ul>
		<a href="JavaScript:;" class="btn" id="submit_add">确定</a>
		<a href="JavaScript:;" data-href="/pss/goZoneClassManage" class="btn_dis">取消</a>
	</div>
    <link href="http://pss.idrpeng.com:9090/res/css/modules/ZoneAddClass.css" rel="stylesheet">
    <script type="text/javascript" src="http://pss.idrpeng.com:9090/res/js/modules/ZoneAddClass.js"></script>
</div>