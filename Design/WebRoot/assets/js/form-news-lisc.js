//@ sourceURL=form-news-lisc.js
var questionId;


$(function(){
	//当第一次点击用户管理时,带有模糊条件的分页查询,查询时第一页
	findQuestionsByPage(1);
	//给用户的模糊搜索添加click事件
	$("#search_questionButtuon").click(function(){
		//alert("搜索");
		findQuestionsByPage(1);
		
	});
		
	//给"新增"标签页添加click事件
	$('#addQuestionButton').click(function(e){
		  e.preventDefault();
		  
		  ShowDiv("MyDiv_addQuestion","fade_addQuestion");
		 
		  //查询所有数据库类别信息
		  findAllGallerys();
	});
	
	//给新增的表单添加点击submit事件
	$("#addQuestionSubmit").click(function(){
		//alert("新增表单提交………………");
		return addQuestion();
	});
	//给新增表单取消按钮增加点击消失事件
	$("#addQuestionCancel").click(function(){
		$("#MyDiv_addQuestion").css("display","none");
		$("#fade_addQuestion").css("display","none");
		
	});
	
	//给"编辑"的表单添加点击submit的事件
	$("#updateQuestionSubmit").click(function(){
		return updateQuestion();
	});
	//给编辑表单取消按钮添加点击消失事件
	$("#updateQuestionCancel").click(function(){
		$("#fade_updateQuestion").css("display","none");
		$("#MyDiv_updateQuestion").css("display","none");
		
	});
	
	//给"删除"modal的确定按钮添加click事件
	$("#deleteQuestionSubmit").click(function(){
		
		deleteQuestion();
		
	});
	//删除modal框的取消按钮点击事件
	$("#deleteQuestionCancel").click(function(){
		$("#fade_deleteQuestion").css("display","none");
		$("#MyDiv_deleteQuestion").css("display","none");
		
	});
	//全选框点击事件
	$("#question_totalCheck").click(function(e){
		
		var head=this.checked;
		$("input[name='question']").each(function(n,v){
			v.checked=head;
						
		});
		
	});
		
	//批量删除点击事件
	$("#deleteGroup_question").click(function(){
		//遍历tbody中tr中，找到每一个checked选项
			
		$("input[name='question']").each(function(index,check){
								
			if(check.checked){
				var value=$(check).val();
						
				var suffix=value.substring(value.lastIndexOf("_")+1);
				questionId=suffix;
								
				//$("#tr_"+suffix).remove();
				deleteQuestion();
				
			}
			
		});
		
		
		
	});
	
	
	
	
});

//弹出隐藏层
function ShowDiv(show_div,bg_div){
	var scrollHeight = document.body.scrollHeight; //文档高度
	document.getElementById(bg_div).style.height=scrollHeight+'px';
	document.getElementById(show_div).style.display='block';
	document.getElementById(bg_div).style.display='block';
	return true;
};
//关闭弹出层
function CloseDiv(show_div,bg_div)
{
	//document.getElementById("label").value = '';
	document.getElementById(show_div).style.display='none';
	document.getElementById(bg_div).style.display='none';
};
//关闭弹出层
/*function CloseDiv2()
{
	document.getElementById("MyDiv").style.display='none';
	document.getElementById("fade_addQuestion").style.display='none';
};
*/


//删除用户信息
function deleteQuestion(){
	//alert("deleteQuestion-->"+questionId);
	$.ajax({
		url:"question/deleteQuestion/"+questionId,
		type:"delete",
		dataType:"json",
		success:function(result){
			if(result.status==1){
				alert(result.message);
				$("#tr_"+questionId).remove();
				$("#fade_deleteQuestion").css("display","none");
				$("#MyDiv_deleteQuestion").css("display","none");
				findQuestionsByPage(1);
				
			}else{
				alert(result.message);
			}
						
		},
		error:function(){
			alert("请求失败!!!");
		}
	});
}
function delete_QuestionClick(qid){
	questionId=qid;
	ShowDiv("MyDiv_deleteQuestion","fade_deleteQuestion");
	
}
//修改用户信息
function updateQuestion(){
	//获取所有的新的用户信息
	var name=$("#divQuestion_update").find("input:eq(0)").val();
	var answer=$("#divQuestion_update").find("input:eq(1)").val();
	var galleryId=$("#update_Gallerys").val();
		
	//异步请求更新用户数据(借助ajaxfileupload.js框架)
	$.ajax({
		url:"question/updateQuestion",
		
		type:"post",
		data:{
			"qId":questionId,
			"qName":name,
			"qData":answer,
			"qCid":galleryId,
			
		},
		dataType:"json",
		success:function(result){
			//alert(data);
			if(result.status==1){
				var ques=result.data;
				
				//关掉modal模态框
				$("#fade_updateQuestion").css("display","none");
				$("#MyDiv_updateQuestion").css("display","none");
							
				$("#tr_"+questionId).find("td:eq(2)").val(name);
				$("#tr_"+questionId).find("td:eq(3)").val(answer);
				$("#tr_"+questionId).find("td:eq(4)").val(ques.qCategory);
				findQuestionsByPage(1);
				
			}else{
				alert(result.message);
				
			}
						
		},
		error:function(){
			alert("请求失败!");
		}
	});
	return false;
}

//点击指定用户项的"编辑"
function update_QuestionClick(qid){
	questionId=qid;
	//alert("questionId:"+questionId);
	//给编辑的表单添加用户的旧数据
	//从数据据库查询用户信息
	$.ajax({
		url:"question/findQuestionById/"+qid,
		type:"get",
	    dataType:"json",
	    success:function(result){
	    	
	    	if(result.status==1){
	    		
	    		var question=result.data;
	    		
	    		ShowDiv("MyDiv_updateQuestion","fade_updateQuestion");
	    			    		
	    		$("#divQuestion_update").find("input:eq(0)").val(question.qName);
	    		$("#divQuestion_update").find("input:eq(1)").val(question.qData);
	    				    		
	    		//发送异步请求查询所有的题目信息
	    		$.ajax({
	    			url:"qgallery/findAllGallerys",
	    			type:"get",
	    			dataType:"json",
	    			success:function(result){
	    				//给新增标签页中的拉列表添加角色选项
	    				if(result.status==1){
	    					var gallerys=result.data;
	    					//赋值给全局变量
	    					    					
	    					$("#update_Gallerys").html('');
	    									
	    					$(gallerys).each(function(index,gallery){
	    						var select_option="<option value='"+gallery.cId+"'>"+gallery.cName+"</option>";
	    					
	    						
	    						$("#update_Gallerys").append(select_option);
	    					});
	    									
	    				}else if(result.status==0){
	    					//给提示信息
	    					$("#update_Gallerys").append("<option>没有类别数据,不能添加题目</option>");
	    				}
	    			},
	    			error:function(){
	    				alert("请求失败");
	    			}
	    		});
	    		
	    		
	    		
	      	}
	    },
	    error:function(){
	    	alert("请求失败!!");
	    }
	});	
}
//添加用户
function addQuestion(){
	//获取页面的数据
	
	var question=$("#divQuestion_add").find("input:eq(0)").val();
	var answer=$("#divQuestion_add").find("input:eq(1)").val();
	var gallery=$("#allGallerys").val();
		
	//alert(question+","+answer+","+gallery);
	
	$.ajax({
		url:"question/addQuestion",
			
		type:"post",
		data:{
			"qName":question,
			"qData":answer,
			"qCid":gallery,
			
		},
		dataType:"json",
		success:function(result){
			if(result.status==1){
				$("#MyDiv_addQuestion").css("display","none");
				$("#fade_addQuestion").css("display","none");
				findQuestionsByPage(1);
				
			}else{
				alert("添加失败");
			}
					
		},
		error:function(){
			alert("请求失败!");
		}
	});

	return false;
}
//查询所有数据库真实角色信息
function findAllGallerys(){
	$.ajax({
		url:"qgallery/findAllGallerys",
		type:"get",
		dataType:"json",
		success:function(result){
			//给新增标签页中的拉列表添加角色选项
			if(result.status==1){
				var gallerys=result.data;
				//赋值给全局变量
				galleries=gallerys;
				
				$("#allGallerys").html('');
								
				$(gallerys).each(function(index,gallery){
					var select_option="<option value='"+gallery.cId+"'>"+gallery.cName+"</option>";
										
					//alert("option："+select_option);
					$("#allGallerys").append(select_option);
				});
								
			}else if(result.status==0){
				//给提示信息
				$("#allGallerys").append("<option>没有类别数据,不能添加题目</option>");
			}
		},
		error:function(){
			alert("请求失败");
		}
	});
}

//查询指定页号那页数据
function findQuestionsByPage(currentPage){
	//alert(currentPage);
	//获取模糊关键字
	var questionKeyword=$("#searchQuestion").val();
	
	if(questionKeyword==''){
		questionKeyword="undefined";
	}
		
	$.ajax({
		url:"question/find",
		type:"get",
		data:{
			"currentPage":currentPage,
	        "questionKeyword":questionKeyword
		},
		dataType:"json",
		success:function(result){
			if(result.status==1){
				//顺利获取到数据库的数据,并正确返回js端
				var page=result.data;
				var questions=page.data;
				
				//清空表格
				$("tbody").html("");
				$(questions).each(function(index,question){
					//alert(question);
					//index:遍历到第几个对象,从零开始
					//qgallery:遍历到的那个对象
					var tr='<tr id="tr_'+question.qId+'">'+
					'<td><input type="checkbox" name="question" value="question_'+question.qId+'"></td>'+
                    '<td>'+(index+1)+'</td>'+
                    '<td>'+question.qName+'</td>'+
		              '<td class="cssQuestion" >'+question.qData+'</td>'+
		              '<td>'+question.qCategory+'</td>'+
		             '<td>'+
                        '<div class="am-btn-toolbar">'+
                           '<div class="am-btn-group am-btn-group-xs">'+
                               '<a onclick="javascript:update_QuestionClick(\''+question.qId+'\')" class="am-btn am-btn-default am-btn-xs am-text-secondary"><span class="am-icon-pencil-square-o"></span> 编辑</a>'+
	                           '<a onclick="javascript:delete_QuestionClick(\''+question.qId+'\')" class="am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only"><span class="am-icon-trash-o"></span> 删除</a>'+
                            '</div>'+
                        '</div>'+
                        '</td>'+
                  '</tr>';
			
					$("tbody").append(tr);
				});	
				
				//清空分页条
				$("#questionPage").html("");
				if(page.totalPage>1){
					//添加分页条
					var previousPage='<li>'+
										  '<a href="javascript:findQuestionsByPage('+page.previousPage+')" >'+
								            '<<'+
								          '</a>'+
								      '</li>';
					$("#questionPage").append(previousPage);
					$(page.nums).each(function(n,value){
						var middlePage='<li><a href="javascript:findQuestionsByPage('+value+')">'+value+'</a></li>';
						$("#questionPage").append(middlePage);
					});
					
					var nextPage='<li>'+
								  '<a href="javascript:findQuestionsByPage('+page.nextPage+')" >'+
						            '>>'+
						          '</a>'+
						        '</li>';
					$("#questionPage").append(nextPage);
					
				}
				
				}		
		},
		error:function(){
			alert("添加失败了");
		}
	});	
	
}
