//删除评论
function deleteCommentById(dom){
	var commentId=$(dom).attr("data2");
	$.ajax({
		url:"http://127.0.0.1:8080/Design/deleteCommentById.do",
		async:false,
		type:"post",
		data:{
		 id:commentId,
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