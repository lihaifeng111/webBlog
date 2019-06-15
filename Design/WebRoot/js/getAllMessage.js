function Messages() {
	$.ajax({
		url:"http://127.0.0.1:8080/Design/getAllMessage.do",
		async:false,
		type:"post",
		success : function(result) {
			 $("#getAllData").empty();
			    var html="";  
		   for(var i=result.length-1;i>=0;i--){
			   html+="<div class='cont'><div class='img'><img src='./img/header.png'alt=''>"+
			   "</div><div class='text'><p class='tit'><span class='name'>"+result[i].userName+"</span>&nbsp;&nbsp;<button class='button' onclick='deleteMessageById(this)' data1="+result[i].id+">删除</button><span class='data'>"+
			   result[i].time+"</span></p><p class='ct'>"+result[i].content+"</p></div></div>"
		   }
		   $("#getAllData").html(html)
		}
	});
}
