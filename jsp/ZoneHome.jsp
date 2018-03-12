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
    <link href="/res/css/modules/zoneHome.css" rel="stylesheet">
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
            <div class="echartsBox" id="echartsBox_1" style="padding: 30px;">
                <div class="selectBox">
                    <select name="" class="echartSelect_date">
                        <option value="day">天</option>
                        <option value="week">周</option>
                        <option value="month">月</option>
                    </select>
                    <select name="" class="echartSelect_type">
                        <option value="income">流水实收</option>
                        <option value="outcome">杂项支出</option>
                        <option value="visit_num">咨询登记数</option>
                        <option value="sign_num">报名数</option>
                        <option value="reserve_num">预约发出数</option>
                        <option value="teacher_leave_num">请假数</option>
                        <option value="class_num">开班数</option>
                    </select>
                    <a href="javascript:;" class="btn">查询</a>
                </div>
                <div class="echarts" id="echart1" style="height: 427px;">
                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript" src="http://pss.idrpeng.com:9090/res/js/CMD.js"></script>
    <script type="text/javascript" src="/res/js/modules/zoneHome.js"></script>
</body>
</html>