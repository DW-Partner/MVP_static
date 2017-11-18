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
		<ul>
			<li>
				<span class="wide">当日流水实收</span>
				<input type="text" placeholder="请输入当日流水实收" name="income" data-validate="number" data-must="1" />
			</li>
			<li>
				<span class="wide">当日杂项支出</span>
				<input type="text" placeholder="请输入当日杂项支出" name="income" data-validate="number" data-must="1" />
			</li>
		</ul>
		<a href="JavaScript:;" class="btn" id="submitInAndOutCome">发送</a>
	</div>
	<link href="http://pss.idrpeng.com:9090/res/css/modules/InAndOutCome.css" rel="stylesheet">
	<script type="text/javascript" src="http://pss.idrpeng.com:9090/res/js/modules/InAndOutCome.js"></script>
</div>