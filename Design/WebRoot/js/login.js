//JSON数据类型定义
var checkFlag = {
	"checkNickname" : false,
	"checkPassword" : false
};

$(function() {
	// ------------------------------------------------------------------------------
	// 用户名验证
	$("#name").blur(
			function() {

				// 客户端验证
				// 1.获取用户输入
				var nickname = $("#name").val();
				var reg = new RegExp("^[a-z0-9\u4e00-\u9fa5]{4,20}$");
				// 2.非空验证
				if (nickname == "") {
					$("#username").html("昵称不能为空");
					checkFlag.checkNickname = false;
					return;
				} else if (nickname.match(reg)) {
					checkFlag.checkNickname = true;
					$("#username").html("");
				} else {
					$("#username").html("昵称4-20位数字、字母(大小均可)、汉字");
					checkFlag.nickname = false;
					$("#name").val("");
					return;
				}

				// 服务器验证
				$.post("http://localhost:8080/Design/nickname.do", 
						{"nickname" :nickname}, function(data) {
					if (data==0) {
						checkFlag.checkPassword = true;
						$("#username").html("");
					}else {
						$("#username").html("该用户不存在");
						checkFlag.checkPassword = false;
						$("#name").val("");
					}

				});

			});
	 
	$("#pwd").blur(
			function() {
				// 客户端验证
				// 1.获取用户输入
				var nickname = $("#name").val();
				var password = $("#pwd").val();
				// 非空验证
				if (password == "") {
					$("#passwordspan").html("密码不能为空");
					checkFlag.checkPassword = false;
					return;
				}
				
				$.post("http://localhost:8080/Design/password.do", 
						{"nickname" :nickname,"password":password}, function(data) {
							if (data==1){
								checkFlag.checkPassword=true;
								$("#passwordspan").html("");
							}else{
								$("#passwordspan").html("密码错误");
								checkFlag.checkPassword=false;
								$("#pwd").val("");
								return ;
								
							}
				})
			});

	
	// <form>表单添加绑定事件:
	$("#f").submit(
			function() {
				if (checkFlag.checkNickname&&checkFlag.checkPassword) {
					return true; // 允许表单提交
				} else {
					return false; // 不允许表单提交
				}

			});
    });