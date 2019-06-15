//@ sourceURL=role.js
var questionId;
$(function(){
	alert("进入question.js");
	
	//第一次没模糊条件的的所有数据的额第一页
	findQuestionsByPage(1);
	//给角色的模糊按钮添加click事件
	$("#questionPanel .row button").on("click",function(){
		findQuestionsByPage(1);
	});
	//给新增的表单添加submit事件
	$("#addPanel form").submit(function(){
		return addQuestion();		
	});
	//给修改的表单添加submit事件
	$("#editquestion form").submit(function(){
		return updateQuestion();
	});
	$('#editquestion').on('hidden.bs.modal', function (e) {
		  alert("藏完了");
	});
	//给删除的modal框的确定按钮添加click事件
	$(".bs-example-modal-sm button:eq(1)").click(function(){
		deleteQuestion();
	});
});
//删除题目信息
function deleteQuestion(){
	$.ajax({
		url:"question/deleteQuestion/"+questionId,
		type:"delete",
		dataType:"json",
		success:function(result){
			if(result.status==1){
				alert(result.message);
				//删除页面中指定的行
				$("#tr_"+questionId).remove();
				//关闭删除modal框
				$(".bs-example-modal-sm").modal('toggle');
			}else if(result.status==0){
				alert("删除题目失败!!");
			}
		},
	});
}
function deleteClick(rid){
	questionId=rid;
}
//更新题目的方法
function updateQuestion(){
	//获取修改后的题目信息
	var newQuestionName=$("#editquestion form #question_name").val();
	var newAnswer=$("#editquestion form #question_answer").val();
	//发送异步请求
	$.ajax({
		url:"question/updateQuestion",
		type:"post",
		data:{
			"qId":questionId,
			"qName":newQuestionName,
			"qData":newAnswer
		},
		dataType:"json",
		success:function(result){
			if(result.status==1){
				//更改页面的数据
				$("#tr_"+questionId).find("td:eq(1)").text(newQuestionName);
				$("#tr_"+questionId).find("td:eq(2)").text(newAnswer);
				//关闭模态框
				$("#editquestion").modal('hide');
			}else if(result.status==0){
				alert("题目修改失败!!");
			}
		},
		error:function(){
			alert("请求失败!!");
		}
	});
	
	return false;
}
function updateClick(rid){
	//alert(rid +"   "+rname);
	questionId=rid;
	var rname=$("#tr_"+rid).find("td:eq(1)").text();
	$("#editquestion form #question_name").val(rname);
}
//新增题目
function addQuestion(){
	//获取新题目的名字
	var newQuestion=$("#questionName").val();
	var newAnswer=$("#questionAnswer").val();
	var newCategoryId=$("#questionCategory").val();
	//发送异步请求
	$.ajax({
		url:"question/addQuestion/"+newQuestion+"/answer/"+newAnswer+"/categoryId/"+newCategoryId,
		type:"post",
		dataType:"json",
		success:function(result){
			
			if(result.status==1){
				alert(result.message);
				
			}else if(result.status==0){
				alert("题目添加失败!");
			}
		},
		error:function(){
			alert("请求失败!");
		}
	});
	
	return false;
}
//查询指定页号那页数据
function findQuestionsByPage(currentPage){
	//alert(currentPage);
	//获取模糊关键字
	var questionKeyword=$("#questionPanel .row input[type=text]").val();
	
	if(questionKeyword==''){
		questionKeyword="undefined";
	}
	alert("question/find");
	
	$.ajax({
		
		//url:basePath+"question/findQuestionsByPage",
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
				$("#question_table tbody").html("");
				$(questions).each(function(index,question){
					//index:遍历到第几个对象,从零开始
					//question:遍历到的那个对象
					var tr1='<tr>'+
			              '<td>'+(index+1)+'</td>'+
			              '<td>'+question.qName+'</td>'+
			              '<td>'+question.qData+'</td>'+
			              '<td>'+question.qCategory+'</td>'+
			              '<td>'+
			              '</td>'+
			            '</tr>';
			            
					var tr2='<tr id="tr_'+question.id+'">'+
			              '<td>'+(index+1)+'</td>'+
			              '<td>'+question.qName+'</td>'+
			              '<td>'+question.qData+'</td>'+
			              '<td>'+question.qCategory+'</td>'+
			              '<td>'+
			                '<a onclick="updateClick(\''+question.id+'\')" href="" data-toggle="modal" data-target="#editquestion" ><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>编辑</a>'+
			                '<a onclick="deleteClick(\''+question.id+'\')" href="" data-toggle="modal" data-target=".bs-example-modal-sm"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span>删除</a>'+
			              '</td>'+
			            '</tr>';
					if(question.name!='超级管理员' && question.name!="讲师"){
						$("#question_table tbody").append(tr2);
					}else{
						$("#question_table tbody").append(tr1);
					}
					
					
				});
								
				//清空分页条
				$("#question_pagination").html("");
				if(page.totalPage>1){
					//添加分页条
					var previousPage='<li>'+
										  '<a href="javascript:findQuestionsByPage('+page.previousPage+')" aria-label="Previous">'+
								            '<span aria-hidden="true">&laquo;</span>'+
								          '</a>'+
								      '</li>';
					$("#question_pagination").append(previousPage);
					$(page.nums).each(function(n,value){
						var middlePage='<li><a href="javascript:findQuestionsByPage('+value+')">'+value+'</a></li>';
						$("#question_pagination").append(middlePage);
					});
					
					var nextPage='<li>'+
								  '<a href="javascript:findQuestionsByPage('+page.nextPage+')" aria-label="Next">'+
						            '<span aria-hidden="true">&raquo;</span>'+
						          '</a>'+
						        '</li>';
					$("#question_pagination").append(nextPage);
					
				}
				
				
			}
		},
		error:function(){
			alert("请求失败!");
		}
	});
	
}
