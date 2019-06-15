//文章管理自动加载获取所有的文章
function getAllArticles(){
	$.ajax({
		url:"http://127.0.0.1:8080/Design/selectAllArticle.do",
        async:false,
        type:"post",
        success : function(result){
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