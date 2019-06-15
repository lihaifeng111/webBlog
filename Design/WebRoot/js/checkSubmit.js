//实现整个注册页面的表单验证

//JSON数据类型定义
var checkFlag={
	"checkTitle":false ,
	"checkContext":false
};

//JQuery预编译
$(function(){
	
	//title验证
	$("#position").blur(function(){
		//1.获取用户输入的title
		var title=$("#position").val();
		//2.非空验证
		if(title==""){ 
			$("#test").html("标题不允许为空");
			checkFlag.checkTitle=false ;
			return ;
		}else{
			$("#test").html(""); //清空上面红色提示
			checkFlag.checkTitle=true ;
		}
		//客户端验证 通过
		//4.服务器验证:AJAX验证
		$.post(
		  "http://localhost:8080/Design/checkArticleTitle.do" ,
		  "articleName="+title ,
		  function(data){ //true/false
			  if(data==0){ 
				  $("#test").html("");
				  checkFlag.checkTitle=true;
			  }else{
				  $("#test").html("标题已存在，请更换");
				  checkFlag.checkTitle=false; 
				  $("#test").val("");
			  }
		  }
		);
		
	});
	        
	 
	    
	
	// 注册按钮添加绑定事件:
	$("#saveSubmit").submit(function(){
		//获取ckeditor标签内容值
		var context=CKEDITOR.instances.description.getData();
		if(context==""&&!checkFlag.checkTitle){
			//标题为空，内容为空
			alert("请填写全部内容！");
			checkFlag.checkContext=false;
		}else if(context==""&&checkFlag.checkTitle){
			//标题正确，内容为空
			alert("编辑内容不能为空");
			checkFlag.checkContext=false;
		}else{
			checkFlag.checkContext=true;
		}
		
		
		//每个表单验证都通过,才允许提交数据给服务器
		if(checkFlag.checkTitle&&checkFlag.checkContext){
			return true ;   //允许表单提交
		}else{
			return false ;  //不允许表单提交
		}
	});
	
});























