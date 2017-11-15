<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
	

%>
<div class="main">
	<div class="set_content">
		<div class="set_top">
			<div class="passwordBox">
				<h5>机构密码管理</h5>
				<p>
					<span>输入原密码</span>
					<input type="password" name="oldpass" data-validate="password" data-must="1" placeholder="输入原密码" />
				</p>
				<p>
					<span>输入新密码</span>
					<input type="password" name="newpass" data-validate="password" data-must="1" placeholder="输入新密码" />
				</p>
				<p>
					<span>确认新密码</span>
					<input type="password" name="newpass_check" data-validate="password" data-must="1" placeholder="输入新密码" />
				</p>
				<a href="JavaScript:;" class="btn" id="submit_pass">提交</a>
				<!-- <button class="on">提交</button> -->
			</div>
			<div class="loginCode">
				<h5>微信登录二维码</h5>
				<div class="codeImg">
					<div class="img_box" id="img_box">
					</div>
					<!-- <img src="./images/code_img.png" alt=""> -->
					<span>此二维码30分钟内有效</span>
				</div>
				<!-- <button class="on">重新生成二维码</button> -->
				<a href="javascript:;" class="btn" id="re_qrcode">重新生成二维码</a>
			</div>
		</div>
		<div class="set_bottom">
			<h5>校区登录管理</h5>
			<ul class="zone_list">
			</ul>
		</div>
	</div>
	<link href="http://pss.idrpeng.com:9090/res/css/modules/AccountSet.css" rel="stylesheet">
	<script type="text/javascript" src="http://pss.idrpeng.com:9090/res/js/modules/AccountSet.js"></script>
</div>