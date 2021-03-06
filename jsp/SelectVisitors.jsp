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
    <input type="hidden" id="from" value="${from}">
    <!-- 隐藏域end -->
	<div class="pub_form">
		<ul>
			<li>
				<span>开始时间</span>
				<input type="date" class="short" placeholder="请输入" name="signTime1" data-validate="any">
			</li>
			<li>
				<span>结束时间</span>
				<input type="date" class="short" placeholder="请输入" name="signTime2" data-validate="any">
			</li>

			<li>
				<span>姓名</span>
				<input type="text" class="short" placeholder="请输入" name="name" data-validate="any">
				<em>输入姓或名模糊匹配</em>
			</li>
			<li>
				<span>出生日期</span>
				<input type="text" class="short" placeholder="请输入" id="birthday1" name="birthday1" data-validate="any">
				~
				<input type="text" class="short" placeholder="请输入" id="birthday2" name="birthday2" data-validate="any">
			</li>

			<li>
				<span>性别</span>
				<select name="gender" data-validate="any">
					<option value="">请选择</option>
					<option value="男">男</option>
					<option value="女">女</option>
				</select>
			</li>
			<li>
				<span>住址</span>
				<input type="text" class="long" placeholder="请输入" name="address" data-validate="any">
				<em>模糊匹配</em>
			</li>
			<li>
				<span>电话</span>
				<input type="text" class="short" placeholder="请输入" name="mobile" data-validate="any">
				<em>输入一段号码模糊匹配</em>
			</li>
			<li>
				<span>关系人</span>
				<input type="text" class="short" placeholder="请输入" name="official" data-validate="any">
				<em>输入姓或名模糊匹配</em>
			</li>
			<li>
				<span>来源</span>
				<select name="origin" data-validate="any">
					<option value="">请选择</option>
					<option value="市场活动">市场活动</option>
			        <option value="主动咨询">主动咨询</option>
			        <option value="熟人介绍">熟人介绍</option>
			        <option value="其他途径">其他途径</option>
				</select>
			</li>
			<li>
				<span>试听状态</span>
				<select name="visitorStatus" data-validate="any">
					<option value="">请选择</option>
					<option value="登记">登记</option>
			        <option value="试听">试听</option>
			        <option value="转正式">转正式</option>
				</select>
				<em>说明：如果是正式学员，则此条件隐藏</em>
			</li>
			<li>
				<span>是否跟进</span>
				<select>
					<option value="">请选择</option>
					<option value="是">是</option>
					<option value="否">否</option>
				</select>
			</li>
		</ul>
		<a href="JavaScript:;" class="btn" id="search">确定</a>
		<a href="JavaScript:;" id="cancel" class="btn_dis">取消</a>
	</div>
	<link href="/res/css/modules/SelectVisitors.css" rel="stylesheet">
	<script type="text/javascript" src="/res/js/modules/SelectVisitors.js"></script>
</div>
