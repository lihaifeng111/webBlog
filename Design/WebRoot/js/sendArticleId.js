function addComment(){
	var articleId=$("#getarticleId").val();
	var content=$("#addContent").val();
	var aid=parseInt(articleId);
	$.ajax({
		url:"http://127.0.0.1:8080/Design/addComment.do",
		async:false,
		type:"post",
		data:{
		   id:aid,
		   con:content,
		    },
		success : function(data) {

		}
	});
}


$(function(){
	addComment();
	});
	