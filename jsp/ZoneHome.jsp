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
    <link href="/res/css/CMD.css" rel="stylesheet">
    <link href="http://pss.idrpeng.com:9091/res/css/modules/zoneHome.css" rel="stylesheet">
</head>
<body>
    <div class="top_box"> <img src="/res/images/logo_92244787.png" /><p></p><img src="/download/school_logo_${code}.png" />
        <p><span class="times" id="times"></span></p> <span class="user">${zone_name}<a href="JavaScript:;" id="logout">退出</a></span> </div>

    <!-- 隐藏域start school_code -->
    <input type="hidden" id="zone_code" value="${code}">
    <input type="hidden" id="zone_zoneid" value="${zoneid}">
    <input type="hidden" id="flagship" value="${flagship}">
    <input type="hidden" id="type" value="${type}">
    <!-- 隐藏域end -->

    <div class="left_nav" id="left_nav">
        <ul>
            <li class="on"><a href="/pss/goZoneHome?code=${code}&zoneid=${zoneid}">首页</a></li>
            <li><a href="javascript:;" data-href="/pss/goZoneClassManage">班级管理</a></li>
            <li class="goTeacher"><a href="javascript:;" data-href="/pss/goTeacher">校区教师</a></li>
            <li><a href="javascript:;" data-href="/pss/goSales">招生顾问</a></li>
            <li><a href="javascript:;" data-href="/pss/goVisitor">咨询登记</a></li>
            <li><a href="javascript:;" data-href="/pss/goStudentManage">学员管理</a></li>
            <li><a href="javascript:;" data-href="/pss/goZoneTasks">消息与任务</a></li>
        </ul>
    </div>
    <div class="main_box" id="main_box">
        <div class="main">
            <div class="calendar_box">
                <div class="calendar_list">
                    <div class="calendar_head">
                        <a class="selectBtn selectYear" href="javascript:">----</a>
                        <b>.</b>
                        <a class="selectBtn selectMonth">--</a>
                        <div class="linkBox">
                            <a class="msg" href="javascript:" data-href="/pss/goZoneTasks#goZoneTasks"></a>
                            <a class="addLesson" href="javascript:">当日加课</a>
                        </div>
                    </div>
                    <div id="context">
                        <div class="week">
                            <span> 一 </span>
                            <span> 二 </span>
                            <span> 三 </span>
                            <span> 四 </span>
                            <span> 五 </span>
                            <span> 六 </span>
                            <span> 日 </span>
                        </div>
                        <div id="center">
                            <div id="centerMain">
                                <div id="selectYearDiv"></div>
                                <div id="centerCalendarMain"></div>
                                <div id="selectMonthDiv"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="calendar_info">
                    <ul>
                    </ul>
                </div>
            </div>
            <div class="info_box">
                <div class="lesson_box">
                </div>
                <div class="student_box">
                    <p><b>未签到：</b></p>
                    <p><b>已签到：</b></p>
                    <p><b>请假：</b></p>
                    <p><b>缺勤：</b></p>
                </div>
                <div class="qr_box">
                    <div class="qr_img">
                    </div>
                    <p>微信扫一扫&nbsp;&nbsp;&nbsp;&nbsp;签到</p>
                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript" src="http://pss.idrpeng.com:9091/res/js/CMD.js"></script>
    <script type="text/javascript" src="http://pss.idrpeng.com:9091/res/js/modules/zoneHome.js"></script>
</body>
</html>
