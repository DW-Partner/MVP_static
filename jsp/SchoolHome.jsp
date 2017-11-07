<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
	

%>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>机构首页</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="format-detection" content="telephone=no">
    <link href="/res/css/CMD.css" rel="stylesheet">
    <link href="/res/css/modules/SchoolHome.css" rel="stylesheet">
</head>

<body>
    <div class="top_box"> <img src="/res/images/logo_92244787.png" />
        <p>管好资源、看清数据<span class="times" id="times"></span></p> <span class="user">用户名<a href="JavaScript:;" id="logout">退出</a></span> </div>

    <!-- 隐藏域start school_code -->
    <input type="hidden" id="school_code" value="${code}">
    <!-- 隐藏域end -->

    <div class="left_nav" id="left_nav">
        <ul>
            <li class="on"><a href="/pss/goSchoolHome">首页</a></li>
            <li><a href="/pss/goZone">校区</a></li>
            <li><a href="/pss/goCourse">课程资源</a></li>
            <li><a href="/pss/goPlan">教学科研</a></li>
            <li><a href="/pss/goTeacher">教师员工</a></li>
            <li><a href="/pss/goAccountSet">账号设置</a></li>
            <li><a href="/pss/goEventLog">系统日志</a></li>
        </ul>
    </div>
    <div class="main_box" id="main_box">
        <div class="main">
            <!-- 隐藏域start --><input type="hidden" id="code" value="${code}">
            <!-- 隐藏域end -->
            <div class="content">
                <div class="header">
                    <div class="left">
                        <h3>经营指标</h3>
                        <ul>
                            <li> <span>今日流水实收</span> <em>¥378400</em> </li>
                            <li> <span>杂项支出</span> <em>¥378400</em> </li>
                            <li> <span>今日咨询登记数</span> <em>30人</em> </li>
                            <li> <span>今日报名数</span> <em>30人</em> </li>
                            <li> <span>预约发出数</span> <em>30人</em> </li>
                            <li> <span>今天请假数</span> <em>30人</em> </li>
                            <li> <span>班级数</span> <em>30人</em> </li>
                        </ul>
                    </div>
                    <div class="echartsBox">
                        <div class="echarts" id="echart1"> </div>
                        <div class="selectBox"> <select name="" id="">								<option value="">实收流水</option>								<option value="">选项二</option>								<option value="">选项三</option>							</select> </div>
                    </div>
                </div>
                <div class="zoneList">
                    <h3>校区列表</h3>
                    <ul class="listBox">
                        <li class="title"> <span>校区名称</span> <span>负责人</span> <span>电话</span> <span>校址</span> <span>校区类型</span> <span>主营项目</span> </li>
                        <li class="list"> <span>大望路幼儿店</span> <span>王小二</span> <span>17872877777</span> <span>朝阳区大望路店38号</span> <span>直营-社区</span> <span>培训、英语、教育</span> </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript" src="/res/js/CMD.js"></script>
    <script type="text/javascript" src="/res/js/modules/SchoolHome.js"></script>
</body>

</html>