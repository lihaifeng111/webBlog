//通过下拉列表获取管理员的类型，然后来筛选文章
function getArticleType(){
	var getType=$("#ArticleType").val();
	$.ajax({
		url:"http://localhost:8080/Design/selectType.do",
		async:false,
		type:"post",
		data:{
			  type:getType,
		},
	  success:function(result){
			$("#modify_article").empty();
			 var html=""
			 for (var i=0;i<result.length;i++){
				html +=
					"<tr id='modify_article'><td>"+result[i].id+"</td><td><a href='#'>"+result[i].articleName+
			        "</a></td><td>"+result[i].title+"</td><td class='am-hide-sm-only'>"+result[i].userId+"</td>" +
					"<td class='am-hide-sm-only'>"+result[i].time+"</td>" +
					"<td><div class='am-btn-toolbar'><div class='am-btn-group am-btn-group-xs'>" +
					"<button class='am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only'" +
					" onclick='deleteArticleByid(this)' data="+result[i].id+">" +
					"<span class='am-icon-trash-o'></span>删除</button></div></td></tr>"
			 }
			 $("#modify_article").html(html);

		}

	});
}