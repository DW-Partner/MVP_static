<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
	

%>
		<div class="main">
			<div class="detailContent">
				<div class="echartsBox" id="echartsBox_1" style="padding: 30px;">
					<div class="selectBox">
						<select name="" class="echartSelect_zone">
						</select>
						<select name="" class="echartSelect_date">
							<option value="day">天</option>
							<option value="week">周</option>
							<option value="month">月</option>
						</select>
						<select name="" class="echartSelect_type">
                            <option value="income">流水实收</option>
                            <option value="outcome">杂项支出</option>
                            <option value="visit_num">咨询登记数</option>
                            <option value="sign_num">报名数</option>
                            <option value="reserve_num">预约发出数</option>
                            <option value="teacher_leave_num">请假数</option>
                            <option value="class_num">班级数</option>
						</select>
						<a href="javascript:;" class="btn">查询</a>
					</div>
					<div class="echarts" id="echart1" style="height: 427px;">
					</div>
				</div>

				<div class="echartsBox" id="echartsBox_2" style="padding: 30px;">
					<div class="selectBox">
						<select name="" class="echartSelect_date">
							<option value="day">天</option>
							<option value="week">周</option>
							<option value="month">月</option>
						</select>
						<input type="date" value="" class="entey_date">
						<select name="" class="echartSelect_type">
                            <option value="income">流水实收</option>
                            <option value="outcome">杂项支出</option>
                            <option value="visit_num">咨询登记数</option>
                            <option value="sign_num">报名数</option>
                            <option value="reserve_num">预约发出数</option>
                            <option value="teacher_leave_num">请假数</option>
                            <option value="class_num">班级数</option>
						</select>
						<a href="javascript:;" class="btn">查询</a>
					</div>
					<div class="echarts" id="echart2" style="height: 427px;">

					</div>
				</div>
			</div>
    		<link href="http://pss.idrpeng.com:9090/res/css/modules/Index.css" rel="stylesheet">
    		<script type="text/javascript" src="http://pss.idrpeng.com:9090/res/js/modules/Index.js"></script>
		</div>