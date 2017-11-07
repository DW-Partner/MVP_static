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
    <title>校区-首页</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="format-detection" content="telephone=no">
    <link href="/res/css/CMD.css" rel="stylesheet">
    <link href="/res/css/modules/zoneHome.css" rel="stylesheet">
</head>

<body>
    <div class="top_box"> <img src="/res/images/logo_92244787.png" />
        <p>管好资源、看清数据<span class="times" id="times"></span></p> <span class="user">用户名<a href="JavaScript:;" id="logout">退出</a>					</span> </div>

    <!-- 隐藏域start school_code -->
    <input type="hidden" id="zone_code" value="${code}">
    <input type="hidden" id="zone_zoneid" value="${zoneid}">
    <!-- 隐藏域end -->

    <div class="left_nav" id="left_nav">
        <ul>
            <li class="on"><a href="/pss/goZoneHome">首页</a></li>
            <li><a href="/pss/goZoneClassManage">班级管理</a></li>
            <li><a href="/pss/goVisitor">咨询登记</a></li>
            <li><a href="/pss/goSelectVisitors">学员管理</a></li>
            <li><a href="/pss/goZoneTasks">消息与任务</a></li>
        </ul>
    </div>
    <div class="main_box" id="main_box">
        <div class="main">
            <!-- 隐藏域start ~code、zoneid~ -->
            <input type="hidden" id="code" value="${code}" />
            <input type="hidden" id="zoneid" value="${zoneid}" />
            <!-- 隐藏域end -->
            <div class="page_head"> <input type="date" class="run" /> </div>
            <div class="class_show">
                <ul class="item_box">
                    <li class="item">
                        <h6>班级1-课时2</h6>
                        <p>宇文靖</p> <span class="mark">❤</span> </li>
                </ul>
                <div class="times"> <span>8:00</span> <span>10:00</span> <span>12:00</span> <span>14:00</span> <span>16:00</span> <span>18:00</span> <span>20:00</span> </div>
            </div>
            <p class="class_info"> <span>今日开课班级 100个</span> <span>今日授课教师 12个</span> <span>今日正式学员 216人</span> <span>今日试听学员 12人</span> </p>
        </div>
    </div>
    <script type="text/javascript" src="/res/js/CMD.js"></script>
    <script type="text/javascript" src="/res/js/modules/zoneHome.js"></script>
</body>

</html>