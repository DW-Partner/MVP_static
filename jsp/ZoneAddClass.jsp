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
				<span>班级名称</span>
				<input type="text" class="short" placeholder="请输入">
				<span class="wide">选择分类课程</span>
				<select>
					<option>请选择</option>
				</select>
			</li>
			<li>
				<span>预招人数</span>
				<input type="text" class="short" placeholder="请输入">
				<span class="wide">选择教师</span>
				<select>
				</select>
			</li>
			<li class="tips">*本课程共有15个课时，每个课时的推荐时长为1小时</li>
			<li>
				<span class="wide">选择开班时间</span>
				<input type="date" />
			</li>
			<li>
				<span>上课时段</span>
				<select>
					<option>每周</option>
				</select>
				<select>
					<option>五</option>
				</select>
				<select>
					<option>12点</option>
				</select>
				<select>
					<option>23分</option>
				</select>
				<a href="JavaScript:;" class="btn"><i>+</i>添加新时间</a>
			</li>
		</ul>
		<a href="JavaScript:;" class="btn">确定</a>
		<a href="JavaScript:;" data-href="/pss/goZoneClassManage" class="btn_dis">取消</a>
	</div>
    <link href="http://pss.idrpeng.com:9090/res/css/modules/ZoneAddClass.css" rel="stylesheet">
    <script type="text/javascript" src="http://pss.idrpeng.com:9090/res/js/ZoneAddClass.js"></script>
</div>