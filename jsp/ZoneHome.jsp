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
    <title>${zone_name}-首页</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="format-detection" content="telephone=no">
    <link href="http://pss.idrpeng.com:9090/res/css/CMD.css" rel="stylesheet">
    <link href="http://pss.idrpeng.com:9090/res/css/modules/zoneHome.css" rel="stylesheet">
</head>
<body>
    <div class="top_box"> <img src="/res/images/logo_92244787.png" /><p></p><img src="/download/school_logo_${code}.png" />
        <p><span class="times" id="times"></span></p> <span class="user">${zone_name}<a href="JavaScript:;" id="logout">退出</a></span> </div>

    <!-- 隐藏域start school_code -->
    <input type="hidden" id="zone_code" value="${code}">
    <input type="hidden" id="zone_zoneid" value="${zoneid}">
    <!-- 隐藏域end -->

    <div class="left_nav" id="left_nav">
        <ul>
            <li class="on"><a href="/pss/goZoneHome?code=${code}&zoneid=${zoneid}">首页</a></li>
            <li><a href="javascript:;" data-href="/pss/goZoneClassManage">班级管理</a></li>
            <li><a href="javascript:;" data-href="/pss/goVisitor">咨询登记</a></li>
            <li><a href="javascript:;" data-href="/pss/goStudentManage">学员管理</a></li>
            <li><a href="javascript:;" data-href="/pss/goZoneTasks">消息与任务</a></li>
        </ul>
    </div>
    <div class="main_box" id="main_box">
        <div class="main">
            <div class="page_head"> <input type="text" id="s_date" class="run" style="width: 200px;"/> </div>
            <div class="class_show">
                <div class="list_box">
                </div>
                <div class="times"> <span>08:00</span> <span>10:00</span> <span>12:00</span> <span>14:00</span> <span>16:00</span> <span>18:00</span> <span>20:00</span><span></span></div>
            </div>
            <p class="class_info"></p>
        </div>
    </div>
    <script type="text/javascript" src="http://pss.idrpeng.com:9090/res/js/CMD.js"></script>
    <script type="text/javascript" src="http://pss.idrpeng.com:9090/res/js/modules/zoneHome.js"></script>
</body>
</html>
