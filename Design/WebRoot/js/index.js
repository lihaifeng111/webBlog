function getAllArticle(){
	$.ajax({
		url:"http://localhost:8080/Design/selectAllArticle.do",
		async:false,
		type:"post",
	  success:function(result){
		 $(".item").empty();
		 var html = "";
	    for(var i=result.length-1;i>=0;i--){
// $("#articleName").html(result[i].articleName);
// $("#articleTitle").html(result[i].title);
// $("#articleText").html(result[i].text);
	    	html += "<div class='item'><div class='layui-fluid'><div class='layui-row'>" +
	    			"<div class='layui-col-xs12 layui-col-sm4 layui-col-md5'><div class='img'>" +
	    			"<img src='./img/sy_img1.jpg'alt=''></div></div><div class='layui-col-xs12 layui-col-sm8 layui-col-md7'>" +
	    			"<div class='item-cont'><h3 id='articleName'>" +
	    			result[i].articleName + "<button class='layui-btn layui-btn-danger new-icon'>new</button></h3><h5 id='articleTitle'>" +
	    			result[i].title + "</h5><p id='articleText'>" +
	    			result[i].text + "</p><a href='details.html?articleId="+result[i].id+"'"+ " class='go-icon'></a></div></div></div></div></div>";
//	    	$(".item").append(`
//	    			<div class="item">
//	          <div class="layui-fluid">
//	            <div class="layui-row">
//	              <div class="layui-col-xs12 layui-col-sm4 layui-col-md5">
//	                <div class="img"><img src="./img/sy_img1.jpg" alt=""></div>
//	              </div>
//	              <div class="layui-col-xs12 layui-col-sm8 layui-col-md7">
//	                <div class="item-cont">
//	                  <h3 id="articleName">${result[i].articleName}<button class="layui-btn layui-btn-danger new-icon">new</button></h3>
//	                  <h5 id="articleTitle">${result[i].title}</h5>
//	                  <p id="articleText">${result[i].text}</p>
//	                  <a href="details.html" class="go-icon"></a>
//	                </div>
//	            </div>
//	            </div>
//	           </div>
//	        </div>
//	    	`)
	    }
	    $(".item").html(html);
	    }
	});  
}

