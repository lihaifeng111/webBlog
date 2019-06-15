//@ sourceURL=role.js
var qgalleryId;
$(function(){
	//第一次没模糊条件的的所有数据的额第一页
	findQgallerysByPage(1);
	//给角色的模糊按钮添加click事件
	$("#qgalleryPanel .row button").on("click",function(){
		findQgallerysByPage(1);
	});
	//给新增的表单添加submit事件
	$("#addPanel form").submit(function(){
		return addQgallery();		
	});
	//给修改的表单添加submit事件
	$("#editQgallery form").submit(function(){
		return updateQgallery();
	});
	$('#editQgallery').on('hidden.bs.modal', function (e) {
		  alert("藏完了");
	});
	//给删除的modal框的确定按钮添加click事件
	$(".bs-example-modal-sm button:eq(1)").click(function(){
		deleteQgallery();
	});
});
//删除角色信息
function deleteQgallery(){
	$.ajax({
		url:"qgallery/deleteQgallery/"+qgalleryId,
		type:"delete",
		dataType:"json",
		success:function(result){
			if(result.status==1){
				
				alert(result.message);
				//删除页面中指定的行
				$("#tr_"+qgalleryId).remove();
				//关闭删除modal框
				$(".bs-example-modal-sm").modal('toggle');
			}else if(result.status==0){
				alert("删除角色失败!!");
			}
		},
	});
}
function deleteClick(rid){
	qgalleryId=rid;
}
//更新角色的方法
function updateQgallery(){
	//获取修改后的角色信息
	var newQgalleryName=$("#editQgallery form #qgallery_name").val();
	
	//发送异步请求
	$.ajax({
		url:"qgallery/updateQgallery",
		type:"post",
		data:{
			"cId":qgalleryId,
			"cName":newQgalleryName
		},
		dataType:"json",
		success:function(result){
			if(result.status==1){
				//更改页面的数据
				$("#tr_"+qgalleryId).find("td:eq(2)").text(newQgalleryName);
				//关闭模态框
				$("#editQgallery").modal('hide');
			}else if(result.status==0){
				alert("角色修改失败!!");
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
	qgalleryId=rid;
	var rname=$("#tr_"+rid).find("td:eq(2)").text();
	$("#editQgallery form #qgallery_name").val(rname);
}
//新增角色
function addQgallery(){
	//获取新题库的名字
	var newQgallery=$("#addPanel form input[type=text]").val();
	//alert(newQgallery);
	//发送异步请求
	$.ajax({
		url:"qgallery/addQgallery/"+newQgallery,
		type:"post",
		dataType:"json",
		success:function(result){
			if(result.status==1){
				alert(result.message);
				
				findQgallerysByPage(1);				
			}else if(result.status==0){
				alert("角色添加失败!");
			}
		},
		error:function(){
			alert("请求失败!");
		}
	});
	
	return false;
}
//查询指定页号那页数据
function findQgallerysByPage(currentPage){
	//alert(currentPage);
	//获取模糊关键字
	var qgalleryKeyword=$("#qgalleryPanel .row input[type=text]").val();
	
	if(qgalleryKeyword==''){
		qgalleryKeyword="undefined";
	}
	//alert(qgalleryKeyword);
	
	$.ajax({
		url:"qgallery/findQgallerysByPage",
		type:"get",
		data:{
			"currentPage":currentPage,
	        "galleryKeyword":qgalleryKeyword
		},
		dataType:"json",
		success:function(result){
			if(result.status==1){
				//顺利获取到数据库的数据,并正确返回js端
				var page=result.data;
				var qgallerys=page.data;
				//清空表格
				$("#qgallery_table tbody").html("");
				$(qgallerys).each(function(index,qgallery){
					//index:遍历到第几个对象,从零开始
					//qgallery:遍历到的那个对象
					var tr1='<tr>'+
			              '<td>'+(index+1)+'</td>'+
			              '<td>'+qgallery.cId+'</td>'+
			              '<td>'+qgallery.cName+'</td>'+
			              '<td>'+
			              '</td>'+
			            '</tr>';
			            
					var tr2='<tr id="tr_'+qgallery.cId+'">'+
			              '<td>'+(index+1)+'</td>'+
			              '<td>'+qgallery.cId+'</td>'+
			              '<td>'+qgallery.cName+'</td>'+
			              '<td>'+
			                '<a onclick="updateClick(\''+qgallery.cId+'\')" href="" data-toggle="modal" data-target="#editQgallery" ><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>编辑</a>'+
			                '<a onclick="deleteClick(\''+qgallery.cId+'\')" href="" data-toggle="modal" data-target=".bs-example-modal-sm"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span>删除</a>'+
			              '</td>'+
			            '</tr>';
					
						$("#qgallery_table tbody").append(tr2);
										
					
				});
								
				//清空分页条
				$("#qgallery_pagination").html("");
				if(page.totalPage>1){
					//添加分页条
					var previousPage='<li>'+
										  '<a href="javascript:findQgallerysByPage('+page.previousPage+')" aria-label="Previous">'+
								            '<span aria-hidden="true">&laquo;</span>'+
								          '</a>'+
								      '</li>';
					$("#qgallery_pagination").append(previousPage);
					$(page.nums).each(function(n,value){
						var middlePage='<li><a href="javascript:findQgallerysByPage('+value+')">'+value+'</a></li>';
						$("#qgallery_pagination").append(middlePage);
					});
					
					var nextPage='<li>'+
								  '<a href="javascript:findQgallerysByPage('+page.nextPage+')" aria-label="Next">'+
						            '<span aria-hidden="true">&raquo;</span>'+
						          '</a>'+
						        '</li>';
					$("#qgallery_pagination").append(nextPage);
					
				}
				
				
			}
		},
		error:function(){
			alert("请求失败!");
		}
	});
	
}
