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
    <!-- 隐藏域end -->
	<div class="pub_form">
		<ul>
			<li>
				<span class="wide">缴费总额</span>
				<em class="paysum">-</em>
			</li>
			<li>
				<span class="wide">剩余课时数</span>
				<em class="remain_lessons">-</em>
			</li>
			<li class="line"></li>
			<li>
				<span class="wide">缴费金额</span>
				<input type="text" class="short" placeholder="请输入缴费金额" name="money" data-validate="number" data-must="1" />元
			</li>
			<li>
				<span class="wide">购买课时数</span>
				<input type="text" class="short" placeholder="请输入购买课时数" name="lessons" data-validate="number" data-must="1" />节
			</li>
		</ul>
		<a href="JavaScript:;" class="btn" id="submit">确认提交</a>
		<a href="JavaScript:;" data-href="/pss/goStudentManage" class="btn_dis">取消</a>
	</div>
	<link href="/res/css/modules/StudentPayment.css" rel="stylesheet">
	<script type="text/javascript" src="/res/js/modules/StudentPayment.js"></script>
</div>