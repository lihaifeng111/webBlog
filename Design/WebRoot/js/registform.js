 //实现整个注册页面的表单验证

//JSON数据类型定义
var checkFlag = {
	"checkEmail" : false,
	"checkNickname" : false,
	"checkPassword" : false,
	"checkRePassword" : false,
//	"checkNumber" : false
};

// JQuery预编译
$(function() {
	// ------------------------------------------------------------------------------
	// 用户名验证
	$("#txtNickName").blur(
			function() {

				// 客户端验证
				// 1.获取用户输入
				var nickname = $("#txtNickName").val();
				var reg = new RegExp("^[a-z0-9\u4e00-\u9fa5]{4,20}$");
				// 2.非空验证
				if (nickname == "") {
					$("#usernamespan").html("昵称不能为空");
					checkFlag.checkNickname = false;
					return;
				} else if (nickname.match(reg)) {
					$("#usernamespan").val("");
					checkFlag.checkNickname = true;
				} else {
					$("#usernamespan").html("昵称4-20位数字、字母(大小均可)、汉字");
					checkFlag.nickname = false;
					$("#txtNickName").val("");
					return;
				}

				// 服务器验证
				$.post("http://localhost:8080/Design/nickname.do", 
						{"nickname" :nickname}, function(data) {
					if (data==1) {
						$("#usernamespan").html("");
						checkFlag.checkPassword = true;
					}else {
						$("#usernamespan").html("该用户名已存在");
						checkFlag.checkPassword = false;
						$("#txtNickName").val("");
					}

				});

			});

	// --------------------------------------------------------------------------------
	// 密码验证
	$("#txtPassword").blur(
			function() {
				// 客户端验证
				// 1.获取用户输入
				var password = $("#txtPassword").val();
				var reg = new RegExp("^[a-zA-Z0-9]{6,20}$");
				// 非空验证
				if (password == "") {
					$("#passwordspan").html("密码不能为空");
					checkFlag.checkPassword = false;
					return;
				} else if (password.match(reg)) {
					$("#passwordspan").html("");
					checkFlag.checkPassword = true;
				} else {
					$("#passwordspan").html("密码6-20位数字、字母(大小均可");
					checkFlag.nickname = false;
					$("#txtPassword").val("");
					return;
				}
			});

	// ------------------------------------------------------------------------------
	// 确认密码配置
	$("#txtRepeatPass").blur(
			function() {
				// 获取用户输入
				var password = $("#txtPassword").val();
				var password1 = $("#txtRepeatPass").val();
				// 非空验证
				if (password1 == "") {
					$("#Repasswordspan").html("确认密码不能为空");
					checkFlag.checkRePassword = false;
					return;
				}else{
					if (password!=password1){
						$("#Repasswordspan").html("密码不一致,重新输入"); 
						$("#txtRepeatPass").val("");
						checkFlag.checkRePassword = false;
					}else{
						$("#Repasswordspan").html(""); 
						checkFlag.checkRePassword = true;
					}
				}

			});


	// ---------------------------------------------------------------
	// Email验证
	$("#txtEmail").blur(
			function() {
				// 1.获取用户输入的Email
				var email = $("#txtEmail").val();
				var reg = new RegExp(
						"^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$");
				// 2.非空验证
				if (email == "") {
					$("#emailspan").html("Email不能为空");
					checkFlag.checkEmail = false;
					return;
				} else if (email.match(reg)) {
					$("#emailspan").html("");
					checkFlag.checkEmail = true;
				} else {
					$("#emailspan").html("如zhangsan-001@gmail.com ");
					$("#txtEmail").val("");
					checkFlag.checkEmail = false;
					return;
				}
			});

//	// 验证码
//	$("#txtNumber").blur(
//			function() {
//
//				var number = $("#txtNumber").val();
//				var reg = new RegExp("^[0-9]{4,5}$");
//				if (number == "") {
//					$("#txtNumber").val("验证码不能为空");
//					checkFlag.checkNumber = false;
//					return;
//				} else if (number.match(reg)) {
//					$("#txtNumber").val(number);
//					checkFlag.checkNumber = true;
//				} else {
//					$("#txtNumber").val("请输入图中的验证码");
//					checkFlag.checkNumber = false;
//					return;
//				}
//
//				// 服务器验证
//				$.post("http://localhost:8080/shop/number.do", "number="
//						+ number, function(data) {
//					if (data == 1) {
//						checkFlag.checkNumber = true;
//					} else {
//						$("#txtNumber").val("验证码错误")
//						checkFlag.checkNumber = false;
//					}
//
//				});
//			});

	// ----------------------------------------------------------------------------------
	// <form>表单添加绑定事件:
	$("#f").submit(
			function() {
				if (checkFlag.checkEmail && checkFlag.checkNickname
						&& checkFlag.checkPassword && checkFlag.checkRePassword
					   ) {
					return true; // 允许表单提交
				} else {
					return false; // 不允许表单提交
				}

			});

});
