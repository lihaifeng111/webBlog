$(function() {
	$("#findUser").blur(
			function() {
				// 1.获取用户输入
				var input = $("#findUser").val();
				$.ajax({
					url:"http://127.0.0.1:8080/Design/findUser.do",
					async:false,
					type:"post",
					data:{
					  data:input,
				    },
				    success : function(data){
				    	if(data==""){
				    	  alert("该用户不存在");	
				    	}else{
						 $("#modify_user").empty();
						 var html=""
						 for (var i=0;i<data.length;i++){
							html += "<tr id='modify_user'>" +
									"<td>"+data[i].id+"</td><td class='am-hide-sm-only'>"+data[i].username+"</td>" +
									"<td class='am-hide-sm-only'>"+data[i].email+"</td>" +
									"<td class='am-hide-sm-only'>"+data[i].level+"</td>" +
									"<td><div class='am-btn-toolbar'><div class='am-btn-group am-btn-group-xs'>" +
									"<button class='am-btn am-btn-default am-btn-xs am-text-secondary' onclick='UpdateUserById(this)' data1="+data[i].id+"><span class='am-icon-trash-o'></span>" +
									"升级</button>" +
									"<button class='am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only' onclick='deleteUserById(this)' data2="+data[i].id+"><span class='am-icon-trash-o'></span>" +
									"删除</button></div></div></td></tr>"
						 }
						 $("#modify_user").html(html);
						 
				    	}
				    	$("#findUser").val("");
				    }
				});
				
			});
});
	