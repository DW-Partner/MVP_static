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
    <input type="hidden" id="classid" value="${classid}">
    <input type="hidden" id="lessonid" value="${lessonid}">
    <input type="hidden" id="sid" value="${sid}">
    <input type="hidden" id="status" value="${status}">
    <!-- 隐藏域end -->
    <div class="page_head">
        <h3>课时调整</h3>
    </div>
	<!-- <img src="/res/images/pic_banner_01_37c4d6d1.jpg" class="banner"> -->
	<div class="period_edit">
		<div class="pub_form">
			<ul>
				<li>
					<span class="wide">课时改期</span>
					<input type="text" class="short" id="plan_time" placeholder="请输入上课时间" name="plan_time" data-validate="any" data-must="1"/>
				</li>
				<li>
					<span class="wide">教师调整</span>
					<select id="tid" name="tid" data-validate="any" data-must="1">
					</select>
				</li>
				<li>
					<span class="wide">学员调整</span>
					<a href="JavaScript:;" class="btn" id="student_select">查看与选择</a>
				</li>
				<li>
					<span class="wide" style="width:140px;">每节课扣减课时数</span>
					<select id="deduction_lessons" name="deduction_lessons" data-validate="number" data-must="1">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>
					</select>
				</li>
			</ul>
			<a href="JavaScript:;" class="btn" id="submit_edit">确定</a>
			<a href="JavaScript:;" data-href="/pss/goClassInfo?classid=${classid}&sid=${sid}" class="btn_dis">取消</a>
		</div>

		<div class="info">
		</div>
	</div>
    <link href="/res/css/modules/LessonOperate.css" rel="stylesheet">
    <script type="text/javascript" src="/res/js/modules/LessonOperate.js"></script>
</div>
