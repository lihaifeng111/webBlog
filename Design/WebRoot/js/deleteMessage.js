//删除留言通过id
function deleteMessageById(dom){
	var messageId=$(dom).attr("data1");
	$.ajax({
		url:"http://127.0.0.1:8080/Design/deleteMessageById.do",
		async:false,
		type:"post",
		data:{
		 id:messageId,
	   },
	   success : function(result) {
		  if(result=="0"){
			  alert("权限不足,删除失败");
		  }else{
			  alert("删除成功");
		  }
	   }
	});
}