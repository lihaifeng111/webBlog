//通过管理员获取文章id来删除文章
function deleteArticleByid(dom){
	var artilceId=$(dom).attr("data");
	$.ajax({
		url:"http://127.0.0.1:8080/Design/deleteArticleById.do",
        async:false,
        type:"post",
        data:{
			  id:artilceId,
		},
        success : function(result){
			if (result==1){
				alert("删除失败");
			}
		}
	});
}