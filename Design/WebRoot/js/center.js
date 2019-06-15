//个人中心的数据展示
function getCenter(){
	$.ajax({
		url:"http://127.0.0.1:8080/Design/selectUserData.do",
        async:false,
        type:"post",
        success : function(data){
		 $(".per-info").empty();
		var html=""
		    if(data==""){
		    	window.location.href="http://127.0.0.1:8080/Design/login.html";
		    }else{
		    	 html+= "<div class='per-info'><p><span class='name'>"+"用户名:  "+data.username+
		    	 		"</span><br/><span class='Career'> "+"邮箱:  "+data.email +
		    	 		"</span><br/><span class='interest'>"+"等级:  "+data.level+"</span></p></div>"
		    	 		
		    	 		 $(".per-info").html(html)
		    }   
	    }
	});
}