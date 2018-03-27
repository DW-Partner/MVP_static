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
    <input type="hidden" id="page" value="${page}">
    <input type="hidden" id="data" value="${data}">
    <!-- 隐藏域end -->
	<div class="page_head">
		<h3>咨询登记</h3>
		<span id="run_qrcode"> 二维码</span>
		<a href="JavaScript:;" data-href="/pss/goSelectVisitors?from=1" class="btn">筛选</a>
		<a href="JavaScript:;" class="btn"><i>+</i>批量导入
			<input type="file" class="inputFile">
		</a>
		<a href="JavaScript:;" data-href="/pss/goAddVisitor" class="btn"><i>+</i>添加</a>
		<a href="JavaScript:;" id="exportData" class="btn"><i>+</i>导出结果</a>
	</div>
	<div class="pub_list">
		<div class="head">
			<span class="flex_2">登记日期</span>
			<span>姓名</span>
			<span>出生日期</span>
			<span>性别</span>
			<span class="flex_2">住址</span>
			<span class="flex_2">电话</span>
			<span>关系人</span>
			<span class="flex_2">关注与咨询方向</span>
			<span>来源</span>
			<span>跟进反馈</span>
			<span>试听时间</span>
			<span>状态</span>
			<span class="flex_2">操作</span>
		</div>
		<ul class="body">
		</ul>
		<div class="page">
			<p>
			</p>
		</div>
	</div>

<!-- 	<div class="run">
		<a href="JavaScript:;" class="btn_grey">添加</a>
		<a href="JavaScript:;" class="btn_grey">筛选</a>
		<a href="JavaScript:;" class="btn_grey">选中编辑</a>
		<a href="JavaScript:;" class="btn_grey">选中试听</a>
		<a href="JavaScript:;" class="btn_grey">选中转正式</a>
	</div> -->
	<link href="/res/css/modules/Visitor.css" rel="stylesheet">
	<script type="text/javascript" src="/res/js/modules/Visitor.js"></script>
</div>
