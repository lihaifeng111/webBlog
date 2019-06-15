//@ sourceURL=form-news-lisb.js新的表
var qgalleryId;
$(function(){
	//alert("start")
	//第一次没模糊条件的的所有数据的额第一页
	findQgallerysByPage(1);
	//给角色的模糊按钮添加click事件
	$("#searchButtuon_ID").on("click",function(){
		findQgallerysByPage(1);
	});
	//给新增的表单添加submit事件
	$("#addGalleryForm form").submit(function(){
		
		return addQgallery();		
	});
	//给修改的表单添加submit事件
	$("#updateSubmit").click(function(e){
		//e.preventDefult();
		
		//alert("kaishi调用");
		return updateQgallery();
	});
	
	
	
	
	//给删除框的确定按钮添加click事件
	$("#deleteSubmit").click(function(){
		deleteQgallery();
	});
	//给修改和删除的取消按钮增加click事件
	$("#deleteCancel").click(function(){
		$("#MyDiv_Delete").css("display","none");
		$("#fade_Delete").css("display","none");
	});
	$("#updateCancel").click(function(){
		$("#MyDiv").css("display","none");
		$("#fade").css("display","none");
		
	});
	//全选框点击事件
	$("#gallery_totalCheck").click(function(e){
		
		var head=this.checked;
		$("input[name='gallery']").each(function(n,v){
			v.checked=head;
						
		});
		
	});
		
	//批量删除点击事件
	$("#deleteGroup_gallery").click(function(){
		//遍历tbody中tr中，找到每一个checked选项
			
		$("input[name='gallery']").each(function(index,check){
								
			if(check.checked){
				var value=$(check).val();
						
				var suffix=value.substring(value.lastIndexOf("_")+1);
				qgalleryId=suffix;
				
				
				//$("#tr_"+suffix).remove();
				deleteQgallery();
			}
			
		});
		
		
		
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
				
				//alert(result.message);
				//删除页面中指定的行
				$("#tr_"+qgalleryId).remove();
				//关闭删除modal框
				$("#MyDiv_Delete").css("display","none");
				$("#fade_Delete").css("display","none");
				findQgallerysByPage(1);
				
			}else if(result.status==0){
				alert("删除角色失败!!");
			}
		},
	});
	return false;
}
function deleteClick(rid){
	qgalleryId=rid;
	ShowDiv("MyDiv_Delete","fade_Delete");
}
//更新角色的方法
function updateQgallery(){
	//获取修改后的角色信息
	
	$("#tr_"+qgalleryId).find("td:eq(3)").html();
	var newQgalleryName=$("#updateGalleryDiv").val();
	//alert("update进入了");
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
				$("#tr_"+qgalleryId).find("td:eq(3)").text(newQgalleryName);
				$("#MyDiv").css("display","none");
				$("#fade").css("display","none");
			
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
	
	qgalleryId=rid;
	ShowDiv("MyDiv","fade");
		
	var rname=$("#tr_"+rid).find("td:eq(3)").text();
	
	$("#updateGalleryDiv").val(rname);
}



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
function CloseDiv2()
{
	document.getElementById("MyDiv").style.display='none';
	document.getElementById("fade").style.display='none';
};



//新增角色
function addQgallery(){
	//获取新题库的名字
	var newQgallery=$("#addGallery").val();
	
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
			alert("请添加内容!");
		}
	});
	
	return false;
}
//查询指定页号那页数据
function findQgallerysByPage(currentPage){
	//alert(currentPage);
	//获取模糊关键字
	var qgalleryKeyword=$("#searchText").val();
	
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
				$("tbody").html("");
				$(qgallerys).each(function(index,qgallery){
					//index:遍历到第几个对象,从零开始
					//qgallery:遍历到的那个对象
					var tr='<tr id="tr_'+qgallery.cId+'">'+
					'<td><input type="checkbox" name="gallery" value="gallery_'+qgallery.cId+'"></td>'+
                    '<td>'+(index+1)+'</td>'+
                    '<td>'+qgallery.cId+'</td>'+
		              '<td>'+qgallery.cName+'</td>'+
		             '<td>'+
                        '<div class="am-btn-toolbar">'+
                           '<div class="am-btn-group am-btn-group-xs">'+
                               '<a onclick="javascript:updateClick(\''+qgallery.cId+'\')" class="am-btn am-btn-default am-btn-xs am-text-secondary"><span class="am-icon-pencil-square-o"></span> 编辑</a>'+
	                           '<a onclick="javascript:deleteClick(\''+qgallery.cId+'\')" class="am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only"><span class="am-icon-trash-o"></span> 删除</a>'+
                            '</div>'+
                        '</div>'+
                        '</td>'+
                  '</tr>';
				/*	var tr="<tr id='tr_"+qgallery.cId+"'>"+
					"<td><input type='checkbox'></td>"+
                    "<td>"+(index+1)+"</td>"+
                    "<td>"+qgallery.cId+"</td>"+
		             "<td>"+qgallery.cName+"</td>"+
		             "<td>"+
                        "<div class='am-btn-toolbar'>"+
                           "<div class='am-btn-group am-btn-group-xs'>"+
                               "<button onclick='javascript:updateClick(\""+qgallery.cId+"\")' class='am-btn am-btn-default am-btn-xs am-text-secondary'><span class='am-icon-pencil-square-o'></span> 编辑</button>"+
                             
                                "<button onclick='javascript:deleteClick(\""+qgallery.cId+"\")' class='am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only'><span class='am-icon-trash-o'></span> 删除</button>"+
                            "</div>"+
                        "</div>"+
                        "</td>"+
                  "</tr>"+
                        "<div id='fade' class='black_overlay'></div>"+
                        "<div id='MyDiv' class='white_content'>"+
                        "<div style='text-align: right; cursor: default; margin-top:10px;margin-bottom:10px;'>"+
                        "<span style='font-size: 16px; margin-right: 17px; color: #56BE2D; font-weight: 600;cursor:pointer;'  onclick='CloseDiv(\""+MyDiv+"\",\""+fade+"\")'>关闭</span>"+
                        	"</div>"+
                        	"<div class='itempanel' style='margin-left:13%'>"+
                        	"<div class='floatleft title' style='text-align:left'>题库分类名称：</div>"+
                        	"<div class='floatleft editor' style='font-size:16px;height: 24px;line-height: 24px;'><input type='text' id='updateGalleryDiv' name='updateGalleryDiv' placeholder='请输入题库分类名称'/></div>"+
                        		"<div class='floatleft message'></div>"+
                        		"<div class='clear'></div>"+
                        	"</div>"+
                        	"<HR style='FILTER: alpha(opacity=100,finishopacity=0,style=3); margin-top: 39px;' width='90%' color=#ddd SIZE=2>"+
                        	"<div style='margin-bottom: 23px; margin-top: 23px; margin-left: 23%;'>"+
                        	"<input type='button' class='greenbutton2' style='width: 123px;margin-left: 30px;'  value='添加' style='width: 123px; margin-left: 20%;'>"+
                        	"<input type='button' class='greenbutton2' style='width: 123px;margin-left: 30px;'  value='取消' style='width: 123px; margin-left: 20%;'>"+
                        	"</div>"+
                        "</div>" ;
					*/
					$("tbody").append(tr);
				});	
				
				//清空分页条
				$("#galleryPage").html("");
				if(page.totalPage>1){
					//添加分页条
					var previousPage='<li>'+
										  '<a href="javascript:findQgallerysByPage('+page.previousPage+')" >'+
								            '<<'+
								          '</a>'+
								      '</li>';
					$("#galleryPage").append(previousPage);
					$(page.nums).each(function(n,value){
						var middlePage='<li><a href="javascript:findQgallerysByPage('+value+')">'+value+'</a></li>';
						$("#galleryPage").append(middlePage);
					});
					
					var nextPage='<li>'+
								  '<a href="javascript:findQgallerysByPage('+page.nextPage+')" >'+
						            '>>'+
						          '</a>'+
						        '</li>';
					$("#galleryPage").append(nextPage);
					
				}
				
				}		
		},
		error:function(){
			alert("添加失败了");
		}
	});	
}
