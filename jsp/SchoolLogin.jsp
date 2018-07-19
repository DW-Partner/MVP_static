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
    <title>登录</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="format-detection" content="telephone=no">
    <link href="/res/css/CMD.css" rel="stylesheet">
    <link href="http://pss.idrpeng.com:9091/res/css/modules/SchoolLogin.css" rel="stylesheet">
</head>

<body>
    <!-- 隐藏域start ~二维码素材~ -->
    <input type="hidden" id="qecode_data" value="${qid}" />
    <!-- 隐藏域end -->
    <div class="page_main">
        <div id="nav" class="nav">
            <h6 class="on" data-type="passwordLogin"><em class="ico"></em>密码登录</h6>
            <h6 data-type="qrcodeLogin"><em class="ico"></em>二维码登录</h6>
        </div>

        <div class="type">
            <label for="school">
                <input type="radio" name="usertype" id="school" value="school" checked>
                <span>机构</span>
            </label>        
            <label for="zone">
                <input type="radio" name="usertype" id="zone" value="zone">
                <span>校区</span>
            </label>
        </div>

        <!-- 账号密码登录start -->
        <div id="passwordLoginBox" class="pub_form" action="loginBox">
            <ul>
                <li>
                    <input type="text" class="mobile" name="mobile" data-validate="mobile" data-must="1"  placeholder="请输入注册手机号">
                </li>
                <li>
                    <input type="password" class="password" name="password" data-validate="password" data-must="1"  placeholder="请输入密码">
                </li>
            </ul>
            <a href="JavaScript:;" class="btn" id="submit_login">登录</a>
        </div>
        <!-- 账号密码登录end -->

        <!-- 扫描登录start -->
        <div id="qrcodeLoginBox" class="qrcodeLoginBox none" action="loginBox">
            <div class="qrcodeLogin">
                <div class="qrcode_show">
                    <div class="qrcode">
                    </div>
                    <p>打开微信，进入培生素公众号，进入我的培生素选择扫一扫，扫描上图二维码登录</p>
                </div>
                <!-- 扫描成功start -->
                <div class="loginStatus_success none">
                    <p>扫描成功，请在手机上根据提示确认登录</p>
                </div>
                <!-- 扫描成功end -->

                <!-- 扫描失败start -->
                <div class="loginStatus_error none">
                    <p>二维码已失效</p>
                    <a href="JavaScript:;" class="btn">刷新二维码</a>
                </div>
                <!-- 扫描失败end -->
            </div>

        </div>
        <!-- 扫描登录end -->

        <div class="info">
            <a href="JavaScript:;"></a>
            <a href="JavaScript:;"></a>
            <a href="JavaScript:;"></a>
        </div>
    </div>
    <script type="text/javascript" src="http://pss.idrpeng.com:9091/res/js/CMD.js"></script>
    <script type="text/javascript" src="http://pss.idrpeng.com:9091/res/js/modules/SchoolLogin.js"></script>
</body>

</html>
