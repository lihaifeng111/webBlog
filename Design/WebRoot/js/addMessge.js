function addMessage() {
	var message=$("#messageData").val();
	$.ajax({
		url:"http://127.0.0.1:8080/Design/addMessage.do",
		async:false,
		type:"post",
		data:{
			  mag:message,
		},
		success : function(data) {
		}
	});
}
