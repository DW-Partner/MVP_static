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
		<a href="JavaScript:;" data-href="/pss/goSelectVisitors?from=1" class="btn">筛选</a>
		<a href="JavaScript:;" data-href="/pss/goAddVisitor" class="btn"><i>+</i>添加</a>

	</div>
	<div class="pub_list">
		<div class="head">
			<span class="flex_2">登记日期</span>
			<span>姓名</span>
			<span>年龄</span>
			<span>性别</span>
			<span class="flex_2">住址</span>
			<span class="flex_2">电话</span>
			<span>关系人</span>
			<span class="flex_2">咨询内容</span>
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
	<link href="http://pss.idrpeng.com:9090/res/css/modules/Visitor.css" rel="stylesheet">
	<script type="text/javascript" src="http://pss.idrpeng.com:9090/res/js/modules/Visitor.js"></script>
</div>