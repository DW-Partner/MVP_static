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
				<span class="wide"><i>*</i>班级名称</span>
				<input type="text" class="short" placeholder="请输入班级名称" name="class_name" data-validate="any" data-must="1" />
			</li>
			<li>
				<span class="wide"><i>*</i>选择分类课程</span>
				<select name="course_id" data-validate="any" data-must="1">
					<!-- <option>请选择</option> -->
				</select><em class="tips">*本课程共有个课时，每个课时的推荐时长为-</em>
			</li>
			<li>
				<span class="wide"><i>*</i>预招人数</span>
				<input type="text" class="short" placeholder="请输入预招人数" name="reserve_num" data-validate="number" data-must="1" />
				<span class="wide"><i>*</i>选择教师</span>
				<select name="teacher_id" data-validate="any" data-must="1">
					<!-- <option>请选择</option> -->
				</select>
			</li>
			
			<li>
				<span class="wide"><i>*</i>开班时间</span>
				<input type="text" id="start_time" class="short" name="start_time" data-validate="any" data-must="1"/>
			</li>
			<li>
				<span class="wide"><i>*</i>上课时段</span>
					<div class="timeList">
						<div class="item">
							<select class="timeType">
								<option value="day">每日</option>
								<option value="week">每周</option>
								<option value="month">每月</option>
							</select>
							<select class="week none">
								<option value="2">星期一</option>
								<option value="3">星期二</option>
								<option value="4">星期三</option>
								<option value="5">星期四</option>
								<option value="6">星期五</option>
								<option value="7">星期六</option>
								<option value="1">星期日</option>
							</select>
							<select class="month none">
								<option value="1">1日</option>
								<option value="2">2日</option>
								<option value="3">3日</option>
								<option value="4">4日</option>
								<option value="5">5日</option>
								<option value="6">6日</option>
								<option value="7">7日</option>
								<option value="8">8日</option>
								<option value="9">9日</option>
								<option value="10">10日</option>
								<option value="11">11日</option>
								<option value="12">12日</option>
								<option value="13">13日</option>
								<option value="14">14日</option>
								<option value="15">15日</option>
								<option value="16">16日</option>
								<option value="17">17日</option>
								<option value="18">18日</option>
								<option value="19">19日</option>
								<option value="20">20日</option>
								<option value="21">21日</option>
								<option value="22">22日</option>
								<option value="23">23日</option>
								<option value="24">24日</option>
								<option value="25">25日</option>
								<option value="26">26日</option>
								<option value="27">27日</option>
								<option value="28">28日</option>
								<option value="29">29日</option>
								<option value="30">30日</option>
								<option value="31">31日</option>
							</select>
							<input type="text" class="short" id="day_times" placeholder="请输入上课时段" />
							<a href="JavaScript:;" class="btn run_item_add">添加</a>
						</div>
					</div>
			</li>
		</ul>
		<a href="JavaScript:;" class="btn" id="submit_add">确定</a>
		<a href="JavaScript:;" data-href="/pss/goZoneClassManage" class="btn_dis">取消</a>
	</div>
    <link href="http://pss.idrpeng.com:9090/res/css/modules/ZoneAddClass.css" rel="stylesheet">
    <script type="text/javascript" src="http://pss.idrpeng.com:9090/res/js/modules/ZoneAddClass.js"></script>
</div>
