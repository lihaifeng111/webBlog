<%@ page language="java" import="java.util.*"
	contentType="text/html; charset=utf8" pageEncoding="utf8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html style=""
	class=" js flexbox flexboxlegacy canvas canvastext webgl no-touch geolocation postmessage websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

		<meta http-equiv="X-UA-Compatible" content="IE=Edge">
		<meta name="viewport"
			content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
		<meta name="apple-mobile-web-app-status-bar-style" content="black">
		<meta name="referrer" content="always">
		<meta name="msvalidate.01" content="3189512127C34C46BC74BED5852D45E4">
		<title>起飞-专业IT技术社区</title>
		<script charset="utf-8" src="./index/b.js"></script>
		<script src="./index/hm.js"></script>
		<script src="./index/tingyun-rum-feed.js" type="text/javascript"></script>
		<link ref="canonical" href="https://www.csdn.net/">
		<link href="https://csdnimg.cn/public/favicon.ico" rel="SHORTCUT ICON">
		<script src="./index/jquery-1.9.1.min.js" type="text/javascript"></script>
		<script src="./index/main_flume.js"></script>
		<link rel="stylesheet" href="./index/content_toolbar.css">
		<link rel="stylesheet" href="./index/bootstrap.min.css">
		<link rel="stylesheet" href="./index/avatar.css">
		<link href="./index/csdn_feed.css" rel="stylesheet">
		<script src="./index/modernizr.js" type="text/javascript"></script>
		<style type="text/css"></style>
		<link rel="stylesheet" type="text/css" href="./index/goTop.min.css">
		<script type="text/javascript" src="./index/baidu_opensug-1.0.0.js"></script>
		<script src="./index/get_ads.php" type="text/javascript"></script>
		<!-- 上一页下一页移上去变色 -->
		<style type="text/css">
.pagechange:hover {
	color: black;
	font-size: 20px;
}
</style>
	</head>
	<body data-category="home" data-host_type="www">

		<!-- 如果进入界面的时候session中没有文章，则发送请求获取 -->
		<c:if test="${empty sessionScope.articleAndAuthorList}">
			<c:redirect url="showArticleByRecommend.do?page=1"></c:redirect>
		</c:if>
		<!-- 如果进入界面的时候session中没有文章，则发送请求获取 -->

		<!-- 导航栏开始 -->
		<div id="csdn-toolbar"
			class="csdn-toolbar tb_disnone  csdn-toolbar-skin-black ">
			<div class="container row center-block  xs-container">
				<ul class="pull-left left-menu clearfix" id="nav-left-menu">
					<li>
						<a href="showArticleByRecommend.do?page=1" title="起飞社区首页"
							target="_blank" class=""><svg class="toolbar-icon"
								aria-hidden="true"> <use xlink:href="#gonggong_csdnlogo_"></use>
							</svg> </a>
					</li>
					<li>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					</li>
					<li>
						<a href="showArticleByRecommend.do?page=1"
							class="toolbar_to_feed" title="博客" target="_blank"
							style="font-size: large; color: red;">博客</a>
					</li>
					<li>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					</li>
					
					<li>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					</li>
					<li>
						<a href="resourcePage.do" title="资源" target="_blank"
							style="font-size: large">资源</a>
					</li>
				</ul>
				<div class="pull-right login-wrap unlogin">
					<ul class="btns">
						
						<li>
							<div style="width: 150px"
								class="search_bar csdn-tracking-statistics tracking-click"
								data-mod="popu_366">
								<input style="width: 110px" type="text" class="input_search"
									name="" id="toolber-keyword" placeholder="博客、问题、资源"
									autocomplete="off" value="${currentSearchText}"></input>

								<i class="btn-nobg-noborder btn-search"
									onclick="location='search.do?searchText='+document.getElementById('toolber-keyword').value+'&page=1'" target="_blank"> 
									<img src="index/search.jpg"></img> 
								</i>

							</div>
						</li>
						<li class="write-bolg-btn csdn-tracking-statistics tracking-click"
							data-mod="popu_370">
							<a class="" href="toNewArticle.do" target="_blank"><svg
									class="toolbar-icon" aria-hidden="true"> <use
									xlink:href="#xieboke1"></use> </svg><span>写博客</span> </a>
						</li>
						<li class="gitChat upload">
							<a class="" href="upload.do"
								target="_blank"><svg class="toolbar-icon" aria-hidden="true">
								<use xlink:href="#csdnc-upload"></use> </svg><span>传资源</span> </a>
						</li>
						<c:if test="${empty sessionScope.loginUser}">
						<li class="userinfo">
							<a href="login.jsp">登录</a>
							<a href="register.jsp">注册</a>
						</li>
						</c:if>
						<c:if test="${!empty sessionScope.loginUser}">
						<li class="userinfo">
							<a href="toPersonJsp.do">个人中心</a>
							<a href="logOut.do">注销</a>
								
						</li>
						</c:if>

					</ul>
				</div>
			</div>
		</div>
		<!-- 导航栏结束 -->

		<script id="toolbar-tpl-scriptId" prod="download" skin="black"
			src="./index/content_toolbar.js" type="text/javascript"
			domain="http://blog.csdn.net"></script>
		<script class="toolbar-s" type="text/javascript"
			src="./index/iconfont.js"></script>
		<script type="text/javascript" src="js/index.js"></script>
		
		<script src="./index/bootstrap.min.js" type="text/javascript"></script>

		<script src="./index/async-1.0.1.js"></script>

		<script src="./index/track.js" type="text/javascript"></script>
		<script src="./index/tracking-1.0.1.js" type="text/javascript"></script>
		<script language="javascript" type="text/javascript">
	// Traffic Stats of the entire Web site By baidu
	var _hmt = _hmt || [];
	(function() {
		var hm = document.createElement("script");
		hm.src = "//hm.baidu.com/hm.js?6bcd52f51e9b3dce32bec4a3997715ac";
		var s = document.getElementsByTagName("script")[0];
		s.parentNode.insertBefore(hm, s);
	})();
		</script>
		<script src="./index/publib_footer-1.0.3.js"
			data-isfootertrack="false"></script>
		<link rel="stylesheet" type="text/css"
			href="./index/pub_footer_1.0.3.css">
		<script src="./index/csdn_feed.min.js" type="text/javascript"></script>
		<script src="./index/ab.plus.js"></script>
		<script>
	adhoc('init', {
		appKey : 'ADHOC_3f25bcb4-f154-4b7c-8a82-f79b81816578'
	})
</script>
		<script src="./index/goTop-v1.0.min.js"></script>
		<script type="text/javascript" src="./index/async.js"></script>
	</body>
	<script>
	$(function() {
		$("#ol>li").click(function() {
			$(this).addClass("active");
			$(this).siblings().removeClass("active");
		});
	})
</script>
</html>