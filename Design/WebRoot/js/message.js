//留言js的表单验证
var checkFlag = {
	"checkContent" : false
};

$(function(){
	
	$("#messageData").blur(
	   function(){
		   var content = $("#messageData").val(); 
		// 2.非空验证
			if (content == "") {
				$("#contentspan").html("评论不能为空");
				checkFlag.checkContent = false;
				return;
			}else{
				checkFlag.checkContent = true;
				$("#contentspan").html("");
			}
		   
	   });
	
	// <form>表单添加绑定事件:
	$("#f").submit(
			function() {
				if (checkFlag.checkContent) {
					return true; // 允许表单提交
				} else {
					return false; // 不允许表单提交
				}

			});
});