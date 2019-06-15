//userList.html 通过获取用户id来升级用户的等级
function UpdateUserById(dom){
	var userId=$(dom).attr("data1");
	$.ajax({
		url:"http://127.0.0.1:8080/Design/updateUserById.do",
		  async:false,
	      type:"post",
		data:{
		 id:userId,
	    },
	  success : function(data){
	      if(data=="0"){
	    	  alert("已是最高等级，升级失败");
	      } 
	    }
	});
}