//userList.html 通过获取用户id来删除用户
function deleteUserById(dom){
	var userId=$(dom).attr("data2");
	$.ajax({
		url:"http://127.0.0.1:8080/Design/deleteUserById.do",
	    async:false,
        type:"post",
        data:{
		    id:userId,
	    },
        success : function(data){}
		
	});
}