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
					<span>校区名称</span>
					<input type="text" class="long" placeholder="请输入校区名称" name="zone_name" data-validate="any" data-must="1" />
				</li>
				<li>
					<span>负责人</span>
					<input type="text" class="short" placeholder="请输入负责人姓名" name="official" data-validate="any" data-must="1" />
				</li>
				<li>
					<span>手机</span>
					<input type="text" class="short" placeholder="请输入手机号码" name="mobile" data-validate="mobile" data-must="1" />
				</li>
				<li>
					<span>固定电话</span>
					<input type="text" class="short" placeholder="请输入固定电话号码" name="telephone" data-validate="number" data-must="1" />
				</li>
				<li>
					<span>地址</span>
					<input type="text" class="long" placeholder="请输入地址" name="address" data-validate="any" data-must="1" />
				</li>
				<li>
					<span>时间</span>
					<input type="date" placeholder="请输入" name="date" data-validate="any" />
				</li>
				<li>
					<span>校区类型</span>
					<p class="raioBox1">
						<label><input type="radio" value="直营" name="type" checked>直营</label>
						<label><input type="radio" value="合作" name="type">合作</label>
					</p>
					<p class="raioBox2">
						<label><input type="radio" value="商场" name="type">商场</label>
						<label><input type="radio" value="社区" name="type">社区</label>
					</p>
				</li>
				<li>
					<span>主营项目</span>
					<input type="text" class="long" placeholder="请输入主营项目" name="core_content" data-validate="any" data-must="1" />
				</li>
			</ul>
			<a href="JavaScript:;" class="btn" id="submit_AddOrEditZone">提交</a>
	</div>
	<link href="http://pss.idrpeng.com:9090/res/css/modules/AddOrEditZone.css" rel="stylesheet">
	<script type="text/javascript" src="http://pss.idrpeng.com:9090/res/js/modules/AddOrEditZone.js"></script>
</div>