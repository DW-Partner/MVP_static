<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!-- {"address":"望京","gender":"男","origin":"主动咨询","visitorContent":"fdsafasdfd","name":"奔奔","mobile":"45654366","official":"老周","ctime":"2017-10-25 12:00:28","visitorStatus":"登记状态","age":6,"sid":890}
 -->
<div class="main">
	<div class="pub_form">
		<ul>
		</ul>
		<a href="JavaScript:;" id="submit_AddOrEdit" class="btn">确定</a>
		<a href="JavaScript:;" data-href="/pss/goVisitor" class="btn_dis">取消</a>
	</div>
	<link href="/res/css/modules/AddOrEditVisitor.css" rel="stylesheet">
	<script type="text/javascript" src="/res/js/modules/AddOrEditVisitor.js"></script>
</div>