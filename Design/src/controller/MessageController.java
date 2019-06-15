package controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import bean.Message;
import bean.User;

import service.MessageService;

@Controller
public class MessageController {
    @Autowired
    private MessageService messageService;
    
    @RequestMapping("/addMessage")
    @ResponseBody
    public String addMessage(String mag,HttpSession session){
    	User user=(User)session.getAttribute("user");
    	if (user==null){
    		return "redirect:login.html";
    	}
    	if (mag==""){
    		return "redirect:index.html";
    	}
    	Message mess=new Message();
    	mess.setContent(mag);
    	SimpleDateFormat sdf=new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");//绑定的格式
		  //日期的格式化
			String now=sdf.format(new Date());
    	mess.setTime(now);
    	mess.setUserName(user.getUsername());
       	int result=messageService.saveMessage(mess);
    	if (result==0){    
    		return "redirect:index.html";
    	}
    	return "";
    }
    
    @RequestMapping("/getAllMessage")
    @ResponseBody
    public List<Message> getAllMessage(){
    	return messageService.findAllMessage();
    }
    
    /**
     * 管理员删除留言通过留言id
     * @param id
     * @param response
     * @param session
     * @return
     */
    @RequestMapping("/deleteMessageById")
    @ResponseBody
    public int deleteMessage(int id,HttpServletResponse response,HttpSession session) {
		response.setHeader("Access-Control-Allow-Origin", "*");
		User user=(User)session.getAttribute("user");
		if(user.getLevel()>=2){
			int res=messageService.deleteMessage(id);
			if (res==1){
				return 1;
			}else{
				return 0;
			}
		}else{
			return 0;
		}
		
	}
}
