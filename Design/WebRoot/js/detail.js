function getDetail(){
	var str=window.location.href;
	var k=str.match(/articleId=([0-9]+)/i);
	var index=k[1];
	$.ajax({
		url:"http://127.0.0.1:8080/Design/selectArticle.do",
		async:false,
		type:"post",
		data:{
			  id:index,
		    },
	      success:function(result){
		    	$("#articleName").html(result.articleName);
		    	$("#articleTime").html(result.time);
		    	$("#articleTitle").html(result.title);
		        $("#articleContent").html(result.text);
		        $("#getarticleId").val(index)
		    }
	});
	
	var i=parseInt(index);
	$.ajax({
		url:"http://127.0.0.1:8080/Design/selectCommentByArticleId.do",
		async:false,
		type:"post",
		data:{
			  id:i,
		    },
		success:function(data){
		    $("#detailComment").empty();
		    var html="";
		  for(var i=0;i<data.length;i++){
			  html += "<div class='cont'><div class='img'><img src='./img/header.png'alt=''>"+
			  "</div><div class='text'><p class='tit'><span class='name'id='username'>"+data[i].userName+
			  "</span>&nbsp;&nbsp;<button  class='button1' onclick='deleteCommentById(this)' data2="+data[i].id+">删除</button><span class='data'id='commentTime'>"+data[i].time+"</span></p><p class='ct'id='commentContent'>"+
			   data[i].content+"</p></div></div>"
		  }
		  $("#detailComment").html(html);
		}
	});
}


