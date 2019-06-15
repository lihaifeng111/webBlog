$(function() {
	$("#findArticle").blur(
			function() {
				// 1.获取用户输入
				var input = $("#findArticle").val();
				$.ajax({
					url:"http://127.0.0.1:8080/Design/findArticle.do",
					async:false,
					type:"post",
					data:{
					  data:input,
				    },
				    success : function(result){
				    	if (result==""){
				    		alert("该文章不存在");
				    	}else{
				    		 $("#modify_article").empty();
				    		 var html=""
				    			html +=
				    					"<tr id='modify_article'><td>"+result.id+"</td><td><a href='#'>"+result.articleName+
				    			        "</a></td><td>"+result.title+"</td><td class='am-hide-sm-only'>"+result.userId+"</td>" +
				    					"<td class='am-hide-sm-only'>"+result.time+"</td>" +
				    					"<td><div class='am-btn-toolbar'><div class='am-btn-group am-btn-group-xs'>" +
				    					"<button class='am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only'" +
				    					" onclick='deleteArticleByid(this)' data="+result.id+">" +
				    					"<span class='am-icon-trash-o'></span>删除</button></div></td></tr>"
				    		 
				    		 $("#modify_article").html(html);
				    	}
				    	$("#findArticle").val("");
				    }
				});
			});
});