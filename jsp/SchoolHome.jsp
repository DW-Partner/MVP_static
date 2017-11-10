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
    <div class="top_box"> <img src="/res/images/logo_92244787.png" /><p></p><img src="/res/images/logo_92244787.png" />
        <p><span class="times" id="times"></span></p> <span class="user">用户名<a href="JavaScript:;" id="logout">退出</a></span> </div>

    <!-- 隐藏域start school_code -->
    <input type="hidden" id="school_code" value="${code}">
    <!-- 隐藏域end -->

    <div class="left_nav" id="left_nav">
        <ul>
            <li class="on"><a href="/pss/goSchoolHome?code=${code}">首页</a></li>
            <li><a href="javascript:;" data-href="/pss/goZone">校区</a></li>
            <li><a href="javascript:;" data-href="/pss/goCourse">课程资源</a></li>
            <li><a href="javascript:;" data-href="/pss/goPlan">教学科研</a></li>
            <li><a href="javascript:;" data-href="/pss/goTeacher">教师员工</a></li>
            <li><a href="javascript:;" data-href="/pss/goAccountSet">账号设置</a></li>
            <li><a href="javascript:;" data-href="/pss/goEventLog">系统日志</a></li>
        </ul>
    </div>
    <div class="main_box" id="main_box">
        <div class="main">
            <div class="SchoolHome">
                <div class="header">
                    <div class="left">
                        <h3><a href="javascript:;" data-href="/pss/goIndex">查看周月指标详情>></a>经营指标</h3>
                        <ul>
                        </ul>
                    </div>
                    <div class="echartsBox">
                        <div class="echarts" id="echart1"> </div>
                        <div class="selectBox">
                            <select name="" id="echartSelect">
                                <option value="income">今日流水实收</option>
                                <option value="outcome">杂项支出</option>
                                <option value="visit_num">今日咨询登记数</option>
                                <option value="sign_num">今日报名数</option>
                                <option value="reserve_num">预约发出数</option>
                                <option value="teacher_leave_num">今天请假数</option>
                                <option value="class_num">班级数</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="zoneList">
                    <h3>校区列表</h3>
                    <div class="pub_list">
                        <div class="head">
                            <span>校区名称</span>
                            <span>负责人</span>
                            <span>电话</span>
                            <span>校址</span>
                            <span>校区类型</span>
                            <span>主营项目</span>
                            <span>操作</span>
                        </div>
                        <ul class="body">
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript" src="http://pss.idrpeng.com:9090/res/js/CMD.js"></script>
    <script type="text/javascript" src="http://pss.idrpeng.com:9090/res/js/modules/SchoolHome.js"></script>
</body>
</html>